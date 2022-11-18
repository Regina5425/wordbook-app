import Header from "./components/header/Header";
import MainPage from './components/mainPage/MainPage';
import Dictionary from "./components/dictionary/Dictionary";
import Footer from "./components/footer/Footer";
import './styles/App.scss';
import TrainPage from "./components/trainPage/TrainPage";
import wordsDB from "./wordsDB";

const data = wordsDB;

function App() {
  return (
    <div className='container'>
      <Header />
      <section className='main'>
				<MainPage/>
				<Dictionary data={data}/>
				<TrainPage data={data}/>
			</section>
      <Footer />
    </div>
  );
}

export default App;
