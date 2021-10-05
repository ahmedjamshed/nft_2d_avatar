import { Fragment } from "react"
import classes from './Traits.module.scss'

interface TraitsProps {}

const Traits = (props: TraitsProps) => {
return (
    <Fragment>
        <div id="Traits" className={classes.Traits}></div>
    </Fragment>
)
}

export default Traits