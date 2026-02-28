<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Tooltip from '$stylist/components/atoms/interaction/controls/tooltip/index.svelte';
	import { Icon as BaseIcon } from '$stylist/components/atoms';
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

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		initialCategory?: StylistCategoryId;
		class?: string;
		onSelectionChange?: (selection: StylistSelection) => void;
	};

	const categories: StylistCategory[] = [
		{
			id: 'architecture',
			label: 'РђСЂС…РёС‚РµРєС‚СѓСЂРЅС‹Рµ',
			description: 'Р Р°Р·РјРµСЂ, РєРѕРјРїРѕРЅРѕРІРєР° Рё РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРµРЅРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РєРѕРјРїРѕРЅРµРЅС‚Р°.',
			accent: '#2563eb',
			icon: Building2,
			options: [
				{
					id: 'size',
					label: 'Р Р°Р·РјРµСЂ',
					description: 'РљРѕРЅС‚СЂРѕР»РёСЂСѓРµС‚ РѕР±С‰РёР№ РјР°СЃС€С‚Р°Р± Рё РїР»РѕС‚РЅРѕСЃС‚СЊ Р±Р»РѕРєР°.',
					hint: 'РњРµРЅСЏР№С‚Рµ РІС‹СЃРѕС‚Сѓ, С€РёСЂРёРЅСѓ Рё РІРёР·СѓР°Р»СЊРЅС‹Р№ РІРµСЃ РєРѕРјРїРѕРЅРµРЅС‚Р°.',
					accent: '#2563eb',
					icon: Ruler
				},
				{
					id: 'layout',
					label: 'Р Р°СЃРїРѕР»РѕР¶РµРЅРёРµ',
					description: 'РћС‚РІРµС‡Р°РµС‚ Р·Р° РІС‹СЂР°РІРЅРёРІР°РЅРёРµ Рё РЅР°РїСЂР°РІР»РµРЅРёРµ РєРѕРјРїРѕРЅРѕРІРєРё.',
					hint: 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ РІС‹Р±РѕСЂР° СЃРµС‚РєРё, РІС‹СЂР°РІРЅРёРІР°РЅРёСЏ Рё РѕСЂРёРµРЅС‚Р°С†РёРё.',
					accent: '#1d4ed8',
					icon: Layout
				},
				{
					id: 'padding',
					label: 'РџР°РґРґРёРЅРіРё',
					description: 'РЈРїСЂР°РІР»СЏРµС‚ РІРЅСѓС‚СЂРµРЅРЅРёРјРё РѕС‚СЃС‚СѓРїР°РјРё Рё РґС‹С…Р°РЅРёРµРј РёРЅС‚РµСЂС„РµР№СЃР°.',
					hint: 'РџРѕРјРѕРіР°РµС‚ СЂРµРіСѓР»РёСЂРѕРІР°С‚СЊ РІРЅСѓС‚СЂРµРЅРЅРёР№ РІРѕР·РґСѓС… РІРЅСѓС‚СЂРё РєР°СЂС‚РѕС‡РєРё РёР»Рё РїР°РЅРµР»Рё.',
					accent: '#3b82f6',
					icon: Grid
				},
				{
					id: 'margin',
					label: 'РњР°СЂРґР¶РёРЅС‹',
					description: 'РќР°СЃС‚СЂР°РёРІР°РµС‚ РІРЅРµС€РЅРёР№ СЂРёС‚Рј РјРµР¶РґСѓ СЃРѕСЃРµРґРЅРёРјРё Р±Р»РѕРєР°РјРё.',
					hint: 'РСЃРїРѕР»СЊР·СѓР№С‚Рµ РґР»СЏ СЂР°Р·РґРµР»РµРЅРёСЏ СЃРµРєС†РёР№ Рё СЃС‚Р°Р±РёР»РёР·Р°С†РёРё РєРѕРјРїРѕР·РёС†РёРё.',
					accent: '#60a5fa',
					icon: Layers
				}
			]
		},
		{
			id: 'information',
			label: 'РРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Рµ',
			description: 'Р¦РІРµС‚, С‚РёРїРѕРіСЂР°С„РёРєР° Рё С‡РёС‚Р°РµРјРѕСЃС‚СЊ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ.',
			accent: '#d97706',
			icon: Info,
			options: [
				{
					id: 'color',
					label: 'Р¦РІРµС‚',
					description: 'РќР°СЃС‚СЂР°РёРІР°РµС‚ РїР°Р»РёС‚СЂСѓ, Р°РєС†РµРЅС‚С‹ Рё РєРѕРЅС‚СЂР°СЃС‚.',
					hint: 'Р’Р»РёСЏРµС‚ РЅР° С„РѕРЅС‹, Р°РєС†РµРЅС‚С‹, С‚РµРєСЃС‚ Рё СЌРјРѕС†РёРѕРЅР°Р»СЊРЅС‹Р№ С‚РѕРЅ РёРЅС‚РµСЂС„РµР№СЃР°.',
					accent: '#f59e0b',
					icon: Palette
				},
				{
					id: 'font-family',
					label: 'РЁСЂРёС„С‚',
					description: 'Р’С‹Р±РёСЂР°РµС‚ С…Р°СЂР°РєС‚РµСЂ С‚РёРїРѕРіСЂР°С„РёРєРё РґР»СЏ Р±Р»РѕРєР°.',
					hint: 'РџРµСЂРµРєР»СЋС‡Р°Р№С‚РµСЃСЊ РјРµР¶РґСѓ РЅРµР№С‚СЂР°Р»СЊРЅС‹Рј, СЂРµРґР°РєС†РёРѕРЅРЅС‹Рј Рё С‚РµС…РЅРёС‡РµСЃРєРёРј СЃС‚РёР»РµРј.',
					accent: '#f97316',
					icon: Type
				},
				{
					id: 'font-size',
					label: 'Р Р°Р·РјРµСЂ С€СЂРёС„С‚Р°',
					description: 'Р РµРіСѓР»РёСЂСѓРµС‚ РёРµСЂР°СЂС…РёСЋ С‚РµРєСЃС‚Р° Рё РїР»РѕС‚РЅРѕСЃС‚СЊ С‡С‚РµРЅРёСЏ.',
					hint: 'РџРѕР»РµР·РЅРѕ РґР»СЏ СѓСЃРёР»РµРЅРёСЏ Р·Р°РіРѕР»РѕРІРєРѕРІ Рё Р±Р°Р»Р°РЅСЃРёСЂРѕРІРєРё secondary-copy.',
					accent: '#fb923c',
					icon: Ruler
				},
				{
					id: 'contrast',
					label: 'РљРѕРЅС‚СЂР°СЃС‚',
					description: 'РџРѕРґС‚СЏРіРёРІР°РµС‚ С‡РёС‚Р°РµРјРѕСЃС‚СЊ Рё РІРёР·СѓР°Р»СЊРЅС‹Р№ С„РѕРєСѓСЃ.',
					hint: 'РСЃРїРѕР»СЊР·СѓР№С‚Рµ РґР»СЏ СЂРµР¶РёРјРѕРІ РїРѕРІС‹С€РµРЅРЅРѕР№ РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё Рё СЃРІРµС‚РѕС‚РµРЅРё.',
					accent: '#fdba74',
					icon: Layers
				}
			]
		},
		{
			id: 'interaction',
			label: 'РРЅС‚РµСЂР°РєС‚РёРІРЅС‹Рµ',
			description: 'РџРѕРІРµРґРµРЅРёРµ РЅР° РєР»РёРє, hover Рё РѕС‚РІРµС‚ РёРЅС‚РµСЂС„РµР№СЃР° РЅР° РґРµР№СЃС‚РІРёСЏ.',
			accent: '#059669',
			icon: Hand,
			options: [
				{
					id: 'press-action',
					label: 'РќР°Р¶Р°С‚РёРµ',
					description: 'РћРїСЂРµРґРµР»СЏРµС‚ РґРµР№СЃС‚РІРёРµ РїРѕ РєР»РёРєСѓ РёР»Рё tap-Р¶РµСЃС‚Сѓ.',
					hint: 'РћС‚РєСЂС‹С‚СЊ РјРѕРґР°Р»РєСѓ, РѕС‚РїСЂР°РІРёС‚СЊ СЃРѕР±С‹С‚РёРµ, Р·Р°РїСѓСЃС‚РёС‚СЊ СЃС†РµРЅР°СЂРёР№ РёР»Рё РїРµСЂРµРєР»СЋС‡РµРЅРёРµ.',
					accent: '#10b981',
					icon: Hand
				},
				{
					id: 'verdict',
					label: 'Р’РµСЂРґРёРєС‚',
					description: 'Р—Р°РґР°С‘С‚ СЃС‚Р°С‚СѓСЃ, РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ РёР»Рё СЂРµР°РєС†РёСЋ РїРѕСЃР»Рµ РґРµР№СЃС‚РІРёСЏ.',
					hint: 'РџРѕРґС…РѕРґРёС‚ РґР»СЏ success, warning, validation Рё async-result СЃРѕСЃС‚РѕСЏРЅРёР№.',
					accent: '#34d399',
					icon: CheckCircle
				},
				{
					id: 'tooltips',
					label: 'РўСѓР»С‚РёРїС‹',
					description: 'Р”РѕР±Р°РІР»СЏРµС‚ РїРѕСЏСЃРЅРµРЅРёСЏ РїСЂРё РЅР°РІРµРґРµРЅРёРё РєСѓСЂСЃРѕСЂР°.',
					hint: 'РџРѕРєР°Р·С‹РІР°Р№С‚Рµ РєСЂР°С‚РєСѓСЋ РїРѕРґСЃРєР°Р·РєСѓ РёР»Рё СЂР°СЃС€РёСЂРµРЅРЅРѕРµ РѕР±СЉСЏСЃРЅРµРЅРёРµ РїРѕ hover.',
					accent: '#6ee7b7',
					icon: Info
				},
				{
					id: 'hover-state',
					label: 'Hover-СЃРѕР±С‹С‚РёСЏ',
					description: 'РќР°СЃС‚СЂР°РёРІР°РµС‚ СЂРµР°РєС†РёРё РЅР° РЅР°РІРµРґРµРЅРёРµ Рё С„РѕРєСѓСЃ.',
					hint: 'РџРѕРґСЃРІРµС‚РєР°, Р·РІСѓРєРѕРІРѕР№ РѕС‚РєР»РёРє, РїРѕРєР°Р· Р±РµР№РґР¶РµР№ Рё РІС‚РѕСЂРёС‡РЅС‹С… РґРµР№СЃС‚РІРёР№.',
					accent: '#a7f3d0',
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
						<Tooltip content={option.hint} placement="top" variant="with-arrow">
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
		width: 4.5rem;
		height: 4.5rem;
		padding: 0;
		border: 0;
		border-radius: 999px;
		background:
			radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.2) 38%, transparent 42%),
			linear-gradient(145deg, #0f172a, #1e3a8a 40%, #0f766e 100%);
		box-shadow:
			0 16px 34px rgba(15, 23, 42, 0.28),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		cursor: pointer;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease;
	}

	.stylist-trigger:hover,
	.stylist-trigger.is-open {
		transform: translateY(-1px) scale(1.02);
		box-shadow:
			0 20px 40px rgba(15, 23, 42, 0.35),
			inset 0 1px 0 rgba(255, 255, 255, 0.24);
	}

	.stylist-trigger:focus-visible,
	.category-button:focus-visible,
	.option-button:focus-visible,
	.close-button:focus-visible {
		outline: 2px solid #2563eb;
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
		border: 1px solid rgba(255, 255, 255, 0.22);
	}

	.trigger-core {
		display: grid;
		place-items: center;
		inset: 0.7rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
	}

	.trigger-ping {
		inset: auto 0.46rem 0.46rem auto;
		width: 0.72rem;
		height: 0.72rem;
		background: #34d399;
		box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55);
		animation: pulse 2.2s infinite;
	}

	.trigger-icon,
	.close-icon,
	.mini-icon {
		width: 1.2rem;
		height: 1.2rem;
	}

	.trigger-icon {
		color: white;
	}

	.stylist-panel {
		position: absolute;
		top: calc(100% + 1rem);
		right: 0;
		z-index: 30;
		width: min(26rem, calc(100vw - 2rem));
		padding: 1rem;
		border: 1px solid rgba(148, 163, 184, 0.28);
		border-radius: 1.5rem;
		background:
			radial-gradient(circle at top right, rgba(59, 130, 246, 0.12), transparent 28%),
			linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(248, 250, 252, 0.96));
		box-shadow:
			0 28px 80px rgba(15, 23, 42, 0.22),
			0 10px 24px rgba(15, 23, 42, 0.12);
		backdrop-filter: blur(16px);
	}

	.panel-header,
	.section-heading {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.section-heading.compact {
		align-items: center;
	}

	.eyebrow {
		margin: 0 0 0.2rem;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #64748b;
	}

	h3,
	h4 {
		margin: 0;
		color: #0f172a;
	}

	h3 {
		font-size: 1.05rem;
	}

	h4 {
		font-size: 0.94rem;
	}

	.panel-copy {
		margin: 0.75rem 0 1rem;
		font-size: 0.92rem;
		line-height: 1.5;
		color: #475569;
	}

	.close-button {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		padding: 0;
		border: 1px solid rgba(148, 163, 184, 0.3);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.82);
		color: #0f172a;
		cursor: pointer;
	}

	.category-list,
	.option-grid,
	.summary-list {
		display: grid;
		gap: 0.75rem;
	}

	.category-button,
	.option-button {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.75rem;
		width: 100%;
		padding: 0.82rem 0.9rem;
		border: 1px solid rgba(148, 163, 184, 0.24);
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.72);
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
		border-color: rgba(37, 99, 235, 0.28);
		box-shadow: 0 10px 28px rgba(148, 163, 184, 0.16);
	}

	.category-button.selected,
	.option-button.selected {
		border-color: color-mix(in srgb, var(--category-accent, #2563eb) 58%, white);
		background: color-mix(in srgb, var(--category-accent, #2563eb) 10%, white);
	}

	.option-button.selected {
		border-color: color-mix(in srgb, var(--option-card-accent, #2563eb) 58%, white);
		background: color-mix(in srgb, var(--option-card-accent, #2563eb) 10%, white);
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
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.9rem;
		background: color-mix(in srgb, var(--category-accent, var(--option-card-accent, #2563eb)) 14%, white);
		color: var(--category-accent, var(--option-card-accent, #2563eb));
	}

	.category-text,
	.option-meta,
	.summary-copy {
		display: grid;
		gap: 0.22rem;
	}

	.category-text strong,
	.option-meta strong,
	.summary-copy strong {
		font-size: 0.92rem;
		color: #0f172a;
	}

	.category-text span,
	.option-meta span,
	.summary-copy span {
		font-size: 0.8rem;
		line-height: 1.45;
		color: #475569;
	}

	.option-section,
	.selection-summary {
		margin-top: 1rem;
		padding: 0.95rem;
		border-radius: 1.15rem;
		background: rgba(255, 255, 255, 0.5);
		border: 1px solid rgba(226, 232, 240, 0.88);
	}

	.section-pill {
		padding: 0.42rem 0.72rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--option-accent, #2563eb) 12%, white);
		color: #0f172a;
		font-size: 0.75rem;
		font-weight: 700;
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
		gap: 0.75rem;
		padding: 0.72rem 0.8rem;
		border-radius: 1rem;
		background: color-mix(in srgb, var(--summary-accent, #2563eb) 8%, white);
	}

	.summary-item .summary-icon {
		background: color-mix(in srgb, var(--summary-accent, #2563eb) 14%, white);
		color: var(--summary-accent, #2563eb);
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55);
		}

		70% {
			box-shadow: 0 0 0 10px rgba(52, 211, 153, 0);
		}

		100% {
			box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
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

