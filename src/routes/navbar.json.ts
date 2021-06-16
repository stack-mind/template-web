import frontMatter from "front-matter";
import fs from "fs-extra";
import path from "path";

const NAVBAR_FILE = "static/_settings/navbar.md";

export async function get(): Promise<{ status: number; body: any }> {
	// parse frontmatter
	const content = (await fs.readFile(NAVBAR_FILE)).toString();
	const data = {
		...frontMatter<any>(content).attributes,
		slug: path.parse(NAVBAR_FILE).name
	};

	return {
		status: 200,
		body: JSON.stringify(data)
	};
}
