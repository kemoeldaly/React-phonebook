 import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import Navbar from './components/navbar';
 import routes from './config/routes'
 import { Provider } from 'react-redux';
 import { store } from './redux/slices/store';
 
 import AuthChecker from './auth/AuthChecker';
 
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Provider store={store}>
        <Routes>
          {routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                <AuthChecker>
                  <route.component />
                </AuthChecker>
              
            }
            />
          ))}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App

