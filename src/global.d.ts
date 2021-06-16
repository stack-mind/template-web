/// <reference types="@sveltejs/kit" />

export type Link = {
	name: string;
	use_direct_url: boolean;
	page?: string;
	url?: string;
	sub_pages?: Link[];
};
