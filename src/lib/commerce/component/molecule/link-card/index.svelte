<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	/**
	 * LinkCard - Р С”Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљ Р Т‘Р В»РЎРЏ Р С•РЎвЂљР С•Р В±РЎР‚Р В°Р В¶Р ВµР Р…Р С‘РЎРЏ Р С”Р В°РЎР‚РЎвЂљР С•РЎвЂЎР С”Р С‘-РЎРѓРЎРѓРЎвЂ№Р В»Р С”Р С‘ Р Т‘Р В»РЎРЏ Р В±РЎвЂ№РЎРѓРЎвЂљРЎР‚РЎвЂ№РЎвЂ¦ Р С—Р ВµРЎР‚Р ВµРЎвЂ¦Р С•Р Т‘Р С•Р Р†
	 *
	 * Р РЋР В»Р ВµР Т‘РЎС“Р ВµРЎвЂљ Р С—РЎР‚Р С‘Р Р…РЎвЂ Р С‘Р С—Р В°Р С SOLID:
	 *
	 * Single Responsibility: Р С›РЎвЂљР Р†Р ВµРЎвЂЎР В°Р ВµРЎвЂљ РЎвЂљР С•Р В»РЎРЉР С”Р С• Р В·Р В° Р С•РЎвЂљР С•Р В±РЎР‚Р В°Р В¶Р ВµР Р…Р С‘Р Вµ Р С”Р В°РЎР‚РЎвЂљР С•РЎвЂЎР С”Р С‘-РЎРѓРЎРѓРЎвЂ№Р В»Р С”Р С‘
	 * Open/Closed: Р вЂєР ВµР С–Р С”Р С• РЎР‚Р В°РЎРѓРЎв‚¬Р С‘РЎР‚РЎРЏР ВµРЎвЂљРЎРѓРЎРЏ РЎвЂЎР ВµРЎР‚Р ВµР В· Р С—РЎР‚Р С•Р С—РЎРѓРЎвЂ№, Р Р…Р Вµ РЎвЂљРЎР‚Р ВµР В±РЎС“Р ВµРЎвЂљ Р С‘Р В·Р СР ВµР Р…Р ВµР Р…Р С‘Р в„– Р Р† Р С”Р С•Р Т‘Р Вµ
	 * Liskov Substitution: Р СљР С•Р В¶Р ВµРЎвЂљ Р В±РЎвЂ№РЎвЂљРЎРЉ Р В·Р В°Р СР ВµР Р…Р ВµР Р… Р Т‘РЎР‚РЎС“Р С–Р С‘Р С Р С”Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљР С•Р С Р Р…Р В°Р Р†Р С‘Р С–Р В°РЎвЂ Р С‘Р С‘ Р С—РЎР‚Р С‘ Р Р…Р ВµР С•Р В±РЎвЂ¦Р С•Р Т‘Р С‘Р СР С•РЎРѓРЎвЂљР С‘
	 * Interface Segregation: Р ВР СР ВµР ВµРЎвЂљ Р СР С‘Р Р…Р С‘Р СР В°Р В»РЎРЉР Р…РЎвЂ№Р в„–, Р С”Р С•Р Р…Р С”РЎР‚Р ВµРЎвЂљР Р…РЎвЂ№Р в„– Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓ Р Т‘Р В»РЎРЏ Р Р…Р В°Р Р†Р С‘Р С–Р В°РЎвЂ Р С‘Р С‘
	 * Dependency Inversion: Р вЂ”Р В°Р Р†Р С‘РЎРѓР С‘РЎвЂљ Р С•РЎвЂљ Р В°Р В±РЎРѓРЎвЂљРЎР‚Р В°Р С”РЎвЂ Р С‘Р С‘ РЎРѓРЎвЂљР С‘Р В»Р ВµР в„– РЎвЂЎР ВµРЎР‚Р ВµР В· LinkCardStyleManager
	 *
	 * Р ВРЎРѓР С—Р С•Р В»РЎРЉР В·РЎС“Р ВµРЎвЂљ Р С—Р С•Р Т‘РЎвЂ¦Р С•Р Т‘ Atomic Design (Molecule) - Р С”Р С•Р СР В±Р С‘Р Р…Р С‘РЎР‚РЎС“Р ВµРЎвЂљ Р В±Р В°Р В·Р С•Р Р†РЎвЂ№Р Вµ РЎРЊР В»Р ВµР СР ВµР Р…РЎвЂљРЎвЂ№
	 * (Р С‘Р С”Р С•Р Р…Р С”Р В°, РЎвЂљР ВµР С”РЎРѓРЎвЂљ, РЎРѓРЎвЂљРЎР‚Р ВµР В»Р С”Р В°) Р Р† РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†Р Р…Р С•Р в„– Р С”Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљ Р Т‘Р В»РЎРЏ Р Р…Р В°Р Р†Р С‘Р С–Р В°РЎвЂ Р С‘Р С‘
	 */

	import type { RecipeLinkCard as RecipeLinkCard } from '$stylist/commerce/interface/recipe/link-card';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { ObjectManagerLinkCard } from '$stylist/commerce/class/object-manager/link-card';
	import createLinkCardState from './state.svelte';

	let {
		title,
		description,
		href,
		newTab = false,
		variant = 'default',
		icon,
		showArrow = true,
		class: className = ''
	}: RecipeLinkCard & HTMLAttributes<HTMLAnchorElement> = $props();

	// Р вЂ™РЎвЂ№РЎвЂЎР С‘РЎРѓР В»РЎРЏР ВµР СРЎвЂ№Р Вµ РЎРѓРЎвЂљР С‘Р В»Р С‘ РЎвЂЎР ВµРЎР‚Р ВµР В· derived Р Т‘Р В»РЎРЏ Р С‘Р В·Р С•Р В»РЎРЏРЎвЂ Р С‘Р С‘ Р В»Р С•Р С–Р С‘Р С”Р С‘ РЎРѓРЎвЂљР С‘Р В»Р С‘Р В·Р В°РЎвЂ Р С‘Р С‘
	const state = createLinkCardState({
		title,
		description,
		href,
		newTab,
		variant,
		icon,
		showArrow,
		class: className
	});

	// Р С›Р С—РЎР‚Р ВµР Т‘Р ВµР В»РЎРЏР ВµР С target Р Р† Р В·Р В°Р Р†Р С‘РЎРѓР С‘Р СР С•РЎРѓРЎвЂљР С‘ Р С•РЎвЂљ Р С—РЎР‚Р С•Р С—РЎРѓР В° newTab

	// Р С›Р С—РЎР‚Р ВµР Т‘Р ВµР В»РЎРЏР ВµР С rel Р Т‘Р В»РЎРЏ Р В±Р ВµР В·Р С•Р С—Р В°РЎРѓР Р…Р С•РЎРѓРЎвЂљР С‘ Р С—РЎР‚Р С‘ newTab
</script>

<a {href} target={state.target} rel={state.rel} class="link-card" aria-label={state.ariaLabel}>
	<div class="link-card__content">
		{#if icon}
			<div class="link-card__icon-container" aria-hidden="true">
				<span class="link-card__icon">{icon}</span>
			</div>
		{/if}

		<div class="link-card__text-container">
			<h3 class="link-card__title">{title}</h3>
			{#if description}
				<p class="link-card__description">{description}</p>
			{/if}
		</div>

		{#if showArrow}
			<Icon name={ObjectManagerLinkCard.arrowIcon} class="link-card__arrow" aria-hidden="true" />
		{/if}
	</div>
</a>

<style>
	.link-card {
		display: block;
		padding: 1.5rem;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
	}

	.link-card__content {
		display: flex;
		align-items: flex-start;
	}

	.link-card__icon-container {
		margin-right: 1rem;
		margin-top: 0.125rem;
		flex-shrink: 0;
	}

	.link-card__icon {
		height: 1.5rem;
		width: 1.5rem;
		color: var(--color-text-tertiary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}

	.link-card__text-container {
		min-width: 0;
		flex: 1 1 0%;
	}

	.link-card__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}

	.link-card__description {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	:global(.link-card__arrow) {
		margin-left: 0.5rem;
		flex-shrink: 0;
		color: var(--color-text-tertiary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
</style>
