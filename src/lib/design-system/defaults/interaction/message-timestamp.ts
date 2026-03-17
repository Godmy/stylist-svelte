import type { MessageTimestampProps } from '$stylist/design-system/contracts/interaction/message-timestamp';

export const messageTimestampPresets: Record<string, Partial<MessageTimestampProps>> = {
	currentTime: {
		timestamp: new Date(),
		formatStyle: 'datetime',
		showRelative: false
	},
	relativeTime: {
		timestamp: new Date(Date.now() - 300000),
		formatStyle: 'datetime',
		showRelative: true
	},
	timeOnly: {
		timestamp: new Date(),
		formatStyle: 'time',
		showRelative: false
	},
	dateOnly: {
		timestamp: new Date(),
		formatStyle: 'date',
		showRelative: false
	}
};
