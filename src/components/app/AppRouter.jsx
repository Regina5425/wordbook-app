import { Routes, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { useEffect } from "react";
import MainPage from "../../pages/mainPage/MainPage";
import Dictionary from "../../pages/dictPage/Dictionary";
import TrainPage from "../../pages/trainPage/TrainPage";
import Page404 from "../../pages/404page/404";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";

const AppRouter = ({ isError, isLoading }) => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route
        path='/dictionary'
        element={
          isLoading ? (
            <Loader />
          ) : <Dictionary /> && isError ? (
            <ErrorMessage />
          ) : (
            <Dictionary />
          )
        }
      />
      <Route
        path='/training'
        element={
          isLoading ? (
            <Loader />
          ) : <TrainPage /> && isError ? (
            <ErrorMessage />
          ) : (
            <TrainPage />
          )
        }
      />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};

export default inject(({ wordStore }) => {
  const { getAllWords, isError, isLoading, getRandomWord } = wordStore;

  useEffect(() => {
		const id = Math.floor(Math.random() * (13149 - 13146) + 13146);
		getRandomWord(id);
    getAllWords();
    // eslint-disable-next-line
  }, []);

  return { isError, isLoading };
})(observer(AppRouter));
