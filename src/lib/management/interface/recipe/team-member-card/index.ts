import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTeamMemberCard } from '$stylist/management/interface/slot/team-member-card';
export interface RecipeTeamMemberCard extends ComputeIntersectAll<[SlotTeamMemberCard]> {
	class?: string;
}
