import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTeamMemberCard as ITeamMemberCardProps } from '$stylist/management/interface/slot/team-member-card';

export interface TeamMemberCardStateProps extends StructIntersectAll<[ITeamMemberCardProps]> {
	class?: string;
}
