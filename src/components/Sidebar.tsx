import Logo from '../assets/logo.svg';
import { FaTicketAlt, FaChartPie, FaLightbulb, FaUsers, FaUserTie, FaBook, FaToolbox, FaMedal } from 'react-icons/fa';

import "../styles/sidebar.scss";

export function Sidebar() {
    return (
        <div className="sidebar">
            <header className="top-title-menu">
                <img src={Logo} alt="logo" />
                <span>Dashboard Kit</span>
            </header>

            <main className="menu-content">
                <ul>
                    <li>
                        <FaChartPie />
                        <span>Overview</span>
                    </li>
                    <li>
                        <FaTicketAlt />
                        <span>Ticket</span>
                    </li>
                    <li>
                        <FaLightbulb />
                        <span>Ideas</span>
                    </li>
                    <li>
                        <FaUsers />
                        <span>Contacts</span>
                    </li>
                    <li>
                        <FaUserTie />
                        <span>Agents</span>
                    </li>
                    <li>
                        <FaBook />
                        <span>Articles</span>
                    </li>
                </ul>
            </main>

            <hr className="solid"/>
            
            <footer className="menu-content-footer">
                <ul>
                    <li>
                        <FaToolbox />
                        <span>Settings</span>
                    </li>
                    <li>
                        <FaMedal />
                        <span>Subscription</span>
                    </li>
                </ul>
            </footer>
        </div>
    )
}