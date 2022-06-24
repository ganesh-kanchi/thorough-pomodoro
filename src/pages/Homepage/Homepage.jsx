import { Navbar } from "../../components/Navbar/Navbar"
import Timer from "../../assets/technique.png"
import "./Homepage.css"

export const Homepage = () => {
    return (
        <div className="page-container">
            <Navbar />
            <main className="page-content homepage-content">
                <div className="homepage-text">
                    <div className="heading-1">An easy to use pomodoro for an effective human.</div>
                    <div className="homepage-links">
                        <a className="button" href="https://medium.com/keep-productive/how-to-use-a-pomodoro-timer-f9d172132981" target="_blank" rel="noopener noreferrer">What is Pomodoro technique?</a>
                        <a className="button" href="/pomodoro" target="_blank" rel="noopener noreferrer">Go to the App</a>
                    </div>
                </div>
                <img src={Timer} alt="pomodoro technique" />
            </main>
            <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/free-icons/pomodoro" title="pomodoro icons">Pomodoro icons created by Flat Icons - Flaticon</a>
        </div>
    )
}