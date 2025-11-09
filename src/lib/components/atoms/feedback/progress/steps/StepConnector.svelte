<script lang="ts">
	type Status = 'pending' | 'active' | 'completed' | 'error';

	type Props = {
		status?: Status;
		class?: string;
	};

	const {
		status = 'pending',
		class: className = ''
	}: Props = $props();

	const baseClasses = 'h-px flex-grow';
	const statusClasses: Record<Status, string> = {
		pending: 'bg-gray-300',
		active: 'bg-primary-500',
		completed: 'bg-green-500',
		error: 'bg-red-500'
	};
</script>

<div class={`${baseClasses} ${statusClasses[status as Status]} ${className}`}></div>