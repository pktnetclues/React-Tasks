import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:4000/api/profile/admin`, true);
    xhr.withCredentials = true;
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            setUser(json_obj.user);
          } else {
            console.error("Error message from server:", json_obj.message);
          }
        } else {
          console.error("Error status from server:", xhr.statusText);
        }
      }
    };
    xhr.onerror = function () {
      console.error("Network error occurred.");
    };
    xhr.send();
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
