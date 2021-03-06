import { Navbar } from "../../components/Navbar/Navbar"
import Timer from "../../assets/technique.png"
import "./Homepage.css"
import { Link } from "react-router-dom"
import { useTheme } from "../../contexts/themeContext"
import { useDocumentTitle } from "../../customHooks/useDocumentTitle"

export const Homepage = () => {
    const {theme} = useTheme();

    useDocumentTitle(`Home | Thorough Pomodoro`)

    return (
        <div className="page-container">
            <Navbar />
            <main className={`page-content homepage-content ${theme && " dark-theme-background dark-theme-text"}`}>
                <div className="homepage-text">
                    <div className="heading-1">An easy to use pomodoro for an effective human.</div>
                    <div className="homepage-links">
                        <a className="button" href="https://medium.com/keep-productive/how-to-use-a-pomodoro-timer-f9d172132981" target="_blank" rel="noopener noreferrer">What is Pomodoro technique?</a>
                        <Link to="/tasks" className="button">Go to the App</Link>
                    </div>
                </div>
                <img src={Timer} alt="pomodoro technique" />
            </main>
            <a target="_blank" rel="noopener noreferrer" className={`img-credit-link ${theme && " dark-theme-background dark-theme-text"}`} href="https://www.flaticon.com/free-icons/pomodoro" title="pomodoro icons">Pomodoro icons created by Flat Icons - Flaticon</a>
        </div>
    )
}