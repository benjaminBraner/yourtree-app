import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import '../../scss/components/private/_DashboardPlantCard.scss';

const plantImages = import.meta.glob('../../plants/*.jpg');

export const DashboardPlantCard = ({ plant }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const key = `../../plants/${plant.id}.jpg`;
        if (plantImages[key]) {
            plantImages[key]().then(m => setImageSrc(m.default));
        }
    }, [plant.id]);

    const handleAdd = () => {
        dispatch(addItem(plant));
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="dash-plant-card">
            {imageSrc && (
                <div className="dash-plant-card__img-wrap">
                    <img src={imageSrc} alt={plant.name} />
                </div>
            )}
            <div className="dash-plant-card__body">
                <h3>{plant.name}</h3>
                <div className="dash-plant-card__meta">
                    <span className="dash-plant-card__price">{plant.price}</span>
                    <span className="dash-plant-card__level">{plant.care_level}</span>
                </div>
                <button
                    className={`dash-plant-card__btn ${added ? 'dash-plant-card__btn--added' : ''}`}
                    onClick={handleAdd}
                >
                    {added ? '✓ Added!' : '+ Add to Cart'}
                </button>
            </div>
        </div>
    );
};
