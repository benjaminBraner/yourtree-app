import React from 'react'
import { plants } from '../../data/plants'
import { PlantCard } from './PlantCard'

export const PlantList = () => {
   return (
      <div className='PlantList animate__animated animate__fadeIn'>
         <div className='plants-container'>
            {
               plants.map(plant => (

                  <PlantCard
                     key={plant.id}
                     // {...plant}
                     id={plant.id}
                     name={plant.name}
                     price={plant.price}
                  />
               )
               )
            }
         </div>

      </div>
   )
}
