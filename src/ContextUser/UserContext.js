import React, { createContext, useState } from "react";

export const MyContextUser = createContext({});

function UserProvider({ children }) {
  const [nome, setNome] = useState('');
  return (
    <MyContextUser.Provider value={{ nome, setNome }}>
      {children}
    </MyContextUser.Provider>
  );
}

export default UserProvider;
