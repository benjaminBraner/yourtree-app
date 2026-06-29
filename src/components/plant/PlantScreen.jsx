import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlantById } from '../../helpers/getPlantById';
import '../../scss/components/plant/_PlantScreen.scss';

const plantImages = import.meta.glob('../../plants/*.jpg'); // Mapea todas las imágenes

export const PlantScreen = ({ isPublic }) => {
     const { plantId } = useParams();
     const navigate = useNavigate();
     const [imagePath, setImagePath] = useState('');

     const plant = getPlantById(plantId);

     useEffect(() => {
          const loadImage = async () => {
               if (plantImages[`../../plants/${plantId}.jpg`]) {
                    const imageModule = await plantImages[`../../plants/${plantId}.jpg`]();
                    setImagePath(imageModule.default);
               }
          };

          loadImage();
     }, [plantId]);

     const clickBtn = () => isPublic && navigate('/signup');

     return (
          <div className='PlantScreen'>
               <div className='plant-container animate__animated animate__backInLeft'>

                    <div className='plant-img-container'>
                         {imagePath && <img alt={plantId} src={imagePath} />}
                    </div>

                    <div className='plant-info'>
                         <h2>{plant.name}</h2>
                         <p className='plant__care-level'>Care Level: {plant.care_level}</p>
                         <h3>{plant.price}</h3>

                         <p className='plant__cares'>{plant.cares}</p>

                         <button onClick={clickBtn}>Add to Cart</button>
                    </div>

               </div>
          </div>
     );
};
