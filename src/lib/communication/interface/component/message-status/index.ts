export interface MessageStatusProps {
	status?: 'sent' | 'delivered' | 'read';
	size?: 'sm' | 'md' | 'lg';
	class?: string;
}
