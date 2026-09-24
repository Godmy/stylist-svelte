<script lang="ts">
	import { tick } from 'svelte';
	import BookingBar from '$stylist/booking/component/molecule/booking-bar/index.svelte';
	import BookingAccordion from '$stylist/booking/component/organism/booking-accordion/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import { formatAdventureCountLabel } from '$stylist/booking/function/script/format-adventure-count-label';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		progress?: number;
		value?: BookingDraft;
		/** Feeds BookingAccordion's "Приключения" section on mobile (which excursions can be picked) — the desktop BookingBar has no adventures field at all, it lives only in BookingFilterPanel now. */
		excursions?: Excursion[];
		/** Показывать ли поле/секцию «Количество дней» (десктопный BookingBar и мобильный BookingAccordion). По умолчанию true; на странице тура (travel-product) длительность уже известна из самого тура и здесь скрывается. */
		showDuration?: boolean;
		onSearch?: (value: BookingDraft) => void;
	};

	const DEFAULT_VALUE: BookingDraft = {
		pickup: 'Галле',
		date: '',
		adults: 2,
		seniors: 0,
		childrenTeen: 0,
		children: 0,
		childrenUnder3: 0,
		adventures: [],
		durationDays: []
	};

	let {
		progress = 0,
		value = $bindable(DEFAULT_VALUE),
		excursions = SAMPLE_EXCURSIONS,
		showDuration = true,
		onSearch
	}: Props = $props();

	// Drives BookingBar's own compact layout on desktop — untouched by any of
	// the mobile logic below (hosts that always pass `progress={1}` keep the
	// exact same desktop look as before).
	const compact = $derived(progress > 0.45);

	// --- Mobile: accordion lives in normal page flow (NOT sticky — it should
	// scroll away like any other section), and a separate small trigger
	// button becomes sticky once the accordion has scrolled out of view. See
	// the two elements' own CSS: `.tc-booking-bridge__accordion-wrap` and
	// `.tc-booking-bridge__trigger-slot` are siblings, not nested — nesting
	// the sticky trigger inside a wrapper that also holds the (much taller)
	// accordion would cap how long the trigger can stay stuck to that
	// wrapper's own height, un-sticking it almost immediately once the
	// accordion's content collapses away. As direct siblings, the trigger's
	// sticky containment reaches all the way down through the rest of the
	// page instead (bounded by the real page layout, not by this component).
	let accordionWrapEl: HTMLDivElement | undefined = $state();
	let accordionVisible = $state(true);
	// A locally-owned copy of the draft for the mobile accordion specifically
	// (bound two-way into BookingAccordion) — kept separate from the
	// `value` prop so desktop's BookingBar usage above is untouched.
	let mobileValue = $state<BookingDraft>({ ...DEFAULT_VALUE });
	let pendingOpenSection: string | undefined = $state(undefined);
	let accordionRemountKey = $state(0);

	$effect(() => {
		mobileValue = { ...value };
	});

	$effect(() => {
		if (!accordionWrapEl) return;
		// `rootMargin` top shifted by -12px to match the trigger's own sticky
		// `top: 12px` — the trigger should appear right as the accordion
		// would otherwise start overlapping that offset, not only once it's
		// scrolled fully to the very edge of the viewport.
		const observer = new IntersectionObserver(
			([entry]) => {
				accordionVisible = entry.isIntersecting;
			},
			{ rootMargin: '-12px 0px 0px 0px', threshold: 0 }
		);
		observer.observe(accordionWrapEl);
		return () => observer.disconnect();
	});

	const showTrigger = $derived(!accordionVisible);
	const triggerLabel = $derived(formatAdventureCountLabel(mobileValue.adventures?.length ?? 0));

	// Tapping the collapsed trigger: jump straight to the "Приключения"
	// section (remounting the accordion with it pre-opened — Accordion's own
	// open panel isn't reactive to prop changes after mount, only at
	// creation, so `{#key}` forces a fresh instance) and scroll the page back
	// up so the visitor actually sees it, instead of just toggling
	// visibility somewhere off-screen above.
	async function handleTriggerClick() {
		pendingOpenSection = 'adventures';
		accordionRemountKey += 1;
		await tick();
		accordionWrapEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function handleMobileSearch(next: BookingDraft) {
		mobileValue = next;
		value = next;
		onSearch?.(next);
	}
</script>

<div class="tc-booking-bridge" data-compact={compact || undefined}>
	<BookingBar bind:value {compact} {showDuration} {onSearch} />
</div>

<div class="tc-booking-bridge__accordion-wrap" bind:this={accordionWrapEl}>
	{#key accordionRemountKey}
		<BookingAccordion
			bind:value={mobileValue}
			{excursions}
			{showDuration}
			fullWidth
			initialOpenSection={pendingOpenSection}
			onSearch={handleMobileSearch}
		/>
	{/key}
</div>

<div class="tc-booking-bridge__trigger-slot">
	{#if showTrigger}
		<button type="button" class="tc-booking-bridge__trigger" onclick={handleTriggerClick}>
			<span>{triggerLabel}</span>
			<BaseIcon name="chevron-up" size={18} />
		</button>
	{/if}
</div>

<style>
	.tc-booking-bridge {
		display: block;
		position: sticky;
		top: 12px;
		z-index: 20;
		padding: 0 0 18px;
		transition: transform 420ms ease;
	}
	.tc-booking-bridge[data-compact] {
		transform: translateY(0);
	}

	.tc-booking-bridge__accordion-wrap,
	.tc-booking-bridge__trigger-slot {
		display: none;
	}

	@media (max-width: 640px) {
		.tc-booking-bridge {
			display: none;
		}

		.tc-booking-bridge__accordion-wrap {
			display: block;
			padding: 0 0 14px;
		}

		.tc-booking-bridge__trigger-slot {
			display: block;
			position: sticky;
			top: 12px;
			z-index: 20;
		}
	}

	.tc-booking-bridge__trigger {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 100%;
		border: 0;
		border-radius: 999px;
		padding: 15px 20px;
		background: linear-gradient(135deg, #f28a00, #669c2f);
		color: #fff;
		font-size: 1.05rem;
		font-weight: 700;
		box-shadow: 0 10px 28px rgba(102, 156, 47, 0.35);
		cursor: pointer;
		transition:
			transform 160ms ease,
			box-shadow 160ms ease;
	}

	.tc-booking-bridge__trigger:active {
		transform: scale(0.98);
		box-shadow: 0 6px 18px rgba(102, 156, 47, 0.3);
	}

	@media (prefers-reduced-motion: reduce) {
		.tc-booking-bridge,
		.tc-booking-bridge__trigger {
			transition: none;
		}
	}
</style>
