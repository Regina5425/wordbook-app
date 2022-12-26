import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Dictionary from "../dictionary/Dictionary";
import TrainPage from "../trainPage/TrainPage";
import Page404 from "../404page/404";
import Loader from "../loader/Loader";
import { useRequest } from "../../request/request";
import { DataContext } from "../../context/context";
import ErrorMessage from "../errorMessage/ErrorMessage";

const AppRouter = () => {
  const context = useContext(DataContext);

  const { request, isLoading, error } = useRequest();
  const [dataWords, setDataWords] = useState(context);

  //fetch
  useEffect(
    () => async () => {
      const response = await request("/api/words");
      const DataContext = await response.json();
      setDataWords(DataContext);
      // eslint-disable-next-line
    },
    [request]
  );

  const addNewWord = async (newWord) => {
    const response = await request(
      "/api/words/add",
      "POST",
      JSON.stringify(newWord)
    );
    const result = await response.json();
    console.log(response, "Добавлено");
    setDataWords(...dataWords, dataWords.push(result));
  };

  const deleteWord = (id) => {
    const newDataWords = dataWords.filter((item) => item.id !== id);
    setDataWords(newDataWords);
    request(`/api/words/${id}/delete`, "POST", JSON.stringify(newDataWords))
      .then((response) => console.log(response, "Удалено"))
      .catch((e) => console.log(e));
  };

  const saveChanges = async (id, value) => {
    const response = await request(
      `/api/words/${id}/update`,
      "POST",
      JSON.stringify(value)
    );
    const result = await response.json();
    console.log(response, "Изменено");

    function getNew() {
      const index = dataWords.findIndex((item) => item.id === id);
      if (index !== -1) {
        dataWords[index] = result;
      }
      return dataWords;
    }
    const newWordData = getNew();
    setDataWords(...newWordData);
  };

  return (
    <DataContext.Provider value={dataWords}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/dictionary'
          element={[
            isLoading ? (
              <Loader />
            ) : (
                <Dictionary
                  addNewWord={addNewWord}
                  onDelete={deleteWord}
                  saveChanges={saveChanges}
                />
              ) && error ? (
              <ErrorMessage />
            ) : (
              <Dictionary
                addNewWord={addNewWord}
                onDelete={deleteWord}
                saveChanges={saveChanges}
              />
            ),
          ]}
        />
        <Route
          path='/training'
          element={[
            isLoading ? (
              <Loader />
            ) : <TrainPage /> && error ? (
              <ErrorMessage />
            ) : (
              <TrainPage />
            ),
          ]}
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default AppRouter;
