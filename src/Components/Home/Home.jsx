import Banner from "../Banner/Banner";
import ProductsList from "../Content/ProductsList";
import Hero from "../Hero/Hero";
import Nav from "../Navbar/Nav";

const Home = () => {
    return (
        <div className="relative">
            <Hero></Hero>
            <Banner></Banner>
            <ProductsList></ProductsList>
        </div>
    );
};

export default Home;