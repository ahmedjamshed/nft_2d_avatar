import { Fragment } from "react"
import classes from './TraitSelector.module.scss'

interface TraitSelectorProps {}

const TraitSelector = (props: TraitSelectorProps) => {
return (
    <Fragment>
        <div id="TraitSelector" className={classes.TraitSelector}></div>
    </Fragment>
)
}

export default TraitSelector