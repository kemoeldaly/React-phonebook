 import {  Routes, Route, HashRouter } from 'react-router-dom'
 import Navbar from './components/navbar';
 import routes from './config/routes'
 import { Provider } from 'react-redux';
 import { store } from './redux/slices/store';
 
 import AuthChecker from './auth/AuthChecker';
import { Key } from 'react';
 
function App() {
  return (
    <HashRouter>
    <Navbar />
      <Provider store={store}>
        <Routes>
          {routes.map((route: any, index: Key) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                <AuthChecker>
                  <route.component />
                </AuthChecker>
              ): (
                <route.component />
              )
            }
            />
          ))}
        </Routes>
      </Provider>
    </HashRouter>
  );
}
export default App

