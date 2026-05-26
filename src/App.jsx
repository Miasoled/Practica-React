  import './App.css';
  import fondo from "./assets/fondo.png";
  import { useState } from 'react';
  import { Card } from './components/card/card';
  import { UserCard } from './components/userCard/userCard';

  function App() {
    const [contar, setContar] = useState(0);
    return (
      <>
        <UserCard 
        nombre = "Lisseth"
        edad={21}
        url= "https://www.reprodart.com/kunst/vincent_van_gogh/thm_Cafeterrasse-bei-Nacht.jpg"
        activo={true}
        ></UserCard>
      </>
    );
  }

  export default App; 