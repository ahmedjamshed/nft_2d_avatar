import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { avatarSelectors, upsertTraitToAvatar, removeTraitFromAvatar } from '../store/AvatarSlice';
import { Trait } from '../types';
import classes from './TraitFilter.module.scss'

interface TraitFilterProps {
}

const TraitFilter = (props: TraitFilterProps) => {
    const dispatch = useDispatch()
    return (
        <div
            id="TraitFilter"
            className={classNames(classes.TraitFilter)}
        >
            <button className={classNames(classes.button, { [classes.selected]: false })}
                onClick={() => { }} type="button">RARITY</button>
            <button className={classNames(classes.button, { [classes.selected]: true })}
                onClick={() => { }} type="button">NEWEST</button>
            <button className={classNames(classes.button, { [classes.selected]: false })}
                onClick={() => { }} type="button">FILTER</button>
        </div>
    );
}

export default TraitFilter