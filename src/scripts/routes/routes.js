import home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/like';

const routes = {
  '/': home, // default page
  '/home': home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
