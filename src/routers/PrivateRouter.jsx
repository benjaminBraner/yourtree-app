import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateLayout } from '../components/Private/PrivateLayout';
import { DashboardScreen } from '../components/Private/DashboardScreen';
import { CatalogScreen } from '../components/Private/CatalogScreen';
import { CartScreen } from '../components/Private/CartScreen';

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route element={<PrivateLayout />}>
                <Route path="dashboard" element={<DashboardScreen />} />
                <Route path="catalog"   element={<CatalogScreen />} />
                <Route path="cart"      element={<CartScreen />} />
                <Route path="*"         element={<Navigate to="dashboard" replace />} />
            </Route>
        </Routes>
    );
};
