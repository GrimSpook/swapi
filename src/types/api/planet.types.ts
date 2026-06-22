import type { Film } from "./film.types";
import type { PeopleBase } from "./people.types";

export interface PlanetBase {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    created: string;
    edited: string;
    image_url: string;
    image_source: string | null;
    short_description: string;
}

export interface Planet extends PlanetBase {
    residents_count: number;
    films_count: number;
}

export interface PlanetById extends PlanetBase {
    long_description: string;
    residents: Omit<PeopleBase, "homeworld">[];
    films: Pick<Film, "id" | "title">[];
}
