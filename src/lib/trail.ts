export function trail(url: string) {
	return url.endsWith("/") ? url : url + "/";
}
