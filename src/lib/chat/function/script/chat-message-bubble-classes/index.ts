export function getChatMessageBubbleClasses(isOwn: boolean): string {
	if (isOwn) {
		return 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded-br-none ml-auto';
	}

	return 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] rounded-bl-none';
}
