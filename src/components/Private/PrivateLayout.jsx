import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { PrivateSidebar } from './PrivateSidebar';
import '../../scss/components/private/_PrivateLayout.scss';

export const PrivateLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="private-layout">
            <PrivateSidebar collapsed={collapsed} onToggle={() => setCollapsed(prev => !prev)} />
            <main className={`private-layout__main ${collapsed ? 'private-layout__main--collapsed' : ''}`}>
                <Outlet />
            </main>
        </div>
    );
};
