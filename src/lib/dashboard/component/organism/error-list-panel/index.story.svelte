<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import ErrorListPanel from './index.svelte';
	import fixture from '$stylist/dashboard/data/json/dashboard-fixture/index.json';
	import type { ErrorDiagnosticItem } from '$stylist/dashboard/type/object/error-diagnostic-item';

	const items = fixture.errors as ErrorDiagnosticItem[];
</script>

<Story title="ErrorListPanel" description="Dashboard organism for searchable diagnostics and selected error detail">
	<div class="story-shell">
		<ErrorListPanel {items} />
	</div>
</Story>

<style>
	.story-shell {
		padding: 1rem;
		background: var(--color-background-secondary);
	}
</style>
