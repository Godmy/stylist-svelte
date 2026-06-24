<script lang="ts">
	/**
	 * LinkCard - РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РєР°СЂС‚РѕС‡РєРё-СЃСЃС‹Р»РєРё РґР»СЏ Р±С‹СЃС‚СЂС‹С… РїРµСЂРµС…РѕРґРѕРІ
	 *
	 * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
	 *
	 * Single Responsibility: РћС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ РєР°СЂС‚РѕС‡РєРё-СЃСЃС‹Р»РєРё
	 * Open/Closed: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµС‚СЃСЏ С‡РµСЂРµР· РїСЂРѕРїСЃС‹, РЅРµ С‚СЂРµР±СѓРµС‚ РёР·РјРµРЅРµРЅРёР№ РІ РєРѕРґРµ
	 * Liskov Substitution: РњРѕР¶РµС‚ Р±С‹С‚СЊ Р·Р°РјРµРЅРµРЅ РґСЂСѓРіРёРј РєРѕРјРїРѕРЅРµРЅС‚РѕРј РЅР°РІРёРіР°С†РёРё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё
	 * Interface Segregation: РРјРµРµС‚ РјРёРЅРёРјР°Р»СЊРЅС‹Р№, РєРѕРЅРєСЂРµС‚РЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РґР»СЏ РЅР°РІРёРіР°С†РёРё
	 * Dependency Inversion: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёРё СЃС‚РёР»РµР№ С‡РµСЂРµР· LinkCardStyleManager
	 *
	 * РСЃРїРѕР»СЊР·СѓРµС‚ РїРѕРґС…РѕРґ Atomic Design (Molecule) - РєРѕРјР±РёРЅРёСЂСѓРµС‚ Р±Р°Р·РѕРІС‹Рµ СЌР»РµРјРµРЅС‚С‹
	 * (РёРєРѕРЅРєР°, С‚РµРєСЃС‚, СЃС‚СЂРµР»РєР°) РІ СЃРѕСЃС‚Р°РІРЅРѕР№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РЅР°РІРёРіР°С†РёРё
	 */

	import type { RecipeLinkCard as RecipeLinkCard } from '$stylist/commerce/interface/recipe/link-card';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { ObjectManagerLinkCard } from '$stylist/commerce/class/object-manager/link-card';
	import createLinkCardState from '$stylist/commerce/function/state/link-card/index.svelte';

	let {
		title,
		description,
		href,
		newTab = false,
		variant = 'default',
		icon,
		showArrow = true,
		class: className = ''
	}: RecipeLinkCard = $props();

	// Р’С‹С‡РёСЃР»СЏРµРјС‹Рµ СЃС‚РёР»Рё С‡РµСЂРµР· derived РґР»СЏ РёР·РѕР»СЏС†РёРё Р»РѕРіРёРєРё СЃС‚РёР»РёР·Р°С†РёРё
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

	// РћРїСЂРµРґРµР»СЏРµРј target РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РїСЂРѕРїСЃР° newTab

	// РћРїСЂРµРґРµР»СЏРµРј rel РґР»СЏ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё РїСЂРё newTab
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

	.link-card__arrow {
		margin-left: 0.5rem;
		flex-shrink: 0;
		color: var(--color-text-tertiary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
</style>
