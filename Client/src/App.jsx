import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, UserSignUp } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/auth" element={<UserSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
