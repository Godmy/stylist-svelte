/** One themed entry tile on the landing page (Индивидуальные экскурсии, Блог, Отзывы, …) — a photo, a heading and where it leads. */
export interface LandingTopic {
	id: string;
	title: string;
	/** Short line under the title. */
	caption?: string;
	/** Background photo URL. */
	image: string;
	href: string;
}
