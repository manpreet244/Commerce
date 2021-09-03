import React,{useState,useEffect} from 'react'
import Card from './Card';


const Products = () => {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

 
  const renderProducts = () => {
    return items.map((item, index) => {
      return (
        <div   key={index} className="pl-8   inline-block p-6 text-red-800 ">
          <Card   
            img={item.image}
            title={item.title}
            price={item.price}
            product={ item}/>
        </div>
      );
    });
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result);
        },
       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {renderProducts()}
       
      </>
    );
  }
}

export default Products;