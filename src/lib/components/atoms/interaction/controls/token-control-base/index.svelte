<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { TokenControlDefinition } from '../token-controls/types';

	type TokenControlBaseProps = {
		definition: TokenControlDefinition;
		layout?: 'stack' | 'inline';
		class?: string;
		children?: Snippet;
	};

	let { definition, layout = 'stack', class: className = '', children }: TokenControlBaseProps = $props();

	const tokenCount = $derived.by(() => {
		if (definition.controlKind === 'range') {
			const step = definition.step ?? 1;
			if (step <= 0) return 0;
			return Math.floor((definition.max - definition.min) / step) + 1;
		}
		return definition.options.length;
	});

	type TokenIconKind =
		| 'layout'
		| 'shape'
		| 'size'
		| 'SPACING'
		| 'radius'
		| 'SHADOW'
		| 'border'
		| 'OPACITY'
		| 'blur'
		| 'container'
		| 'grid'
		| 'aspect'
		| 'layers'
		| 'palette'
		| 'gradient'
		| 'TYPOGRAPHY'
		| 'variant'
		| 'state'
		| 'graph'
		| 'motion'
		| 'default';

	const TOKEN_ICON_PATHS: Record<TokenIconKind, string> = {
		layout: 'M4 7h16M2.5 12h19M6 17h12',
		shape: 'M5 5h6v6H5zM16 5a3 3 0 1 1 0 6M8 19a4 4 0 0 1 8 0',
		size: 'M4 12h16M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3',
		SPACING: 'M3 12h3m12 0h3M8 8v8m8-8v8M11 12h2',
		radius: 'M5 19V9a4 4 0 0 1 4-4h10v10a4 4 0 0 1-4 4H5Z',
		SHADOW: 'M6 8h10a4 4 0 0 1 4 4v6H10a4 4 0 0 1-4-4V8Z',
		border: 'M4 4h16v16H4zM4 9h16M4 15h16M9 4v16M15 4v16',
		OPACITY: 'M12 3 4 12l8 9 8-9-8-9Z',
		blur: 'M4 12a8 8 0 0 1 16 0M7 12a5 5 0 0 1 10 0M10 12a2 2 0 0 1 4 0',
		container: 'M3 5h18M3 19h18M6 8v8M18 8v8',
		grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
		aspect: 'M4 8h16v8H4zM8 8V5m8 11v3',
		layers: 'M4 7h10M8 12h12M4 17h16',
		palette: 'M12 4a8 8 0 1 0 0 16h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h4',
		gradient: 'M5 19 19 5M5 5h14v14',
		TYPOGRAPHY: 'M4 7h16M8 7v10M16 7v10M10 17h4',
		variant: 'M12 5v14M5 12h14',
		state: 'M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8',
		graph: 'M4 18h16M7 14l3-3 3 2 4-5',
		motion: 'M4 12h7m0 0-2.5-2.5M11 12l-2.5 2.5M13 12h7m0 0-2.5-2.5M20 12l-2.5 2.5',
		default: 'M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z'
	};

	function getTokenIconKind(tokenName: string): TokenIconKind {
		switch (tokenName) {
			case 'BREAKPOINTS':
			case 'POSITIONS':
			case 'ORIENTATIONS':
			case 'ALIGNMENTS':
			case 'JUSTIFICATIONS':
			case 'TEXT_ALIGNMENTS':
				return 'layout';
			case 'SHAPES_COMPONENT':
			case 'SHAPES_GEOMETRIC':
			case 'SHAPES':
				return 'shape';
			case 'COMPONENT_SIZE':
				return 'size';
			case 'SPACING':
				return 'SPACING';
			case 'RADIUS':
				return 'radius';
			case 'SHADOWS':
				return 'SHADOW';
			case 'WIDTH':
			case 'STYLE':
				return 'border';
			case 'OPACITY':
			case 'OPACITY_ALT':
				return 'OPACITY';
			case 'BLUR':
				return 'blur';
			case 'WIDTH_CONTAINER':
			case 'PADDING':
				return 'container';
			case 'GRID_COLUMNS':
			case 'GRID_GAPS':
				return 'grid';
			case 'ASPECT_RATIO':
				return 'aspect';
			case 'Z_INDEX':
				return 'layers';
			case 'COLOR_PALETTES':
			case 'COLOR_PALETTES[shade]':
				return 'palette';
			case 'GRADIENTS':
			case 'DIRECTIONAL_GRADIENTS':
			case 'RADIAL_GRADIENTS':
				return 'gradient';
			case 'FONT_FAMILY':
			case 'FONT_SIZE':
			case 'FONT_WEIGHT':
			case 'LINE_HEIGHT':
				return 'TYPOGRAPHY';
			case 'LINES':
			case 'MARKERS':
				return 'graph';
			case 'TRANSITION':
			case 'TRANSITION_DURATION':
			case 'TRANSITION_EASING':
			case 'ANIMATION_DELAY':
				return 'motion';
			case 'APPEARANCE_STYLES':
			case 'STATE_VARIANTS':
			case 'SEMANTIC_VARIANTS':
			case 'FLOW_VARIANTS':
			case 'ALL_VARIANTS':
			case 'INPUT_VARIANTS':
			case 'CODE':
			case 'DENSITIES':
			case 'SKELETONS':
			case 'TABLE_CELLS':
				return 'variant';
			case 'PRESENCE_STATUSES':
			case 'MESSAGE_STATUSES':
			case 'ACTIVITY_STATUSES':
			case 'LOADING_STATUSES':
			case 'VERDICTS':
			case 'SEVERITY_LEVELS':
			case 'PROGRESS_TYPES':
			case 'BADGE_LABELS':
				return 'state';
			default:
				return 'default';
		}
	}
</script>

<article class={`token-control-base token-control-base--${layout} ${className}`.trim()}>
	<header class="token-control-base__header">
		<div class="token-control-base__name-row">
			<svg
				class="token-control-base__icon"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d={TOKEN_ICON_PATHS[getTokenIconKind(definition.tokenName)]} />
			</svg>
			<div class="token-control-base__name">{definition.tokenName}</div>
			<sup class="token-control-base__count">{tokenCount}</sup>
		</div>
		{#if definition.description}
			<p class="token-control-base__description">{definition.description}</p>
		{/if}
	</header>
	<div class="token-control-base__body">
		{@render children?.()}
	</div>
</article>

<style>
	.token-control-base {
		border: 1px solid var(--line);
		border-radius: 0.75rem;
		background: color-mix(in srgb, var(--surface) 93%, var(--bg) 7%);
		padding: 0.65rem;
		display: grid;
		gap: 0.45rem;
		justify-self: start;
		width: fit-content;
		max-width: 100%;
	}

	.token-control-base__header {
		display: grid;
		gap: 0.15rem;
	}

	.token-control-base__name-row {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
	}

	.token-control-base__icon {
		width: 0.86rem;
		height: 0.86rem;
		flex: 0 0 auto;
		color: var(--muted);
	}

	.token-control-base__name {
		font-size: 0.78rem;
		font-weight: 700;
		color: var(--text);
	}

	.token-control-base__count {
		font-size: 0.58rem;
		line-height: 1;
		font-weight: 700;
		color: var(--muted);
		border: 1px solid color-mix(in srgb, var(--line) 78%, transparent 22%);
		border-radius: 999px;
		padding: 0.02rem 0.25rem;
		transform: translateY(-0.22rem);
	}

	.token-control-base__description {
		margin: 0;
		font-size: 0.67rem;
		color: var(--muted);
	}

	.token-control-base__body {
		display: grid;
		gap: 0.45rem;
	}

	.token-control-base--inline {
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 0.55rem;
	}

	.token-control-base--inline .token-control-base__header {
		display: block;
	}

	.token-control-base--inline .token-control-base__body {
		display: block;
	}
</style>




