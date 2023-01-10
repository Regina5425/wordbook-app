// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { observer } from "mobx-react";
import MainPage from "../mainPage/MainPage";
import Dictionary from "../dictionary/Dictionary";
import TrainPage from "../trainPage/TrainPage";
import Page404 from "../404page/404";
// import Loader from "../loader/Loader";
// import { useRequest } from "../../request/request";
// import { DataContext } from "../../context/context";
// import ErrorMessage from "../errorMessage/ErrorMessage";
// import { rootStore } from "../../store";

// const AppRouter = () => {
//   const { request, isLoading, error } = useRequest();
//   const [dataWords, setDataWords] = useState([]);

//   useEffect(
//     () => async () => {
//       const response = await request("/api/words");
//       const DataContext = await response.json();
//       setDataWords(DataContext);
//     },
//     [request]
//   );

//   const addNewWord = async (newWord) => {
//     const response = await request(
//       "/api/words/add",
//       "POST",
//       JSON.stringify(newWord)
//     );
//     const result = await response.json();
//     console.log(response, "Добавлено");
//     setDataWords([...dataWords, result]);
//   };

//   const deleteWord = (id) => {
//     const newDataWords = dataWords.filter((item) => item.id !== id);
//     setDataWords(newDataWords);
//     request(`/api/words/${id}/delete`, "POST", JSON.stringify(newDataWords))
//       .then((response) => console.log(response, "Удалено"))
//       .catch((e) => console.log(e));
//   };

//   const saveChanges = async (id, value) => {
//     const response = await request(
//       `/api/words/${id}/update`,
//       "POST",
//       JSON.stringify(value)
//     );
//     const result = await response.json();
//     console.log(response, "Изменено");

//     function getNew() {
//       const index = dataWords.findIndex((item) => item.id === id);
//       if (index !== -1) {
//         dataWords[index] = result;
//       }
//       return dataWords;
//     }
//     const newWordData = getNew();
//     setDataWords([...newWordData]);
//   };

//   return (
//     <DataContext.Provider value={dataWords}>
//       <Routes>
//         <Route path='/' element={<MainPage />} />
//         <Route
//           path='/dictionary'
//           element={
//             isLoading ? (
//               <Loader />
//             ) : (
//                 <Dictionary
//                   addNewWord={addNewWord}
//                   onDelete={deleteWord}
//                   saveChanges={saveChanges}
//                 />
//               ) && error ? (
//               <ErrorMessage />
//             ) : (
//               <Dictionary
//                 addNewWord={addNewWord}
//                 onDelete={deleteWord}
//                 saveChanges={saveChanges}
//               />
//             )
//           }
//         />
//         <Route
//           path='/training'
//           element={
//             isLoading ? (
//               <Loader />
//             ) : <TrainPage /> && error ? (
//               <ErrorMessage />
//             ) : (
//               <TrainPage />
//             )
//           }
//         />
//         <Route path='*' element={<Page404 />} />
//       </Routes>
//     </DataContext.Provider>
//   );
// };

const AppRouter = () => {
  // const { request, isLoading, error } = useRequest();
  // const [dataWords, setDataWords] = useState([]);

  // useEffect(() => {
  //   getAllDataWords();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route
        path='/dictionary'
        // element={
        //   isLoading ? (
        //     <Loader />
        //   ) : <Dictionary /> && error ? (
        //     <ErrorMessage />
        //   ) : (
        //     <Dictionary />
        //   )
        // }
        element={<Dictionary />}
      />
      <Route
        path='/training'
        // element={
        //   isLoading ? (
        //     <Loader />
        //   ) : <TrainPage /> && error ? (
        //     <ErrorMessage />
        //   ) : (
        //     <TrainPage />
        //   )
        // }
        element={<TrainPage />}
      />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;
