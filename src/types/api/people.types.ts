import type { Film } from "./film.types";
import type { Homeworld } from "./generic.types";
import type { Specie } from "./specie.types";
import type { Starship } from "./starship.types";
import type { Vehicle } from "./vehicle.types";

export interface PeopleBase {
    id: number;
    name: string;
    birth_year: string;
    eye_color: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    wiki_link: string;
    image_url: string;
    image_source: string | null;
    affiliations: string[];
    short_description: string;
    force_alignment: string;
    lightsaber_color: string;
    created: string;
    edited: string;
    homeworld: Homeworld;
}

export interface People extends PeopleBase {
    films_count: number;
    species_count: number;
    starships_count: number;
    vehicles_count: number;
}

export interface PeopleById extends PeopleBase {
    long_description: string;
    films: Pick<Film, "id" | "title">[];
    species: Pick<Specie, "id" | "name">[];
    starships: Pick<Starship, "id" | "name">[];
    vehicles: Pick<Vehicle, "id" | "name">[];
}
