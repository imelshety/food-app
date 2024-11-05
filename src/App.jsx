// App.js
import { RouterProvider } from 'react-router-dom';
import routers from './routes/AppRoutes';

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
