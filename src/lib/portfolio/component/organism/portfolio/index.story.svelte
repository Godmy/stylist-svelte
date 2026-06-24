<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import type { PortfolioData } from '$stylist/portfolio/class/object-manager/portfolio';
	import Portfolio from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'showSummary',
			label: 'Итоговая строка',
			description: 'Показать строку ИТОГО внизу таблицы.',
			type: 'boolean',
			defaultValue: true
		}
	];

	const demoData: PortfolioData = {
		entries: [
			{
				id: 1,
				name: 'АСУ ССМП-103 (Android)',
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
				name: 'АСУ ССМП-103 (PHP v.1)',
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
				name: 'АСУ ССМП-103 (PHP v.2)',
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
				name: 'АСУ ССМП-103 (Отчётность)',
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
				name: 'АСУ ССМП-103 (ТАСУ)',
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
				name: 'ВИС МИНТРАНС МО',
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
				name: 'Волынская больница (КБ №1)',
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
				name: 'Волынская больница (Сбор требований)',
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
				name: 'Детский медицинский центр УДП',
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
				name: 'СПО СМТС МЧС России (СВОБ)',
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
				name: 'СПО СУМН ГУ МВД г. Москва',
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
				name: 'СПО СУМН МВД России',
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
				name: 'СПО СУСИС-ЧОО',
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
				name: 'СУМП МосЭнергосбыт',
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
				name: 'Телематическая Платформа Delphi',
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
				name: 'Телематическая Платформа С++',
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
				name: 'Установка ВНСО',
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
	description="Таблица портфеля проектов с разбивкой задач по статусам и дельтой относительно предыдущего дня."
	tags={['portfolio', 'projects', 'table', 'management']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="story-wrap">
			<div class="story-header">
				<p class="story-eyebrow">Управление проектами</p>
				<h3 class="story-title">Портфель проектов</h3>
				<p class="story-description">
					Разбивка задач по статусам. Правая часть каждой ячейки показывает изменение
					относительно предыдущего дня: сверху — добавленные, снизу — убывшие.
				</p>
			</div>

			<div class="story-body">
				<Portfolio data={demoData} showSummary={values.showSummary as boolean} />
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
