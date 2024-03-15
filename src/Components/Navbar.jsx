import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useAppContext } from "../context/Context"

const Navbar = () => {

    const { carrito } = useAppContext();

    return <div className="navbar">
        <Link to='/'><h4>Categorias</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
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