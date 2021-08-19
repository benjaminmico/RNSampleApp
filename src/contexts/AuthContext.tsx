import React, { createContext, useState } from 'react';

export interface IAuthData {
  authenticated: boolean;
  signIn(): void;
  signOut(): void;
}

export const AuthContext = createContext<IAuthData>({} as IAuthData);

/**
 * AuthProvider to handle auth state from a provider
 */
export const AuthProvider: React.FC = ({ children }) => {
  /* Local State to handle authenticated state */
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  /* Sign in & out functions to toggle authenticated local state */
  const signIn = (): void => setAuthenticated(true);
  const signOut = (): void => setAuthenticated(false);

  /* Return a Provider with AuthContextData as value prop */
  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
