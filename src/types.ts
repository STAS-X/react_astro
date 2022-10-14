

export interface IProduct {
    id: number | null;
	title: string;
	body: string;
	description: string | null;
	href: string | null;
	image: string | null;
	category: string | null;
	rating: IRate | null;
}

export interface IRate {
	rate: number;
	count: number;
}