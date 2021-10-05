import { Fragment } from "react"
import classes from './Categories.module.scss'

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
return (
    <Fragment>
        <div id="Categories" className={classes.Categories}></div>
    </Fragment>
)
}

export default Categories