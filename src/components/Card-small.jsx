import React, {Fragment} from 'react'

const CardSmall = ({views, icon, number, percentage, id}) => {
    return (
        <Fragment>
            <div className="card-small">
                            <p className="card-small-views">{views}</p>
                            <p className="card-small-icon">
                                <img src={icon} alt="" />
                            </p>
                            <p className="card-small-number">{number}</p>
                            <p className="card-small-percentage">
                                <span>
                                    <img src="images/icon-up.svg" alt="" />
                                    {percentage}%
                                </span>
                            </p>
            </div>
        </Fragment>
    )
}

export default CardSmall
