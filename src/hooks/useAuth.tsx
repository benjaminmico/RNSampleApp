import { useContext } from 'react';
import { AuthContext, IAuthData } from '../contexts/AuthContext';

/** User Data Hook : return auth context */
const useAuth = () => useContext<IAuthData>(AuthContext);

export default useAuth;
