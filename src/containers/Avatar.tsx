import classNames from "classnames"
import { Fragment, useContext } from "react"
import TraitLayer from "../components/TraitLayer"
import AppContext from "../store/AppContext"
import { Trait } from "../types"
import classes from './Avatar.module.scss'

interface AvatarProps { }

const Avatar = (props: AvatarProps) => {
    const { avatarTraits } = useContext(AppContext)
    return (
        <Fragment>
            <div
                id="avatar"
                className={classNames(classes.Avatar)}
            >
                {avatarTraits.map((trait: Trait, index: number) =>
                   <TraitLayer key={index} trait={trait} />
                )}
            </div>
        </Fragment>
    )
}

export default Avatar