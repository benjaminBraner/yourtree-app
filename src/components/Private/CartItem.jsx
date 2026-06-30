import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementQty, decrementQty } from '../../store/slices/cartSlice';
import { TrashIcon } from '../../assets/icons/TrashIcon';

const plantImages = import.meta.glob('../../plants/*.jpg');

export const CartItem = ({ item }) => {
    const [imageSrc, setImageSrc] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const key = `../../plants/${item.id}.jpg`;
        if (plantImages[key]) {
            plantImages[key]().then(m => setImageSrc(m.default));
        }
    }, [item.id]);

    const numericPrice = parseFloat(item.price.replace('$', ''));
    const subtotal = (numericPrice * item.quantity).toFixed(2);

    return (
        <div className="cart-item">
            <div className="cart-item__img-wrap">
                {imageSrc && <img src={imageSrc} alt={item.name} />}
            </div>
            <div className="cart-item__info">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__unit-price">{item.price} each</p>
            </div>
            <div className="cart-item__qty">
                <button
                    className="cart-item__qty-btn"
                    onClick={() => dispatch(decrementQty(item.id))}
                    aria-label="Decrease"
                >−</button>
                <span className="cart-item__qty-val">{item.quantity}</span>
                <button
                    className="cart-item__qty-btn"
                    onClick={() => dispatch(incrementQty(item.id))}
                    aria-label="Increase"
                >+</button>
            </div>
            <p className="cart-item__subtotal">${subtotal}</p>
            <button
                className="cart-item__remove"
                onClick={() => dispatch(removeItem(item.id))}
                aria-label="Remove item"
            >
                <TrashIcon />
            </button>
        </div>
    );
};
