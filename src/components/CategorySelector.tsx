import classNames from "classnames"
import { useContext } from "react"
import AppContext from "../store/AppContext"
import { Category } from "../types"
import classes from './CategorySelector.module.scss'

interface CategorySelectorProps {
    category: Category
}

const CategorySelector = (props: CategorySelectorProps) => {
    const { category } = props
    const { selectedCategory, setSelectedCategory } = useContext(AppContext)
    return (

        <div id="CategorySelector"
            className={classNames(classes.CategorySelector, {
                [classes.selected]: category.name === selectedCategory.name
            })}
            onClick={() => {
                setSelectedCategory(category)
            }}>
            {category.name}
        </div>

    )
}

export default CategorySelector