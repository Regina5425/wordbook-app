import Header from "./components/header/Header";
import MainPage from './components/mainPage/MainPage';
import Dictionary from "./components/dictionary/Dictionary";
import Footer from "./components/footer/Footer";
import './styles/App.scss';

function App() {
  return (
    <div className='container'>
      <Header />
      <section className='main'>
				<MainPage/>
				<Dictionary/>
			</section>
      <Footer />
    </div>
  );
}

export default App;
