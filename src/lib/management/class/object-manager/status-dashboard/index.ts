import type { StatusItem } from '$stylist/management/type/struct/status-item';
import { STATUS_DASHBOARD_PRESENTATION } from '$stylist/management/const/record/status-dashboard-presentation';

export class ObjectManagerStatusDashboard {
	static resolveStatusPresentation(status: StatusItem['status']) {
		return STATUS_DASHBOARD_PRESENTATION[status] ?? STATUS_DASHBOARD_PRESENTATION.info;
	}
}

