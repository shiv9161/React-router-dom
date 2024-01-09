import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;