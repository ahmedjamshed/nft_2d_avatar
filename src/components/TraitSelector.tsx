import classNames from 'classnames';
import { Trait } from '../types';
import classes from './TraitSelector.module.scss'

interface TraitSelectorProps {
  trait: Trait
}

const TraitSelector = (props: TraitSelectorProps) => {
  const { trait } = props
  const urlPrefix = process.env.PUBLIC_URL + "/assets/traits";
  return (
    <div
      id="TraitSelector"
      className={classNames(classes.TraitSelector, {
        [classes.selected]: true
      })}
      onClick={() => {
        // setSelectedCategory(category)
      }}>
      <img
        src={urlPrefix + "/" + trait.imageName + ".png"}
        alt={trait.imageName}
      />
    </div>

  );
}

export default TraitSelector