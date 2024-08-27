import { useEffect, useState } from "react";

export function useUserCheck() {
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, [isUser]);

  const checkUser = () => {
    const storedUserName = localStorage.getItem("username");

    try {
      if (storedUserName) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  

  return { isUser, setIsUser, checkUser, isLoading };
}
