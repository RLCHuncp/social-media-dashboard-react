import React from 'react'
import './styles/overview.css'
import CardSmall from './Card-small'

const cardSmallData = [
    {
        views: 'Pages views',
        icon:'images/icon-facebook.svg',
        number: 87,
        percentage: 3,
        id:1,
    },
    {
        views: 'Likes',
        icon:'images/icon-facebook.svg',
        number: 52,
        percentage: 2,
        id:2,
    },
    {
        views: 'Likes',
        icon:'images/icon-instagram.svg',
        number: 5462,
        percentage: 2257,
        id:3,
    },
    {
        views: 'Profile Views',
        icon:'images/icon-instagram.svg',
        number: '52k',
        percentage: 1375,
        id:4,
    },
    {
        views: 'Retweets',
        icon:'images/icon-twitter.svg',
        number: 177,
        percentage: 303,
        id:5,
    },
    {
        views: 'Likes',
        icon:'images/icon-twitter.svg',
        number: 507,
        percentage: 553,
        id:6,
    },
    {
        views: 'Likes',
        icon:'images/icon-youtube.svg',
        number: 107,
        percentage: 19,
        id:7,
    },
    {
        views: 'Total views',
        icon:'images/icon-youtube.svg',
        number: 1407,
        percentage: 12,
        id:8,
    }
]
const Overview = () => {
    return (
        <div>
            <section className="overview">
                <div className="wrapper">
                    <h2>Overview - Today</h2>
                    <div className="grid">
                        {
                            cardSmallData.map((cardData) => <CardSmall key={cardData.id} {...cardData}/>)
                        }
                    </div>
                </div>
    </section>
        </div>
    )
}

export default Overview
