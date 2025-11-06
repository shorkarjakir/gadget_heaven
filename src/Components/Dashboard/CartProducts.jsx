import { CgClose } from "react-icons/cg";
import { handleRemove } from "../Utilities/LocalStorage/LSProductList"

const CartProducts = ({ cart }) => {

    const { product_id, product_title, product_image, price, description } = cart;

    return (
        <div style={{ margin: 'initial' }} className="flex">
            <div className="flex items-center gap-4 bg-stone-100 w-4/5 rounded-xl p-2">
                <figure className="">
                    <img className="h-28 w-40 rounded-xl" src={product_image} alt="" />
                </figure>
                <div className="text-left">
                    <h2 className="font-bold text-xl">{product_title}</h2>
                    <p className="text-xs p-1 opacity-75">{description}</p>
                    <p className="font-bold">Price: ${price}</p>
                </div>
               <button onClick={() => handleRemove(product_id)} className="cursor-pointer text-2xl"><CgClose /></button>
            </div>
        </div>
    );
};

export default CartProducts;