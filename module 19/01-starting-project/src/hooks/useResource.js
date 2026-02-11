import axios from 'axios';
import { useState, useEffect } from "react";

function useResources(baseUrl) {
  const [resources, setResources] = useState([]);

  async function get() {
    try {
      const response = await axios.get(baseUrl);
      setResources(response.data);
    }
    catch(error) {
      console.log(error);
      setResources(resources);
    }
  }

  useEffect(get, []);

  async function create(resource) {
    try {
      const response = await axios.post(baseUrl, resource);
      setResources(prevResources => [resource, ...prevResources]);
    }
    catch(error) {
      console.log(error);
      setResources(resources);
    }
  }

  const service = {
    get,
    create,
  }

  return [
    resources, 
    service,
  ]
}