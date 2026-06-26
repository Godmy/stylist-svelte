<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import Transcriber from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'recordLabel', type: 'text', defaultValue: 'Record' },
		{ name: 'stopLabel', type: 'text', defaultValue: 'Stop' },
		{ name: 'copyLabel', type: 'text', defaultValue: 'Copy' },
		{ name: 'model', type: 'text', defaultValue: 'faster-whisper-base' },
		{ name: 'language', type: 'text', defaultValue: '' }
	];
</script>

<Story
	id="organisms-transcriber"
	title="Transcriber"
	component={Transcriber}
	category="Organisms"
	description="Records audio, sends it to the transcription endpoint, and renders copyable text."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Transcriber
				recordLabel={values.recordLabel}
				stopLabel={values.stopLabel}
				copyLabel={values.copyLabel}
				model={values.model}
				language={values.language || undefined}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		width: min(100%, 42rem);
	}
</style>
