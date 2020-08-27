import React, { Fragment } from 'react'
import './styles/card.css'


const Card = ({username, followers, todayFollowers, icon, name}) => {

    const cardClass = `card ${name}`
    return(
        <Fragment>
            <article className={cardClass}>
                <p className="card-title">
                    <img src={icon} alt="" />
                    {username}
                </p>
                <p className="card-followers">
                    <span className="card-followers-number" id ="fb">{followers}</span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="images/icon-up.svg" alt="" />
                    {todayFollowers} Today
                </p>
            </article>
        </Fragment>
    )
}

export default Card;
