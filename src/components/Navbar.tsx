import { FaSearch, FaBell } from "react-icons/fa";
import User from "../assets/user-image.png";

import "../styles/navbar.scss";

export function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="navbar-title">
                    <span>Overview</span>
                </div>

                <div className="user">
                    <div className="search">
                        <div className="icon-search">
                            <FaSearch size={15} color="#C5C7CD"/>
                        </div>
                        <FaBell size={15} color="#C5C7CD"/>
                    </div>

                    <div className="user-content">
                        <span>Jones Ferdinand</span>
                        <div className="user-image">
                            <img src={User} alt="Imagem do usuário" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}