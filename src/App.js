import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notifications from "./components/notifications/notificationbar";
;

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({username: "Guest" })
  return (
    <>
    <Notifications/>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                {/* <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} /> */
              <Route path="/notifications" element={<Notifications />} />}
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
