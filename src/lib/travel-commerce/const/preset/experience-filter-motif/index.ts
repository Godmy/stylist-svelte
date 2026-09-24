// EXPERIENCE_CATEGORIES was replaced with a new 12-category taxonomy
// 2026-09-23 (per Dmitrii/заказчик) — no motif artwork exists yet for the
// new ids. Left empty rather than guessed: `ExperienceFilterChip` already
// falls back to a plain `tone`-colored dot when a category has no motif
// entry here, so this isn't a missing-feature regression, just undrawn.
export const EXPERIENCE_FILTER_MOTIFS: Record<
	string,
	{ id: string; d: string; fill?: string; stroke?: string; strokeWidth?: number }[]
> = {};
