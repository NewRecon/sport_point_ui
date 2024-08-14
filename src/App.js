import Header from './bootstrap/Header.tsx';
import Home from './pages/Home.tsx';
import Profile from './pages/Profile.tsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/profile' Component={Profile} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
