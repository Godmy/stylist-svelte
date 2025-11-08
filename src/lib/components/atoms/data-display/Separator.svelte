<script lang="ts">
	type Orientation = 'horizontal' | 'vertical';

	type Props = {
		orientation?: Orientation;
		decorative?: boolean;
		class?: string;
	};

	const {
		orientation = 'horizontal',
		decorative = false,
		class: className = ''
	}: Props = $props();

	const baseClasses = 'bg-gray-200';
	const orientationClasses: Record<Orientation, string> = {
		horizontal: 'w-full h-px',
		vertical: 'h-full w-px'
	};
</script>

{#if decorative}
  <div class={`${baseClasses} ${orientationClasses[orientation as Orientation]} ${className}`}></div>
{:else}
  <hr class={`${baseClasses} ${orientationClasses[orientation as Orientation]} ${className}`} />
{/if}