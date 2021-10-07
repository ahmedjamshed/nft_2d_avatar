import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import TraitSelector from "../components/TraitSelector"
import { RootState } from "../store"
import { traitSelectors } from "../store/TraitSlice"
import { Category, Trait } from "../types"
import classes from './Traits.module.scss'

interface TraitsProps { }

const Traits = (props: TraitsProps) => {

    const selectedCategory: Category = useSelector<RootState>(state => state.categories.selectedCategory) as Category
    const traits = useSelector(traitSelectors.selectAll)
    const [selectedTraits, setSelectedTraits] = useState<Trait[]>([])

    useEffect(() => {
        const filteredTraits = traits.filter((t) => t.category === selectedCategory?.name)
        setSelectedTraits(filteredTraits)
    }, [selectedCategory, traits])
    return (
        <div id="Traits" className={classes.Traits}>
            <div className={classes.TraitsGrid}>
                {
                    selectedTraits.map((trait) => <TraitSelector key={trait.id} trait={trait} />)
                }
            </div>
        </div>
    )
}

export default Traits