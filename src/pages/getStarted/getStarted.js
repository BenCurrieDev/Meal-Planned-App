import { Link } from 'react-router-dom';
import ROUTES from '../../app/routes';

const GetStarted = () => {
  return (
    <main>
      <h2>App description here</h2>
      <h3>Quick guide here</h3>
      <h4>Replace with display link components</h4>
      <div>
        <Link to={ROUTES.recipesRoute()}>
          <image url="images/recipeBook.jpg">
            <h2>Recipes</h2>
          </image>
        </Link>
        <Link to={ROUTES.plannerRoute()}>
          <image url="images/planner.jpg">
            <h2>Planner</h2>
          </image>
        </Link>
      </div>
    </main>
  );
}

export default GetStarted;