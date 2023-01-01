const { useState } = React

const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    const [isMenuShown, setIsMenuShown] = useState(false)

    return <header className="app-header">
        <Link to="/">
           <div className="logo"><img className="logo-img"src="assets/img/logo1.png" alt="" /></div> 
        </Link>
        <form>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text"
                placeholder="Search" />
        </form>
        <button onClick={() => setIsMenuShown(prev => !prev)}><i className="fa-solid fa-bars"></i></button>
        {isMenuShown && <nav className="main-nav"
            onClick={() => setIsMenuShown(prev => !prev)}>
            <NavLink to="/about"><i className="fa-solid fa-info"></i><h3>About</h3></NavLink>
            <NavLink to="/mail"><i className="fa-solid fa-envelope"></i><h3>Mail</h3></NavLink>
            <NavLink to="/note"><i className="fa-regular fa-note-sticky"></i><h3>Note</h3></NavLink>
            <article><i className="fa-brands fa-youtube"></i><h3>Youtube</h3></article>
            <article><i className="fa-regular fa-calendar"></i><h3>Calender</h3></article>
            <article><i className="fa-solid fa-location-dot"></i><h3>Maps</h3></article>
            <article><i className="fa-solid fa-earth-africa"></i><h3>Earth</h3></article>
            <article><i className="fa-solid fa-user"></i><h3>Contacts</h3></article>
            <article><i className="fa-solid fa-images"></i><h3>Photos</h3></article>

        </nav>}
    </header>
}
