<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	const Sparkles = 'sparkles';

	let {
		badgeText = 'Our Mission',
		title = 'Make the component library readable before it becomes gigantic.',
		description = 'The homepage should not just advertise the system. It should compress the architecture into a shape that helps people understand what the library is for and why the workspace exists.',
		primaryLabel = 'Open Domain Workspace',
		primaryHref = '/',
		secondaryLabel = 'Browse Components',
		secondaryHref = '/components',
		class: className = ''
	} = $props();
</script>

<section class={`c-stylist-mission ${className}`}>
	<div class="sm-inner">
		<div class="sm-badge">
			<BaseIcon name={Sparkles} style="width:1.25rem;height:1.25rem" />
			<span class="sm-badge-text">{badgeText}</span>
		</div>

		<h2 class="sm-title">{title}</h2>
		<p class="sm-description">{description}</p>

		<div class="sm-actions">
			<a href={primaryHref} class="sm-btn sm-btn--primary">{primaryLabel}</a>
			<a href={secondaryHref} class="sm-btn sm-btn--secondary">{secondaryLabel}</a>
		</div>
	</div>
</section>

<style>
	.c-stylist-mission {
		border-radius: 36px;
		background: linear-gradient(to bottom right, #ea580c, #dc2626, #f59e0b);
		padding: 3rem 1.5rem;
		color: #fff;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	.sm-inner {
		margin-left: auto;
		margin-right: auto;
		max-width: 64rem;
		text-align: center;
	}

	.sm-badge {
		margin-bottom: 2rem;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 9999px;
		background-color: rgba(255, 255, 255, 0.18);
		padding: 0.5rem 1rem;
		backdrop-filter: blur(4px);
	}

	.sm-badge-text {
		font-size: 0.875rem;
		font-weight: 700;
	}

	.sm-title {
		margin-left: auto;
		margin-right: auto;
		max-width: 56rem;
		font-size: 2.25rem;
		line-height: 1.25;
		font-weight: 900;
	}

	@media (min-width: 768px) {
		.sm-title {
			font-size: 3rem;
		}
	}

	.sm-description {
		margin-left: auto;
		margin-right: auto;
		margin-top: 1.5rem;
		max-width: 48rem;
		font-size: 1.25rem;
		line-height: 1.625;
		color: rgba(255, 255, 255, 0.9);
	}

	.sm-actions {
		margin-top: 2.5rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.25rem;
	}

	.sm-btn {
		border-radius: 1rem;
		padding: 1rem 2rem;
		font-size: 1.125rem;
		font-weight: 900;
		text-decoration: none;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.sm-btn:hover {
		transform: scale(1.05);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	.sm-btn--primary {
		background-color: #fff;
		color: #111827;
	}

	.sm-btn--secondary {
		border: 2px solid #fff;
		background-color: transparent;
		color: #fff;
	}

	.sm-btn--secondary:hover {
		background-color: #fff;
		color: #111827;
	}
</style>
