import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { RecoilRoot } from "recoil";
import RenderResolution from "./components/RenderResolution";
import UpdateResolutions from "./components/UpdateResolutions";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" Component={Login} />
          <Route path="/dashboard" element={<RenderResolution/> } />
          <Route path="/updates" element={<UpdateResolutions/> } />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
