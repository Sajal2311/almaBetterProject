import { Switch, Route, Link } from 'react-router-dom';
import './styles/index.css';
import Home from '../Home';

const NavigationBar = () => {
  return (
    <>
      <div className='menu'>
        <ul id='nav-list' className='navigation-list'>
          <li key='Home'>
            <Link to='/'>Home</Link>
          </li>
          <li key='MyQuiz'>
            <Link to='/my-quizes'>My Quizes</Link>
          </li>
          <li key='PlayQuiz'>
            <Link to='/play-quizes'>Play Quizes</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/my-quizes'>
          <div>My Quizes</div>
        </Route>
        <Route path='/play-quizes'>
          <div>Play Quizes</div>
        </Route>
      </Switch>
    </>
  );
};

export default NavigationBar;

//  ul= unordered list, ol= ordered list
// li = list item
