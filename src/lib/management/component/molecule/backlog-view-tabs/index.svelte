<script lang="ts">
	type BacklogView = 'issues' | 'backlog' | 'kanban' | 'sprint' | 'burn-down' | 'archive';

	interface BacklogViewTabsProps {
		value?: BacklogView;
		onValueChange?: (value: BacklogView) => void;
		class?: string;
	}

	let { value = 'issues', onValueChange, class: className = '' }: BacklogViewTabsProps = $props();

	const descriptions: Record<BacklogView, string> = {
		issues: 'Review incoming issue messages, select rows and move them into the backlog.',
		backlog: 'Review the backlog as a structured task list with filters, edits and quick triage.',
		kanban: 'Drag tasks between lanes, edit inline, archive or delete when done.',
		sprint: 'Sprint execution view is being prepared from backlog-selected work items.',
		'burn-down': 'Inspect sprint burn rate and remaining effort across the current timeline.',
		archive: 'Archive storage and resolved-task history are being prepared.'
	};
</script>

<nav class="c-backlog-view-tabs {className}" aria-label="Backlog views">
	<button
		type="button"
		class="tab-button"
		class:tab-button--active={value === 'issues'}
		aria-pressed={value === 'issues'}
		onclick={() => onValueChange?.('issues')}
		data-tooltip={descriptions.issues}
	>
		Issues
	</button>
	<button
		type="button"
		class="tab-button"
		class:tab-button--active={value === 'backlog'}
		aria-pressed={value === 'backlog'}
		onclick={() => onValueChange?.('backlog')}
		data-tooltip={descriptions.backlog}
	>
		Backlog
	</button>
	<button
		type="button"
		class="tab-button"
		class:tab-button--active={value === 'kanban'}
		aria-pressed={value === 'kanban'}
		onclick={() => onValueChange?.('kanban')}
		data-tooltip={descriptions.kanban}
	>
		Kanban board
	</button>
	<button
		type="button"
		class="tab-button"
		class:tab-button--active={value === 'sprint'}
		aria-pressed={value === 'sprint'}
		onclick={() => onValueChange?.('sprint')}
		data-tooltip={descriptions.sprint}
	>
		Sprint
	</button>
	<button
		type="button"
		class="tab-button"
		class:tab-button--active={value === 'burn-down'}
		aria-pressed={value === 'burn-down'}
		onclick={() => onValueChange?.('burn-down')}
		data-tooltip={descriptions['burn-down']}
	>
		Burd down diagram
	</button>
	<button
		type="button"
		class="tab-button"
		class:tab-button--active={value === 'archive'}
		aria-pressed={value === 'archive'}
		onclick={() => onValueChange?.('archive')}
		data-tooltip={descriptions.archive}
	>
		Archive
	</button>
</nav>

<style>
	.c-backlog-view-tabs {
		display: inline-flex;
		flex-wrap: nowrap;
		gap: 0.5rem;
		padding: 0.35rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 18px;
		background: color-mix(in srgb, var(--color-background-secondary) 76%, transparent);
	}

	.tab-button {
		position: relative;
		border: 0;
		border-radius: 14px;
		min-height: 2.7rem;
		padding: 0.65rem 1rem;
		background: transparent;
		color: var(--color-text-secondary);
		font: inherit;
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 0.01em;
		cursor: pointer;
		transition:
			background-color 140ms ease,
			color 140ms ease,
			transform 140ms ease,
			box-shadow 140ms ease;
	}

	.tab-button::after {
		content: attr(data-tooltip);
		position: absolute;
		left: 50%;
		top: calc(100% + 0.45rem);
		transform: translateX(-50%) translateY(-4px);
		padding: 0.42rem 0.65rem;
		border-radius: 12px;
		background: color-mix(in srgb, var(--color-background-primary) 76%, black 24%);
		color: color-mix(in srgb, var(--color-text-primary) 12%, white 88%);
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.35;
		text-align: center;
		white-space: nowrap;
		opacity: 0;
		pointer-events: none;
		box-shadow: 0 14px 24px rgba(15, 23, 42, 0.18);
		transition:
			opacity 140ms ease,
			transform 140ms ease;
		z-index: 4;
	}

	.tab-button:hover {
		color: var(--color-text-primary);
		background: color-mix(in srgb, var(--color-background-primary) 82%, transparent);
	}

	.tab-button:hover::after {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}

	.tab-button--active {
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--color-primary-600) 65%, var(--color-background-primary) 35%) 0%,
			color-mix(in srgb, var(--color-primary-700) 72%, var(--color-background-primary) 28%) 100%
		);
		color: color-mix(in srgb, var(--color-text-primary) 10%, white 90%);
		box-shadow: 0 12px 24px rgba(15, 23, 42, 0.18);
	}

	.tab-button--active:hover {
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--color-primary-600) 65%, var(--color-background-primary) 35%) 0%,
			color-mix(in srgb, var(--color-primary-700) 72%, var(--color-background-primary) 28%) 100%
		);
		color: color-mix(in srgb, var(--color-text-primary) 10%, white 90%);
		transform: none;
	}
</style>
