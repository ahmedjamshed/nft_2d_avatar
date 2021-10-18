import classNames from 'classnames';
import { useState } from 'react';
import classes from './TraitFilter.module.scss'

interface TraitFilterProps {
}

const TraitFilter = (props: TraitFilterProps) => {
    const [selectedFilter, setSelectedFilter] = useState<number>(0)
    return (
        <div
            id="TraitFilter"
            className={classNames(classes.TraitFilter)}
        >
            <button className={classNames(classes.button, { [classes.selected]: selectedFilter === 0 })}
                onClick={() => setSelectedFilter(0)} type="button">RARITY</button>
            <button className={classNames(classes.button, { [classes.selected]: selectedFilter === 1 })}
                onClick={() => setSelectedFilter(1)} type="button">NEWEST</button>
            <button className={classNames(classes.button, { [classes.selected]: selectedFilter === 2 })}
                onClick={() => setSelectedFilter(2)} type="button">FILTER</button>
        </div>
    );
}

export default TraitFilter