'use client'
import { useState, useEffect } from "react";

export function useUserDetails() {
    const [userDetails, setUserDetails] = useState({name: "", email: ""})
 

    useEffect(() => {
        const storedName = localStorage.getItem("username")
        const storedEmail = localStorage.getItem("useremail")

        setUserDetails({
          name: storedName || "",
          email: storedEmail || ""
        })

      
        
    }, []);

    
  const updateUserDetails = (field, value) => {
    console.log("field", field, "value", value)
    setUserDetails(prev => ({...prev, [field] : value}))
  }

  

 

  return { userDetails, updateUserDetails};
}

