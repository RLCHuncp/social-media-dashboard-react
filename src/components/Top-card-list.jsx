import React, {Fragment} from 'react'
import './styles/top-card-list.css'
// import facebook from './images/icon-facebook.svg'
import Card from './Card'


const cardListData = [
    {
        id:1,
        username: '@LucyCampos',
        followers: 223,
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
        name:'facebook',
    },
    {
        id:2,
        username: '@LucyCampos',
        followers: 200,
        todayFollowers: 13,
        icon:'../images/icon-twitter.svg',
        name:'twitter',
    },
    {
        id:3,
        username: '@LucyCampos',
        followers: 350,
        todayFollowers: 14,
        icon:'../images/icon-instagram.svg',
        name:'instagram',
    },
    {
        id:4,
        username: '@LucyCampos',
        followers: 132,
        todayFollowers: 15,
        icon:'../images/icon-youtube.svg',
        name:'youtube',
    },
]

const TopCardList = () => {
    return (
        <Fragment>
            <section className="top-cards">
                <div className="wrapper">
                    <div className="grid">
                        {
                            cardListData.map((cardData) => 
                            <Card key ={cardData.id} {...cardData} /> )
                        }
                        {/* <Card username={cardListData.username}/>
                        <Card username='@LuisAquino'/>
                        <Card username='@Nikolas'/>
                        <Card username='@Lalita'/>  */}
                        {/* <article className="card twitter">
                            <p className="card-title">
                                <img src="./images/icon-twitter.svg" alt="" />
                                @LucyCampos
                            </p>
                            <p className="card-followers">
                                <span className="card-followers-number"> 200</span>
                                <span className="card-followers-title">Followers</span>
                            </p>
                            <p className="card-today">
                                <img src="images/icon-up.svg" alt="" />
                                12 Today
                            </p>
                        </article>
                        <article className="card instagram">
                            <p className="card-title">
                                <img src="./images/icon-instagram.svg" alt="" />
                                @LucyCampos
                            </p>
                            <p className="card-followers">
                                <span className="card-followers-number"> 350</span>
                                <span className="card-followers-title">Followers</span>
                            </p>
                            <p className="card-today">
                                <img src="images/icon-up.svg" alt="" />
                                12 Today
                            </p>
                        </article>
                        <article className="card youtube">
                            <p className="card-title">
                                <img src="./images/icon-youtube.svg" alt="" /> 
                                @LucyCampos
                            </p>
                            <p className="card-followers">
                                <span className="card-followers-number"> 132</span>
                                <span className="card-followers-title">Followers</span>
                            </p>
                            <p className="card-today">
                                <img src="images/icon-up.svg" alt="" />
                                12 Today
                            </p>
                        </article> */}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default TopCardList
