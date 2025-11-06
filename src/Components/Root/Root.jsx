import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;