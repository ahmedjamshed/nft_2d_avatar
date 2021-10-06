import { useSelector } from "react-redux"
import { RootState } from "../store"
import { categorySelectors } from "../store/CategorySlice"
import { Trait } from "../types"
import classes from './TraitLayer.module.scss'

interface TraitLayerProps {
    trait: Trait
}

const TraitLayer = (props: TraitLayerProps) => {
    const { trait } = props 
    const zIndex = useSelector<RootState>(state => categorySelectors.selectById(state, trait.category)) as number || 0
    const urlPrefix = process.env.PUBLIC_URL + '/assets/traits'
    return (
        <div
            className={classes.TraitLayer}
            style={{ zIndex }}
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