
import { Link } from 'react-router-dom'
import '../components/CartWidget.css'

const CartWidget = ({items}) => {
  
  return (
   <section className='carrito'>
    
    
      <Link to='/cart'>
 <span className="material-symbols-outlined">
        shopping_cart_checkout
 </span>

      </Link>
         
    

     <div className='counter'>
       {items}
     </div>
     
   </section>
   
   
  )
}

export default CartWidget
