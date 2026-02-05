const baseUrl = 'http://localhost:3000/meals';

const getAll = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = response.json();

    return data;
  }
  catch(error) {
    console.error(error);
    throw Error(`Can't fetch all meals: ${error.message}`);
  }
}

export {
  getAll,
}