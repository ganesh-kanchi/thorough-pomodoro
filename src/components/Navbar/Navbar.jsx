import "./Navbar.css"

export const Navbar = () => {
    return (
        <header className="main-header">
            <a className="brand-tag" href="https://thorough-pomodoro.netlify.com">Thorough Pomodoro</a>
            <nav className="main-navigation">
                <a className="button nav-link" target="_blank" rel="noopener noreferrer" href='https://github.com/ganesh-kanchi/thorough-pomodoro'>GitHub</a>
            </nav>
        </header>
    )
}