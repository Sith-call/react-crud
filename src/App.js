import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Test from './pages/Test';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <>
    <Routes>
      <Route exact={true} path='/signUp' element={<SignUp />} />
      <Route exact={true} path='/' element={<SignIn />} />
      <Route exact={true} path='/test' element={<Test />} />
      <Route exact={true} path='/todo' element={<TodoPage />} />
    </Routes>
    </>
  );
}

export default App;
