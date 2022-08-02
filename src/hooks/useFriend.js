import { useEffect, useState } from "react";
import API from "../env";

const useFriend = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (() => {
      fetch(`${API}/api/users`)
        .then((response) => response.json())
        .then((data) => setFriends(data))
        .then(() => setIsLoading(false));
    })();
  }, []);
  return [friends, isLoading];
};

export default useFriend;
