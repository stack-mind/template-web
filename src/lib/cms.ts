import fm from "front-matter";
import MarkdownIt from "markdown-it";

export async function getFM<T>(fetch: Function, path: string): Promise<T & { body?: string }> {
	const res = await fetch(path);
	const text = await res.text();

	const frontMatter = fm<T>(text);

	let body;
	if (frontMatter.body) {
		const md = new MarkdownIt({
			html: true
		});
		body = md.render(frontMatter.body);
	}

	return {
		...frontMatter.attributes,
		body
	};
}
