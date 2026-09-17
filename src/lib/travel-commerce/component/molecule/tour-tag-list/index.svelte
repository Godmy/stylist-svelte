<script lang="ts">
	type Props = {
		tags?: string[];
	};

	let { tags = [] }: Props = $props();
</script>

<div class="tc-tour-tags" aria-label="Темы экскурсии">
	{#each tags as tag}
		<span>{tag}</span>
	{/each}
</div>

<style>
	.tc-tour-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.tc-tour-tags span {
		border-radius: 999px;
		padding: 5px 8px;
		background: rgba(23, 35, 31, 0.07);
		color: rgba(23, 35, 31, 0.72);
		font-size: 0.78rem;
		font-weight: 650;
	}
</style>
