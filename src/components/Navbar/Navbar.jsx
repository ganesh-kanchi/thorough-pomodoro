import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/themeContext"
import "./Navbar.css"

export const Navbar = () => {
    const { theme,themeToggle } = useTheme();

    return (
        <header className={`main-header ${ theme && " dark-theme-secondary"}`}>
            <Link className="brand-tag" to={"/"}>Thorough Pomodoro</Link>
            <nav className="main-navigation">
                {theme ? <i onClick={themeToggle} className="fa-solid fa-lightbulb nav-link-btn"></i> : <i onClick={themeToggle} class="fa-solid fa-moon nav-link-btn"></i>}
                <a className="button nav-link" target="_blank" rel="noopener noreferrer" href='https://github.com/ganesh-kanchi/thorough-pomodoro'>GitHub</a>
            </nav>
        </header>
    )
}