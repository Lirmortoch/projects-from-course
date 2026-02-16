const getAll = async (baseUrl) => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw Error(`Can't fetch all: ${error.message}`);
  }
};

const create = async (baseUrl, data) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(baseUrl, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `Request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw Error(`Can't add new one: ${error.message}`);
  }
};

export default {
  getAll,
  create,
};
