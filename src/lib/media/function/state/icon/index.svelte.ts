import { IconStyleManager } from '$stylist/media/class/style-manager/icons';
import type { IconProps } from '$stylist/media/interface/recipe/icon-icon-props';
import alignCenterSvg from '$stylist/chat/data/svg/align-center.svg?raw';
import alignLeftSvg from '$stylist/chat/data/svg/align-left.svg?raw';
import alignRightSvg from '$stylist/chat/data/svg/align-right.svg?raw';
import attachmentSvg from '$stylist/chat/data/svg/attachment.svg?raw';
import boldSvg from '$stylist/chat/data/svg/bold.svg?raw';
import botSvg from '$stylist/chat/data/svg/bot.svg?raw';
import callSvg from '$stylist/chat/data/svg/call.svg?raw';
import checkCheckSvg from '$stylist/chat/data/svg/check-check.svg?raw';
import italicSvg from '$stylist/chat/data/svg/italic.svg?raw';
import listOrderedSvg from '$stylist/chat/data/svg/list-ordered.svg?raw';
import listSvg from '$stylist/chat/data/svg/list.svg?raw';
import messageCircleSvg from '$stylist/chat/data/svg/message-circle.svg?raw';
import micSvg from '$stylist/chat/data/svg/mic.svg?raw';
import moreVerticalSvg from '$stylist/chat/data/svg/more-vertical.svg?raw';
import paperclipSvg from '$stylist/chat/data/svg/paperclip.svg?raw';
import replySvg from '$stylist/chat/data/svg/reply.svg?raw';
import sendSvg from '$stylist/chat/data/svg/send.svg?raw';
import settingsSvg from '$stylist/chat/data/svg/settings.svg?raw';
import shareSvg from '$stylist/chat/data/svg/share.svg?raw';
import smileSvg from '$stylist/chat/data/svg/smile.svg?raw';
import underlineSvg from '$stylist/chat/data/svg/underline.svg?raw';
import userSvg from '$stylist/chat/data/svg/user.svg?raw';
import videoSvg from '$stylist/chat/data/svg/video.svg?raw';

function normalizeIconName(value: string): string {
	return value
		.trim()
		.replace(/[_\s]+/g, '-')
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.toLowerCase();
}

// Static icon imports for SSR compatibility
const iconSources: Record<string, string> = {
	'alignments': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
	'add': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
	'architecture': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
	'alert-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
	'alert-triangle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.29 3.86-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.71-3.14l-8-14a2 2 0 0 0-3.42 0Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
	'box': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
	'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
	'chevron-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
	'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
	'components': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/></svg>',
	'models': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>',
	'inbox': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 3H9l-3-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
	'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
	'loader-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg>',
	'refresh': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.55-6.36L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.55 6.36L3 16"/><path d="M8 16H3v5"/></svg>',
	'x': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
	'x-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
	'check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
	'copy': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
	'grid-3x3': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>',
	'info': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
	'stylist-organism': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>',
	'ontology-node-component': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
	'align-center': alignCenterSvg,
	'align-left': alignLeftSvg,
	'align-right': alignRightSvg,
	'attachment': attachmentSvg,
	'bold': boldSvg,
	'bot': botSvg,
	'call': callSvg,
	'check-check': checkCheckSvg,
	'italic': italicSvg,
	'list': listSvg,
	'list-ordered': listOrderedSvg,
	'message-circle': messageCircleSvg,
	'mic': micSvg,
	'more-vertical': moreVerticalSvg,
	'paperclip': paperclipSvg,
	'reply': replySvg,
	'send': sendSvg,
	'settings': settingsSvg,
	'share': shareSvg,
	'smile': smileSvg,
	'underline': underlineSvg,
	'user': userSvg,
	'video': videoSvg
};

const iconRegistry: Record<string, string> = Object.fromEntries(
	Object.entries(iconSources).map(([name, svg]) => [name, svg])
);

function joinClasses(...values: Array<string | false | null | undefined>) {
	return values.filter(Boolean).join(' ');
}

export function createIconState(props: IconProps) {
	const name = $derived(props.name ?? 'box');
	const svg = $derived(props.svg);
	const size = $derived(props.size ?? 'md');
	const strokeWidth = $derived(props.strokeWidth ?? 1.5);
	const variant = $derived(props.variant ?? 'default');
	const direction = $derived(props.direction);
	const isOpen = $derived(props.isOpen);
	const disabled = $derived(props.disabled ?? false);
	const className = $derived(props.class ?? '');
	const containerClass = $derived(props.containerClass ?? '');
	const container = $derived(props.container ?? 'none');
	const containerSize = $derived(props.containerSize ?? 'md');
	const shape = $derived(props.shape ?? 'circle');
	const color = $derived(props.color ?? 'default');
	const filled = $derived(props.filled ?? false);

	const effectiveName = $derived.by(() => {
		const normalizedName = normalizeIconName(name || 'box');
		const isChevronLike = normalizedName === 'chevron' || normalizedName.startsWith('chevron-');
		if (!isChevronLike || isOpen === undefined) {
			return normalizedName;
		}
		return isOpen ? 'chevron-up' : 'chevron-down';
	});

	const numericSize = $derived.by(() => (typeof size === 'number' ? size : undefined));

	const iconClasses = $derived.by(() =>
		IconStyleManager.getIconChevronClasses({
			size: typeof size === 'number' ? 'md' : size,
			direction,
			variant,
			disabled,
			className
		})
	);

	const containerClasses = $derived.by(() => {
		if (container === 'circle') {
			return IconStyleManager.getIconCircleClasses({
				variant: (color !== 'default' ? color : variant) as Parameters<typeof IconStyleManager.getIconCircleClasses>[0]['variant'],
				size: containerSize,
				filled,
				disabled,
				className: containerClass
			});
		}
		if (container === 'wrapper') {
			return IconStyleManager.getIconWrapperClasses({
				size: containerSize,
				variant,
				shape,
				color: color as Parameters<typeof IconStyleManager.getIconWrapperClasses>[0]['color'],
				disabled,
				className: containerClass
			});
		}
		return containerClass;
	});

	const ariaLabel = $derived.by(() =>
		typeof props['aria-label'] === 'string' ? String(props['aria-label']) : undefined
	);

	const localSvg = $derived.by(() => {
		if (svg) return svg;
		return iconRegistry[effectiveName] ?? iconRegistry.box ?? '';
	});

	const restProps = $derived.by(() => {
		const { class: _class, containerClass: _containerClass, name: _name, svg: _svg, size: _size, strokeWidth: _strokeWidth, variant: _variant, direction: _direction, isOpen: _isOpen, disabled: _disabled, container: _container, containerSize: _containerSize, shape: _shape, color: _color, filled: _filled, ...rest } = props;
		return rest;
	});

	return {
		get name() { return name; },
		get svg() { return svg; },
		get size() { return size; },
		get strokeWidth() { return strokeWidth; },
		get variant() { return variant; },
		get direction() { return direction; },
		get isOpen() { return isOpen; },
		get disabled() { return disabled; },
		get className() { return className; },
		get containerClass() { return containerClass; },
		get container() { return container; },
		get containerSize() { return containerSize; },
		get shape() { return shape; },
		get color() { return color; },
		get filled() { return filled; },
		get effectiveName() { return effectiveName; },
		get numericSize() { return numericSize; },
		get iconClasses() { return iconClasses; },
		get containerClasses() { return containerClasses; },
		get ariaLabel() { return ariaLabel; },
		get localSvg() { return localSvg; },
		get restProps() { return restProps; },
		normalizeIconName,
		joinClasses,
		iconSources,
		iconRegistry
	};
}

export default createIconState;
