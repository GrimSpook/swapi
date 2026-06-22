import type { Film } from "./film.types";
import type { Homeworld } from "./generic.types";
import type { People } from "./people.types";

export interface SpecieBase {
    id: number;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    created: string;
    edited: string;
    image_url: string;
    image_source: string | null;
    short_description: string;
    homeworld: Homeworld;
}

export interface Specie extends SpecieBase {
    people_count: number;
    films_count: number;
}

export interface SpecieById extends SpecieBase {
    long_description: string;

    people: Pick<People, "id" | "name">[];
    films: Pick<Film, "id" | "title">[];
}
