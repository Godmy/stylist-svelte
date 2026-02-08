<script lang="ts">
	import StepConnector from './step-connector/index.svelte';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">StepConnector Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Default StepConnector</h2>
		<div class="flex items-center">
			<span>Step 1</span>
			<StepConnector />
			<span>Step 2</span>
			<StepConnector>Custom Content</StepConnector>
			<span>Step 3</span>
		</div>
	</div>
</div>
