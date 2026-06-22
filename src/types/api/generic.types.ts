export interface Homeworld {
    id: number;
    name: string;
}

export interface ApiLinkResponse {
    url: string | null;
    label: string;
    active: boolean;
}

export interface ApiResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: ApiLinkResponse[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface Name {
    id: number;
    name: string;
}

export interface Title {
    id: number;
    title: string;
}
