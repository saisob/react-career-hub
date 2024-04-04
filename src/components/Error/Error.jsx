import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Oops!!!</h1>
            <p>Sorry,an unexpected error has occurred</p>
            <button className="btn btn-active btn-secondary"><Link to="/">Go back to Home</Link></button>
        </div>
        
    );
};

export default Error;