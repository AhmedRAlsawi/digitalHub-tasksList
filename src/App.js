import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
const HomePage = lazy(() => import("./Pages/Home/Home"))
const LoginPage = lazy(() => import("./Pages/Login/Login"))
const TasksPage = lazy(() => import("./Pages/Tasks/Tasks"))
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"))
const TaskForm = lazy(() => import("./Pages/TaskForm/TaskForm"))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Hub - Tasks List</h1>
      </header>
      <NavBar />
      <Suspense fallback={"...Loading"}>
        <main>
          <Routes>
            <Route exact path='/' Component={HomePage}></Route>
            <Route path='/login' Component={LoginPage} />
            <Route  path='/mytasks' Component={TasksPage}>
              <Route path='create' Component={TaskForm} />
              <Route path='edit/:id' Component={TaskForm} />
            </Route>
            <Route path='*' Component={NotFound} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
