import type { Film } from "./film.types";
import type { People } from "./people.types";

export interface StarshipBase {
    id: number;
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    image_url: string;
    image_source: string | null;
    short_description: string;
}

export interface Starship extends StarshipBase {
    pilots_count: number;
    films_count: number;
}

export interface StarshipById extends StarshipBase {
    long_description: string;
    pilots: Pick<People, "id" | "name">[];
    films: Pick<Film, "id" | "title">[];
}
