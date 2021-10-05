import { Fragment } from "react"
import classes from './CategorySelector.module.scss'

interface CategorySelectorProps {}

const CategorySelector = (props: CategorySelectorProps) => {
return (
    <Fragment>
        <div id="CategorySelector" className={classes.CategorySelector}></div>
    </Fragment>
)
}

export default CategorySelector