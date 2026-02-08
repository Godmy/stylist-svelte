<script lang="ts">
	import { onMount } from 'svelte';
	import pkg from '../../package.json';
	import { applyThemeToDOM, darkTheme, lightTheme } from '$stylist/design-system';

	const title = pkg.name || 'Stylist Svelte UI';
	const version = pkg.version || '';
	const description = pkg.description || 'A Svelte UI component library.';

	let lightPreview: HTMLDivElement | null = null;
	let darkPreview: HTMLDivElement | null = null;

	onMount(() => {
		if (lightPreview) {
			applyThemeToDOM(lightTheme, lightPreview);
		}

		if (darkPreview) {
			applyThemeToDOM(darkTheme, darkPreview);
		}
	});
</script>

<main class="relative min-h-screen overflow-hidden px-6 py-16 sm:py-20 lg:px-12">
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute top-[-6rem] -left-24 h-80 w-80 rounded-full bg-[#f2d8c3] opacity-70 blur-3xl"
		></div>
		<div
			class="absolute top-24 right-[-8rem] h-96 w-96 rounded-full bg-[#b6e2d7] opacity-70 blur-3xl"
		></div>
		<div
			class="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-[#efc7c7] opacity-60 blur-3xl"
		></div>
	</div>

	<div class="relative mx-auto flex w-full max-w-6xl flex-col gap-12">
		<header class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
			<div class="flex flex-col gap-6">
				<div class="flex flex-wrap items-center gap-3 text-sm font-medium">
					<span class="rounded-full bg-white/80 px-3 py-1 text-[#1f7a6d] shadow-sm">
						UI библиотека на Svelte
					</span>
					{#if version}
						<span class="rounded-full border border-black/10 px-3 py-1 text-[#3e3b37]">
							v{version}
						</span>
					{/if}
				</div>

				<h1 class="display-font text-4xl leading-tight font-semibold text-[#1f1e1c] sm:text-5xl">
					{title}: деликатная система компонентов для выразительных интерфейсов
				</h1>

				<p class="max-w-2xl text-base text-[#3e3b37] sm:text-lg">
					{description} Стройте интерфейсы из согласованных токенов, аккуратных деталей и гибких сеток
					— всё в одном наборе.
				</p>

				<div class="flex flex-wrap gap-3">
					<button
						class="rounded-full bg-[#1f7a6d] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1f7a6d]/30 transition hover:-translate-y-0.5"
						type="button"
					>
						Открыть документацию
					</button>
					<button
						class="rounded-full border border-black/15 px-6 py-2 text-sm font-semibold text-[#1f1e1c] transition hover:-translate-y-0.5"
						type="button"
					>
						Посмотреть компоненты
					</button>
				</div>
			</div>

			<div class="glass-panel rounded-3xl border border-white/50 p-6 sm:p-8">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-xs tracking-[0.2em] text-[#7a3e3e] uppercase">Быстрый старт</p>
						<h2 class="display-font text-2xl font-semibold">Установка за 60 секунд</h2>
					</div>
					<span class="rounded-full bg-[#f8efe6] px-3 py-1 text-xs font-semibold text-[#c9783a]">
						npm / pnpm
					</span>
				</div>

				<div class="mt-6 space-y-3 rounded-2xl bg-white/90 p-4 text-sm text-[#1f1e1c]">
					<p class="font-semibold text-[#3e3b37]">1. Подключите пакет</p>
					<code class="block rounded-xl bg-[#f7f4ef] px-4 py-3 font-mono text-xs">
						npm i stylist-svelte
					</code>
					<p class="font-semibold text-[#3e3b37]">2. Импортируйте стили</p>
					<code class="block rounded-xl bg-[#f7f4ef] px-4 py-3 font-mono text-xs">
						import 'stylist-svelte/styles.css'
					</code>
				</div>

				<p class="mt-4 text-xs text-[#3e3b37]">Готово. Компоненты доступны сразу после импорта.</p>
			</div>
		</header>

		<section class="grid gap-6 lg:grid-cols-3">
			<div class="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
				<p class="text-xs tracking-[0.2em] text-[#7a3e3e] uppercase">Токены</p>
				<h3 class="display-font mt-3 text-2xl font-semibold">Единый ритм</h3>
				<p class="mt-3 text-sm text-[#3e3b37]">
					Размеры, радиусы и шрифты согласованы так, чтобы дизайн ощущался цельным и спокойным.
				</p>
			</div>
			<div class="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
				<p class="text-xs tracking-[0.2em] text-[#7a3e3e] uppercase">Компоненты</p>
				<h3 class="display-font mt-3 text-2xl font-semibold">Сильные основы</h3>
				<p class="mt-3 text-sm text-[#3e3b37]">
					Кнопки, поля, карточки и модальные окна готовы для продакшена и легко расширяются под ваш
					стиль.
				</p>
			</div>
			<div class="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
				<p class="text-xs tracking-[0.2em] text-[#7a3e3e] uppercase">Интеграции</p>
				<h3 class="display-font mt-3 text-2xl font-semibold">Чистый Svelte</h3>
				<p class="mt-3 text-sm text-[#3e3b37]">
					Минимум обвязки, максимум скорости. Поддержка SSR, SvelteKit и стандартных сторов.
				</p>
			</div>
		</section>

		<section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
			<div class="rounded-3xl border border-black/10 bg-[#1f1e1c] p-8 text-white shadow-lg">
				<h3 class="display-font text-3xl font-semibold">Коллекция макетов</h3>
				<p class="mt-3 text-sm text-white/80">
					Пять готовых шаблонов помогают быстрее собрать лендинг, панель или продуктовую страницу.
					Выберите стиль и замените контент.
				</p>
				<div class="mt-6 grid gap-3 sm:grid-cols-2">
					<div class="rounded-2xl border border-white/15 bg-white/5 p-4">
						<p class="text-sm font-semibold">Aurora</p>
						<p class="text-xs text-white/70">Мягкие градиенты и крупная типографика.</p>
					</div>
					<div class="rounded-2xl border border-white/15 bg-white/5 p-4">
						<p class="text-sm font-semibold">Atlas</p>
						<p class="text-xs text-white/70">Сдержанная сетка для B2B.</p>
					</div>
					<div class="rounded-2xl border border-white/15 bg-white/5 p-4">
						<p class="text-sm font-semibold">Pulse</p>
						<p class="text-xs text-white/70">Яркий акцент для маркетинговых страниц.</p>
					</div>
					<div class="rounded-2xl border border-white/15 bg-white/5 p-4">
						<p class="text-sm font-semibold">Ink</p>
						<p class="text-xs text-white/70">Нейтральный, контент-ориентированный.</p>
					</div>
				</div>
			</div>

			<div class="space-y-4">
				<div class="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
					<p class="text-xs tracking-[0.2em] text-[#7a3e3e] uppercase">Наблюдаемость</p>
					<h3 class="display-font mt-3 text-2xl font-semibold">Стабильные релизы</h3>
					<p class="mt-3 text-sm text-[#3e3b37]">
						Каждый компонент сопровождается примерами, а изменения документируются в подробном
						changelog.
					</p>
				</div>
				<div class="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
					<p class="text-xs tracking-[0.2em] text-[#7a3e3e] uppercase">Гайдлайны</p>
					<h3 class="display-font mt-3 text-2xl font-semibold">От идеи к интерфейсу</h3>
					<p class="mt-3 text-sm text-[#3e3b37]">
						Используйте набор правил, чтобы команда проектировала и кодила в одном ритме.
					</p>
				</div>
			</div>
		</section>

		<section class="grid gap-6 lg:grid-cols-2">
			<div class="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-xs tracking-[0.2em] text-[#7a3e3e] uppercase">Темы</p>
						<h3 class="display-font mt-3 text-2xl font-semibold">Светлая и тёмная</h3>
					</div>
					<div
						class="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-[#3e3b37]"
					>
						Preview
					</div>
				</div>
				<p class="mt-3 text-sm text-[#3e3b37]">
					Ниже — две карточки, каждая использует реальные токены тем и показывает, как выглядит
					библиотека в разных режимах.
				</p>
			</div>

			<div class="grid gap-4 sm:grid-cols-2">
				<div
					bind:this={lightPreview}
					class="rounded-3xl border border-black/10 bg-white/80 p-5 shadow-sm"
				>
					<p class="text-xs tracking-[0.2em] text-[var(--color-text-tertiary)] uppercase">Light</p>
					<div
						class="mt-4 space-y-3 rounded-2xl border border-[var(--color-border-secondary)] bg-[var(--color-bg-primary)] p-4 text-[var(--color-text-primary)]"
					>
						<p class="text-sm font-semibold">Светлый фон</p>
						<p class="text-xs text-[var(--color-text-secondary)]">
							Основные токены: фон, текст и границы.
						</p>
						<div class="flex gap-2">
							<span
								class="rounded-full bg-[var(--color-primary-500)] px-3 py-1 text-xs font-semibold text-[var(--color-text-inverse)]"
							>
								Primary
							</span>
							<span
								class="rounded-full bg-[var(--color-success-500)] px-3 py-1 text-xs font-semibold text-[var(--color-text-inverse)]"
							>
								Success
							</span>
						</div>
					</div>
				</div>

				<div
					bind:this={darkPreview}
					class="rounded-3xl border border-black/10 bg-white/80 p-5 shadow-sm"
				>
					<p class="text-xs tracking-[0.2em] text-[var(--color-text-tertiary)] uppercase">Dark</p>
					<div
						class="mt-4 space-y-3 rounded-2xl border border-[var(--color-border-secondary)] bg-[var(--color-bg-primary)] p-4 text-[var(--color-text-primary)]"
					>
						<p class="text-sm font-semibold">Тёмный фон</p>
						<p class="text-xs text-[var(--color-text-secondary)]">
							Те же токены, но другая палитра и контраст.
						</p>
						<div class="flex gap-2">
							<span
								class="rounded-full bg-[var(--color-primary-500)] px-3 py-1 text-xs font-semibold text-[var(--color-text-inverse)]"
							>
								Primary
							</span>
							<span
								class="rounded-full bg-[var(--color-warning-500)] px-3 py-1 text-xs font-semibold text-[var(--color-text-inverse)]"
							>
								Warning
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>
