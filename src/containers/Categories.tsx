import { Fragment } from "react"
import CategorySelector from "../components/CategorySelector"
import CategoriesData from "../configs/categoriesData"
import classes from './Categories.module.scss'

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
return (
    <Fragment>
        <div id="Categories" className={classes.Categories}>
            {
                CategoriesData.map((cat) => <CategorySelector category={cat}/>)
            }
        </div>
    </Fragment>
)
}

export default Categories