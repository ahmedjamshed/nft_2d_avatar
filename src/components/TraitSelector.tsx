import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { avatarSelectors, upsertTraitToAvatar, removeTraitFromAvatar } from '../store/AvatarSlice';
import { Trait } from '../types';
import classes from './TraitSelector.module.scss'

interface TraitSelectorProps {
  trait: Trait
}

const TraitSelector = (props: TraitSelectorProps) => {
  const { trait } = props
  const urlPrefix = process.env.PUBLIC_URL + "/assets/traits";
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
      <img
        src={urlPrefix + "/" + trait.imageName + ".png"}
        alt={trait.imageName}
      />
    </div>

  );
}

export default TraitSelector