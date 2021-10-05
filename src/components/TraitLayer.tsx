import { Trait } from "../types"
import classes from './TraitLayer.module.scss'

interface TraitLayerProps {
    trait: Trait
}

const TraitLayer = (props: TraitLayerProps) => {
    const { trait } = props 
    const urlPrefix = process.env.PUBLIC_URL + '/assets/traits'
    return (
        <div
            className={classes.TraitLayer}
            style={{ zIndex: trait.layerOrder }}
            data-trait={trait.imageName}
        >
            <img
                className={"traitLayer"}
                src={urlPrefix + "/" + trait.imageName + ".png"}
                alt={trait.imageName}
            />
        </div>
    )
}

export default TraitLayer