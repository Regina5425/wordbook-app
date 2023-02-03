import { observer, inject } from "mobx-react";
import RandomCard from "../../components/randomCard/RandomCard";
import "./MainPage.scss";

const MainPage = ({ randomWord }) => {
  return (
    <div className='main-content'>
      <section className='main-content__info'>
        <h1 className='main-content__title'>Учи слова играючи!</h1>
        <p className='main-content__descr'>Добро пожаловать!</p>
        <p className='main-content__descr'>
          Здесь можно легко запомнить иностранные слова
        </p>
        <p className='main-content__descr'>
          В словаре отображается список изученных слов, можно добавить новое слово, отредактировать или удалить.
        </p>
				<p className='main-content__descr'>
          На странице тренировок можно потренировать ранее изученные слова, посмотреть их перевод.
        </p>
      </section>
      <section className='main-content__card'>
        <RandomCard randomWord={randomWord} />
      </section>
    </div>
  );
};

export default inject(({ wordStore }) => {
  const { randomWord } = wordStore;

  return { randomWord };
})(observer(MainPage));
