import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartCount, selectCartTotal } from '../../store/slices/cartSlice';
import { plants } from '../../data/plants';
import { DashboardPlantCard } from './DashboardPlantCard';
import { PlantIcon } from '../../assets/icons/PlantIcon';
import { BagIcon } from '../../assets/icons/BagIcon';
import { MoneyIcon } from '../../assets/icons/MoneyIcon';
import '../../scss/components/private/_DashboardScreen.scss';

export const DashboardScreen = () => {
    const navigate = useNavigate();
    const userName = useSelector(state => state.auth.name);
    const cartCount = useSelector(selectCartCount);
    const cartTotal = useSelector(selectCartTotal);

    // 4 random Easy plants
    const recommended = useMemo(() => {
        const easy = plants.filter(p => p.care_level === 'Easy');
        return easy.sort(() => Math.random() - 0.5).slice(0, 4);
    }, []);

    const stats = [
        {
            label: 'Plants Available',
            value: plants.length,
            icon: <PlantIcon />,
            color: 'green',
        },
        {
            label: 'Items in Cart',
            value: cartCount,
            icon: <BagIcon />,
            color: 'violet',
        },
        {
            label: 'Cart Total',
            value: `$${cartTotal.toFixed(2)}`,
            icon: <MoneyIcon />,
            color: 'orange',
        },
    ];

    const greeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="dashboard__header">
                <div>
                    <p className="dashboard__greeting">{greeting()},</p>
                    <h1 className="dashboard__title">{userName || 'Plant Lover'}</h1>
                </div>
                <p className="dashboard__subtitle">
                    Here's what's growing in your world today.
                </p>
            </header>

            {/* Stats */}
            <section className="dashboard__stats">
                {stats.map(stat => (
                    <div key={stat.label} className={`stat-card stat-card--${stat.color}`}>
                        <span className="stat-card__icon">{stat.icon}</span>
                        <div>
                            <p className="stat-card__value">{stat.value}</p>
                            <p className="stat-card__label">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Recommended */}
            <section className="dashboard__recommended">
                <div className="dashboard__section-header">
                    <h2>Recommended for you</h2>
                    <span className="dashboard__tag">Easy care</span>
                </div>
                <div className="dashboard__plant-grid">
                    {recommended.map(plant => (
                        <DashboardPlantCard key={plant.id} plant={plant} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="dashboard__cta">
                <div className="dashboard__cta-content">
                    <h2>Ready to explore all plants?</h2>
                    <p>Browse our full catalog of {plants.length} unique plants.</p>
                    <button
                        className="dashboard__cta-btn"
                        onClick={() => navigate('/acc/catalog')}
                    >
                        Go to Catalog →
                    </button>
                </div>
            </section>
        </div>
    );
};
