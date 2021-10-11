import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import classes from "./App.module.scss"
import Avatar from "./containers/Avatar"
import Categories from "./containers/Categories"
import Traits from "./containers/Traits"

// import { toPng } from 'html-to-image'
import mergeImages from 'merge-images';
import { FaSave, FaSyncAlt } from "react-icons/fa"
import { avatarSelectors, resetAvatar } from "./store/AvatarSlice";
import { Trait } from "./types";
// import { traitSelectors } from "./store/TraitSlice";
import loadImage from "./utils";
import { getID, insertID, usedAvatarsSelectors } from "./store/UsedAvatarsSlice";
import { RootState } from "./store";
import { unwrapResult } from "@reduxjs/toolkit";

const IMAGE_SIZE = 4500

function App() {
  const dispatch = useDispatch()
  const avatarTraits = useSelector(avatarSelectors.selectAll)
  const uniqueID = avatarTraits.map((trait: Trait) => trait.id).join('_');
  const isExistingID = useSelector<RootState>(state => usedAvatarsSelectors.selectById(state, uniqueID))

  // const [loading, setLoading] = useState(false)
  // const traits = useSelector(traitSelectors.selectAll)

  // Preload images 
  // useEffect(() => {
  //   async function loadAllImages() {
  //     const promises = traits.map((trait: Trait) => {
  //       return new Promise((res, err) => {
  //         const img = new Image()
  //         img.src = loadImage(trait.imageName)
  //         img.onload = res
  //       })
  //     })
  //     await Promise.allSettled(promises);
  //     setLoading(false)
  //   }
  //   loadAllImages()
  // }, [traits])

  const onSaveClick = useCallback(async () => {
    try {
      if (isExistingID) {
        alert('Already exists')
        return
      }

      const getIDAction: any = await dispatch(getID(uniqueID))
      const getIDRes = unwrapResult(getIDAction)
      if (getIDRes.id) {
        alert('Already exists')
        return
      }

      const imagesArray = avatarTraits.map((trait: Trait) => loadImage(trait.imageName))
      // const avatar = document.querySelector("#avatar") as HTMLElement;
      // const image = document.querySelector(".traitLayer") as HTMLElement;
      // if (avatar === null) {
      //   return
      // }

      // const imageConfig = {
      //   cacheBust: true, pixelRatio: 1, height: image.clientHeight, quality: 0.98,
      //   width: image.clientWidth, canvasWidth: 3000, canvasHeight: 3000,
      // }
      // const dataUrl = await toPng(avatar, imageConfig)
      const dataUrl = await mergeImages(imagesArray, {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE
      })
      const link = document.createElement('a')
      link.download = 'Avatar.png'
      link.href = dataUrl
      const insertIDAction: any = await dispatch(insertID(uniqueID))
      const insertIDRes = unwrapResult(insertIDAction)
      if (insertIDRes.id) {
        alert('Something went wrong')
        return
      }
      link.click()

    } catch (err: any) {
      alert(err.message)
    }

  }, [avatarTraits, isExistingID, uniqueID, dispatch])

  return (
    <div className={classes.App}>
      {
        // loading ?  <h1>Loading Traits...</h1> :
        <>
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
        </>
      }

    </div>
  );
}

export default App;
