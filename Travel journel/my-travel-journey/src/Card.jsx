import { Fragment } from "react";
function Card(props){
    return(
        <article className = "container">
            <Fragment className="item-list">
                <img className = "photo-frame" src={props.src} alt ={props.alt}/>
                <div className="content">
                    <p>&#x1F4CD;{props.country} <a href="{props.mapLink}">View on google maps</a> </p>
                    <h2>{props.title}</h2>
                    <h4>{props.dates}</h4>
                    <p>{props.about}</p>
                </div>
            </Fragment>

        </article>
    );
}
export default Card;
