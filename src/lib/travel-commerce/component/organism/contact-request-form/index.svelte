<script lang="ts">
	import type { ContactRequest } from '$stylist/travel-commerce/type/object/contact-request';

	type Props = {
		onSubmit?: (value: ContactRequest) => void;
	};

	let { onSubmit }: Props = $props();

	let name = $state('');
	let phone = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		onSubmit?.({ name, phone, message });
		submitted = true;
	}
</script>

<form class="tc-contact-request-form" onsubmit={handleSubmit}>
	<h2>Готовы отправиться на Шри-Ланку?</h2>
	<p>Оставьте контакты — мы перезвоним и подберём тур под ваши даты.</p>

	<label>
		Имя
		<input
			required
			value={name}
			oninput={(event) => (name = (event.target as HTMLInputElement).value)}
		/>
	</label>
	<label>
		Телефон
		<input
			required
			type="tel"
			value={phone}
			oninput={(event) => (phone = (event.target as HTMLInputElement).value)}
		/>
	</label>
	<label>
		Сообщение
		<textarea
			rows="3"
			value={message}
			oninput={(event) => (message = (event.target as HTMLTextAreaElement).value)}
		></textarea>
	</label>

	<button type="submit" disabled={submitted}>
		{submitted ? 'Заявка отправлена' : 'Отправить заявку'}
	</button>
</form>

<style>
	.tc-contact-request-form {
		display: grid;
		gap: 1rem;
		width: min(28rem, 100%);
		padding: 2rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.96);
		box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
		color: #17231f;
	}

	.tc-contact-request-form h2 {
		margin: 0;
		font-size: 1.5rem;
	}

	.tc-contact-request-form p {
		margin: 0;
		color: rgba(23, 35, 31, 0.64);
	}

	.tc-contact-request-form label {
		display: grid;
		gap: 0.35rem;
		font-size: 0.9rem;
		color: rgba(23, 35, 31, 0.7);
	}

	.tc-contact-request-form input,
	.tc-contact-request-form textarea {
		box-sizing: border-box;
		width: 100%;
		border: 1px solid rgba(23, 35, 31, 0.14);
		border-radius: 0.5rem;
		padding: 0.6rem 0.75rem;
		font: inherit;
		resize: vertical;
	}

	.tc-contact-request-form button {
		min-height: 2.75rem;
		border: 0;
		border-radius: 999px;
		background: #17231f;
		color: #fff;
		font-weight: 700;
		cursor: pointer;
	}

	.tc-contact-request-form button:disabled {
		opacity: 0.6;
		cursor: default;
	}
</style>
