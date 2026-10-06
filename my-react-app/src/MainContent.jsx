import reactLogo from './assets/React.png';


function MainContent(){
    return (
        <main className="main-content">
            <ul>
                <li>It Was Created by Facebook (Meta)</li>
                <li>It's a Library, Not a Framework</li>
                <li>The "Virtual DOM" Makes It Exceptionally Fast</li>
                <li>It Uses JSX to Blend HTML and JavaScript</li>
            </ul>
            <img src={reactLogo} id="react-logo" alt = 'react-logo'/>
        </main>
    );
}
export default MainContent;