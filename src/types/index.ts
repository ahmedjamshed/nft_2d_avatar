export interface Trait {
    id: string,
    imageName: string,
    parentType: string,
    layerOrder: number,
}

export interface Category {
    name: string,
    layerOrder: number,
    traits: Trait[]
}