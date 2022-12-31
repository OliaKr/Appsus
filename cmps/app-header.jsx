const { useState } = React

const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    const [isMenuShown, setIsMenuShown] = useState(false)

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <form>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text"
                placeholder="Search" />
        </form>
        <button onClick={() => setIsMenuShown(prev => !prev)}><i className="fa-solid fa-bars"></i></button>
        {isMenuShown && <nav className="main-nav"
            onClick={() => setIsMenuShown(prev => !prev)}>
            {/* <NavLink to="/">Home</NavLink> */}
            <NavLink to="/about"><i class="fa-solid fa-info"></i><h3>About</h3></NavLink>
            <NavLink to="/mail"><i class="fa-solid fa-envelope"></i><h3>Mail</h3></NavLink>
            <NavLink to="/note"><i class="fa-regular fa-note-sticky"></i><h3>Note</h3></NavLink>
            <article><i class="fa-brands fa-youtube"></i><h3>Youtube</h3></article>
            <article><i class="fa-regular fa-calendar"></i><h3>Calender</h3></article>
            <article><i class="fa-solid fa-location-dot"></i><h3>Maps</h3></article>
            <article><i class="fa-solid fa-earth-africa"></i><h3>Earth</h3></article>
            <article><i class="fa-solid fa-user"></i><h3>Contacts</h3></article>
            <article><i class="fa-solid fa-images"></i><h3>Photos</h3></article>

        </nav>}
    </header>
}
