import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { checkLs } from "../Utilities/LocalStorage/LSProductList"
import CartProducts from "./CartProducts";
import { CgFormatLineHeight } from "react-icons/cg";
import { FcOk } from "react-icons/fc";
import { checkWL } from "../Utilities/LocalStorage/LSProductInWl"
import WLProducts from "./WLProducts";

const Dashboard = () => {

    const [active, setActive] = useState('Cart');
    const [tabIndex, setTabIndex] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [whList, setWhlist] = useState([]);

    const allProduct = useLoaderData();
    const allProducts = allProduct.products;

    useEffect(() => {
        const cartInStored = checkLs();
        const cartInStoredInt = cartInStored.map(id => id);

        const cartList = allProducts.filter(cart => cartInStoredInt.includes(cart.product_id))
        setCartList(cartList);
    }, []);

    useEffect(() => {
        const whInstored = checkWL();
        const whInstoredInt = whInstored.map(id => id);

        const whList = allProducts.filter(list => whInstoredInt.includes(list.product_id))
        setWhlist(whList);
    }, [])

    const totalPriceCalc = cartList.reduce((sum, item) => sum + item.price, 0);

    const handleSort = () => {
        const sortedByPrice = [...cartList].sort((a, b) => a.price - b.price);
        setCartList(sortedByPrice);
    }

    const showModalFunc = () => {
        document.getElementById('my_modal_1').showModal();
    }

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <div className="">
                <div className="bg-[#9538E2] text-center h-44 md:h-44 lg:h-44">
                    <h2 className="font-bold pt-5 text-white text-center text-base md:text-2xl lg:text-2xl">Dashboard</h2>
                    <p className="text-white text-center text-xs py-1">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <div className="py-5 text-center inline-flex gap-4">
                        <TabList className={"no-underline flex gap-3"}>
                            <Tab className={"no-underline inline-flex"}><button onClick={() => setActive('Cart')} name="Cart" className={`px-10 py-1 cursor-pointer border-2 border-white rounded-xs ${active === 'Cart' ? 'bg-white font-bold text-purple-400' : 'bg-[#9538E2] text-white'}`}>Cart</button></Tab>
                            <Tab className={"no-underline inline-flex"}><button onClick={() => setActive('Whitelist')} name="" className={`px-7 py-1 border-2 border-white cursor-pointer rounded-xs ${active === 'Whitelist' ? 'bg-white font-bold text-purple-400' : 'bg-[#9538E2] text-white'}`}>Wishlist</button></Tab>
                        </TabList>
                    </div>
                </div>
                <div>
                    <TabPanel>
                        <div>
                            <div className="flex justify-between pb-4 pt-3">
                                <h2 className="font-bold text-xl">Cart</h2>
                                <div className="flex items-center gap-3">
                                    <h2 className="font-bold text-xl">Total Cost: {totalPriceCalc}</h2>
                                    <button onClick={() => handleSort()} className="border-2 font-bold text-purple-500 border-purple-500 p-2 inline-flex items-center gap-2 rounded-2xl cursor-pointer">Sort by Price <CgFormatLineHeight /></button>
                                    <button onClick={() => showModalFunc()} className="border-2 font-bold text-white bg-purple-500 shadow-2xl shadow-purple-700 px-3 p-2 rounded-2xl cursor-pointer">Purchase</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                {
                                    cartList.map((cart, idx) => <CartProducts key={idx} cart={cart}></CartProducts>)
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex pt-4 flex-col gap-4">
                            {
                                whList.map((item, idx) => <WLProducts key={idx} item={item}></WLProducts>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </div>
            <div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-3/12 text-center">
                        <h2 className="text-6xl">
                            <FcOk />
                        </h2>
                        <h3 className="font-bold text-lg">Payment Sucessfully</h3>
                        <hr />
                        <p className="text-xs font-bold opacity-80 text-black py-2">Thanks for purchasing</p>
                        <p className="text-xs font-bold py-2 opacity-80 text-black">Total: {totalPriceCalc}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </Tabs>
    );
};

export default Dashboard;