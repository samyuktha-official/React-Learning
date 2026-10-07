import Header from "./Header"
import Card from "./Card"
import places from "./data"
function App(){
  return (
    <>
    <Header/>
    {places.map((place)=>(<Card key={place.id} 
                                title = {place.title} 
                                country = {place.country} 
                                src={place.img.src} 
                                alt={place.img.alt} 
                                mapLink={place.googleMapLink} 
                                dates={place.dates} 
                                about={place.text} >
                            </Card>
                          )
                )
    }
    
    </>
  );

}
export default App;