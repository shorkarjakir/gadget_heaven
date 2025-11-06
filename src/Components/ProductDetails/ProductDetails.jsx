import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { addToLs } from '../Utilities/LocalStorage/LSProductList';
import { addWhToLs } from "../Utilities/LocalStorage/LSProductInWl";

const ProductDetails = () => {

    const productId = useParams();
    const data = useLoaderData();
    const productList = data.products;

    const productID = productId.product_id;

    const product = productList.find(product => product.product_id === productID);

    const { product_id, product_title, price, product_image, description, specification, rating } = product;
    const ratingNum = parseFloat(rating);

    return (
        <div>
            <div className="bg-[#9538E2] h-60 md:h-64 lg:h-72">
                <h2 className="font-bold pt-5 text-white text-center text-base md:text-2xl lg:text-2xl">Product Details</h2>
                <p className="text-white text-center text-xs py-1">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="relative h-[400px] w-[80%]">
                <div className="card absolute -top-30 left-10 md:-top-36 md:left-12 lg:left-4 p-3 bg-white flex-row gap-5 w-[90%] h-[125%] md:w-[90%] md:h-[125%] lg:w-[100%] lg:h-[125%] shadow-lg">
                    <figure className="w-[45%]">
                        <img
                            src={product_image}
                            alt="Album"
                            className="h-full w-full rounded-2xl"
                        />
                    </figure>
                    <div className="w-[55%]">
                        <h2 className="card-title font-bold text-xl text-[#09080F]">{product_title}</h2>
                        <p className="text-[#09080F] py-2 opacity-80 font-bold text-base">Price: ${price}</p>
                        <p className="text-[#09080F] opacity-60">{description}</p>
                        <p className="font-bold py-2 text-[#09080F]">Specification:</p>
                        <div>
                            {specification.map((item, idx) => <li className="list-none" key={idx}>{item}</li>)}
                        </div>
                        <p className="font-bold text-[#09080F]">Rating:</p>
                        <div className="flex w-40 gap-3">
                            <Rating
                                style={{ maxWidth: 180, }}
                                value={ratingNum}
                                readOnly
                            ></Rating>
                            <span className="text-base p-2 rounded-2xl opacity-80 text-black px-2 font-bold bg-gray-400">{rating}</span>
                        </div>

                        <div className="flex justify-center w-32 gap-3 pt-3">
                            <button onClick={() => addToLs(product_id)} className="btn rounded-2xl bg-purple-700 text-white">Add to Cart <FiShoppingCart></FiShoppingCart></button>
                            <button onClick={() => addWhToLs(product_id)} className="cursor-pointer shadow-2xl bg-white rounded-full p-2 border-1"><MdFavoriteBorder></MdFavoriteBorder></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;