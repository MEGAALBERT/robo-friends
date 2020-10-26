import React from 'react';
import '../styles/card.css'


function Card({name, email, id}) {
    return (
        <div className='card_container bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?150x150`} alt='roboimg'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
