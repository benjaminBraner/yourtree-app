import { useState, useMemo } from 'react';
import { plants } from '../../data/plants';
import { CatalogCard } from './CatalogCard';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { CactusIcon } from '../../assets/icons/CactusIcon';
import '../../scss/components/private/_CatalogScreen.scss';

export const CatalogScreen = () => {
    const [search, setSearch] = useState('');
    const [careFilter, setCareFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('default');
    const CARE_LEVELS = ['All', 'Easy', 'Intermediate'];
    const SORT_OPTIONS = [
        { value: 'default', label: 'Default' },
        { value: 'price-asc', label: 'Price ↑' },
        { value: 'price-desc', label: 'Price ↓' },
        { value: 'name-asc', label: 'A → Z' },
    ];

    const filtered = useMemo(() => {
        let list = [...plants];

        // Filter by care level
        if (careFilter !== 'All') {
            list = list.filter(p => p.care_level === careFilter);
        }

        // Filter by search
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(p => p.name.toLowerCase().includes(q));
        }

        // Sort
        if (sortOrder === 'price-asc') {
            list.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        } else if (sortOrder === 'price-desc') {
            list.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        } else if (sortOrder === 'name-asc') {
            list.sort((a, b) => a.name.localeCompare(b.name));
        }

        return list;
    }, [search, careFilter, sortOrder]);

    return (
        <div className="catalog">
            {/* Header */}
            <header className="catalog__header">
                <div>
                    <h1 className="catalog__title">Plant Catalog</h1>
                    <p className="catalog__subtitle">{filtered.length} plants found</p>
                </div>
            </header>

            {/* Controls */}
            <div className="catalog__controls">
                {/* Search */}
                <div className="catalog__search-wrap">
                    <SearchIcon className="catalog__search-icon" />
                    <input
                        type="text"
                        className="catalog__search"
                        placeholder="Search plants…"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {search && (
                        <button className="catalog__search-clear" onClick={() => setSearch('')}>✕</button>
                    )}
                </div>

                {/* Care level filters */}
                <div className="catalog__filters">
                    {CARE_LEVELS.map(level => (
                        <button
                            key={level}
                            className={`catalog__filter-btn ${careFilter === level ? 'catalog__filter-btn--active' : ''}`}
                            onClick={() => setCareFilter(level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                {/* Sort */}
                <select
                    className="catalog__sort"
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                >
                    {SORT_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
                <div className="catalog__grid">
                    {filtered.map(plant => (
                        <CatalogCard key={plant.id} plant={plant} />
                    ))}
                </div>
            ) : (
                <div className="catalog__empty">
                    <CactusIcon />
                    <p>No plants match your search.</p>
                    <button onClick={() => { setSearch(''); setCareFilter('All'); }}>
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
};
