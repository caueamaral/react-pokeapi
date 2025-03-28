export interface PokemonInterface {
    name: string,
    types: {
        type: { name: string }
    }[]
}