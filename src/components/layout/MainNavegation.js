import { Link } from "react-router-dom"

export const MainNavegation = () =>{
    return (
    <header>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup">New Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>)
}