import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/HomeView/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/HomeView/NavBar/NavBar";
import './App.css';
import './index.css';




function App(){



return (
  <>
<div>
<NavBar/> 

<ItemListContainer greeting = "Hola Mundo !" />


</div>
</>
);



}

export default App;

//rafce = para que aparezca todo el codigo de una
//el <NavBar> lo pusimos arriba al empezar el div, porque en App organizamos tb los lugares. O sea
// el menu va arriba del hola mundo
//en la app colocamos todos nuestros componentes