import classNames from "classnames"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import TraitLayer from "../components/TraitLayer"
import { avatarSelectors } from "../store/AvatarSlice"
import { Trait } from "../types"
import classes from './Avatar.module.scss'

interface AvatarProps { }

const Avatar = (props: AvatarProps, ) => {
    const avatarTraits = useSelector(avatarSelectors.selectAll)
    const [selectedTraits, setSelectedTraits] = useState<Trait[]>([])

    useEffect(() => {
        setSelectedTraits(Array.from(avatarTraits.values()));
    }, [avatarTraits])

    return (
        <div
            id="avatar"
            className={classNames(classes.Avatar)}
        >
            {selectedTraits.map((trait: Trait, index: number) =>
                <TraitLayer key={trait.id} zIndex={index} trait={trait} />
            )}
        </div>
    )
}

export default Avatar;