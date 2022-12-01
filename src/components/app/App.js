import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import Dictionary from "../dictionary/Dictionary";
import Footer from "../footer/Footer";
import TrainPage from "../trainPage/TrainPage";
import wordsDB from "../../wordsDB";
import Page404 from "../404page/404";

import "./App.scss";

const data = wordsDB;

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <section className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/dictionary' element={<Dictionary data={data} />} />
            <Route path='/training' element={<TrainPage data={data} />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
