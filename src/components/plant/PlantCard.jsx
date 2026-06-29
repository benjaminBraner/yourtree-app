import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/plant/_PlantCard.scss';

const plantImages = import.meta.glob('../../plants/*.jpg'); // Mapea todas las imágenes

export const PlantCard = ({ id, name, price }) => {
     const [imageSrc, setImageSrc] = useState('');

     useEffect(() => {
          const loadImage = async () => {
               const imageModule = await plantImages[`../../plants/${id}.jpg`]();
               setImageSrc(imageModule.default);
          };

          if (plantImages[`../../plants/${id}.jpg`]) {
               loadImage();
          }
     }, [id]);

     return (
          <div className='plant-card'>
               {imageSrc && <img alt={id} src={imageSrc} />} {/* Evita renderizar antes de cargar la imagen */}

               <div className='plant__features'>
                    <div className='features'>
                         <h2>{name}</h2>
                         <p>{price}</p>
                         <Link to={`/products/plant/${id}`}>
                              <button>
                                   More..
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};
