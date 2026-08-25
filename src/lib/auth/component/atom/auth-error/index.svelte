<script lang="ts">
	type Props = {
		message?: string;
		class?: string;
	};

	let { message, class: cls }: Props = $props();
</script>

{#if message}
	<div class="c-auth-error {cls ?? ''}" role="alert">
		<span class="c-auth-error__icon" aria-hidden="true">!</span>
		<span class="c-auth-error__text">{message}</span>
	</div>
{/if}

<style>
	.c-auth-error {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		padding: 0.625rem 0.75rem;
		background: #fef2f2;
		color: #b91c1c;
		border: 1px solid #fca5a5;
		border-radius: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.4;
	}

	.c-auth-error__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.125rem;
		height: 1.125rem;
		border-radius: 50%;
		background: #ef4444;
		color: #fff;
		font-size: 0.625rem;
		font-weight: 700;
		flex-shrink: 0;
		margin-top: 0.0625rem;
	}

	.c-auth-error__text {
		flex: 1;
	}
</style>
