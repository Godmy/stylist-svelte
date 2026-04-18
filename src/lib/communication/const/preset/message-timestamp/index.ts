import type { SlotMessageTimestamp as MessageTimestampProps } from '$stylist/communication/interface/slot/message-timestamp';

export const PRESET_MESSAGE_TIMESTAMP: Record<string, Partial<MessageTimestampProps>> = {
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
