import React from 'react';

const Card = (props) => {
    return (
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" className='card w-96 bg-base-100 shadow-xl rounded-2xl'>
            <figure>
                <img src={props.image} />
            </figure>
            <div className='card-body bg-white'>
                <h2 className='card-title text-xl'>{props.title}</h2>
                <p className='text-sm text-left text-gray-400'>{props.body}</p>
                <div className='card-actions justify-end'>
                    <div className='badge badge-outline'>{props.hastag1}</div>
                    <div className='badge badge-outline'>{props.hastag2}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
