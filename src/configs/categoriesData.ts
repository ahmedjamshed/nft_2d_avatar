import { Category } from "../types";
import layerOrder from "./layerOrder";

const CategoriesData: Readonly<Category[]> = Object.freeze([
    {
        name: 'Base',
        layerOrder: layerOrder.BASE,
        traits: [
            {
                id: 'base_red_blue',
                imageName: 'base_red_blue',
                parentType: 'Base',
                layerOrder: layerOrder.BASE,
            }
        ]
    },
    {
        name: 'Skin',
        layerOrder: layerOrder.SKIN,
        traits: [
            {
                id: 'main_skin',
                imageName: 'main_skin',
                parentType: 'Skin',
                layerOrder: layerOrder.SKIN,
            },
        ]
    },
    {
        name: 'Hair',
        layerOrder: layerOrder.HAIR,
        traits: [
            {
                id: 'king_hair',
                imageName: 'king_hair',
                parentType: 'king',
                layerOrder: layerOrder.HAIR,
            },
            {
                id: 'knight_hair',
                imageName: 'knight_hair',
                parentType: 'knight',
                layerOrder: layerOrder.HAIR,
            },
            {
                id: 'punk_hair',
                imageName: 'punk_hair',
                parentType: 'punk',
                layerOrder: layerOrder.HAIR,
            }
        ]
    },
    {
        name: 'Helmet',
        layerOrder: layerOrder.HELMET,
        traits: [
            {
                id: 'king_crown',
                imageName: 'king_crown',
                parentType: 'king',
                layerOrder: layerOrder.HELMET,
            },
            {
                id: 'knight_helmet',
                imageName: 'knight_helmet',
                parentType: 'knight',
                layerOrder: layerOrder.HELMET,
            }
        ]
    },
]);

export default CategoriesData