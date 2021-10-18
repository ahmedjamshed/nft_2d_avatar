import { Rating } from '@mui/material';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { avatarSelectors, upsertTraitToAvatar, removeTraitFromAvatar } from '../store/AvatarSlice';
import { Trait } from '../types';
import loadImage from '../utils';
import classes from './TraitSelector.module.scss'

interface TraitSelectorProps {
  trait: Trait
}

const TraitSelector = (props: TraitSelectorProps) => {
  const { trait } = props
  const [rating, setRating] = useState<number>(3.0);
  const appliedTrait = useSelector<RootState>(state => avatarSelectors.selectById(state, trait.category)) as (Trait | undefined);
  const isApplied = appliedTrait?.id === trait.id
  const dispatch = useDispatch()
  return (
    <div
      id="TraitSelector"
      className={classNames(classes.TraitSelector, {
        [classes.selected]: isApplied
      })}
      onClick={() => {
        isApplied ? dispatch(removeTraitFromAvatar(trait.category)) : dispatch(upsertTraitToAvatar(trait))
      }}>
      <div>
        <img
          src={loadImage(trait.imageName)}
          alt={trait.imageName}
        />
        <h5>{trait.imageName.replace('_', ' ')}</h5>
        <div className={classes.RatingContainer}>
          <Rating
            name="simple-controlled"
            size="small"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue || 0);
            }}
          />
          <p>{rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}

export default TraitSelector