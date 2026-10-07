import earthLogo from './assets/EarthLogo.png'
function Header(){
    return (
        <header className="header">
            <img src={earthLogo} alt = "Earth image"/>
            <span>My travel journey</span>
        </header>
    );
}
export default Header;