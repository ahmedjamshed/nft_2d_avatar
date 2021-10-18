import { useEffect, useState, useCallback, useLayoutEffect, useRef, LegacyRef } from "react"
import { useSelector } from "react-redux"
import { FaChevronDown } from "react-icons/fa"
import TraitSelector from "../components/TraitSelector"
import { RootState } from "../store"
import { traitSelectors } from "../store/TraitSlice"
import { Category, Trait } from "../types"
import classes from './Traits.module.scss'

interface TraitsProps { }

const Traits = (props: TraitsProps) => {
    const traitRef = useRef<HTMLDivElement>(null)
    const currentScrollHeight = useRef(0)
    const selectedCategory: Category = useSelector<RootState>(state => state.categories.selectedCategory) as Category
    const traits = useSelector(traitSelectors.selectAll)
    const [selectedTraits, setSelectedTraits] = useState<Trait[]>([])

    // const [scrollVisibility, setScrollVisibility] = useState(false)

    const onScroll = () => {
        currentScrollHeight.current = traitRef.current?.scrollTop || 0
    }

    const onScrollDown = useCallback(() => {
        traitRef.current?.scrollTo({ top: currentScrollHeight.current + 100 })
    }, [])

    useEffect(() => {
        const filteredTraits = traits.filter((t) => t.category === selectedCategory?.name)
        setSelectedTraits(filteredTraits)
    }, [selectedCategory, traits])
    return (
        <div ref={traitRef} id="Traits" className={classes.Traits} onScroll={onScroll}>
            <div className={classes.TraitsGrid}>
                {
                    selectedTraits.map((trait) => <TraitSelector key={trait.id} trait={trait} />)
                }
            </div>

            {<div className={classes.SrollBtnContainer}> <button type="button" className={classes.ScrollBtn} onClick={onScrollDown}>
                <FaChevronDown className={classes.Icon} />
            </button> </div>}

        </div>
    )
}

export default Traits