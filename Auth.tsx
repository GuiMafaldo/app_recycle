import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  dataUser: '',
  login: () => {},  
  logout: () => {},
  
});

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dataUser, setDataUser] = useState<string | any>({user: 'admin', pass: 'admin123'});
  
 
  
  const login = () => setDataUser({user: 'admin', pass: 'admin123'});
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, dataUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);