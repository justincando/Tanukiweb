import logo from "./../images/Tanuki.png";
import search from "./../images/search.png";
import person from "./../images/person.png";
import cart from "./../images/cart.png";
import './Navbar.css';
export default function Navbar(){
    return(
        <nav>
            <img src = {logo} alt ="tanuki" id = "logo" />
            <span id ="title">TANUKI toys & collectibles, LLC</span>
            <input type={"search"} id = "search" placeholder="Search"/>
            <img src = {search} alt = "search" id = "mag" />
            <span id = "signin">
                <img src = {person} alt ="person" id = "person" />
                <span id="login">Sign in</span>
            </span>
            <span id = "checkout">
                <img src={cart} alt="cart" id ="cart"/>
                <span id = "basket">Cart</span>

            </span>
        </nav>
    )
}