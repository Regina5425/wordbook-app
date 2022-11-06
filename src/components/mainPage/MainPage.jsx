import RandomCard from "../randomCard/RandomCard";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className='main-content'>
      <section className='main-content__info'>
        <h1 className='main-content__title'>Учи слова играючи!</h1>
        <p className='main-content__descr'>Добро пожаловать!</p>
        <p className='main-content__descr'>Здесь можно легко запомнить иностранные слова</p>
        <p className='main-content__descr'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error
          iste, cumque praesentium cupiditate quas obcaecati consectetur sunt
          voluptatum aut iusto commodi rerum? Fuga rerum, mollitia quidem
          asperiores labore fugiat! Ut, culpa unde. Omnis deserunt asperiores
          error laboriosam et voluptate fugit, officia architecto consequuntur
          repudiandae aliquam quas soluta repellat earum quod, accusamus
          accusantium sunt, ex qui corporis. Voluptatibus, earum debitis.
        </p>
      </section>
      <section className='main-content__card'>
				<RandomCard/>
			</section>
    </div>
  );
};

export default MainPage;
