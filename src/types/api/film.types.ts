import type { People } from "./people.types";
import type { Planet } from "./planet.types";
import type { Specie } from "./specie.types";
import type { Starship } from "./starship.types";
import type { Vehicle } from "./vehicle.types";

interface FilmBase {
    id: number;
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    image_url: string;
    image_source: string | null;
    short_description: string;
    created: string;
    edited: string;
}

export interface Film extends FilmBase {
    characters_count: number;
    planets_count: number;
    starships_count: number;
    vehicles_count: number;
    species_count: number;
}

export interface FilmById extends FilmBase {
    long_description: string;
    characters: Pick<People, "id" | "name">[];
    planets: Pick<Planet, "id" | "name">[];
    species: Pick<Specie, "id" | "name">[];
    starships: Pick<Starship, "id" | "name">[];
    vehicles: Pick<Vehicle, "id" | "name">[];
}
