import type { ContractDashboardLayout } from '$stylist/management/interface/contract/dashboard';
import type { SlotFeatureToggle } from '$stylist/management/interface/slot/feature-toggle';
import type { SlotPageHeader } from '$stylist/management/interface/slot/page-header';
import type { SlotProcessStep } from '$stylist/management/interface/slot/process-step';
import type { SlotTeamMemberCard } from '$stylist/management/interface/slot/team-member-card';

export interface ContractManagement {
	DashboardLayout: ContractDashboardLayout;
	FeatureToggle: SlotFeatureToggle;
	PageHeader: SlotPageHeader;
	ProcessStep: SlotProcessStep;
	TeamMemberCard: SlotTeamMemberCard;
}
