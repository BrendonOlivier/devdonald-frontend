import { UserProvider } from './UserContext';

const AppProvider = ({children}) => <UserProvider>{children}</UserProvider>

export default AppProvider
