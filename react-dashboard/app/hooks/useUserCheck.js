import { useEffect, useState } from "react";

export function useUserCheck() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    const storedUserName = localStorage.getItem("username");

    try {
      if (storedUserName) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  return { isUser, checkUser };
}
