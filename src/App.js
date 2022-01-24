import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import Cat from "./components/Cat/Cat";
import Car from "./components/Car/Car";
import Dog from "./components/Dog/Dog";
import Girl from "./components/Girl/Girl";
import Notebook from "./components/Notebook/Notebook";

function App() {

  return (
      <div>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'cat'} element={<Cat/>}/>
            <Route path={'car'} element={<Car/>}/>
            <Route path={'dog'} element={<Dog/>}/>
            <Route path={'girl'} element={<Girl/>}/>
            <Route path={'notebook'} element={<Notebook/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
