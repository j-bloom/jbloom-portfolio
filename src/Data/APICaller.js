import { useState, useEffect } from "react";

function APICaller() {

const [projects, setProjects] = useState([]);
const [fetchError, setFetchError] = useState(null);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    setIsLoading(true);
  const fetchItems = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/j-bloom/repos"
      );
      if (!response.ok) throw Error("Did not receive expected data");
      const listItems = await response.json();
      setProjects(listItems);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
      alert(fetchError);
    } finally {
      setIsLoading(false);
    }
  }; 

  (async () => await fetchItems())();
}, [fetchError]);


    return { projects, fetchError, isLoading };
}

export default APICaller;
