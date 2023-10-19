 import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
 import Navbar from './components/navbar';
 import routes from './config/routes'
 

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {routes.map((route: any, index: any) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
export default App

{/* <h1 className="text-3xl font-bold bg-blue-400 h-screen flex items-center justify-center">
Hello world!
</h1> */}