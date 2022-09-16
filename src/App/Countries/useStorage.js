import { useState, useEffect } from "react";
import { localStorage } from "../../utils";

function useStorage(id) {
  const [type, setType] = useState(JSON.parse(localStorage.get(id)) || []);

  useEffect(() => {
    localStorage.set(id, JSON.stringify(type));
  }, [type, id]);

  return [type, setType];
}

export { useStorage };
