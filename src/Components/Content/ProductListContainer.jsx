import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';


const ProductListContainer = ({ product }) => {

    const { product_id, product_title, product_image, price } = product;

    return (
        <div>
            <div className="card bg-base-100 h-72 max-w-full shadow-sm">
                <figure className="py-3 h-40 w-60 px-3">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body pt-2">
                    <h2 className="card-title">{product_title}</h2>
                </div>
                <div className='flex flex-col pb-3'>
                    <p className='text-base font-bold opacity-60'>Price: {price}</p>
                    <div className="card-actions">
                      <Link to={`/book/${product_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListContainer;