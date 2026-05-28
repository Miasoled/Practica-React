  import './App.css';
  import fondo from "./assets/fondo.png";
  //import { UserCard } from './components/userCard/userCard';
  //import { Header } from './components/header/header';
  //import { Footer } from './components/footer/footer';
  import { Layout } from './components/layout/layout';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import { Inicio } from './pages/inicio/inicio';
  import { Contactos } from './pages/contactos/contactos';
  import { Nosotros } from './pages/nosotros/nosotros';
  import { Card } from './pages/card/card';

  function App() {
    //const [contar, setContar] = useState(0);
    return (
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/contactos' element={<Contactos/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
      </Routes>
      </Layout>
      </BrowserRouter>




      // <>
      // <Layout>
      //   <h1>Inicio</h1>
      // </Layout>

      //   {/* <UserCard 
      //   nombre = "Lisseth"
      //   edad={21}
      //   url= "https://www.reprodart.com/kunst/vincent_van_gogh/thm_Cafeterrasse-bei-Nacht.jpg"
      //   activo={true}
      //   ></UserCard> */}
      // </>
    );
  }

  export default App; 