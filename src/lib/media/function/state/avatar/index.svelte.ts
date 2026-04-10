import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

export interface AvatarProps {
	variant?: 'default';
	size?: AvatarSize;
	src?: string;
	alt?: string;
	id?: string;
	name?: string;
	status?: AvatarUserStatus;
	showStatus?: boolean;
	children?: any;
	class?: string;
}

const SIZE_CLASSES: Record<AvatarSize, string> = {
	sm: 'w-6 h-6 text-sm',
	md: 'w-8 h-8 text-base',
	lg: 'w-10 h-10 text-lg',
	xl: 'w-12 h-12 text-xl'
};

export function createAvatarState(props: AvatarProps & InformationHTMLAttributes<HTMLDivElement>) {
	const name = $derived(props.name ?? '');
	const status = $derived(props.status);
	const showStatus = $derived(props.showStatus ?? false);
	const size = $derived((props.size ?? 'md') as AvatarSize);
	const initials = $derived(name ? name.charAt(0).toUpperCase() : '?');
	const sizeClasses = $derived(SIZE_CLASSES[size]);
	const avatarClasses = $derived(
		`inline-flex items-center justify-center rounded-full bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] overflow-hidden ${sizeClasses} ${props.class ?? ''}`
	);
	const imageClasses = $derived('w-full h-full object-cover rounded-full');
	const fallbackClasses = $derived('w-full h-full flex items-center justify-center');

	function getStatusClasses(status?: AvatarUserStatus): string {
		const statusClasses: Record<AvatarUserStatus, string> = {
			online: 'bg-[var(--color-success-500)]',
			away: 'bg-[var(--color-warning-500)]',
			offline: 'bg-[var(--color-text-secondary)]',
			typing: 'bg-[var(--color-primary-500)]',
			idle: 'bg-[var(--color-warning-600)]'
		};
		return statusClasses[status || 'offline'] || statusClasses.offline;
	}

	function getStatusSizeClasses(size: AvatarSize): string {
		const statusSizeClasses: Record<AvatarSize, string> = {
			sm: 'w-2 h-2',
			md: 'w-2.5 h-2.5',
			lg: 'w-3 h-3',
			xl: 'w-3.5 h-3.5'
		};
		return statusSizeClasses[size];
	}

	const statusColor = $derived(getStatusClasses(status));
	const statusSize = $derived(getStatusSizeClasses(size));
	const statusIndicatorClasses = $derived(
		`absolute bottom-0 right-0 rounded-full border-2 border-[var(--color-background-primary)] ${statusColor} ${statusSize}`
	);

	const src = $derived(props.src);
	const alt = $derived(props.alt);

	const restProps = $derived.by(() => {
		const { class: _class, variant: _variant, size: _size, src: _src, alt: _alt, name: _name, status: _status, showStatus: _showStatus, children: _children, ...rest } = props;
		return rest;
	});

	return {
		get name() { return name; },
		get status() { return status; },
		get showStatus() { return showStatus; },
		get size() { return size; },
		get initials() { return initials; },
		get sizeClasses() { return sizeClasses; },
		get avatarClasses() { return avatarClasses; },
		get imageClasses() { return imageClasses; },
		get fallbackClasses() { return fallbackClasses; },
		get statusColor() { return statusColor; },
		get statusSize() { return statusSize; },
		get statusIndicatorClasses() { return statusIndicatorClasses; },
		get src() { return src; },
		get alt() { return alt; },
		get restProps() { return restProps; },
		getStatusClasses,
		getStatusSizeClasses
	};
}

export default createAvatarState;
