import { useState, useEffect } from "react";

import foodService from '../services/food';

export default function useResources(baseUrl) {
  const [resources, setResources] = useState([]);

  async function get() {
    try {
      const data = await foodService.getAll(baseUrl);
      setResources(data);
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {get()}, []);

  async function create(resource) {
    try {
      const response = await foodService.create(baseUrl, resource);
      setResources(prevResources => [resource, ...prevResources]);
    }
    catch(error) {
      console.log(error);
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