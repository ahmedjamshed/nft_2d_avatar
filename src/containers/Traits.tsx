import { Fragment, useContext, useEffect, useState } from "react"
import TraitSelector from "../components/TraitSelector"
import CategoriesData from "../configs/categoriesData"
import AppContext from "../store/AppContext"
import { Trait } from "../types"
import classes from './Traits.module.scss'

interface TraitsProps { }

const Traits = (props: TraitsProps) => {
    
    const { selectedCategory} = useContext(AppContext)
    const [traits, setTraits] = useState<Trait[]>([])

    useEffect(() => {
        const cat = CategoriesData.find((cat) => cat.name === selectedCategory.name)
        setTraits(cat?.traits || [])
    }, [selectedCategory])
    return (
        <Fragment>
            <div id="Traits" className={classes.Traits}>
                {
                    traits.map((trait) => <TraitSelector trait={trait}/>)
                }
            </div>
        </Fragment>
    )
}

export default Traits