import * as dateFns from "date-fns";

export function formatDate(date: string): string {
	return dateFns.format(new Date(date), "MMMM do, y");
}
