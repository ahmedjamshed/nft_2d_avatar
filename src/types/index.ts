export interface Trait {
    id: string,
    imageName: string,
    category: string
}

export interface Category {
    name: string,
    zIndex: number,
    isRemovable: boolean
}

export interface UsedAvatar {
    id: string,
}