import { BrowserRouter } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AppRouter from "./AppRouter";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <section className='main'>
          <AppRouter />
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
