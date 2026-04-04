<script lang="ts">
	/**
	 * ��������� BreadcrumbLink
	 *
	 * ������� ��������� SOLID:
	 * - SRP: ��������� �������� ������ �� ����������� �������� ������������� �������
	 * - OCP: ����� ��������� �� ���� �������
	 * - LSP: ����������� ���������, ��������� ����������� BreadcrumbRecipe
	 * - ISP: ��������� ������� �������� �� ����������, ����������� �����
	 * - DIP: ������� �� ���������� (����� � ������), � �� �� ������� ����������
	 *
	 * ������� Atomic Design: ��� ��������, ���������� ����� ������������� �������
	 */

	import type { Snippet } from 'svelte';
	import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

	type Props = {
		current?: boolean;
		href?: string;
		class?: string;
		children?: Snippet;
	};

	let { current = false, href, class: className = '', children }: Props = $props();

	const linkClass = $derived(
		mergeClasses('breadcrumb-link', current ? 'current' : 'not-current', className)
	);
</script>

{#if current}
	<span class={linkClass}>
		{@render children?.()}
	</span>
{:else}
	<a {href} class={linkClass}>
		{@render children?.()}
	</a>
{/if}







