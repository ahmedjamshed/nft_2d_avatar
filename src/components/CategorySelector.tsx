import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { selectCategory } from "../store/CategorySlice"
import { Category } from "../types"
import classes from './CategorySelector.module.scss'

interface CategorySelectorProps {
    category: Category
}

const CategorySelector = (props: CategorySelectorProps) => {
    const { category } = props
    const selectedCategory: Category = useSelector<RootState>(state => state.categories.selectedCategory) as Category
    const dispatch = useDispatch();
    return (

        <div id="CategorySelector"
            className={classNames(classes.CategorySelector, {
                [classes.selected]: category.name === selectedCategory?.name
            })}
            onClick={() => dispatch(selectCategory(category))}>
            {category.name}
        </div>

    )
}

export default CategorySelector