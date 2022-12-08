import '../contenedor/ItemListContainer.css';
import { useState, useEffect} from 'react'
import { GFetch } from './GFetch';
import { useParams } from 'react-router-dom';
// import ItemList from "../components/ItemList";
import ItemList from '../components/ItemList';




const ItemListContainer = ( {greeting} ) => {
  const [ products, setProduct ] = useState([])
  // const [ pokemons, setPokemons ] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  console.log(id)
  
  useEffect(()=>{
      if (id) {
          GFetch()// consulta a un api pero solo simulación 
          // .then( respuesta => respuesta )
          .then(data => setProduct(data.filter(prod => prod.categoria === id)))
          .catch(err => console.log(err))
          .finally(()=> setLoading(false))      
          
      } else {
          GFetch()// consulta a un api pero solo simulación 
          // .then( respuesta => respuesta )
          .then(data => setProduct(data))
          .catch(err => console.log(err))
          .finally(()=> setLoading(false))            
      }

      
      // useFetch()

  }, [id])


  
 // console.log(pokemons)
  {/*  [1,2,3,4,5] => 1 [ <li>1</li>, <li>2</li>, <li>3</li>, .... ]  */}
  return (
    <div >
    
        {   loading ? 
                <h2>Vienvenidos Juguetones...</h2> 
            :
               <ItemList products={products} />
        }            
    
    </div>
)
}

export default ItemListContainer