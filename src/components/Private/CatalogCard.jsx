import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../../store/slices/cartSlice';

const plantImages = import.meta.glob('../../plants/*.jpg');

export const CatalogCard = ({ plant }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const inCart = cartItems.some(i => i.id === plant.id);

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
        <div className="catalog-card">
            <div className="catalog-card__img-wrap">
                {imageSrc && <img src={imageSrc} alt={plant.name} />}
                <span className={`catalog-card__level catalog-card__level--${plant.care_level.toLowerCase().replace(' ', '-')}`}>
                    {plant.care_level}
                </span>
            </div>
            <div className="catalog-card__body">
                <h3 className="catalog-card__name">{plant.name}</h3>
                <p className="catalog-card__desc">{plant.cares.slice(0, 80)}…</p>
                <div className="catalog-card__footer">
                    <span className="catalog-card__price">{plant.price}</span>
                    <button
                        className={`catalog-card__btn ${added ? 'catalog-card__btn--added' : ''} ${inCart && !added ? 'catalog-card__btn--in-cart' : ''}`}
                        onClick={handleAdd}
                    >
                        {added ? '✓ Added!' : inCart ? '+ More' : '+ Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};
