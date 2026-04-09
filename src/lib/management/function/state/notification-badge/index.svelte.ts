import type { INotificationBadgeProps } from '$stylist/notification/interface/component/notification/other';
import { NotificationBadgeStyleManager } from '$stylist';

export interface NotificationBadgeStateProps extends INotificationBadgeProps {}

export function createNotificationBadgeState(props: NotificationBadgeStateProps) {
	const count = $derived(props.count ?? 0);
	const maxCount = $derived(props.maxCount ?? 99);
	const marker = $derived(props.marker ?? 'number');
	const appearance = $derived(props.appearance ?? 'danger');
	const position = $derived(props.position ?? 'top-end');
	const showZero = $derived(props.showZero ?? false);
	const className = $derived(props.class ?? '');
	const badgeClass = $derived(props.badgeClass ?? '');

	const showDot = $derived(marker === 'dot');

	const badgeContent = $derived.by(() => {
		if (showDot) return '';
		if (marker === 'check') return '\u2713';
		if (marker === 'x') return '\u00d7';
		if (count > maxCount) return `${maxCount}+`;
		return count.toString();
	});

	const shouldShow = $derived(count > 0 || showZero || showDot);

	const containerClasses = $derived(NotificationBadgeStyleManager.getContainerClasses(className));
	const badgeClasses = $derived(NotificationBadgeStyleManager.getBadgeClasses(marker, appearance, position, badgeClass));

	const restProps = $derived.by(() => {
		const {
			class: _class,
			count: _count,
			maxCount: _maxCount,
			marker: _marker,
			appearance: _appearance,
			position: _position,
			showZero: _showZero,
			badgeClass: _badgeClass,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get count() { return count; },
		get maxCount() { return maxCount; },
		get marker() { return marker; },
		get appearance() { return appearance; },
		get position() { return position; },
		get showZero() { return showZero; },
		get showDot() { return showDot; },
		get badgeContent() { return badgeContent; },
		get shouldShow() { return shouldShow; },
		get containerClasses() { return containerClasses; },
		get badgeClasses() { return badgeClasses; },
		get restProps() { return restProps; }
	};
}

export default createNotificationBadgeState;
