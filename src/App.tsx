
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import {MessageBox} from "./pages/chat_page"
import  {Signin} from "./pages/signin";
function App() {
 

  return (
    <>
      <div>
<BrowserRouter>
<Routes>
  <Route path={"/"} element={<LandingPage></LandingPage>}></Route>
  <Route path={"/login"} element={<Signin></Signin>}></Route>
  <Route path={"/chat"} element={<MessageBox name="Adarsh"></MessageBox>} ></Route>
</Routes>
</BrowserRouter>

     </div>
    </>
  )
}

export default App
