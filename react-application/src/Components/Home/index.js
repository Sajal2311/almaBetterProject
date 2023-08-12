import Card from '../Common/Card';
import NewQuizImage from '../../assets/newQuiz.jpg';
import MyQuizImage from '../../assets/myquiz.jpg';
import PlayQuizImage from '../../assets/playQuiz.jpeg';
import './styles/index.css';

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <Card
          imageSrc={NewQuizImage}
          altText='New-Quiz'
          titleText='Create New Quiz'
        />
        <Card imageSrc={MyQuizImage} altText='My-Quiz' titleText='My Quizes' />
        <Card
          imageSrc={PlayQuizImage}
          altText='Play-Quiz'
          titleText='Play Quiz'
        />
      </div>
    </>
  );
};

export default Home;
