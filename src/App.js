import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NuevoHeroe from './pages/NuevoHeroe';
import Heroes from './pages/Heroes';
import { useEffect, useState } from 'react';

function App() {
  const API = 'https://superheroes-project-default-rtdb.firebaseio.com/heroes'
  

  useEffect(()=>{
    getHeroes()
  }, [])

  const handleSubmit = (nuevoHeroe) => {
    addNewHeroe(nuevoHeroe);
    getHeroes();
    
  };

  const [heroes, setHeroes] = useState(
    []
  )

  const getHeroes = async () =>{
    const response = await fetch(API + '.json')
    const data = await response.json()
    console.log(data)
    setHeroes(data)
  }

  const addNewHeroe = async (heroe) => {
    const response = await fetch(API + '.json', {
      method: 'POST', 
      body: JSON.stringify(heroe),
      headers: {
          'Content-Type': 'application/json'
      }
  })
    const data = await response.json()
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/home'  element={<Home ></Home>}></Route>
          <Route path='/heroes' element={<Heroes heroes={heroes} ></Heroes>}></Route>
          <Route path='/agregarHeroe' element={<NuevoHeroe onSubmit={handleSubmit}></NuevoHeroe>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
