import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/">
                <div>Homepage</div>
            </Link>

            <Link to="/starships">
                <div>Starships </div>
            </Link>
            <Link to="/starships/ship">
                <div>Favorite Ship</div>
            </Link>
        </div>
    )
}
export default Nav;