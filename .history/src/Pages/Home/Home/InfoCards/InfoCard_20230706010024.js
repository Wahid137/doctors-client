import React from 'react';

const InfoCard = () => {
    return (
        <div className={`text-white p-6 card md:card-side ${bgClass} shadow-xl`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
};

export default InfoCard;