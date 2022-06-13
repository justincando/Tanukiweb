import logo from "./../images/Tanuki.png";
import search from "./../images/search.png";
import person from "./../images/person.png";
import cart from "./../images/cart.png";
import './Navbar.css';
import { Link} from 'react-router-dom';
export default function Navbar(){
        

    
    
    return(
        <nav>
            <div className= "navbar">
                <div id = "topNav">
                    
                    <img src = {logo} alt ="tanuki" id = "logo" />
                    <span id ="title">TANUKI toys & collectibles, LLC</span>
                    <input type={"search"} id = "search" placeholder="Search"/>
                    <img src = {search} alt = "search" id = "mag" />
                    <Link to ="/login">
                        <span id = "signin" >
                            <img src = {person} alt ="person" id = "person" />
                            <span id="login" >Sign in</span>
                        </span>
                    </Link>
                    <span id = "checkout">
                        <img src={cart} alt="cart" id ="cart"/>
                        <span id = "basket">Cart</span>
                    </span>
                </div>
                <div id = "bottomNav">
                    <p id = "new">New Additions</p>
                    <p id="restock">Newly Restocked</p>
                    <p id ="theme">Themes</p>
                        <div id ="drops">
                            <div id ="themDrop">
                                <table>
                                    <tr>
                                        <td>Yu yu hakusho</td>
                                        <td>Dragon Ball Z</td>
                                        <td>Sailor Moon</td>
                                    </tr>
                                    <tr>
                                        <td>Bleach</td>
                                        <td>Naruto</td>
                                        <td>OnePiece</td>
                                    </tr>
                                    <tr>
                                        <td>Full Metal Alchemist</td>
                                        <td>Hunter X Hunter</td>
                                        <td>Attack on titan</td>
                                    </tr>
                                    <tr>
                                        <td>Black Clover</td>
                                        <td>My hero acadamia</td>
                                        <td>Demon Slayer</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    <p id ="type">Types of Product</p>
                        <div id ="dropstype">
                            <table>
                                <tr>
                                    <td>Books</td>
                                    <td>Games</td>
                                    <td>Art</td>
                                </tr>
                                <tr>
                                    <td>Figures</td>
                                    <td>Apparel</td>
                                    <td>Movies</td>
                                </tr>
                                <tr>
                                    <td>Plushies</td>
                                    <td>Pins</td>
                                    <td>Back to school</td>
                                </tr>
                            </table>
                        </div>
                    <p id ="companies"> Companies</p>
                        <div id ="dropscomp">
                            <table>
                                <tr>
                                    <td>GoodSmile</td>
                                    <td>Max Factory</td>
                                    <td>Phat!</td>
                                    <td>Orange Rouge</td>
                                    
                                </tr>
                                <tr>
                                    <td>MegaHouse</td>
                                    <td>Alter</td>
                                    <td>Bioworld</td>
                                    <td>Ques Q</td>
                                    
                                </tr>
                                <tr>
                                    <td>Kotobukiya</td>
                                    <td>Banpresto</td>
                                    <td>FREEing</td>
                                    <td>Stronger</td>
                                    
                                </tr>
                                <tr>
                                    <td>Pulchra</td>
                                    <td>Nekowear</td>
                                    <td>Aniplex</td>
                                </tr>
                            
                            </table>
                        </div>
                    <p id = "deals">Deals</p>
                    <p id ="instock">Currently instock</p>
                    
                </div>
            </div>
        </nav>
    )
}