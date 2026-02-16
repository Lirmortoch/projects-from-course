const getAll = async (baseUrl) => {
  try {
    const response = await fetch(baseUrl);
    const data = response.json();

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

    return response;
  } catch (error) {
    console.error(error);
    throw Error(`Can't add new one: ${error.message}`);
  }
};

export default {
  getAll,
  create,
};
