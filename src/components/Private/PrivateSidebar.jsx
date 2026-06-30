import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/slices/thunks';
import { selectCartCount } from '../../store/slices/cartSlice';
import '../../scss/components/private/_PrivateSidebar.scss';
import { CartIcon } from '../../assets/icons/CartIcon';
import { CatalogIcon } from '../../assets/icons/CatalogIcon';
import { DashboardIcon } from '../../assets/icons/DashboardIcon';
import { PlantIcon } from '../../assets/icons/PlantIcon';
import { LogoutIcon } from '../../assets/icons/LogoutIcon';
import { ChevronRight } from '../../assets/icons/ChevronRight';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';

export const PrivateSidebar = ({ collapsed, onToggle }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userName = useSelector(state => state.auth.name);
    const cartCount = useSelector(selectCartCount);

    const handleLogout = () => {
        dispatch(startLogout());
        navigate('/home');
    };

    const navItems = [
        {
            to: '/acc/dashboard',
            icon: <DashboardIcon />,
            label: 'Dashboard',
        },
        {
            to: '/acc/catalog',
            icon: <PlantIcon />,
            label: 'Catalog',
        },
        {
            to: '/acc/cart',
            icon: <CartIcon />,
            label: 'Cart',
            badge: cartCount,
        },
    ];

    return (
        <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
            {/* Logo + Toggle */}
            <div className="sidebar__header">
                {!collapsed && (
                    <span className="sidebar__logo">
                        yoür<span>Tree</span>
                    </span>
                )}
                <button
                    className="sidebar__toggle"
                    onClick={onToggle}
                    aria-label="Toggle sidebar"
                >
                    {collapsed ? (
                        <ChevronRight />
                    ) : (
                        <ChevronLeft />
                    )}
                </button>
            </div>

            {/* User Info */}
            {!collapsed && (
                <div className="sidebar__user">
                    <div className="sidebar__avatar">
                        {userName?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                    <div className="sidebar__user-info">
                        <p className="sidebar__user-name">{userName || 'User'}</p>
                        <p className="sidebar__user-role">Member</p>
                    </div>
                </div>
            )}

            {/* Navigation */}
            <nav className="sidebar__nav">
                {navItems.map(item => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`
                        }
                    >
                        <span className="sidebar__nav-icon">{item.icon}</span>
                        {!collapsed && (
                            <span className="sidebar__nav-label">{item.label}</span>
                        )}
                        {item.badge > 0 && (
                            <span className="sidebar__badge">{item.badge}</span>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Logout */}
            <button className="sidebar__logout" onClick={handleLogout}>
                <span className="sidebar__nav-icon">
                   <LogoutIcon />
                </span>
                {!collapsed && <span className="sidebar__nav-label">Logout</span>}
            </button>
        </aside>
    );
};
