import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdFavorite, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const Nav = () => {
    const [active, setActive] = useState('');

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Statistics', path: '/statistics' },
        { name: 'Dashboard', path: '/dashboard' }
    ];


    return (
        <div className={`${active === 'Home' ? 'bg-[#9538E2]' : 'bg-[white]'} relative rounded-t-2xl`}>
            <div className="navbar w-[90%] lg:w-[100%] mt-10 shadow-sm">
                <div className="navbar-start w-[30%]">
                    <p className={`${active === 'Home' ? 'text-white' : 'text-black'} pl-10 lg:pl-2 font-extrabold text-xl`}>
                        <Link to={'/'}>Gadget Heaven</Link>
                    </p>
                </div>
                <div className="navbar-center w-[40%]">
                    <div className="dropdown dropdown-hover md:hidden lg:hidden">
                        <div tabIndex={0} role="button" className={`btn m-1 text-xl`}>
                            <MdOutlineMenu />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                            {navItems.map(item => (
                                <li
                                    key={item.name}
                                    className={`${active === item.name ? 'underline font-bold' : 'text-white'}`}
                                    onClick={() => setActive(item.name)}
                                >
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="text-base lg:flex md:flex hidden gap-3.5">
                        {navItems.map(item => (
                            <li
                                key={item.name}
                                className={`${active === 'Home' ? 'text-white hover:bg-stone-700' : 'text-black'} p-2 rounded-box ${active === item.name ? 'underline font-bold' : ''}`}
                                onClick={() => setActive(item.name)}
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end w-[30%]">
                    <div className="text-white flex gap-2">
                        <Link to={'/dashboard'}>
                            <button className="btn text-xl bg-white text-black btn-ghost btn-circle">
                                <MdOutlineShoppingCart />
                            </button>
                        </Link>
                        <Link to={'/dashboard'}>
                            <button className="btn bg-white text-black text-xl btn-ghost btn-circle">
                                <MdFavorite />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;