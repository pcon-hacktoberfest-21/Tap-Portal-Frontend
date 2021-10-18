import React from 'react'

import img1 from '../../assets/img/drone.jpg'
import img2 from '../../assets/img/sidebar-3.jpg'
import img3 from '../../assets/img/tapPhoto.png'
import img4 from '../../assets/img/card_bg2.jpg'

import Card from '../Card'

function cards() {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            <Card 
               title= "Card 1"
               image = {img1}
               body = "This is body of card 1, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium quis accusantium consequatur omnis rem sequi voluptate debitis autem veritatis."
            />

            <Card 
               title= "Card 2"
               image = {img2}
               body = "This is body of card 2 , Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium quis accusantium consequatur omnis rem sequi voluptate debitis autem veritatis. "
            />

            <Card 
               title= "Card 3"
               image = {img3}
               body = "This is body of card 3, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium quis accusantium consequatur omnis rem sequi voluptate debitis autem veritatis. "
            />

            <Card 
               title= "Card 4"
               image = {img4}
               body = "This is body of card 4, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium quis accusantium consequatur omnis rem sequi voluptate debitis autem veritatis. "
            />

            <Card 
               title= "Card 5"
               image = {img1}
               body = "This is body of card 5, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium quis accusantium consequatur omnis rem sequi voluptate debitis autem veritatis."
            />

            <Card 
               title= "Card 6"
               image = {img2}
               body = "This is body of card 6 , Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium quis accusantium consequatur omnis rem sequi voluptate debitis autem veritatis."
            />

        </div>
    )
}

export default cards
