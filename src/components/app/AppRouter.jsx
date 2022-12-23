import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Dictionary from "../dictionary/Dictionary";
import TrainPage from "../trainPage/TrainPage";
import Page404 from "../404page/404";
import Loader from "../loader/Loader";
import { useRequest } from "../request/request";
import { DataContext } from "../context/context";
import ErrorMessage from "../errorMessage/ErrorMessage";

const AppRouter = () => {
  const context = useContext(DataContext);

  const { request, isLoading, error } = useRequest();
  const [dataWords, setDataWords] = useState(context);

  //fetch
  useEffect(
    () => async () => {
      const response = await request(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      const DataContext = await response.json();
      setDataWords(DataContext);
      console.log("render");
      // eslint-disable-next-line
    },
    [request]
  );

  return (
    <DataContext.Provider value={dataWords}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/dictionary'
          element={[isLoading ? <Loader /> : <Dictionary /> && error ? <ErrorMessage/> : <Dictionary />]}
        />
        <Route
          path='/training'
          element={[isLoading ? <Loader /> : <TrainPage /> && error ? <ErrorMessage/> : <TrainPage />]}
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default AppRouter;
