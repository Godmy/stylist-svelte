<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeDebugConsole from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showTimestamps', type: 'boolean', defaultValue: true },
			{ name: 'showLogLevel', type: 'boolean', defaultValue: true },
			{ name: 'allowFilter', type: 'boolean', defaultValue: true },
			{ name: 'allowClear', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	type LogEntry = {
		id: string;
		timestamp: Date;
		level: 'log' | 'info' | 'warn' | 'error' | 'debug';
		message: string;
	};

	const initialLogs: LogEntry[] = [
		{ id: '1', timestamp: new Date(), level: 'info', message: 'Server ping responded in 142ms' },
		{ id: '2', timestamp: new Date(), level: 'warn', message: 'API quota at 83%' },
		{ id: '3', timestamp: new Date(), level: 'error', message: 'Billing webhook returned 502' },
		{
			id: '4',
			timestamp: new Date(),
			level: 'debug',
			message: 'Feature flag "betaDashboard" enabled'
		},
		{ id: '5', timestamp: new Date(), level: 'log', message: 'User session upgraded to premium' }
	];

	let consoleLogs = $state<LogEntry[]>([...initialLogs]);

	function handleClear() {
		consoleLogs = [];
	}

	function handleLog(entry: LogEntry) {
		consoleLogs = [...consoleLogs, entry];
	}
</script>

<Story {id} {title} {description} component={RecipeDebugConsole} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-debug-console _c1">
			<div class="_c2">
				<p class="_c3">Primary Debug Console Example</p>
				<p class="_c4">Interactive debug console with customizable options.</p>

				<div class="_c5">
					<RecipeDebugConsole
						logs={consoleLogs}
						showTimestamps={values.showTimestamps}
						showLogLevel={values.showLogLevel}
						allowFilter={values.allowFilter}
						allowClear={values.allowClear}
						onClear={handleClear}
						onLog={handleLog}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Debug Console Variations</h3>
				<p class="_c8">Different debug console configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Minimal</p>
						<div>
							<RecipeDebugConsole
								logs={consoleLogs.slice(0, 2)}
								showTimestamps={false}
								allowFilter={false}
								onClear={handleClear}
								onLog={handleLog}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Errors Only</p>
						<div>
							<RecipeDebugConsole
								logs={consoleLogs.filter((log) => log.level === 'error')}
								showLogLevel={true}
								allowClear={true}
								onClear={handleClear}
								onLog={handleLog}
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
