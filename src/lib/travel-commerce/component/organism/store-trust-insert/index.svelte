<script lang="ts">
	type Props = {
		years?: string;
		text?: string;
	};

	let {
		years = '8',
		text = 'лет мы исследуем остров вместе с вами: маршруты, сезонность, водителей, лучшие рассветы и те места, где Шри-Ланка действительно раскрывается.'
	}: Props = $props();
</script>

<aside class="tc-trust-insert">
	<strong>{years}</strong>
	<p>{text}</p>
</aside>

<style>
	.tc-trust-insert {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		align-items: center;
		gap: 28px;
		padding: 34px;
		border-radius: 8px;
		background: #17231f;
		color: white;
	}
	.tc-trust-insert strong {
		font-size: clamp(4rem, 11vw, 8rem);
		line-height: 0.8;
		letter-spacing: 0;
	}
	.tc-trust-insert p {
		max-width: 620px;
		margin: 0;
		font-size: clamp(1.1rem, 2vw, 1.55rem);
		line-height: 1.45;
		opacity: 0.86;
	}
	@media (max-width: 640px) {
		.tc-trust-insert {
			grid-template-columns: 1fr;
		}
	}
	@container (max-width: 640px) {
		.tc-trust-insert {
			grid-template-columns: 1fr;
		}
	}
</style>
