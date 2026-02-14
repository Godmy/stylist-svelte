<script lang="ts">
	import ErrorMessage from './index.svelte';

	let { error = 'Something went wrong', title = 'Error occurred', showRetry = true } = $props();

	function handleRetry() {
		console.log('Retry function called');
	}
</script>

<!-- Default story -->
<div class="p-4">
	<ErrorMessage {error} {title} {showRetry} onRetry={handleRetry} />
</div>

<!-- Different error messages -->
<div class="space-y-4 p-4">
	<h3 class="text-lg font-medium">Different Error Messages</h3>
	<div class="space-y-2">
		<ErrorMessage error="This is a simple error message" title="Error" showRetry={false} />
		<ErrorMessage
			error={new Error('This is an error object').message}
			title="Error Object"
			showRetry={true}
			onRetry={handleRetry}
		/>
		<ErrorMessage
			error="A very long error message that might wrap to multiple lines and demonstrate how the component handles longer content"
			title="Long Error Message"
			showRetry={true}
			onRetry={handleRetry}
		/>
	</div>
</div>

<!-- With and without retry button -->
<div class="space-y-4 p-4">
	<h3 class="text-lg font-medium">With and Without Retry Button</h3>
	<div class="space-y-2">
		<ErrorMessage error="Error message without retry" title="No Retry Option" showRetry={false} />
		<ErrorMessage
			error="Error message with retry"
			title="With Retry Option"
			showRetry={true}
			onRetry={handleRetry}
		/>
	</div>
</div>



