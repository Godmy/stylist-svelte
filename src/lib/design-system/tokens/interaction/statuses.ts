const WORKFLOW_ABTEST = ['draft', 'running', 'completed', 'paused'] as const;
const WORKFLOW_ACTIVITY = ['active', 'inactive', 'pending', 'paused', 'completed'] as const;
const WORKFLOW_FLOW = ['completed', 'current', 'upcoming', 'skipped'] as const;

const LIFECYCLE_LOADING = ['idle', 'loading', 'success', 'error'] as const;
const LIFECYCLE_VALIDATION = ['valid', 'invalid', 'pending'] as const;
const LIFECYCLE_INTERACTION = ['enabled', 'disabled', 'readonly'] as const;
const LIFECYCLE_VISIBILITY = ['visible', 'hidden', 'collapsed'] as const;

const STATUS_SEVERITY = ['info', 'success', 'warning', 'error'] as const;
const STATUS_PROCESS = ['pending', 'processing', 'completed', 'failed', 'cancelled'] as const;
const STATUS_MESSAGE_DELIVERY = ['sent', 'delivered', 'read'] as const;

const FEEDBACK_SEVERITY = STATUS_SEVERITY;
const COMMUNICATION_RESULT = [LIFECYCLE_LOADING[2], LIFECYCLE_LOADING[3], LIFECYCLE_LOADING[1]] as const;

const COMMUNICATION_MESSAGE = STATUS_MESSAGE_DELIVERY;
const COMMUNICATION_PRESENCE = ['online', 'offline', 'away', 'busy', 'typing'] as const;
const COMMUNICATION_PREDICTION_RESULT = [...COMMUNICATION_RESULT, 'warning'] as const;
const COMMUNICATION_RESPONSE_VIEWER = [...COMMUNICATION_RESULT, 'info'] as const;

const FEEDBACK_SEMANTIC = FEEDBACK_SEVERITY;
const FEEDBACK_VERDICT = ['silent', ...FEEDBACK_SEVERITY] as const;
const FEEDBACK_STEP_ICON = ['pending', 'active', 'completed', 'error'] as const;
const FEEDBACK_NODE_TITLE = ['default', 'selected', LIFECYCLE_LOADING[3], 'warning'] as const;
const KPI_STATUSES = ['on-track', 'at-risk', 'off-track', 'exceeded'] as const;

const INPUT_STATE = [
	LIFECYCLE_LOADING[3],
	LIFECYCLE_VALIDATION[0],
	LIFECYCLE_INTERACTION[1],
	LIFECYCLE_INTERACTION[2],
	LIFECYCLE_LOADING[1]
] as const;

const BUSINESS_FINANCIAL_COMMON = [STATUS_PROCESS[0], STATUS_PROCESS[3], 'refunded'] as const;
const BUSINESS_PROCESS_COMMON = [STATUS_PROCESS[0], STATUS_PROCESS[4]] as const;

const BUSINESS_PAYMENT = [...BUSINESS_FINANCIAL_COMMON, STATUS_PROCESS[1], STATUS_PROCESS[2]] as const;
const BUSINESS_ORDER = [...BUSINESS_PROCESS_COMMON, STATUS_PROCESS[1], 'shipped', 'delivered'] as const;
const BUSINESS_BILLING_ITEM = ['paid', ...BUSINESS_FINANCIAL_COMMON] as const;
const BUSINESS_BILLING_SUMMARY = ['paid', ...BUSINESS_PROCESS_COMMON, 'overdue'] as const;

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
		predictionResult: COMMUNICATION_PREDICTION_RESULT,
		responseViewer: COMMUNICATION_RESPONSE_VIEWER
	},
	feedback: {
		semantic: FEEDBACK_SEMANTIC,
		verdict: FEEDBACK_VERDICT,
		stepIcon: FEEDBACK_STEP_ICON,
		nodeTitle: FEEDBACK_NODE_TITLE
	},
	input: {
		state: INPUT_STATE
	},
	business: {
		payment: BUSINESS_PAYMENT,
		order: BUSINESS_ORDER,
		billingItem: BUSINESS_BILLING_ITEM,
		billingSummary: BUSINESS_BILLING_SUMMARY
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
export type SemanticStatus = (typeof STATUSES.feedback.semantic)[number];
export type VerdictStatus = (typeof STATUSES.feedback.verdict)[number];
export type StepIconStatus = (typeof STATUSES.feedback.stepIcon)[number];
export type NodeTitleStatus = (typeof STATUSES.feedback.nodeTitle)[number];
export type InputStateStatus = (typeof STATUSES.input.state)[number];
export type KPIStatus = (typeof KPI_STATUSES)[number];
export type SeverityStatus = (typeof STATUS_SEVERITY)[number];
export type ProcessStatus = (typeof STATUS_PROCESS)[number];
export type MessageDeliveryStatus = (typeof STATUS_MESSAGE_DELIVERY)[number];

export const STATUS_AXES = {
	severity: STATUS_SEVERITY,
	process: STATUS_PROCESS,
	messageDelivery: STATUS_MESSAGE_DELIVERY
} as const;

export { KPI_STATUSES };

export const VERDICTS = STATUSES.feedback.verdict;
export type NotificationType = (typeof VERDICTS)[number];

export const NODE_TITLE = STATUSES.feedback.nodeTitle;
export type NodeTitleVariant = (typeof NODE_TITLE)[number];

export const RESPONSE_VIEWER_STATUSES = STATUSES.communication.responseViewer;
export type ResponseViewerStatus = (typeof RESPONSE_VIEWER_STATUSES)[number];

export const PAYMENT_STATUSES = STATUSES.business.payment;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const ORDER_STATUSES = STATUSES.business.order;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const BILLING_ITEM_STATUSES = STATUSES.business.billingItem;
export type BillingItemStatus = (typeof BILLING_ITEM_STATUSES)[number];

export const BILLING_SUMMARY_STATUSES = STATUSES.business.billingSummary;
export type BillingSummaryStatus = (typeof BILLING_SUMMARY_STATUSES)[number];

