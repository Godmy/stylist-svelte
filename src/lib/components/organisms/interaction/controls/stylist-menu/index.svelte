<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Icon as BaseIcon } from '$stylist/components/atoms';

	type StylistMenuItem = {
		id: string;
		label: string;
		icon: string;
	};

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		class?: string;
		triggerIcon?: string;
		onItemClick?: (item: StylistMenuItem) => void;
	};

	const menuItems: StylistMenuItem[] = [
		{ id: 'components', label: 'Компоненты', icon: 'components' },
		{ id: 'models', label: 'Модели', icon: 'models' },
		{ id: 'contracts', label: 'Контракты', icon: 'contracts' },
		{ id: 'styles', label: 'Стили', icon: 'styles' },
		{ id: 'themes', label: 'Темы', icon: 'themes' },
		{ id: 'colors', label: 'Цвета', icon: 'colors' },
		{ id: 'tokens', label: 'Токены', icon: 'tokens' },
		{ id: 'icons', label: 'Иконки', icon: 'icons' },
		{ id: 'json', label: 'JSON', icon: 'json' }
	];

	let { class: className = '', triggerIcon = 'stylist-organism', onItemClick, ...restProps }: Props =
		$props();

	let rootElement = $state<HTMLElement | null>(null);
	let isOpen = $state(false);

	const panelId = `stylist-menu-${Math.random().toString(36).slice(2, 9)}`;

	function closeMenu() {
		isOpen = false;
	}

	function handleTriggerClick() {
		isOpen = !isOpen;
	}

	function handleItemClick(item: StylistMenuItem) {
		onItemClick?.(item);
	}

	function handleWindowClick(event: MouseEvent) {
		if (!isOpen || !rootElement) {
			return;
		}

		const path = event.composedPath();
		if (!path.includes(rootElement)) {
			closeMenu();
		}
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<div class={`stylist-menu ${className}`} bind:this={rootElement} {...restProps}>
	<button
		type="button"
		class="menu-trigger"
		class:is-open={isOpen}
		aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
		aria-haspopup="menu"
		aria-expanded={isOpen}
		aria-controls={panelId}
		onclick={handleTriggerClick}
	>
		<BaseIcon name={triggerIcon} class="menu-icon" />
	</button>

	{#if isOpen}
		<div class="menu-sheet" id={panelId} role="menu" aria-label="Stylist menu">
			{#each menuItems as item}
				<button
					type="button"
					class="menu-item"
					role="menuitem"
					aria-label={item.label}
					title={item.label}
					onclick={() => handleItemClick(item)}
				>
					<BaseIcon name={item.icon} class="menu-icon" />
				</button>
			{/each}

			<button
				type="button"
				class="menu-item close-item"
				role="menuitem"
				aria-label="Закрыть меню"
				title="Закрыть меню"
				onclick={closeMenu}
			>
				<BaseIcon name="x" class="menu-icon" />
			</button>
		</div>
	{/if}
</div>

<style>
	.stylist-menu {
		position: relative;
		display: inline-flex;
	}

	.menu-trigger,
	.menu-item {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		color: #0f172a;
		cursor: pointer;
		transition: background-color 150ms ease, transform 150ms ease;
	}

	.menu-trigger {
		border: 1px solid rgba(148, 163, 184, 0.4);
		border-radius: 0.8rem;
		background: white;
		transition:
			background-color 150ms ease,
			border-color 150ms ease,
			transform 150ms ease;
	}

	.menu-item {
		border: none;
		border-radius: 0.7rem;
		background: transparent;
	}

	.menu-trigger:hover,
	.menu-item:hover {
		background: rgba(255, 255, 255, 0.72);
		transform: translateY(-1px);
	}

	.menu-trigger:focus-visible,
	.menu-item:focus-visible {
		outline: 2px solid #2563eb;
		outline-offset: 2px;
	}

	.menu-trigger.is-open {
		border-color: rgba(37, 99, 235, 0.7);
		background: #eff6ff;
	}

	.menu-sheet {
		position: absolute;
		top: -0.2rem;
		left: calc(100% + 0.55rem);
		z-index: 40;
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
		padding: 0;
		overflow-x: auto;
		max-width: min(100vw - 1rem, 32rem);
	}

	.menu-icon {
		width: 1.1rem;
		height: 1.1rem;
	}

	.close-item {
		color: #b91c1c;
	}

	.close-item:hover {
		background: #fef2f2;
	}
</style>

