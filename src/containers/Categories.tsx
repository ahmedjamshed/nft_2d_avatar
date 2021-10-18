import { useSelector } from "react-redux"
import { FaChevronDown } from "react-icons/fa"
import CategorySelector from "../components/CategorySelector"
import { categorySelectors } from "../store/CategorySlice"
import classes from './Categories.module.scss'
import { useCallback, useRef } from "react"

interface CategoriesProps { }

const Categories = (props: CategoriesProps) => {
    const categoriesRef = useRef<HTMLDivElement>(null)
    const currentScrollHeight = useRef(0)
    const onScroll = () => {
        currentScrollHeight.current = categoriesRef.current?.scrollTop || 0
    }
    const onScrollDown = useCallback(() => {
        categoriesRef.current?.scrollTo({top: currentScrollHeight.current + 100})
    }, [])
    const categories = useSelector(categorySelectors.selectAll)
    return (
        <div className={classes.Categories} ref={categoriesRef} onScroll={onScroll}>
            <div id="Categories" className={classes.CategoriesList}>
                {
                    categories.map((cat) => <CategorySelector key={cat.name} category={cat} />)
                }
            </div>
            { <button type="button" className={classes.ScrollBtn} onClick={onScrollDown}>
                <FaChevronDown className={classes.Icon} />
            </button>}
        </div>
    )
}

export default Categories