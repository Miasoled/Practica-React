  import './App.css';
  import fondo from "./assets/fondo.png";
  import { useState } from 'react';
  import { Card } from './components/card/card';
  import { UserCard } from './components/userCard/userCard';

  function App() {
    const [contar, setContar] = useState(0);
    return (
      <>
        <Card edad={21}></Card>
        <Card edad={17}></Card>
        <Card edad={15}></Card>
      </>
    );
  }

  export default App; 