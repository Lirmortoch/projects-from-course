import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

const coords = {
  latitude: 52.35,
  longitude: 4.9166,
}

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();
  
  return new Promise((resolve, reject) => {
    const sortedPlaces = sortPlacesByDistance(
      places,
      coords.latitude,
      coords.longitude
    );

    resolve(sortedPlaces);
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    error, 
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
