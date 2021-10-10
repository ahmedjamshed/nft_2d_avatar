const loadImage = (imageName: string) => {
    return process.env.PUBLIC_URL + '/assets/traits/' + imageName + '.png'
}
export default loadImage
