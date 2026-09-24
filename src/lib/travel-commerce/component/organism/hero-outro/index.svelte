<script lang="ts">
	type Props = {
		title?: string;
		text?: string;
		progress?: number;
	};

	let {
		title = 'Теперь выберите свою Шри-Ланку',
		text = 'Мы знаем остров 12 лет. Расскажите, что хочется увидеть — покажем подходящие путешествия.',
		progress = 0
	}: Props = $props();
</script>

<section class="tc-hero-outro" style:--tc-outro-progress={Math.min(Math.max(progress, 0), 1)}>
	<div>
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
</section>

<style>
	.tc-hero-outro {
		display: grid;
		place-items: center;
		min-height: 360px;
		padding: 72px 20px;
		background:
			linear-gradient(180deg, rgba(14, 23, 20, 0), #f7f3ec 78%),
			#0e1714;
		color: #17231f;
	}

	.tc-hero-outro div {
		width: min(860px, 100%);
		text-align: center;
		opacity: calc(0.72 + var(--tc-outro-progress) * 0.28);
		transform: translateY(calc((1 - var(--tc-outro-progress)) * 20px));
	}

	.tc-hero-outro h2 {
		margin: 0;
		font-size: clamp(2rem, 5vw, 4.25rem);
		line-height: 1;
		letter-spacing: 0;
	}

	.tc-hero-outro p {
		max-width: 650px;
		margin: 22px auto 0;
		font-size: 1.15rem;
		line-height: 1.65;
		color: rgba(23, 35, 31, 0.76);
	}
</style>
