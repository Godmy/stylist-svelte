<script lang="ts">
	/**
	 * ��������� BreadcrumbLink
	 *
	 * ������� ��������� SOLID:
	 * - SRP: ��������� �������� ������ �� ����������� �������� ������������� �������
	 * - OCP: ����� ��������� �� ���� �������
	 * - LSP: ����������� ���������, ��������� ����������� IBreadcrumbLinkProps
	 * - ISP: ��������� ������� �������� �� ����������, ����������� �����
	 * - DIP: ������� �� ���������� (����� � ������), � �� �� ������� ����������
	 *
	 * ������� Atomic Design: ��� ��������, ���������� ����� ������������� �������
	 */

	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import type { IBreadcrumbLinkProps } from '$stylist';
	import { mergeClasses } from '$stylist/information/function/classes';

	let { current = false, href, children, ...restProps }: IBreadcrumbLinkProps = $props();

	const linkClass = $derived(
		mergeClasses('breadcrumb-link', current ? 'current' : 'not-current')
	);
</script>

{#if current}
	<span class={linkClass} {...restProps}>
		{@render children?.()}
	</span>
{:else}
	<a {href} class={linkClass} {...restProps}>
		{@render children?.()}
	</a>
{/if}







