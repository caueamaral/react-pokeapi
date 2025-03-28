export interface PokemonInterface {
    name: string,
    types: {
        type: { name: string }
    }[],
    sprites: {
        other: { dream_world: { front_default: string } }
    }
}