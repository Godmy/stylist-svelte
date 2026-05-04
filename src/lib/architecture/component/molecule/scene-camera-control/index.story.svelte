<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import SceneCameraControl from './index.svelte';

	let radius = $state(8.4);
	let targetX = $state(1.5);
	let targetY = $state(-2.2);
</script>

<Story
	component={SceneCameraControl}
	title="SceneCameraControl"
	description="Camera plane and zoom control for interactive scene navigation."
>
	{#snippet children()}
		<div class="relative min-h-[24rem] overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,#bfdbfe,transparent_45%),linear-gradient(180deg,#0f172a,#1e293b)] p-6">
			<div class="absolute inset-6 rounded-2xl border border-white/10 bg-white/5"></div>
			<SceneCameraControl
				{radius}
				minRadius={4}
				maxRadius={16}
				sceneFitRadius={10.5}
				{targetX}
				{targetY}
				onradiuschange={(next) => {
					radius = next;
				}}
				ontargetchange={(x, y) => {
					targetX = x;
					targetY = y;
				}}
			/>
		</div>
	{/snippet}
</Story>
