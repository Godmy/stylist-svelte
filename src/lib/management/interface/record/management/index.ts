import type { ContractDashboardLayout } from '$stylist/management/interface/contract-dashboard-layout';
import type { FeatureToggleProps } from '$stylist/management/interface/component/feature-toggle/other';
import type { IPageHeaderProps } from '$stylist/management/interface/component/page-header/other';
import type { IProcessStepProps } from '$stylist/management/interface/component/process-step/other';
import type { IAchievement, ITeamMemberCardProps } from '$stylist/management/interface/component/team-member-card/other';

export type { IAchievement };

export interface MapManagementContract {
	DashboardLayout: ContractDashboardLayout;
	FeatureToggle: FeatureToggleProps;
	PageHeader: IPageHeaderProps;
	ProcessStep: IProcessStepProps;
	TeamMemberCard: ITeamMemberCardProps;
}
