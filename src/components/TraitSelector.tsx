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
        className={classes.TraitSelector}
        data-trait={trait.imageName}
      >
        <img
          src={urlPrefix + "/" + trait.imageName + ".png"}
          alt={trait.imageName}
        />
        
      </div>
    );
}

export default TraitSelector