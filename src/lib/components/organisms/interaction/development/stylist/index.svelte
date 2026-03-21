<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
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

	type Props = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
		initialCategory?: StylistCategoryId;
		class?: string;
		onSelectionChange?: (selection: StylistSelection) => void;
	};

	const categories: StylistCategory[] = [
		{
			id: 'architecture',
			label: 'Р С’РЎР‚РЎвЂ¦Р С‘РЎвЂљР ВµР С”РЎвЂљРЎС“РЎР‚Р Р…РЎвЂ№Р Вµ',
			description: 'Р В Р В°Р В·Р СР ВµРЎР‚, Р С”Р С•Р СР С—Р С•Р Р…Р С•Р Р†Р С”Р В° Р С‘ Р С—РЎР‚Р С•РЎРѓРЎвЂљРЎР‚Р В°Р Р…РЎРѓРЎвЂљР Р†Р ВµР Р…Р Р…Р В°РЎРЏ РЎРѓРЎвЂљРЎР‚РЎС“Р С”РЎвЂљРЎС“РЎР‚Р В° Р С”Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљР В°.',
			accent: 'var(--color-primary-600)',
			icon: Building2,
			options: [
				{
					id: 'size',
					label: 'Р В Р В°Р В·Р СР ВµРЎР‚',
					description: 'Р С™Р С•Р Р…РЎвЂљРЎР‚Р С•Р В»Р С‘РЎР‚РЎС“Р ВµРЎвЂљ Р С•Р В±РЎвЂ°Р С‘Р в„– Р СР В°РЎРѓРЎв‚¬РЎвЂљР В°Р В± Р С‘ Р С—Р В»Р С•РЎвЂљР Р…Р С•РЎРѓРЎвЂљРЎРЉ Р В±Р В»Р С•Р С”Р В°.',
					hint: 'Р СљР ВµР Р…РЎРЏР в„–РЎвЂљР Вµ Р Р†РЎвЂ№РЎРѓР С•РЎвЂљРЎС“, РЎв‚¬Р С‘РЎР‚Р С‘Р Р…РЎС“ Р С‘ Р Р†Р С‘Р В·РЎС“Р В°Р В»РЎРЉР Р…РЎвЂ№Р в„– Р Р†Р ВµРЎРѓ Р С”Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљР В°.',
					accent: 'var(--color-primary-600)',
					icon: Ruler
				},
				{
					id: 'layout',
					label: 'Р В Р В°РЎРѓР С—Р С•Р В»Р С•Р В¶Р ВµР Р…Р С‘Р Вµ',
					description: 'Р С›РЎвЂљР Р†Р ВµРЎвЂЎР В°Р ВµРЎвЂљ Р В·Р В° Р Р†РЎвЂ№РЎР‚Р В°Р Р†Р Р…Р С‘Р Р†Р В°Р Р…Р С‘Р Вµ Р С‘ Р Р…Р В°Р С—РЎР‚Р В°Р Р†Р В»Р ВµР Р…Р С‘Р Вµ Р С”Р С•Р СР С—Р С•Р Р…Р С•Р Р†Р С”Р С‘.',
					hint: 'Р СџР С•Р Т‘РЎвЂ¦Р С•Р Т‘Р С‘РЎвЂљ Р Т‘Р В»РЎРЏ Р Р†РЎвЂ№Р В±Р С•РЎР‚Р В° РЎРѓР ВµРЎвЂљР С”Р С‘, Р Р†РЎвЂ№РЎР‚Р В°Р Р†Р Р…Р С‘Р Р†Р В°Р Р…Р С‘РЎРЏ Р С‘ Р С•РЎР‚Р С‘Р ВµР Р…РЎвЂљР В°РЎвЂ Р С‘Р С‘.',
					accent: 'var(--color-primary-700)',
					icon: Layout
				},
				{
					id: 'padding',
					label: 'Р СџР В°Р Т‘Р Т‘Р С‘Р Р…Р С–Р С‘',
					description: 'Р Р€Р С—РЎР‚Р В°Р Р†Р В»РЎРЏР ВµРЎвЂљ Р Р†Р Р…РЎС“РЎвЂљРЎР‚Р ВµР Р…Р Р…Р С‘Р СР С‘ Р С•РЎвЂљРЎРѓРЎвЂљРЎС“Р С—Р В°Р СР С‘ Р С‘ Р Т‘РЎвЂ№РЎвЂ¦Р В°Р Р…Р С‘Р ВµР С Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓР В°.',
					hint: 'Р СџР С•Р СР С•Р С–Р В°Р ВµРЎвЂљ РЎР‚Р ВµР С–РЎС“Р В»Р С‘РЎР‚Р С•Р Р†Р В°РЎвЂљРЎРЉ Р Р†Р Р…РЎС“РЎвЂљРЎР‚Р ВµР Р…Р Р…Р С‘Р в„– Р Р†Р С•Р В·Р Т‘РЎС“РЎвЂ¦ Р Р†Р Р…РЎС“РЎвЂљРЎР‚Р С‘ Р С”Р В°РЎР‚РЎвЂљР С•РЎвЂЎР С”Р С‘ Р С‘Р В»Р С‘ Р С—Р В°Р Р…Р ВµР В»Р С‘.',
					accent: 'var(--color-primary-500)',
					icon: Grid
				},
				{
					id: 'margin',
					label: 'Р СљР В°РЎР‚Р Т‘Р В¶Р С‘Р Р…РЎвЂ№',
					description: 'Р СњР В°РЎРѓРЎвЂљРЎР‚Р В°Р С‘Р Р†Р В°Р ВµРЎвЂљ Р Р†Р Р…Р ВµРЎв‚¬Р Р…Р С‘Р в„– РЎР‚Р С‘РЎвЂљР С Р СР ВµР В¶Р Т‘РЎС“ РЎРѓР С•РЎРѓР ВµР Т‘Р Р…Р С‘Р СР С‘ Р В±Р В»Р С•Р С”Р В°Р СР С‘.',
					hint: 'Р ВРЎРѓР С—Р С•Р В»РЎРЉР В·РЎС“Р в„–РЎвЂљР Вµ Р Т‘Р В»РЎРЏ РЎР‚Р В°Р В·Р Т‘Р ВµР В»Р ВµР Р…Р С‘РЎРЏ РЎРѓР ВµР С”РЎвЂ Р С‘Р в„– Р С‘ РЎРѓРЎвЂљР В°Р В±Р С‘Р В»Р С‘Р В·Р В°РЎвЂ Р С‘Р С‘ Р С”Р С•Р СР С—Р С•Р В·Р С‘РЎвЂ Р С‘Р С‘.',
					accent: 'var(--color-primary-400)',
					icon: Layers
				}
			]
		},
		{
			id: 'information',
			label: 'Р ВР Р…РЎвЂћР С•РЎР‚Р СР В°РЎвЂ Р С‘Р С•Р Р…Р Р…РЎвЂ№Р Вµ',
			description: 'Р В¦Р Р†Р ВµРЎвЂљ, РЎвЂљР С‘Р С—Р С•Р С–РЎР‚Р В°РЎвЂћР С‘Р С”Р В° Р С‘ РЎвЂЎР С‘РЎвЂљР В°Р ВµР СР С•РЎРѓРЎвЂљРЎРЉ РЎРѓР С•Р Т‘Р ВµРЎР‚Р В¶Р С‘Р СР С•Р С–Р С•.',
			accent: 'var(--color-warning-600)',
			icon: Info,
			options: [
				{
					id: 'color',
					label: 'Р В¦Р Р†Р ВµРЎвЂљ',
					description: 'Р СњР В°РЎРѓРЎвЂљРЎР‚Р В°Р С‘Р Р†Р В°Р ВµРЎвЂљ Р С—Р В°Р В»Р С‘РЎвЂљРЎР‚РЎС“, Р В°Р С”РЎвЂ Р ВµР Р…РЎвЂљРЎвЂ№ Р С‘ Р С”Р С•Р Р…РЎвЂљРЎР‚Р В°РЎРѓРЎвЂљ.',
					hint: 'Р вЂ™Р В»Р С‘РЎРЏР ВµРЎвЂљ Р Р…Р В° РЎвЂћР С•Р Р…РЎвЂ№, Р В°Р С”РЎвЂ Р ВµР Р…РЎвЂљРЎвЂ№, РЎвЂљР ВµР С”РЎРѓРЎвЂљ Р С‘ РЎРЊР СР С•РЎвЂ Р С‘Р С•Р Р…Р В°Р В»РЎРЉР Р…РЎвЂ№Р в„– РЎвЂљР С•Р Р… Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓР В°.',
					accent: 'var(--color-warning-500)',
					icon: Palette
				},
				{
					id: 'font-family',
					label: 'Р РЃРЎР‚Р С‘РЎвЂћРЎвЂљ',
					description: 'Р вЂ™РЎвЂ№Р В±Р С‘РЎР‚Р В°Р ВµРЎвЂљ РЎвЂ¦Р В°РЎР‚Р В°Р С”РЎвЂљР ВµРЎР‚ РЎвЂљР С‘Р С—Р С•Р С–РЎР‚Р В°РЎвЂћР С‘Р С”Р С‘ Р Т‘Р В»РЎРЏ Р В±Р В»Р С•Р С”Р В°.',
					hint: 'Р СџР ВµРЎР‚Р ВµР С”Р В»РЎР‹РЎвЂЎР В°Р в„–РЎвЂљР ВµРЎРѓРЎРЉ Р СР ВµР В¶Р Т‘РЎС“ Р Р…Р ВµР в„–РЎвЂљРЎР‚Р В°Р В»РЎРЉР Р…РЎвЂ№Р С, РЎР‚Р ВµР Т‘Р В°Р С”РЎвЂ Р С‘Р С•Р Р…Р Р…РЎвЂ№Р С Р С‘ РЎвЂљР ВµРЎвЂ¦Р Р…Р С‘РЎвЂЎР ВµРЎРѓР С”Р С‘Р С РЎРѓРЎвЂљР С‘Р В»Р ВµР С.',
					accent: 'var(--color-warning-500)',
					icon: Type
				},
				{
					id: 'font-size',
					label: 'Р В Р В°Р В·Р СР ВµРЎР‚ РЎв‚¬РЎР‚Р С‘РЎвЂћРЎвЂљР В°',
					description: 'Р В Р ВµР С–РЎС“Р В»Р С‘РЎР‚РЎС“Р ВµРЎвЂљ Р С‘Р ВµРЎР‚Р В°РЎР‚РЎвЂ¦Р С‘РЎР‹ РЎвЂљР ВµР С”РЎРѓРЎвЂљР В° Р С‘ Р С—Р В»Р С•РЎвЂљР Р…Р С•РЎРѓРЎвЂљРЎРЉ РЎвЂЎРЎвЂљР ВµР Р…Р С‘РЎРЏ.',
					hint: 'Р СџР С•Р В»Р ВµР В·Р Р…Р С• Р Т‘Р В»РЎРЏ РЎС“РЎРѓР С‘Р В»Р ВµР Р…Р С‘РЎРЏ Р В·Р В°Р С–Р С•Р В»Р С•Р Р†Р С”Р С•Р Р† Р С‘ Р В±Р В°Р В»Р В°Р Р…РЎРѓР С‘РЎР‚Р С•Р Р†Р С”Р С‘ secondary-copy.',
					accent: 'var(--color-warning-400)',
					icon: Ruler
				},
				{
					id: 'contrast',
					label: 'Р С™Р С•Р Р…РЎвЂљРЎР‚Р В°РЎРѓРЎвЂљ',
					description: 'Р СџР С•Р Т‘РЎвЂљРЎРЏР С–Р С‘Р Р†Р В°Р ВµРЎвЂљ РЎвЂЎР С‘РЎвЂљР В°Р ВµР СР С•РЎРѓРЎвЂљРЎРЉ Р С‘ Р Р†Р С‘Р В·РЎС“Р В°Р В»РЎРЉР Р…РЎвЂ№Р в„– РЎвЂћР С•Р С”РЎС“РЎРѓ.',
					hint: 'Р ВРЎРѓР С—Р С•Р В»РЎРЉР В·РЎС“Р в„–РЎвЂљР Вµ Р Т‘Р В»РЎРЏ РЎР‚Р ВµР В¶Р С‘Р СР С•Р Р† Р С—Р С•Р Р†РЎвЂ№РЎв‚¬Р ВµР Р…Р Р…Р С•Р в„– Р Т‘Р С•РЎРѓРЎвЂљРЎС“Р С—Р Р…Р С•РЎРѓРЎвЂљР С‘ Р С‘ РЎРѓР Р†Р ВµРЎвЂљР С•РЎвЂљР ВµР Р…Р С‘.',
					accent: 'var(--color-warning-300)',
					icon: Layers
				}
			]
		},
		{
			id: 'interaction',
			label: 'Р ВР Р…РЎвЂљР ВµРЎР‚Р В°Р С”РЎвЂљР С‘Р Р†Р Р…РЎвЂ№Р Вµ',
			description: 'Р СџР С•Р Р†Р ВµР Т‘Р ВµР Р…Р С‘Р Вµ Р Р…Р В° Р С”Р В»Р С‘Р С”, hover Р С‘ Р С•РЎвЂљР Р†Р ВµРЎвЂљ Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓР В° Р Р…Р В° Р Т‘Р ВµР в„–РЎРѓРЎвЂљР Р†Р С‘РЎРЏ.',
			accent: 'var(--color-success-600)',
			icon: Hand,
			options: [
				{
					id: 'press-action',
					label: 'Р СњР В°Р В¶Р В°РЎвЂљР С‘Р Вµ',
					description: 'Р С›Р С—РЎР‚Р ВµР Т‘Р ВµР В»РЎРЏР ВµРЎвЂљ Р Т‘Р ВµР в„–РЎРѓРЎвЂљР Р†Р С‘Р Вµ Р С—Р С• Р С”Р В»Р С‘Р С”РЎС“ Р С‘Р В»Р С‘ tap-Р В¶Р ВµРЎРѓРЎвЂљРЎС“.',
					hint: 'Р С›РЎвЂљР С”РЎР‚РЎвЂ№РЎвЂљРЎРЉ Р СР С•Р Т‘Р В°Р В»Р С”РЎС“, Р С•РЎвЂљР С—РЎР‚Р В°Р Р†Р С‘РЎвЂљРЎРЉ РЎРѓР С•Р В±РЎвЂ№РЎвЂљР С‘Р Вµ, Р В·Р В°Р С—РЎС“РЎРѓРЎвЂљР С‘РЎвЂљРЎРЉ РЎРѓРЎвЂ Р ВµР Р…Р В°РЎР‚Р С‘Р в„– Р С‘Р В»Р С‘ Р С—Р ВµРЎР‚Р ВµР С”Р В»РЎР‹РЎвЂЎР ВµР Р…Р С‘Р Вµ.',
					accent: 'var(--color-success-500)',
					icon: Hand
				},
				{
					id: 'verdict',
					label: 'Р вЂ™Р ВµРЎР‚Р Т‘Р С‘Р С”РЎвЂљ',
					description: 'Р вЂ”Р В°Р Т‘Р В°РЎвЂРЎвЂљ РЎРѓРЎвЂљР В°РЎвЂљРЎС“РЎРѓ, Р С—Р С•Р Т‘РЎвЂљР Р†Р ВµРЎР‚Р В¶Р Т‘Р ВµР Р…Р С‘Р Вµ Р С‘Р В»Р С‘ РЎР‚Р ВµР В°Р С”РЎвЂ Р С‘РЎР‹ Р С—Р С•РЎРѓР В»Р Вµ Р Т‘Р ВµР в„–РЎРѓРЎвЂљР Р†Р С‘РЎРЏ.',
					hint: 'Р СџР С•Р Т‘РЎвЂ¦Р С•Р Т‘Р С‘РЎвЂљ Р Т‘Р В»РЎРЏ success, warning, validation Р С‘ async-result РЎРѓР С•РЎРѓРЎвЂљР С•РЎРЏР Р…Р С‘Р в„–.',
					accent: 'var(--color-success-400)',
					icon: CheckCircle
				},
				{
					id: 'tooltips',
					label: 'Р СћРЎС“Р В»РЎвЂљР С‘Р С—РЎвЂ№',
					description: 'Р вЂќР С•Р В±Р В°Р Р†Р В»РЎРЏР ВµРЎвЂљ Р С—Р С•РЎРЏРЎРѓР Р…Р ВµР Р…Р С‘РЎРЏ Р С—РЎР‚Р С‘ Р Р…Р В°Р Р†Р ВµР Т‘Р ВµР Р…Р С‘Р С‘ Р С”РЎС“РЎР‚РЎРѓР С•РЎР‚Р В°.',
					hint: 'Р СџР С•Р С”Р В°Р В·РЎвЂ№Р Р†Р В°Р в„–РЎвЂљР Вµ Р С”РЎР‚Р В°РЎвЂљР С”РЎС“РЎР‹ Р С—Р С•Р Т‘РЎРѓР С”Р В°Р В·Р С”РЎС“ Р С‘Р В»Р С‘ РЎР‚Р В°РЎРѓРЎв‚¬Р С‘РЎР‚Р ВµР Р…Р Р…Р С•Р Вµ Р С•Р В±РЎР‰РЎРЏРЎРѓР Р…Р ВµР Р…Р С‘Р Вµ Р С—Р С• hover.',
					accent: 'var(--color-success-300)',
					icon: Info
				},
				{
					id: 'hover-state',
					label: 'Hover-РЎРѓР С•Р В±РЎвЂ№РЎвЂљР С‘РЎРЏ',
					description: 'Р СњР В°РЎРѓРЎвЂљРЎР‚Р В°Р С‘Р Р†Р В°Р ВµРЎвЂљ РЎР‚Р ВµР В°Р С”РЎвЂ Р С‘Р С‘ Р Р…Р В° Р Р…Р В°Р Р†Р ВµР Т‘Р ВµР Р…Р С‘Р Вµ Р С‘ РЎвЂћР С•Р С”РЎС“РЎРѓ.',
					hint: 'Р СџР С•Р Т‘РЎРѓР Р†Р ВµРЎвЂљР С”Р В°, Р В·Р Р†РЎС“Р С”Р С•Р Р†Р С•Р в„– Р С•РЎвЂљР С”Р В»Р С‘Р С”, Р С—Р С•Р С”Р В°Р В· Р В±Р ВµР в„–Р Т‘Р В¶Р ВµР в„– Р С‘ Р Р†РЎвЂљР С•РЎР‚Р С‘РЎвЂЎР Р…РЎвЂ№РЎвЂ¦ Р Т‘Р ВµР в„–РЎРѓРЎвЂљР Р†Р С‘Р в„–.',
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
		aria-label="Р С›РЎвЂљР С”РЎР‚РЎвЂ№РЎвЂљРЎРЉ Stylist"
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
					<h3>Р вЂњРЎР‚РЎС“Р С—Р С—Р В° Р Т‘Р С•Р С—Р С•Р В»Р Р…Р С‘РЎвЂљР ВµР В»РЎРЉР Р…РЎвЂ№РЎвЂ¦ Р Р…Р В°РЎРѓРЎвЂљРЎР‚Р С•Р ВµР С”</h3>
				</div>
				<button
					type="button"
					class="close-button"
					aria-label="Р вЂ”Р В°Р С”РЎР‚РЎвЂ№РЎвЂљРЎРЉ Stylist"
					onclick={closePanel}
				>
					<BaseIcon name={X} class="close-icon" />
				</button>
			</div>

			<p class="panel-copy">
				Р вЂ™РЎвЂ№Р В±Р ВµРЎР‚Р С‘РЎвЂљР Вµ Р С”Р В°РЎвЂљР ВµР С–Р С•РЎР‚Р С‘РЎР‹ РЎРѓР Р†Р С•Р в„–РЎРѓРЎвЂљР Р†, Р В·Р В°РЎвЂљР ВµР С РЎС“РЎвЂљР С•РЎвЂЎР Р…РЎРЏРЎР‹РЎвЂ°РЎС“РЎР‹ Р С‘Р С”Р С•Р Р…Р С”РЎС“. Р С™Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљ РЎвЂ¦РЎР‚Р В°Р Р…Р С‘РЎвЂљ Р Р†РЎвЂ№Р В±Р С•РЎР‚ Р С—Р С•
				Р С”Р В°Р В¶Р Т‘Р С•Р в„– Р С–РЎР‚РЎС“Р С—Р С—Р Вµ Р С•РЎвЂљР Т‘Р ВµР В»РЎРЉР Р…Р С•.
			</p>

			<div class="category-list" role="tablist" aria-label="Р С™Р В°РЎвЂљР ВµР С–Р С•РЎР‚Р С‘Р С‘ Stylist">
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
						<p class="eyebrow">Р С’Р С”РЎвЂљР С‘Р Р†Р Р…Р В°РЎРЏ Р С–РЎР‚РЎС“Р С—Р С—Р В°</p>
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
						<p class="eyebrow">Р СћР ВµР С”РЎС“РЎвЂ°Р С‘Р Вµ РЎР‚Р ВµРЎв‚¬Р ВµР Р…Р С‘РЎРЏ</p>
						<h4>Р РЋР Р…Р С‘Р СР С•Р С” Р Р†РЎвЂ№Р В±Р С•РЎР‚Р В°</h4>
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
		width: var(--size-custom45);
		height: var(--size-custom45);
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
		width: var(--size-custom072);
		height: var(--size-custom072);
		background: var(--color-success-400);
		box-shadow: var(--shadow-custom02);
		animation: pulse var(--duration-2200) infinite;
	}

	.trigger-icon,
	.close-icon,
	.mini-icon {
		width: var(--size-custom12);
		height: var(--size-custom12);
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




