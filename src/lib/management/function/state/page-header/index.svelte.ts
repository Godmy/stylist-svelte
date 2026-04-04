import { PageHeaderStyleManager } from '$stylist/management/class/style-manager/page-header';
import type { IPageHeaderProps } from '$stylist/management/interface/component/page-header/other';

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export interface PageHeaderStateProps extends IPageHeaderProps {
	description?: string;
	breadcrumbs?: BreadcrumbItem[];
	actions?: any;
	class?: string;
}

export function createPageHeaderState(props: PageHeaderStateProps) {
	// Props with defaults
	const title = $derived(props.title);
	const description = $derived(props.description ?? '');
	const breadcrumbs = $derived(props.breadcrumbs ?? []);
	const actions = $derived(props.actions);

	// Computed classes
	const containerClasses = $derived(PageHeaderStyleManager.getContainerClasses(props.class));
	const breadcrumbsContainerClasses = $derived(
		PageHeaderStyleManager.getBreadcrumbsContainerClasses()
	);
	const breadcrumbsListClasses = $derived(PageHeaderStyleManager.getBreadcrumbsListClasses());
	const titleClasses = $derived(PageHeaderStyleManager.getTitleClasses());
	const descriptionClasses = $derived(PageHeaderStyleManager.getDescriptionClasses());
	const actionsContainerClasses = $derived(PageHeaderStyleManager.getActionsContainerClasses());
	const contentClasses = $derived(PageHeaderStyleManager.getContentClasses());

	// Methods
	function getBreadcrumbItemClasses(isLast: boolean): string {
		return PageHeaderStyleManager.getBreadcrumbItemClasses(isLast);
	}

	function getBreadcrumbSeparatorClasses(): string {
		return PageHeaderStyleManager.getBreadcrumbSeparatorClasses();
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			title: _title,
			description: _description,
			breadcrumbs: _breadcrumbs,
			actions: _actions,
			...rest
		} = props;
		return rest;
	});

	return {
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get breadcrumbs() {
			return breadcrumbs;
		},
		get actions() {
			return actions;
		},
		get containerClasses() {
			return containerClasses;
		},
		get breadcrumbsContainerClasses() {
			return breadcrumbsContainerClasses;
		},
		get breadcrumbsListClasses() {
			return breadcrumbsListClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get actionsContainerClasses() {
			return actionsContainerClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get restProps() {
			return restProps;
		},
		getBreadcrumbItemClasses,
		getBreadcrumbSeparatorClasses
	};
}

export default createPageHeaderState;
