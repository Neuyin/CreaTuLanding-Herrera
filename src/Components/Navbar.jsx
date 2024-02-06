import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useAppContext } from "../context/Context"

const Navbar = () => {

    const { carrito } = useAppContext();

    return <div className="navbar">
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contact</h4></Link>
        <div style={{ display: "flex" }}>
            <CartWidget />
            {
                carrito.length > 0 &&
                <p>{carrito.length}</p>
            }
        </div>
    </div>
}

export default Navbar