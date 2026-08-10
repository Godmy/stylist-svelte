import type { PageHeaderStateProps } from '$stylist/management/interface/recipe/page-header';

export function createPageHeaderState(props: PageHeaderStateProps) {
	// Props with defaults
	const title = $derived(props.title);
	const description = $derived(props.description ?? '');
	const breadcrumbs = $derived(props.breadcrumbs ?? []);
	const actions = $derived(props.actions);

	// Computed classes

	// Methods

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
		get restProps() {
			return restProps;
		}
	};
}

export default createPageHeaderState;
