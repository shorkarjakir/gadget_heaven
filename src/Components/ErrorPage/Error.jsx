import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h2 className="text-8xl my-4">Error 404</h2>
            <Link to={'/'}><button className="btn btn-info text-amber-50 font-bold">Go Back</button></Link>
        </div>
    );
};

export default Error;