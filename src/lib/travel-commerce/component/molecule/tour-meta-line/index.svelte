<script lang="ts">
	type Props = {
		duration: string;
		pickup: string;
	};

	let { duration, pickup }: Props = $props();
</script>

<p class="tc-tour-meta">{duration} · {pickup}</p>

<style>
	.tc-tour-meta {
		margin: 0;
		color: rgba(23, 35, 31, 0.62);
		font-size: 0.92rem;
		line-height: 1.4;
	}
</style>
