import logo from './assets/Logo.jpg'
function Header(){
    return (
        <header >
            <nav className="nav-list">
                <img src = {logo}  alt="logo"/>
                <span>Learning react</span>
            </nav>
            
        </header>
    );

}
export default Header;