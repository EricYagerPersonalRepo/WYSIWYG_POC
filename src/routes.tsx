import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import LoadingScreen from './Components/LoadingScreen';
import { Home } from './Pages/Home';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
(
<Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
</Suspense>
);

const Login = Loadable(lazy(() => import('./Components/LoadingScreen')));

const routes: RouteObject[] = [
    {
      path: 'authentication',
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <LoadingScreen text="register" />,
        },
      ],
    },
  
    {
      path: '*',
      element: <Home />
    },
  ];
  
  export default routes;