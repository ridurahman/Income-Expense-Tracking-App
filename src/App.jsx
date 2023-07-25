import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageRoutes from "./Components/Routes/PageRoutes";

function App() {
  return (
    <>
      <div className="container">
        <PageRoutes />
      </div>
    </>
  );
}

export default App;
