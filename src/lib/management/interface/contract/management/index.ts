import type { ContractDashboardLayout } from '$stylist/management/interface/contract-dashboard-layout';
import type { SlotFeatureToggle as FeatureToggleProps } from '$stylist/management/interface/slot/feature-toggle';
import type { SlotPageHeader as IPageHeaderProps } from '$stylist/management/interface/slot/page-header';
import type { SlotProcessStep as IProcessStepProps } from '$stylist/management/interface/slot/process-step';
import type { SlotAchievement as IAchievement } from '$stylist/management/interface/slot/achievement';
import type { SlotTeamMemberCard as ITeamMemberCardProps } from '$stylist/management/interface/slot/team-member-card';
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
