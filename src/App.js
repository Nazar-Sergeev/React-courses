import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Cat from './components/Cat/Cat';
import Car from './components/Car/Car';
import Dog from './components/Dog/Dog';
import Girl from './components/Girl/Girl';
import Notebook from './components/Notebook/Notebook';
import {getService} from './services/get.service';

function App() {

    const [cat, setCat] = useState({});
    const [car, setCar] = useState({});
    const [dog, setDog] = useState({});
    const [girl, setGirl] = useState({});
    const [notebook, setNotebook] = useState({});

    useEffect(() => {
        update()
    },[])

    const update = async () => {

        await getService.getCats().then(value => {
            let imageCat = URL.createObjectURL(value)
            setCat(imageCat)
        });

       await getService.getCars().then(value => {
            let imageCar=URL.createObjectURL(value)
            setCar(imageCar)
        });

       await getService.getDogs().then(value => {
            let imageDog = URL.createObjectURL(value)
            setDog(imageDog)
        });

       await getService.getGirl().then(value => {
            let imageGirl = URL.createObjectURL(value)
            setGirl(imageGirl)
        })

       await getService.getNotebook().then(value => {
            let imageNotebook = URL.createObjectURL(value)
            setNotebook(imageNotebook)
        })
    }

  return (
      <div>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'cat'} element={<Cat cat={cat} update={update}/>}/>
            <Route path={'car'} element={<Car car={car} update={update}/>}/>
            <Route path={'dog'} element={<Dog dog={dog}  update={update}/>}/>
            <Route path={'girl'} element={<Girl girl={girl} update={update}/>}/>
            <Route path={'notebook'} element={<Notebook notebook={notebook} update={update}/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
