import { UserContext } from './../Context/'
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [name, setName] = useState("Hello Indixpert");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
