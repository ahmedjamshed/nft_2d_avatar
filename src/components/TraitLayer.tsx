import { Fragment } from "react"
import classes from './TraitLayer.module.scss'

interface TraitLayerProps {}

const TraitLayer = (props: TraitLayerProps) => {
return (
    <Fragment>
        <div id="TraitLayer" className={classes.TraitLayer}></div>
    </Fragment>
)
}

export default TraitLayer