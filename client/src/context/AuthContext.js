import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState({});
  const [token, settoken] = useState(localStorage.getItem("user"));

  const fetchUserdata = async (token) => {
    const url = `${process.env.REACT_APP_API_KEY}/candidate/fetchuserdata/`;
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
    fetchUserdata(token);
  }, []);

  return (
    <UserContext.Provider value={{ user, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const AuthContext = () => {
  return useContext(UserContext);
};
