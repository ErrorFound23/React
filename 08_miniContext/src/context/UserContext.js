import React, { createContext } from "react";

const UserContext = createContext();

export default UserContext;

// UserContextProvider is work as globle wrapper
{/* <UserContextProvider>
  <Login />
  <Dashboard>
    <Card />
  </Dashboard>
</UserContextProvider> */}
