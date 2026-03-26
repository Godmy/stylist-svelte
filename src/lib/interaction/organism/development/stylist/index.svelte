<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
	import Tooltip from '$stylist/interaction/atom/controls/tooltip/index.svelte';
	import { Icon as BaseIcon } from '$stylist';
const Bell = 'bell';
const Building2 = 'building-2';
const CheckCircle = 'check-circle';
const Grid = 'grid';
const Hand = 'hand';
const Info = 'info';
const Layout = 'layout';
const Layers = 'layers';
const Palette = 'palette';
const Ruler = 'ruler';
const Settings = 'settings';
const Sparkles = 'sparkles';
const Type = 'type';
const X = 'x';


	type StylistCategoryId = 'architecture' | 'information' | 'interaction';

	type StylistOption = {
		id: string;
		label: string;
		description: string;
		hint: string;
		accent: string;
		icon: any;
	};

	type StylistCategory = {
		id: StylistCategoryId;
		label: string;
		description: string;
		accent: string;
		icon: any;
		options: StylistOption[];
	};

	export type StylistSelection = {
		category: StylistCategoryId;
		option: string;
		selections: Record<StylistCategoryId, string>;
	};

	type Props = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
		initialCategory?: StylistCategoryId;
		class?: string;
		onSelectionChange?: (selection: StylistSelection) => void;
	};

	const categories: StylistCategory[] = [
		{
			id: 'architecture',
			label: 'РђСЂС…РёС‚РµРєС‚СѓСЂРЅС‹Рµ',
			description: 'Р Р°Р·РјРµСЂ, РєРѕРјРїРѕРЅРѕРІРєР° Рё РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРµРЅРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РєРѕРјРїРѕРЅРµРЅС‚Р°.',
			accent: 'var(--color-primary-600)',
			icon: Building2,
			options: [
				{
					id: 'size',
					label: 'Р Р°Р·РјРµСЂ',
					description: 'РљРѕРЅС‚СЂРѕР»РёСЂСѓРµС‚ РѕР±С‰РёР№ РјР°СЃС€С‚Р°Р± Рё РїР»РѕС‚РЅРѕСЃС‚СЊ Р±Р»РѕРєР°.',
					hint: 'РњРµРЅСЏР№С‚Рµ РІС‹СЃРѕС‚Сѓ, С€РёСЂРёРЅСѓ Рё РІРёР·СѓР°Р»СЊРЅС‹Р№ РІРµСЃ РєРѕРјРїРѕРЅРµРЅС‚Р°.',
					accent: 'var(--color-primary-600)',
					icon: Ruler
				},
				{
					id: 'layout',
					label: 'Р Р°СЃРїРѕР»РѕР¶РµРЅРёРµ',
					description: 'РћС‚РІРµС‡Р°РµС‚ Р·Р° РІС‹СЂР°РІРЅРёРІР°РЅРёРµ Рё РЅР°РїСЂР°РІР»РµРЅРёРµ РєРѕРјРїРѕРЅРѕРІРєРё.',
					hint: 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ РІС‹Р±РѕСЂР° СЃРµС‚РєРё, РІС‹СЂР°РІРЅРёРІР°РЅРёСЏ Рё РѕСЂРёРµРЅС‚Р°С†РёРё.',
					accent: 'var(--color-primary-700)',
					icon: Layout
				},
				{
					id: 'padding',
					label: 'РџР°РґРґРёРЅРіРё',
					description: 'РЈРїСЂР°РІР»СЏРµС‚ РІРЅСѓС‚СЂРµРЅРЅРёРјРё РѕС‚СЃС‚СѓРїР°РјРё Рё РґС‹С…Р°РЅРёРµРј РёРЅС‚РµСЂС„РµР№СЃР°.',
					hint: 'РџРѕРјРѕРіР°РµС‚ СЂРµРіСѓР»РёСЂРѕРІР°С‚СЊ РІРЅСѓС‚СЂРµРЅРЅРёР№ РІРѕР·РґСѓС… РІРЅСѓС‚СЂРё РєР°СЂС‚РѕС‡РєРё РёР»Рё РїР°РЅРµР»Рё.',
					accent: 'var(--color-primary-500)',
					icon: Grid
				},
				{
					id: 'margin',
					label: 'РњР°СЂРґР¶РёРЅС‹',
					description: 'РќР°СЃС‚СЂР°РёРІР°РµС‚ РІРЅРµС€РЅРёР№ СЂРёС‚Рј РјРµР¶РґСѓ СЃРѕСЃРµРґРЅРёРјРё Р±Р»РѕРєР°РјРё.',
					hint: 'РСЃРїРѕР»СЊР·СѓР№С‚Рµ РґР»СЏ СЂР°Р·РґРµР»РµРЅРёСЏ СЃРµРєС†РёР№ Рё СЃС‚Р°Р±РёР»РёР·Р°С†РёРё РєРѕРјРїРѕР·РёС†РёРё.',
					accent: 'var(--color-primary-400)',
					icon: Layers
				}
			]
		},
		{
			id: 'information',
			label: 'РРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Рµ',
			description: 'Р¦РІРµС‚, С‚РёРїРѕРіСЂР°С„РёРєР° Рё С‡РёС‚Р°РµРјРѕСЃС‚СЊ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ.',
			accent: 'var(--color-warning-600)',
			icon: Info,
			options: [
				{
					id: 'color',
					label: 'Р¦РІРµС‚',
					description: 'РќР°СЃС‚СЂР°РёРІР°РµС‚ РїР°Р»РёС‚СЂСѓ, Р°РєС†РµРЅС‚С‹ Рё РєРѕРЅС‚СЂР°СЃС‚.',
					hint: 'Р’Р»РёСЏРµС‚ РЅР° С„РѕРЅС‹, Р°РєС†РµРЅС‚С‹, С‚РµРєСЃС‚ Рё СЌРјРѕС†РёРѕРЅР°Р»СЊРЅС‹Р№ С‚РѕРЅ РёРЅС‚РµСЂС„РµР№СЃР°.',
					accent: 'var(--color-warning-500)',
					icon: Palette
				},
				{
					id: 'font-family',
					label: 'РЁСЂРёС„С‚',
					description: 'Р’С‹Р±РёСЂР°РµС‚ С…Р°СЂР°РєС‚РµСЂ С‚РёРїРѕРіСЂР°С„РёРєРё РґР»СЏ Р±Р»РѕРєР°.',
					hint: 'РџРµСЂРµРєР»СЋС‡Р°Р№С‚РµСЃСЊ РјРµР¶РґСѓ РЅРµР№С‚СЂР°Р»СЊРЅС‹Рј, СЂРµРґР°РєС†РёРѕРЅРЅС‹Рј Рё С‚РµС…РЅРёС‡РµСЃРєРёРј СЃС‚РёР»РµРј.',
					accent: 'var(--color-warning-500)',
					icon: Type
				},
				{
					id: 'font-size',
					label: 'Р Р°Р·РјРµСЂ С€СЂРёС„С‚Р°',
					description: 'Р РµРіСѓР»РёСЂСѓРµС‚ РёРµСЂР°СЂС…РёСЋ С‚РµРєСЃС‚Р° Рё РїР»РѕС‚РЅРѕСЃС‚СЊ С‡С‚РµРЅРёСЏ.',
					hint: 'РџРѕР»РµР·РЅРѕ РґР»СЏ СѓСЃРёР»РµРЅРёСЏ Р·Р°РіРѕР»РѕРІРєРѕРІ Рё Р±Р°Р»Р°РЅСЃРёСЂРѕРІРєРё secondary-copy.',
					accent: 'var(--color-warning-400)',
					icon: Ruler
				},
				{
					id: 'contrast',
					label: 'РљРѕРЅС‚СЂР°СЃС‚',
					description: 'РџРѕРґС‚СЏРіРёРІР°РµС‚ С‡РёС‚Р°РµРјРѕСЃС‚СЊ Рё РІРёР·СѓР°Р»СЊРЅС‹Р№ С„РѕРєСѓСЃ.',
					hint: 'РСЃРїРѕР»СЊР·СѓР№С‚Рµ РґР»СЏ СЂРµР¶РёРјРѕРІ РїРѕРІС‹С€РµРЅРЅРѕР№ РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё Рё СЃРІРµС‚РѕС‚РµРЅРё.',
					accent: 'var(--color-warning-300)',
					icon: Layers
				}
			]
		},
		{
			id: 'interaction',
			label: 'РРЅС‚РµСЂР°РєС‚РёРІРЅС‹Рµ',
			description: 'РџРѕРІРµРґРµРЅРёРµ РЅР° РєР»РёРє, hover Рё РѕС‚РІРµС‚ РёРЅС‚РµСЂС„РµР№СЃР° РЅР° РґРµР№СЃС‚РІРёСЏ.',
			accent: 'var(--color-success-600)',
			icon: Hand,
			options: [
				{
					id: 'press-action',
					label: 'РќР°Р¶Р°С‚РёРµ',
					description: 'РћРїСЂРµРґРµР»СЏРµС‚ РґРµР№СЃС‚РІРёРµ РїРѕ РєР»РёРєСѓ РёР»Рё tap-Р¶РµСЃС‚Сѓ.',
					hint: 'РћС‚РєСЂС‹С‚СЊ РјРѕРґР°Р»РєСѓ, РѕС‚РїСЂР°РІРёС‚СЊ СЃРѕР±С‹С‚РёРµ, Р·Р°РїСѓСЃС‚РёС‚СЊ СЃС†РµРЅР°СЂРёР№ РёР»Рё РїРµСЂРµРєР»СЋС‡РµРЅРёРµ.',
					accent: 'var(--color-success-500)',
					icon: Hand
				},
				{
					id: 'verdict',
					label: 'Р’РµСЂРґРёРєС‚',
					description: 'Р—Р°РґР°С‘С‚ СЃС‚Р°С‚СѓСЃ, РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ РёР»Рё СЂРµР°РєС†РёСЋ РїРѕСЃР»Рµ РґРµР№СЃС‚РІРёСЏ.',
					hint: 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ success, warning, validation Рё async-result СЃРѕСЃС‚РѕСЏРЅРёР№.',
					accent: 'var(--color-success-400)',
					icon: CheckCircle
				},
				{
					id: 'tooltips',
					label: 'РўСѓР»С‚РёРїС‹',
					description: 'Р”РѕР±Р°РІР»СЏРµС‚ РїРѕСЏСЃРЅРµРЅРёСЏ РїСЂРё РЅР°РІРµРґРµРЅРёРё РєСѓСЂСЃРѕСЂР°.',
					hint: 'РџРѕРєР°Р·С‹РІР°Р№С‚Рµ РєСЂР°С‚РєСѓСЋ РїРѕРґСЃРєР°Р·РєСѓ РёР»Рё СЂР°СЃС€РёСЂРµРЅРЅРѕРµ РѕР±СЉСЏСЃРЅРµРЅРёРµ РїРѕ hover.',
					accent: 'var(--color-success-300)',
					icon: Info
				},
				{
					id: 'hover-state',
					label: 'Hover-СЃРѕР±С‹С‚РёСЏ',
					description: 'РќР°СЃС‚СЂР°РёРІР°РµС‚ СЂРµР°РєС†РёРё РЅР° РЅР°РІРµРґРµРЅРёРµ Рё С„РѕРєСѓСЃ.',
					hint: 'РџРѕРґСЃРІРµС‚РєР°, Р·РІСѓРєРѕРІРѕР№ РѕС‚РєР»РёРє, РїРѕРєР°Р· Р±РµР№РґР¶РµР№ Рё РІС‚РѕСЂРёС‡РЅС‹С… РґРµР№СЃС‚РІРёР№.',
					accent: 'var(--color-success-200)',
					icon: Bell
				}
			]
		}
	];

	let {
		initialCategory = 'architecture',
		class: className = '',
		onSelectionChange,
		...restProps
	}: Props = $props();

	let rootElement = $state<HTMLElement | null>(null);
	let isOpen = $state(false);
	let selectedCategoryId = $state<StylistCategoryId>(initialCategory);
	let selections = $state<Record<StylistCategoryId, string>>({
		architecture: 'size',
		information: 'color',
		interaction: 'tooltips'
	});

	const panelId = `stylist-panel-${Math.random().toString(36).slice(2, 9)}`;

	const activeCategory = $derived(
		categories.find((category) => category.id === selectedCategoryId) ?? categories[0]
	);

	const activeOption = $derived(
		activeCategory.options.find((option) => option.id === selections[selectedCategoryId]) ??
			activeCategory.options[0]
	);

	$effect(() => {
		onSelectionChange?.({
			category: selectedCategoryId,
			option: activeOption.id,
			selections: { ...selections }
		});
	});

	function toggleOpen() {
		isOpen = !isOpen;
	}

	function closePanel() {
		isOpen = false;
	}

	function handleCategorySelect(categoryId: StylistCategoryId) {
		selectedCategoryId = categoryId;
	}

	function handleOptionSelect(optionId: string) {
		selections = {
			...selections,
			[selectedCategoryId]: optionId
		};
	}

	function handleWindowClick(event: MouseEvent) {
		if (!isOpen || !rootElement) {
			return;
		}

		const path = event.composedPath();
		if (!path.includes(rootElement)) {
			closePanel();
		}
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closePanel();
		}
	}
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<div class={`stylist ${className}`} bind:this={rootElement} {...restProps}>
	<button
		type="button"
		class:is-open={isOpen}
		class="stylist-trigger"
		aria-label="РћС‚РєСЂС‹С‚СЊ Stylist"
		aria-haspopup="dialog"
		aria-expanded={isOpen}
		aria-controls={panelId}
		onclick={toggleOpen}
	>
		<span class="trigger-ring"></span>
		<span class="trigger-core">
			<BaseIcon name={Sparkles} class="trigger-icon" />
		</span>
		<span class="trigger-ping"></span>
	</button>

	{#if isOpen}
		<div class="stylist-panel" id={panelId} role="dialog" aria-label="Stylist popover">
			<div class="panel-header">
				<div>
					<p class="eyebrow">Stylist</p>
					<h3>Р“СЂСѓРїРїР° РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹С… РЅР°СЃС‚СЂРѕРµРє</h3>
				</div>
				<button
					type="button"
					class="close-button"
					aria-label="Р—Р°РєСЂС‹С‚СЊ Stylist"
					onclick={closePanel}
				>
					<BaseIcon name={X} class="close-icon" />
				</button>
			</div>

			<p class="panel-copy">
				Р’С‹Р±РµСЂРёС‚Рµ РєР°С‚РµРіРѕСЂРёСЋ СЃРІРѕР№СЃС‚РІ, Р·Р°С‚РµРј СѓС‚РѕС‡РЅСЏСЋС‰СѓСЋ РёРєРѕРЅРєСѓ. РљРѕРјРїРѕРЅРµРЅС‚ С…СЂР°РЅРёС‚ РІС‹Р±РѕСЂ РїРѕ
				РєР°Р¶РґРѕР№ РіСЂСѓРїРїРµ РѕС‚РґРµР»СЊРЅРѕ.
			</p>

			<div class="category-list" role="tablist" aria-label="РљР°С‚РµРіРѕСЂРёРё Stylist">
				{#each categories as category}
					<button
						type="button"
						class:selected={category.id === selectedCategoryId}
						class="category-button"
						style={`--category-accent: ${category.accent};`}
						role="tab"
						aria-selected={category.id === selectedCategoryId}
						onclick={() => handleCategorySelect(category.id)}
					>
						<span class="category-icon">
							<category.icon class="mini-icon" />
						</span>
						<span class="category-text">
							<strong>{category.label}</strong>
							<span>{category.description}</span>
						</span>
					</button>
				{/each}
			</div>

			<section class="option-section" style={`--option-accent: ${activeCategory.accent};`}>
				<div class="section-heading">
					<div>
						<p class="eyebrow">РђРєС‚РёРІРЅР°СЏ РіСЂСѓРїРїР°</p>
						<h4>{activeCategory.label}</h4>
					</div>
					<span class="section-pill">{activeOption.label}</span>
				</div>

				<div class="option-grid">
					{#each activeCategory.options as option}
						<Tooltip content={option.hint} placement="top" variant="arrow">
							{#snippet children()}
								<button
									type="button"
									class:selected={selections[selectedCategoryId] === option.id}
									class="option-button"
									style={`--option-card-accent: ${option.accent};`}
									onclick={() => handleOptionSelect(option.id)}
								>
									<span class="option-icon">
										<option.icon class="mini-icon" />
									</span>
									<span class="option-meta">
										<strong>{option.label}</strong>
										<span>{option.description}</span>
									</span>
								</button>
							{/snippet}
						</Tooltip>
					{/each}
				</div>
			</section>

			<section class="selection-summary">
				<div class="section-heading compact">
					<div>
						<p class="eyebrow">РўРµРєСѓС‰РёРµ СЂРµС€РµРЅРёСЏ</p>
						<h4>РЎРЅРёРјРѕРє РІС‹Р±РѕСЂР°</h4>
					</div>
				</div>

				<div class="summary-list">
					{#each categories as category}
						{@const selectedOption = category.options.find((option) => option.id === selections[category.id])}
						<div class="summary-item" style={`--summary-accent: ${category.accent};`}>
							<span class="summary-icon">
								<category.icon class="mini-icon" />
							</span>
							<div class="summary-copy">
								<strong>{category.label}</strong>
								<span>{selectedOption?.label}</span>
							</div>
						</div>
					{/each}
				</div>
			</section>
		</div>
	{/if}
</div>

<style>
	.stylist {
		position: relative;
		display: inline-flex;
	}

	.stylist-trigger {
		position: relative;
		display: grid;
		place-items: center;
		width: var(--size-4_5rem);
		height: var(--size-4_5rem);
		padding: 0;
		border: 0;
		border-radius: var(--border-radius-full);
		background: var(--gradient-custom192);
		box-shadow: var(--shadow-custom25);
		cursor: pointer;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease;
	}

	.stylist-trigger:hover,
	.stylist-trigger.is-open {
		transform: translateY(-1px) scale(1.02);
		box-shadow: var(--shadow-custom32);
	}

	.stylist-trigger:focus-visible,
	.category-button:focus-visible,
	.option-button:focus-visible,
	.close-button:focus-visible {
		outline: 2px solid var(--color-primary-600);
		outline-offset: 3px;
	}

	.trigger-ring,
	.trigger-ping,
	.trigger-core {
		position: absolute;
		inset: 0;
		border-radius: inherit;
	}

	.trigger-ring {
		inset: 0.34rem;
		border: 1px solid color-mix(in srgb, var(--color-background-primary) 22%, transparent);
	}

	.trigger-core {
		display: grid;
		place-items: center;
		inset: 0.7rem;
		background: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
		backdrop-filter: blur(10px);
	}

	.trigger-ping {
		inset: auto 0.46rem 0.46rem auto;
		width: var(--size-0_72rem);
		height: var(--size-0_72rem);
		background: var(--color-success-400);
		box-shadow: var(--shadow-custom02);
		animation: pulse var(--duration-2200) infinite;
	}

	.trigger-icon,
	.close-icon,
	.mini-icon {
		width: var(--size-1_2rem);
		height: var(--size-1_2rem);
	}

	.trigger-icon {
		color: white;
	}

	.stylist-panel {
		position: absolute;
		top: calc(100% + 1rem);
		right: 0;
		z-index: var(--z-index-layer30);
		width: min(26rem, calc(100vw - 2rem));
		padding: var(--spacing-4);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 28%, transparent);
		border-radius: var(--border-radius-xxxl);
		background: var(--gradient-custom232);
		box-shadow: var(--shadow-custom33);
		backdrop-filter: blur(16px);
	}

	.panel-header,
	.section-heading {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--spacing-4);
	}

	.section-heading.compact {
		align-items: center;
	}

	.eyebrow {
		margin: 0 0 var(--spacing-1);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-expanded);
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	h3,
	h4 {
		margin: 0;
		color: var(--color-text-primary);
	}

	h3 {
		font-size: var(--font-size-4);
	}

	h4 {
		font-size: var(--font-size-4);
	}

	.panel-copy {
		margin: var(--spacing-3) 0 var(--spacing-4);
		font-size: var(--font-size-4);
		line-height: var(--line-height-normal);
		color: var(--color-text-secondary);
	}

	.close-button {
		display: grid;
		place-items: center;
		width: var(--spacing-8);
		height: var(--spacing-8);
		padding: 0;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 30%, transparent);
		border-radius: var(--border-radius-full);
		background: color-mix(in srgb, var(--color-background-primary) 82%, transparent);
		color: var(--color-text-primary);
		cursor: pointer;
	}

	.category-list,
	.option-grid,
	.summary-list {
		display: grid;
		gap: var(--spacing-3);
	}

	.category-button,
	.option-button {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--spacing-3);
		width: 100%;
		padding: var(--spacing-3) var(--spacing-4);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 24%, transparent);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--color-background-primary) 72%, transparent);
		text-align: left;
		cursor: pointer;
		transition:
			transform 160ms ease,
			border-color 160ms ease,
			background 160ms ease,
			box-shadow 160ms ease;
	}

	.category-button:hover,
	.option-button:hover {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--color-primary-600) 28%, transparent);
		box-shadow: var(--shadow-custom22);
	}

	.category-button.selected,
	.option-button.selected {
		border-color: color-mix(in srgb, var(--category-accent, var(--color-primary-600)) 58%, white);
		background: color-mix(in srgb, var(--category-accent, var(--color-primary-600)) 10%, white);
	}

	.option-button.selected {
		border-color: color-mix(in srgb, var(--option-card-accent, var(--color-primary-600)) 58%, white);
		background: color-mix(in srgb, var(--option-card-accent, var(--color-primary-600)) 10%, white);
	}

	.category-icon,
	.option-icon,
	.summary-icon,
	.section-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.category-icon,
	.option-icon,
	.summary-icon {
		width: var(--spacing-10);
		height: var(--spacing-10);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--category-accent, var(--option-card-accent, var(--color-primary-600))) 14%, white);
		color: var(--category-accent, var(--option-card-accent, var(--color-primary-600)));
	}

	.category-text,
	.option-meta,
	.summary-copy {
		display: grid;
		gap: var(--spacing-1);
	}

	.category-text strong,
	.option-meta strong,
	.summary-copy strong {
		font-size: var(--font-size-4);
		color: var(--color-text-primary);
	}

	.category-text span,
	.option-meta span,
	.summary-copy span {
		font-size: var(--font-size-3);
		line-height: 1.45;
		color: var(--color-text-secondary);
	}

	.option-section,
	.selection-summary {
		margin-top: var(--spacing-4);
		padding: var(--spacing-4);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--color-background-primary) 50%, transparent);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
	}

	.section-pill {
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--border-radius-full);
		background: color-mix(in srgb, var(--option-accent, var(--color-primary-600)) 12%, white);
		color: var(--color-text-primary);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
	}

	.option-grid {
		margin-top: 0.9rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.summary-list {
		margin-top: 0.85rem;
	}

	.summary-item {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-3) var(--spacing-3);
		border-radius: var(--border-radius-xxl);
		background: color-mix(in srgb, var(--summary-accent, var(--color-primary-600)) 8%, white);
	}

	.summary-item .summary-icon {
		background: color-mix(in srgb, var(--summary-accent, var(--color-primary-600)) 14%, white);
		color: var(--summary-accent, var(--color-primary-600));
	}

	@keyframes pulse {
		0% {
			box-shadow: var(--shadow-custom02);
		}

		70% {
			box-shadow: var(--shadow-custom03);
		}

		100% {
			box-shadow: var(--shadow-custom01);
		}
	}

	@media (max-width: 640px) {
		.stylist-panel {
			right: auto;
			left: 50%;
			transform: translateX(-50%);
			width: min(24rem, calc(100vw - 1.5rem));
		}

		.option-grid {
			grid-template-columns: 1fr;
		}
	}
</style>


