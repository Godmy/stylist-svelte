import { TOKEN_ICON_PATHS } from '../../../const/map/token-icon-paths';
import { getTokenIconKind } from '../../../function/script/get-token-icon-kind';
import type { TokenControlBaseProps } from '../../../type/struct/token-control-base-props';

export function createTokenControlBaseState(props: TokenControlBaseProps) {
	const tokenCount = $derived.by(() => {
		const definition = props.definition;
		if (definition.controlKind === 'range') {
			const step = definition.step ?? 1;
			const min = definition.min ?? 0;
			const max = definition.max ?? min;
			if (step <= 0) return 0;
			return Math.floor((max - min) / step) + 1;
		}
		if (definition.controlKind === 'text') {
			return 1;
		}
		return definition.options?.length ?? 0;
	});

	const iconPath = $derived(TOKEN_ICON_PATHS[getTokenIconKind(props.definition.tokenName)]);
	const className = $derived(props.class ?? '');
	const layout = $derived(props.layout ?? 'stack');
	const cssClass = $derived(`token-control-base token-control-base--${layout} ${className}`.trim());
	const definition = $derived(props.definition);
	const description = $derived(props.definition.description);
	const children = $derived(props.children);
	const restProps = $derived.by(() => {
		const {
			definition: _definition,
			layout: _layout,
			class: _class,
			children: _children,
			...rest
		} = props as Record<string, unknown>;
		return rest as Record<string, unknown>;
	});

	return {
		get tokenCount() {
			return tokenCount;
		},
		get iconPath() {
			return iconPath;
		},
		get className() {
			return className;
		},
		get layout() {
			return layout;
		},
		get cssClass() {
			return cssClass;
		},
		get definition() {
			return definition;
		},
		get description() {
			return description;
		},
		get children() {
			return children;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createTokenControlBaseState;
