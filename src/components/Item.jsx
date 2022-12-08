import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
        <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
            // key={product.id}
        >    
            
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${product.name} - ${product.categoria}`}
                </div>
                <div className="card-body">
                    <img src={product.foto} alt='' className='w-50' />
                    <spam className='precio-item'>{product.precio} </spam>
                                                                               
                </div>
        
                <div className="card-footer"> 
                
                    <Link to={`/detail/${product.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>
                    </Link >                                                       
                
                
                </div>
            </div>
                            
            
        </div> 
    )
}

export default Item
