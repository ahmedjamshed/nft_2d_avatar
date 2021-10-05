import { Fragment } from "react"
import classes from './Avatar.module.scss'

interface AvatarProps {}

const Avatar = (props: AvatarProps) => {
return (
    <Fragment>
        <div id="avatar" className={classes.Avatar}></div>
    </Fragment>
)
}

export default Avatar