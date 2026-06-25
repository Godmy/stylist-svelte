<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import type { PortfolioData } from '$stylist/portfolio/class/object-manager/portfolio';
	import Portfolio from './index.svelte';

	const controls: InterfaceControllerSettings[] = [];

	const demoData: PortfolioData = {
		entries: [
			{
				id: 1,
				name: 'РђРЎРЈ РЎРЎРњРџ-103 (Android)',
				new: { current: 9 },
				plan: { current: 14 },
				estimate: { current: null },
				inProgress: { current: 1 },
				test: { current: null },
				acceptance: { current: null },
				deferred: { current: null },
				open: { current: 24 },
				closed: { current: 77 },
				percent: 23
			},
			{
				id: 2,
				name: 'РђРЎРЈ РЎРЎРњРџ-103 (PHP v.1)',
				new: { current: 9 },
				plan: { current: 9 },
				estimate: { current: 2 },
				inProgress: { current: 4, removed: 1 },
				test: { current: 7, added: 1 },
				acceptance: { current: 3 },
				deferred: { current: null },
				open: { current: 34 },
				closed: { current: 456 },
				percent: 16
			},
			{
				id: 3,
				name: 'РђРЎРЈ РЎРЎРњРџ-103 (PHP v.2)',
				new: { current: 34 },
				plan: { current: 20, removed: 1 },
				estimate: { current: 20 },
				inProgress: { current: 8, removed: 9 },
				test: { current: 0, removed: 1 },
				acceptance: { current: 14, added: 6 },
				deferred: { current: 7 },
				open: { current: 103, removed: 5 },
				closed: { current: 80, added: 11 },
				percent: 12
			},
			{
				id: 4,
				name: 'РђРЎРЈ РЎРЎРњРџ-103 (РћС‚С‡С‘С‚РЅРѕСЃС‚СЊ)',
				new: { current: 51, added: 3 },
				plan: { current: 2, added: 2 },
				estimate: { current: null },
				inProgress: { current: 10 },
				test: { current: null },
				acceptance: { current: null },
				deferred: { current: 1 },
				open: { current: 64, added: 5 },
				closed: { current: 65 },
				percent: 11
			},
			{
				id: 5,
				name: 'РђРЎРЈ РЎРЎРњРџ-103 (РўРђРЎРЈ)',
				new: { current: null },
				plan: { current: null },
				estimate: { current: null },
				inProgress: { current: null },
				test: { current: null },
				acceptance: { current: 1 },
				deferred: { current: 12 },
				open: { current: 13 },
				closed: { current: 36 },
				percent: 32
			},
			{
				id: 6,
				name: 'Р’РРЎ РњРРќРўР РђРќРЎ РњРћ',
				new: { current: 13 },
				plan: { current: 12 },
				estimate: { current: null },
				inProgress: { current: 7 },
				test: { current: 1 },
				acceptance: { current: null },
				deferred: { current: null },
				open: { current: 33 },
				closed: { current: 11 },
				percent: 41
			},
			{
				id: 7,
				name: 'Р’РѕР»С‹РЅСЃРєР°СЏ Р±РѕР»СЊРЅРёС†Р° (РљР‘ в„–1)',
				new: { current: 5 },
				plan: { current: 7 },
				estimate: { current: 3 },
				inProgress: { current: 2, removed: 1 },
				test: { current: null },
				acceptance: { current: 3 },
				deferred: { current: 7 },
				open: { current: 27, removed: 1 },
				closed: { current: 23 },
				percent: 6
			},
			{
				id: 8,
				name: 'Р’РѕР»С‹РЅСЃРєР°СЏ Р±РѕР»СЊРЅРёС†Р° (РЎР±РѕСЂ С‚СЂРµР±РѕРІР°РЅРёР№)',
				new: { current: 1 },
				plan: { current: null },
				estimate: { current: null },
				inProgress: { current: null },
				test: { current: null },
				acceptance: { current: null },
				deferred: { current: null },
				open: { current: 1 },
				closed: { current: null },
				percent: null
			},
			{
				id: 9,
				name: 'Р”РµС‚СЃРєРёР№ РјРµРґРёС†РёРЅСЃРєРёР№ С†РµРЅС‚СЂ РЈР”Рџ',
				new: { current: null },
				plan: { current: 4 },
				estimate: { current: 4 },
				inProgress: { current: null },
				test: { current: null },
				acceptance: { current: null },
				deferred: { current: null },
				open: { current: 8 },
				closed: { current: null },
				percent: 10
			},
			{
				id: 10,
				name: 'РЎРџРћ РЎРњРўРЎ РњР§РЎ Р РѕСЃСЃРёРё (РЎР’РћР‘)',
				new: { current: 48, removed: 1 },
				plan: { current: 4 },
				estimate: { current: 28, removed: 8 },
				inProgress: { current: 8 },
				test: { current: 14, removed: 24 },
				acceptance: { current: 5, removed: 5 },
				deferred: { current: 33, removed: 2 },
				open: { current: 140, removed: 40 },
				closed: { current: 267 },
				percent: 19
			},
			{
				id: 11,
				name: 'РЎРџРћ РЎРЈРњРќ Р“РЈ РњР’Р” Рі. РњРѕСЃРєРІР°',
				new: { current: null },
				plan: { current: null },
				estimate: { current: null },
				inProgress: { current: null },
				test: { current: null },
				acceptance: { current: null },
				deferred: { current: 12 },
				open: { current: 12 },
				closed: { current: 96 },
				percent: 30
			},
			{
				id: 12,
				name: 'РЎРџРћ РЎРЈРњРќ РњР’Р” Р РѕСЃСЃРёРё',
				new: { current: 31, added: 1 },
				plan: { current: 8 },
				estimate: { current: 28, added: 8 },
				inProgress: { current: null },
				test: { current: 27, added: 24 },
				acceptance: { current: 25, added: 5 },
				deferred: { current: 45, added: 2 },
				open: { current: 164, added: 40 },
				closed: { current: 203 },
				percent: 45
			},
			{
				id: 13,
				name: 'РЎРџРћ РЎРЈРЎРРЎ-Р§РћРћ',
				new: { current: null },
				plan: { current: null },
				estimate: { current: null },
				inProgress: { current: null },
				test: { current: null },
				acceptance: { current: null },
				deferred: { current: 8 },
				open: { current: 8 },
				closed: { current: 48 },
				percent: null
			},
			{
				id: 14,
				name: 'РЎРЈРњРџ РњРѕСЃР­РЅРµСЂРіРѕСЃР±С‹С‚',
				new: { current: 71, removed: 7 },
				plan: { current: 8 },
				estimate: { current: 19, removed: 5 },
				inProgress: { current: 10, added: 2 },
				test: { current: 9, added: 9 },
				acceptance: { current: 9 },
				deferred: { current: null },
				open: { current: 126, removed: 1 },
				closed: { current: 2 },
				percent: 32
			},
			{
				id: 15,
				name: 'РўРµР»РµРјР°С‚РёС‡РµСЃРєР°СЏ РџР»Р°С‚С„РѕСЂРјР° Delphi',
				new: { current: null },
				plan: { current: null },
				estimate: { current: null },
				inProgress: { current: 2 },
				test: { current: 2 },
				acceptance: { current: 4 },
				deferred: { current: 12 },
				open: { current: 20 },
				closed: { current: 34 },
				percent: 49
			},
			{
				id: 16,
				name: 'РўРµР»РµРјР°С‚РёС‡РµСЃРєР°СЏ РџР»Р°С‚С„РѕСЂРјР° РЎ++',
				new: { current: 19 },
				plan: { current: null },
				estimate: { current: null },
				inProgress: { current: 1 },
				test: { current: 2 },
				acceptance: { current: null },
				deferred: { current: null },
				open: { current: 22 },
				closed: { current: 5 },
				percent: 66
			},
			{
				id: 17,
				name: 'РЈСЃС‚Р°РЅРѕРІРєР° Р’РќРЎРћ',
				new: { current: 3 },
				plan: { current: null },
				estimate: { current: null },
				inProgress: { current: null },
				test: { current: null },
				acceptance: { current: null },
				deferred: { current: null },
				open: { current: 3 },
				closed: { current: 7 },
				percent: null
			}
		],
		summary: {
			new: { current: 294, removed: 4 },
			plan: { current: 88, added: 1 },
			estimate: { current: 104, removed: 5 },
			inProgress: { current: 53, removed: 9 },
			test: { current: 62, added: 9 },
			acceptance: { current: 64, added: 6 },
			deferred: { current: 137 },
			open: { current: 802, removed: 2 },
			closed: { current: 1410, added: 11 }
		}
	};
</script>

<Story
	id="management-portfolio"
	title="Portfolio"
	component={Portfolio}
	category="Organisms/Management"
	description="РўР°Р±Р»РёС†Р° РїРѕСЂС‚С„РµР»СЏ РїСЂРѕРµРєС‚РѕРІ СЃ СЂР°Р·Р±РёРІРєРѕР№ Р·Р°РґР°С‡ РїРѕ СЃС‚Р°С‚СѓСЃР°Рј Рё РґРµР»СЊС‚РѕР№ РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ РїСЂРµРґС‹РґСѓС‰РµРіРѕ РґРЅСЏ."
	tags={['portfolio', 'projects', 'table', 'management']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="story-wrap">
			<div class="story-header">
				<p class="story-eyebrow">РЈРїСЂР°РІР»РµРЅРёРµ РїСЂРѕРµРєС‚Р°РјРё</p>
				<h3 class="story-title">РџРѕСЂС‚С„РµР»СЊ РїСЂРѕРµРєС‚РѕРІ</h3>
				<p class="story-description">
					Р Р°Р·Р±РёРІРєР° Р·Р°РґР°С‡ РїРѕ СЃС‚Р°С‚СѓСЃР°Рј. РџСЂР°РІР°СЏ С‡Р°СЃС‚СЊ РєР°Р¶РґРѕР№ СЏС‡РµР№РєРё РїРѕРєР°Р·С‹РІР°РµС‚ РёР·РјРµРЅРµРЅРёРµ
					РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ РїСЂРµРґС‹РґСѓС‰РµРіРѕ РґРЅСЏ: СЃРІРµСЂС…Сѓ вЂ” РґРѕР±Р°РІР»РµРЅРЅС‹Рµ, СЃРЅРёР·Сѓ вЂ” СѓР±С‹РІС€РёРµ.
				</p>
			</div>

			<div class="story-body">
				<Portfolio data={demoData} />
			</div>
		</section>
	{/snippet}
</Story>

<style>
	.story-wrap {
		display: grid;
		gap: 1.5rem;
		width: 100%;
	}

	.story-header {
		display: grid;
		gap: 0.375rem;
	}

	.story-eyebrow {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.story-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.story-description {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		max-width: 48rem;
	}

	.story-body {
		width: 100%;
	}
</style>
