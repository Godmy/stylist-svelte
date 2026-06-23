<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ToastStack from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'position',
			type: 'select' as TokenControllerType,
			defaultValue: 'top-right',
			options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
			description: 'Position of the toast stack'
		}
	];

	type StatusSeverity = 'info' | 'success' | 'warning' | 'error';

	type Toast = {
		id: string;
		title?: string;
		message: string;
		type: StatusSeverity;
		duration?: number;
		actions?: Array<{
			label: string;
			onClick: () => void;
		}>;
		onDismiss?: () => void;
	};

	let toasts = $state<Toast[]>([
		{ id: '1', message: 'This is a success message!', type: 'success', duration: 5000 },
		{ id: '2', message: 'Warning: Please check your inputs', type: 'warning', duration: 5000 },
		{ id: '3', message: 'Error: Something went wrong', type: 'error', duration: 0 }
	]);

	function addToast() {
		const types: ('success' | 'warning' | 'error' | 'info')[] = [
			'success',
			'warning',
			'error',
			'info'
		];
		const newToast: Toast = {
			id: String(Date.now()),
			message: `New toast added at ${new Date().toLocaleTimeString()}`,
			type: types[Math.floor(Math.random() * types.length)],
			duration: 5000,
			onDismiss: () => removeToast(newToast.id)
		};
		toasts = [...toasts, newToast];
	}

	function removeToast(id: string) {
		toasts = toasts.filter((t) => t.id !== id);
	}
</script>

<Story
	{controls}
	title="ToastStack Component"
	description="Interactive toast stack with customizable positioning"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<button class="_c2" onclick={addToast}> Add Toast </button>
			<ToastStack {toasts} position={controlValues.position} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		border-radius: 0.25rem;
		background-color: var(--color-primary-500);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		color: var(--color-text-inverse);
	}
</style>
