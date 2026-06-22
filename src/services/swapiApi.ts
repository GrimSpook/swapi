import axios from "axios";

const req = axios.create({
    baseURL: "https://swapi.thehiveresistance.com/api",
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export type Categorys =
    | "films"
    | "people"
    | "planets"
    | "species"
    | "starships"
    | "vehicles";

export async function getCategory<T>(
    category: Categorys,
    page: number,
    searchQuery?: string | null
) {
    if (searchQuery === null) {
        const res = await req.get<T>(`/${category}?page=${page}`);
        return res.data;
    } else {
        const res = await req.get<T>(
            `/${category}?page=${page}&search=${searchQuery}`
        );
        return res.data;
    }
}

export async function getCategoryById<T>(category: Categorys, id: number) {
    const res = await req.get<T>(`/${category}/${id}`);
    return res.data;
}
