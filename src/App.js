import React, {useCallback, useState} from 'react';
import './App.css';



import Card from "./components/Card";

// Traemos el dato de JSON
import Productdata from "./components/Productdata";
import Header from "./components/Header";


function App() {
  const [carry, setCarry] = useState([]);

  const onClickCard = useCallback((product) => {
    const existsOnCarry = carry.find(e => e.id === product.id);

    if (existsOnCarry) {
      setCarry(carry.filter(e => e.id !== product.id));
    } else {
      setCarry([
        ...carry,
        product
      ]);
    }
  }, [carry]);

  return (
   <>
     <Header
       carry={carry}
       handleRemoveItem={onClickCard}
     />
      <div className={'grid_app'}>

       {Productdata.map((product, index) => (
         <Card
            key={index.toString()}
            product={product}
            isInCarry={!!carry.find(e => e.id === product.id)}
            onClick={() => onClickCard(product)}
         />
       ))}
      </div>
   </>

  );

}

export default App;
