<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const Check = 'check';

	type Props = {
		value?: string;
		options?: string[];
		onChange?: (value: string) => void;
	};

	let {
		value = 'Галле',
		options = ['Галле', 'Мирисса', 'Унаватуна', 'Тангалле', 'Коломбо'],
		onChange
	}: Props = $props();
</script>

<ul class="tc-booking-pickup-list" role="listbox" aria-label="Место высадки">
	{#each options as option}
		<li>
			<button
				type="button"
				class="tc-booking-pickup-list__option"
				role="option"
				aria-selected={option === value}
				onclick={() => onChange?.(option)}
			>
				<span>{option}</span>
				{#if option === value}
					<BaseIcon name={Check} size={14} />
				{/if}
			</button>
		</li>
	{/each}
</ul>

<style>
	.tc-booking-pickup-list {
		display: grid;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		box-sizing: border-box;
	}

	.tc-booking-pickup-list__option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		width: 100%;
		border: 0;
		border-radius: 10px;
		padding: 10px 12px;
		background: transparent;
		font: inherit;
		font-weight: 600;
		color: #17231f;
		cursor: pointer;
		text-align: left;
		box-sizing: border-box;
	}

	.tc-booking-pickup-list__option:hover {
		background: rgba(23, 35, 31, 0.06);
	}

	.tc-booking-pickup-list__option[aria-selected='true'] {
		color: #0f5132;
		background: rgba(15, 81, 50, 0.08);
	}
</style>
