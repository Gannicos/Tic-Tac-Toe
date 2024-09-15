import '../App.css';
import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="nav-container">
                <div className='nav-center'>
                    <nav className='nav'>
                        <Link to="/" className="nav-link">
                            <div className="nav-in-link-content">Home</div>
                        </Link>
                        <Link to="/Tic-Tac-Toe" className="nav-link">
                            <div className="nav-in-link-content">Player vs Player</div>
                        </Link>
                        <Link to="/AI-Tic-Tac-Toe" className="nav-link">
                            <div className="nav-in-link-content">Versus AI</div>
                        </Link>
                    </nav>
                </div>
            <Outlet/>
        </div>
    );
}