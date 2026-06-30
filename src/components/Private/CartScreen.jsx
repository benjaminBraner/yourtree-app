import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    clearCart,
    selectCartItems,
    selectCartTotal,
    selectCartIsEmpty,
} from '../../store/slices/cartSlice';
import { CartItem } from './CartItem';
import { CartIcon } from '../../assets/icons/CartIcon';
import { CheckCircleIcon } from '../../assets/icons/CheckCircleIcon';
import '../../scss/components/private/_CartScreen.scss';

export const CartScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checkedOut, setCheckedOut] = useState(false);

    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    const isEmpty = useSelector(selectCartIsEmpty);

    const handleCheckout = () => {
        setCheckedOut(true);
        setTimeout(() => {
            dispatch(clearCart());
            setCheckedOut(false);
        }, 2500);
    };

    if (checkedOut) {
        return (
            <div className="cart cart--success">
                <div className="cart-success">
                    <CheckCircleIcon className="cart-success__icon" />
                    <h2>Order placed!</h2>
                    <p>Thanks for growing with yoürTree.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <header className="cart__header">
                <h1 className="cart__title">Your Cart</h1>
                {!isEmpty && (
                    <button className="cart__clear-btn" onClick={() => dispatch(clearCart())}>
                        Clear all
                    </button>
                )}
            </header>

            {isEmpty ? (
                <div className="cart__empty">
                    <CartIcon />
                    <p>Your cart is empty.</p>
                    <button onClick={() => navigate('/acc/catalog')}>
                        Browse Catalog
                    </button>
                </div>
            ) : (
                <div className="cart__content">
                    {/* Items list */}
                    <div className="cart__items">
                        {items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="cart__summary">
                        <h2 className="cart__summary-title">Order Summary</h2>
                        <div className="cart__summary-row">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="cart__summary-row">
                            <span>Shipping</span>
                            <span className="cart__free">Free</span>
                        </div>
                        <div className="cart__summary-divider" />
                        <div className="cart__summary-row cart__summary-row--total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="cart__checkout-btn" onClick={handleCheckout}>
                            Checkout
                        </button>
                        <button
                            className="cart__continue-btn"
                            onClick={() => navigate('/acc/catalog')}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
