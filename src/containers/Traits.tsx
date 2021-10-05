import { Fragment, useContext } from "react"
import AppContext from "../store/AppContext"
import classes from './Traits.module.scss'

interface TraitsProps { }

const Traits = (props: TraitsProps) => {
    
    const { selectedCategory} = useContext(AppContext)
    return (
        <Fragment>
            <div id="Traits" className={classes.Traits}>
                {selectedCategory.name}
            </div>
        </Fragment>
    )
}

export default Traits