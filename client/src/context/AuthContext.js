import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState(localStorage.getItem("user"));

  const fetchUserdata = async (token) => {
    const url = `${process.env.REACT_APP_API_KEY}/candidate/fetchuserdata`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          token: token,
        },
      });
      setuser(data);
    } catch (error) {}
  };

  useEffect(() => {
    const data = localStorage.getItem("user");

    fetchUserdata(data);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const AuthContext = () => {
  return useContext(UserContext);
};
