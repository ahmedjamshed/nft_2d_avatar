import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import classes from "./App.module.scss"
import Avatar from "./containers/Avatar"
import Categories from "./containers/Categories"
import Traits from "./containers/Traits"

import { toPng } from 'html-to-image'
import { FaSave, FaSyncAlt } from "react-icons/fa"
import { avatarSelectors, resetAvatar } from "./store/AvatarSlice";
import { Trait } from "./types";



function App() {
  const dispatch = useDispatch()
  const uniqueID = useSelector(avatarSelectors.selectAll).map((trait: Trait) => trait.id).join('_')

  const [ids, setIds] = useState<string[]>([])

  const onSaveClick = useCallback(() => {
    const avatar = document.querySelector("#avatar") as HTMLElement;
    const image = document.querySelector(".traitLayer") as HTMLElement;
    if (avatar === null) {
      return
    }
    if(!ids.includes(uniqueID)) {
      setIds([...ids, uniqueID])
    } else {
      alert('Already exists' + uniqueID)
      return
    }
    const imageConfig = {
      cacheBust: true, pixelRatio: 1, height: image.clientHeight, quality: 0.98,
      width: image.clientWidth, canvasWidth: 3000, canvasHeight: 3000,
    }
    toPng(avatar, imageConfig)
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'Avatar.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [uniqueID, ids])

  return (
    <div className={classes.App}>
      <div className={classes.SelectorContainer}>
        <Categories />
        <Traits />
        <div className={classes.ToolbarContainer}>
          <button type="button" onClick={() => {
            dispatch(resetAvatar())
          }}><FaSyncAlt size={28} /></button>
          <button type="button" onClick={onSaveClick}> <FaSave size={28} /> </button>
        </div>
      </div>
      <div className={classes.AvatarContainer}>
        <div className={classes.Avatar}><Avatar /></div>
      </div>
    </div>
  );
}

export default App;
