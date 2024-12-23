export interface PokemonCardInterface {
  name: string;
  onIntersection: (name: string, isIntersecting: boolean) => void;
  data?: any;
  onClick: () => void;
}

export type PokemonBaseInfoType = {
  name: string;
  url: string;
}

export type AbilityType = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export type CryType = {
  latest: string;
  legacy: string | null;
}

export type FormType = {
  name: string;
  url: string;
}

export type MoveType = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<{
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }>;
}

export type SpeciesType = {
  name: string;
  url: string;
}

export type SpriteSetType = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationI {
  'red-blue': SpritesType;
  yellow: SpritesType;
}

export interface GenerationII {
  crystal: SpritesType;
  gold: SpritesType;
  silver: SpritesType;
}

export interface GenerationIII {
  emerald: SpritesType;
  'firered-leafgreen': SpritesType;
  'ruby-sapphire': SpritesType;
}

export interface GenerationIV {
  'diamond-pearl': SpritesType;
  'heartgold-soulsilver': SpritesType;
  platinum: SpritesType;
}

export interface GenerationV {
  'black-white': SpritesType;
}

export interface GenerationVI {
  'omegaruby-alphasapphire': SpritesType;
  'x-y': SpritesType;
}

export interface GenerationVII {
  icons: SpritesType;
  'ultra-sun-ultra-moon': SpritesType;
}

export interface GenerationVIII {
  icons: SpritesType;
}

export type SpritesType = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: SpriteSetType;
    home: SpriteSetType;
    'official-artwork': SpriteSetType;
    showdown: SpriteSetType;
  };
  versions: {
    'generation-i': GenerationI;
    'generation-ii': GenerationII;
    'generation-iii': GenerationIII;
    'generation-iv': GenerationIV;
    'generation-v': GenerationV;
    'generation-vi': GenerationVI;
    'generation-vii': GenerationVII;
    'generation-viii': GenerationVIII;
  };
}

export type PokemonType = {
  pokemon: {
    abilities: AbilityType[];
    base_experience: number;
    cries: CryType;
    forms: FormType[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: MoveType[];
    name: string;
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: SpeciesType;
    sprites: SpritesType;
  }
  goToPrevPokemon: () => void;
  goToNextPokemon: () => void;
}
