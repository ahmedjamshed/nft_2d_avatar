import { useSelector } from "react-redux"
import CategorySelector from "../components/CategorySelector"
import { categorySelectors } from "../store/CategorySlice"
import classes from './Categories.module.scss'

interface CategoriesProps { }

const Categories = (props: CategoriesProps) => {
    const categories = useSelector(categorySelectors.selectAll)
    return (
        <div id="Categories" className={classes.Categories}>
            {
                categories.map((cat) => <CategorySelector key={cat.name} category={cat} />)
            }
        </div>
    )
}

export default Categories