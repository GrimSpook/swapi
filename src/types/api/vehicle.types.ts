import type { Film } from "./film.types";
import type { People } from "./people.types";

export interface VehicleBase {
    id: number;
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    image_url: string;
    image_source: string | null;
    short_description: string;
}

export interface Vehicle extends VehicleBase {
    pilots_count: number;
    films_count: number;
}

export interface VehicleById extends VehicleBase {
    long_description: string;
    pilots: Pick<People, "id" | "name">[];
    films: Pick<Film, "id" | "title">[];
}
