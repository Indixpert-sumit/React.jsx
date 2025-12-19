 import router from "./routes/DataModeAllRoutes";
 import { RouterProvider } from "react-router-dom";
 import UserProvider from "./Context/Providers/UserProvider";
 const App = () => {
          return (
                 <UserProvider>
                          <RouterProvider router={router} />
                 </UserProvider>
          );
 };
 export default App;
