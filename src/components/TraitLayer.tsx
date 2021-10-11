// import { useSelector } from "react-redux"
// import { RootState } from "../store"
// import { categorySelectors } from "../store/CategorySlice"
import { Trait } from "../types"
import loadImage from "../utils"
import classes from './TraitLayer.module.scss'

interface TraitLayerProps {
    trait: Trait
    zIndex: number
}

const TraitLayer = (props: TraitLayerProps) => {
    const { trait, zIndex } = props
    // const { zIndex } = useSelector<RootState>(state =>
    //     categorySelectors.selectById(state, trait.category)) as (Category | { zIndex: 0 })
    return (
        <div
            className={classes.TraitLayer}
            style={{ zIndex }}
            data-trait={trait.imageName}
        >
            <img
                className={"traitLayer"}
                src={loadImage(trait.imageName)}
                alt={trait.imageName}
            />
        </div>
    )
}

export default TraitLayer