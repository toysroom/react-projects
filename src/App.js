import { Route, Routes, BrowserRouter  } from 'react-router-dom';


// styles
import './App.css';

//components
import Navbar from './components/Navbar';

// pages
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Single from './pages/Single/Single'


function App() {
  return (
    <div className="App">
      <BrowserRouter>

       <Navbar />
      
        <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/create" element={<Create />}></Route>
           <Route path="/search" element={<Search />}></Route>
           <Route path="/single/:id" element={<Single />}></Route>
        </Routes>
      
      </BrowserRouter>   
    </div>
  );
}

export default App;
