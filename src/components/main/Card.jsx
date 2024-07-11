
import './MainSection.css'
export const Card = ({product}) =>{
    return (
        <div className="card">
        <div className="card-img">
            <img src={product.thumbnail} alt="" />
        </div>
        <div className='card-text'>
        <h2>{product.title}[{product.category}]   </h2>
        <h4>{product.price}</h4>
        {/* conditional rendering */}
        {
            product.stock < 15 ? <h3>Item is limited</h3>:<></>
        }
        </div>
        </div>
    )
}