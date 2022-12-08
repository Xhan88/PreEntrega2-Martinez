import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GFetch } from "../contenedor/GFetch";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";


import "./styleComponents/ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [ product, setProduct ] = useState({})

  const { productId } = useParams()
  // console.log(productId)

  useEffect(()=>{
      GFetch()
      .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
      .catch(err => console.log(err))
  })     

  return (
      <>
          <ItemDetail product={product} />
          {/* <Input /> */}
          {/* <Intercambiabilidad /> */}

      </>
  )
}

export default ItemDetailContainer
