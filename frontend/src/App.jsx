import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";
import Profile from "./Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
