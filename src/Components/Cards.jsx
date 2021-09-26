import React from 'react'
import CardItems from './CardItems'
import '../css/Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>
                <span>C</span>heck out these
                <span> A</span>wesome
                <span> D</span>estination
                <span> P</span>laces to
                <span> V</span>isit</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                            src={process.env.PUBLIC_URL + '/Images/img-6.jpg'}
                            text='Explore the World'
                            label='Adventrous'
                            path='/services'
                        />
                        <CardItems
                            src={process.env.PUBLIC_URL + '/Images/img-6.jpg'}
                            text='Explore the World'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                            src={process.env.PUBLIC_URL + '/Images/img-6.jpg'}
                            text='Explore the World'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItems
                            src={process.env.PUBLIC_URL + '/Images/img-8.jpg'}
                            text='Explore the World'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItems
                            src={process.env.PUBLIC_URL + '/Images/img-9.jpg'}
                            text='Explore the World'
                            label='Adrenaline'
                            path='/signup'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
