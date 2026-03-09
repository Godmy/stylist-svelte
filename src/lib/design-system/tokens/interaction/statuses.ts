const WORKFLOW_ABTEST = ['draft', 'running', 'completed', 'paused'] as const;
const WORKFLOW_ACTIVITY = ['active', 'inactive', 'pending', 'paused', 'complete'] as const;
const WORKFLOW_FLOW = ['completed', 'current', 'upcoming', 'skipped'] as const;

const LIFECYCLE_LOADING = ['idle', 'loading', 'success', 'error'] as const;
const LIFECYCLE_VALIDATION = ['valid', 'invalid', 'pending'] as const;
const LIFECYCLE_INTERACTION = ['enabled', 'disabled', 'readonly'] as const;
const LIFECYCLE_VISIBILITY = ['visible', 'hidden', 'collapsed'] as const;

const COMMUNICATION_MESSAGE = ['sent', 'delivered', 'read'] as const;
const COMMUNICATION_PRESENCE = ['online', 'offline', 'away', 'busy', 'typing'] as const;
const COMMUNICATION_PREDICTION_RESULT = [
	LIFECYCLE_LOADING[2],
	LIFECYCLE_LOADING[3],
	LIFECYCLE_LOADING[1],
	'warning'
] as const;

const FEEDBACK_STEP_ICON = ['pending', 'active', 'completed', 'error'] as const;

export const STATUSES = {
	workflow: {
		abtest: WORKFLOW_ABTEST,
		activity: WORKFLOW_ACTIVITY,
		flow: WORKFLOW_FLOW
	},
	lifecycle: {
		loading: LIFECYCLE_LOADING,
		validation: LIFECYCLE_VALIDATION,
		interaction: LIFECYCLE_INTERACTION,
		visibility: LIFECYCLE_VISIBILITY
	},
	communication: {
		message: COMMUNICATION_MESSAGE,
		presence: COMMUNICATION_PRESENCE,
		predictionResult: COMMUNICATION_PREDICTION_RESULT
	},
	feedback: {
		stepIcon: FEEDBACK_STEP_ICON
	}
} as const;

export type ABTestStatus = (typeof STATUSES.workflow.abtest)[number];
export type ActivityStatus = (typeof STATUSES.workflow.activity)[number];
export type FlowVariant = (typeof STATUSES.workflow.flow)[number];
export type LoadingState = (typeof STATUSES.lifecycle.loading)[number];
export type ValidationState = (typeof STATUSES.lifecycle.validation)[number];
export type InteractionState = (typeof STATUSES.lifecycle.interaction)[number];
export type VisibilityState = (typeof STATUSES.lifecycle.visibility)[number];
export type MessageStatusType = (typeof STATUSES.communication.message)[number];
export type PresenceStatus = (typeof STATUSES.communication.presence)[number];
export type PredictionResultStatus = (typeof STATUSES.communication.predictionResult)[number];
export type StepIconStatus = (typeof STATUSES.feedback.stepIcon)[number];

