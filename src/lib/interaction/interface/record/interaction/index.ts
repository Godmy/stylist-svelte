import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

// Buttons - from contract
import type { ButtonProps } from '$stylist/control/interface/component/button/contract';
import type { CloseButtonProps } from '$stylist/control/interface/component/close-button/contract';
import type { CopyButtonProps } from '$stylist/control/interface/component/copy-button/contract';
import type { IconButtonProps } from '$stylist/control/interface/component/icon-button/contract';
import type { FollowButtonProps } from '$stylist/control/interface/component/follow-button/contract';
import type { SplitButtonProps } from '$stylist/control/interface/component/split-button/contract';
import type { PageButtonProps } from '$stylist/control/interface/component/page-button/contract';

// Controls - Toggles - from control
import type { CheckboxProps } from '$stylist/control/interface/component/checkbox';
import type { RadioProps } from '$stylist/control/interface/component/radio';
import type { SwitchProps } from '$stylist/control/interface/component/switch/contract';
import type { ToggleProps } from '$stylist/control/interface/component/toggle';
import type { ToggleGroupProps } from '$stylist/control/interface/component/toggle-group';

// Controls - Toggles - from toggles
import type {
	ActionSegmentedControlProps,
	AdvancedToggleProps,
	RadioButtonGroupProps,
	ToggleBaseProps,
	ToggleGroupItemProps,
	ToggleGroupRootProps,
	ToggleInputProps
} from '$stylist/control/interface/component/toggles';

// Controls - Tabs - from other
import type {
	TabContainerProps,
	TabIndicatorProps,
	TabPanelProps,
	TabProps,
	TabsProps
} from '$stylist/control/interface/component/tabs/other';
import type { ITab, ITabGroupProps, ITabStyleClasses } from '$stylist/control/interface/component/tab-group/other';

// Controls - Accordion - from other
import type {
	AccordionBaseProps,
	AccordionHeaderDoubleProps,
	AccordionHeaderProps,
	AccordionItemProps,
	AccordionPanelProps,
	ComplexAccordionProps,
	IAccordionProps
} from '$stylist/control/interface/component/accordion/other';
import type { IAdvancedAccordionItem, IAdvancedAccordionProps } from '$stylist/control/interface/component/advanced-accordion';

// Controls - Selectors - from other
import type { IQuantitySelectorProps } from '$stylist/control/interface/component/quantity-selector/other';
import type { ISelectOption, ISelectProps, ISelectStyleClasses } from '$stylist/control/interface/component/selector/other';

// Controls - Sliders - from other
import type { IRangeSliderProps } from '$stylist/input/interface/component/range-slider/other';

// Controls - Tables - from other
import type {
	AdvancedColumnDefinition,
	ColumnConfig,
	ColumnManagerProps,
	DataTableAdvancedProps,
	DataTableColumn,
	DataTableRecipe,
	SortableListItem,
	SortableListProps
} from '$stylist/control/interface/component/table-controls/other';
import type {
	TableRecord,
	TableWithFiltersProps,
	TableWithGroupingProps,
	TableWithStripesProps
} from '$stylist/control/interface/component/table-extended/other';

// Controls - Menus - from other
import type { CloseDropdownFunc, IDropdownMenuProps, IDropdownMenuStyleClasses } from '$stylist/control/interface/component/dropdown-menu/other';
import type { MenuItemProps } from '$stylist/control/interface/component/menu-item/other';

// Controls - Toolbars - from other
import type { ZoomToolbarProps } from '$stylist/control/interface/component/zoom-toolbar/other';
import type { ZoomControlsProps } from '$stylist/control/interface/component/zoom-controls/other';

// Input - from contract
import type { InputFieldProps } from '$stylist/input/interface/component/input-field/contract';
import type { TextAreaProps } from '$stylist/input/interface/component/text-area/contract';
import type { NumberInputProps } from '$stylist/input/interface/component/number-input/contract';
import type { SearchBarProps } from '$stylist/control/interface/component/search-bar/contract';

// Input - from other
import type {
	IAdvancedInputProps,
	ICharacterCountProps,
	IFormErrorMessageProps,
	IFormHelperTextProps,
	IInputAddonProps,
	IInputBaseProps,
	IInputDoubleProps,
	IInputEmailProps,
	IInputFieldProps,
	IInputGroupProps,
	IInputLongProps,
	IInputPasswordProps,
	IPinInputDigitProps,
	ITextareaProps,
	InputCoreProps,
	InputHelperChildrenProps,
	InputHelperProps,
	InputWithHelperProps,
	InputWithLabelProps,
	InputWithValidationProps
} from '$stylist/input/interface/component/input/other';
import type { INumberInputProps } from '$stylist/input/interface/component/number-input/other';
import type { IPhoneNumberInputProps } from '$stylist/input/interface/component/phone-number-input/other';
import type { IAdvancedPasswordInputProps } from '$stylist/input/interface/component/advanced-password-input/other';
import type { TagInputProps } from '$stylist/input/interface/component/tag-input/other';
import type { RangeInputProps } from '$stylist/input/interface/component/range-input/other';

// Input - Pickers - from other
import type { IReactionPickerProps, IReactionPickerStyleClasses } from '$stylist/input/interface/component/reaction-picker/other';

// Forms - from other
import type { AddressFormProps, LoginFormProps, SearchFormProps } from '$stylist/form/interface/component/interaction-forms/other';
import type { FormWithValidationProps } from '$stylist/form/interface/component/interaction-forms/other';
import type { FormHeaderProps } from '$stylist/form/interface/component/form-header/other';
import type { FormFooterProps } from '$stylist/form/interface/component/form-footer/other';

// Search - from other
import type { AutoSearchProps } from '$stylist/control/interface/component/auto-search/other';
import type { AutocompleteDropdownOption, AutocompleteDropdownProps } from '$stylist/control/interface/component/autocomplete-dropdown/other';
import type { ISearchBarEvents, ISearchBarProps } from '$stylist/control/interface/component/search-bar/other';
import type { SearchSuggestionItem, SearchSuggestionProps } from '$stylist/control/interface/component/search-suggestion/other';

// Navigation - from contract
import type { LinkProps } from '$stylist/navigation/interface/component/link/contract';
import type { BreadcrumbLinkProps } from '$stylist/navigation/interface/component/breadcrumb-link/contract';
import type { PaginationProps } from '$stylist/navigation/interface/component/pagination/contract';

// Navigation - from other
import type { SidebarProps } from '$stylist/navigation/interface/component/sidebar/other';

// Feedback - from contract
import type { SpinnerProps } from '$stylist/notification/interface/component/spinner/contract';
import type { ProgressBarProps } from '$stylist/notification/interface/component/progress-bar/contract';
import type { SkeletonProps } from '$stylist/notification/interface/component/skeleton/contract';
import type { ToastProps } from '$stylist/notification/interface/component/toast/contract';
import type { TooltipProps } from '$stylist/control/interface/component/tooltip/contract';

// Feedback - from other
import type {
	IAccountProgressTrackerProps,
	IAlertProps,
	IBaseFeedbackProps,
	IErrorMessageProps,
	ILoaderProps,
	INotificationBadgeProps,
	IProgressBarProps,
	IProgressCircleProps,
	ISimpleTooltipProps,
	ISkeletonProps,
	ISpinnerProps,
	IStepConnectorProps,
	IStepIconProps,
	ITableSkeletonProps
} from '$stylist/notification/interface/component/notification/other';
import type { SkeletonCircleProps } from '$stylist/notification/interface/component/skeleton-circle/other';
import type { SkeletonRectangleProps } from '$stylist/notification/interface/component/skeleton-rectangle/other';
import type { SkeletonTextProps } from '$stylist/notification/interface/component/skeleton-text/other';
import type { SkeletonTableProps } from '$stylist/notification/interface/component/skeleton-table/other';
import type { CardSkeletonProps } from '$stylist/notification/interface/component/card-skeleton/other';
import type { IErrorBoundaryDetails, IErrorBoundaryProps } from '$stylist/notification/interface/component/error-boundary/other';
import type { ErrorMessageProps } from '$stylist/notification/interface/component/error-message/other';
import type { ConfirmationDialogProps } from '$stylist/navigation/interface/component/confirmation-dialog/other';
import type { DialogProps, ModalProps } from '$stylist/navigation/interface/component/dialog-controls/other';
import type { SimpleModalProps, LazyLoaderProps, LoadingBoundaryProps, ResponseViewerProps } from '$stylist/notification/interface/component/interaction-feedback/other';
import type { ILoadingOverlayProps } from '$stylist/notification/interface/component/overlay/other';

// Rating - from other
import type { IRatingProps } from '$stylist/social/interface/component/rating/other';

// Layout - from other
import type { DragAndDropProps } from '$stylist/control/interface/component/drag-and-drop/other';
import type { ClickProps } from '$stylist/control/interface/component/click/other';
import type { TransformationProps } from '$stylist/control/interface/component/transformation/other';

// Link types - from other
import type { AbbrProps, InlineBaseProps, InlineCodeProps, InlineTextProps } from '$stylist/navigation/interface/component/link/other';

// Burger Menu - from other
import type { BurgerMenuProps } from '$stylist/control/interface/component/burger-menu/other';

// Account Forms - from other
import type { AccountSettingsFormProps, UserProfileCardProps } from '$stylist/form/interface/component/account-forms/other';

// Time Slot - from other
import type { ITimeSlot, ITimeSlotProps } from '$stylist/input/interface/component/time-slot/other';

// Controller Settings - from other
import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

// Sortable Table Header - from other
import type { SortableTableHeaderProps } from '$stylist/control/interface/component/sortable-table-header/other';

// Shared Canvas - from other
import type { SharedCanvasProps } from '$stylist/canvas/interface/component/shared-canvas/other';

// Node Palette - from other
import type { NodePaletteItem, NodePaletteProps } from '$stylist/control/interface/component/node-palette/other';

// Multi-select - from other
import type { MultiSelectOption, MultiSelectProps } from '$stylist/control/interface/component/multi-select/other';

// Tag and Chip - from information
import type { TagRecipe } from '$stylist/typography/interface/recipe/tag';
import type { ChipRecipe } from '$stylist/typography/interface/recipe/chip';

// Organism - Card → перенесено в MapInformationContract

// Organism - Layout (из architecture) → через MapLayoutContract

// Export interface MapInteractionContract
// Layout-примитивы (Stack, Container, GridLayout и т.д.) унаследованы из MapLayoutContract
export interface MapInteractionContract {
	// Buttons
	Button: ButtonProps;
	IconButton: IconButtonProps;
	CloseButton: CloseButtonProps;
	CopyButton: CopyButtonProps;
	FollowButton: FollowButtonProps;
	SplitButton: SplitButtonProps;
	PageButton: PageButtonProps;

	// Controls - Toggles
	Toggle: ToggleProps;
	Switch: SwitchProps;
	Checkbox: CheckboxProps;
	Radio: RadioProps;
	ToggleGroup: ToggleGroupProps;
	ToggleGroupItem: RecordArchitectureMerge<[ToggleGroupItemProps, InteractionHTMLAttributes<HTMLButtonElement>]>;
	ToggleGroupRoot: RecordArchitectureMerge<[ToggleGroupRootProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	RadioButtonGroup: RecordArchitectureMerge<[RadioButtonGroupProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AdvancedToggle: RecordArchitectureMerge<[AdvancedToggleProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	ActionSegmentedControl: RecordArchitectureMerge<[ActionSegmentedControlProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Tabs
	Tab: RecordArchitectureMerge<[TabProps, InteractionHTMLAttributes<HTMLButtonElement>]>;
	TabPanel: RecordArchitectureMerge<[TabPanelProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	TabContainer: RecordArchitectureMerge<[TabContainerProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	Tabs: RecordArchitectureMerge<[TabsProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	TabIndicator: RecordArchitectureMerge<[TabIndicatorProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	TabGroup: RecordArchitectureMerge<[ITabGroupProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Accordion
	Accordion: RecordArchitectureMerge<[IAccordionProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AdvancedAccordion: RecordArchitectureMerge<[IAdvancedAccordionProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccordionItem: RecordArchitectureMerge<[AccordionItemProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccordionPanel: RecordArchitectureMerge<[AccordionPanelProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccordionHeader: RecordArchitectureMerge<[AccordionHeaderProps, InteractionHTMLAttributes<HTMLButtonElement>]>;
	AccordionHeaderDouble: RecordArchitectureMerge<[AccordionHeaderDoubleProps, InteractionHTMLAttributes<HTMLButtonElement>]>;
	ComplexAccordion: RecordArchitectureMerge<[ComplexAccordionProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Selectors
	Select: RecordArchitectureMerge<[ISelectProps, InteractionHTMLAttributes<HTMLSelectElement>]>;
	QuantitySelector: RecordArchitectureMerge<[IQuantitySelectorProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Sliders
	RangeSlider: RecordArchitectureMerge<[IRangeSliderProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Tables
	DataTable: RecordArchitectureMerge<[DataTableRecipe<any>, InteractionHTMLAttributes<HTMLTableElement>]>;
	DataTableAdvanced: RecordArchitectureMerge<[DataTableAdvancedProps<any>, InteractionHTMLAttributes<HTMLTableElement>]>;
	ColumnManager: RecordArchitectureMerge<[ColumnManagerProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SortableList: RecordArchitectureMerge<[SortableListProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	TableWithFilters: RecordArchitectureMerge<[TableWithFiltersProps, InteractionHTMLAttributes<HTMLTableElement>]>;
	TableWithGrouping: RecordArchitectureMerge<[TableWithGroupingProps, InteractionHTMLAttributes<HTMLTableElement>]>;
	TableWithStripes: RecordArchitectureMerge<[TableWithStripesProps, InteractionHTMLAttributes<HTMLTableElement>]>;

	// Controls - Menus
	DropdownMenu: RecordArchitectureMerge<[IDropdownMenuProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	MenuItem: RecordArchitectureMerge<[MenuItemProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Toolbars
	ZoomToolbar: RecordArchitectureMerge<[ZoomToolbarProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	ZoomControls: RecordArchitectureMerge<[ZoomControlsProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Input
	AdvancedInput: RecordArchitectureMerge<[IAdvancedInputProps, InteractionHTMLAttributes<HTMLInputElement>]>;
	InputField: InputFieldProps;
	InputEmail: RecordArchitectureMerge<[IInputEmailProps, InteractionHTMLAttributes<HTMLInputElement>]>;
	InputPassword: RecordArchitectureMerge<[IInputPasswordProps, InteractionHTMLAttributes<HTMLInputElement>]>;
	AdvancedPasswordInput: RecordArchitectureMerge<[IAdvancedPasswordInputProps, InteractionHTMLAttributes<HTMLInputElement>]>;
	InputDouble: RecordArchitectureMerge<[IInputDoubleProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	InputLong: RecordArchitectureMerge<[IInputLongProps, InteractionHTMLAttributes<HTMLTextAreaElement>]>;
	NumberInput: NumberInputProps;
	PhoneNumberInput: RecordArchitectureMerge<[IPhoneNumberInputProps, InteractionHTMLAttributes<HTMLInputElement>]>;
	TextArea: TextAreaProps;
	TagInput: RecordArchitectureMerge<[TagInputProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	RangeInput: RecordArchitectureMerge<[RangeInputProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	InputGroup: RecordArchitectureMerge<[IInputGroupProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	InputAddon: RecordArchitectureMerge<[IInputAddonProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	PinInputDigit: RecordArchitectureMerge<[IPinInputDigitProps, InteractionHTMLAttributes<HTMLInputElement>]>;
	CharacterCount: RecordArchitectureMerge<[ICharacterCountProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	FormHelperText: RecordArchitectureMerge<[IFormHelperTextProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	FormErrorMessage: RecordArchitectureMerge<[IFormErrorMessageProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Input - Pickers
	ReactionPicker: RecordArchitectureMerge<[IReactionPickerProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Forms
	AddressForm: RecordArchitectureMerge<[AddressFormProps, InteractionHTMLAttributes<HTMLFormElement>]>;
	LoginForm: RecordArchitectureMerge<[LoginFormProps, InteractionHTMLAttributes<HTMLFormElement>]>;
	SearchForm: RecordArchitectureMerge<[SearchFormProps, InteractionHTMLAttributes<HTMLFormElement>]>;
	FormWithValidation: RecordArchitectureMerge<[FormWithValidationProps, InteractionHTMLAttributes<HTMLFormElement>]>;
	FormHeader: RecordArchitectureMerge<[FormHeaderProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	FormFooter: RecordArchitectureMerge<[FormFooterProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Search
	AutoSearch: RecordArchitectureMerge<[AutoSearchProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AutocompleteDropdown: RecordArchitectureMerge<[AutocompleteDropdownProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SearchBar: SearchBarProps;
	SearchSuggestion: RecordArchitectureMerge<[SearchSuggestionProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Navigation
	Sidebar: RecordArchitectureMerge<[SidebarProps, InteractionHTMLAttributes<HTMLElement>]>;
	Pagination: PaginationProps;
	Link: LinkProps;
	BreadcrumbLink: BreadcrumbLinkProps;

	// Feedback
	Spinner: SpinnerProps;
	ProgressBar: ProgressBarProps;
	ProgressCircle: RecordArchitectureMerge<[IProgressCircleProps, InteractionHTMLAttributes<HTMLElement>]>;
	StepIcon: RecordArchitectureMerge<[IStepIconProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	StepConnector: RecordArchitectureMerge<[IStepConnectorProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccountProgressTracker: RecordArchitectureMerge<[IAccountProgressTrackerProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	Skeleton: SkeletonProps;
	SkeletonCircle: RecordArchitectureMerge<[SkeletonCircleProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SkeletonRectangle: RecordArchitectureMerge<[SkeletonRectangleProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SkeletonText: RecordArchitectureMerge<[SkeletonTextProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SkeletonTable: RecordArchitectureMerge<[SkeletonTableProps, InteractionHTMLAttributes<HTMLTableElement>]>;
	CardSkeleton: RecordArchitectureMerge<[CardSkeletonProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	Loader: RecordArchitectureMerge<[ILoaderProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	LazyLoader: RecordArchitectureMerge<[LazyLoaderProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	LoadingBoundary: RecordArchitectureMerge<[LoadingBoundaryProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	Toast: ToastProps;
	ToastStack: RecordArchitectureMerge<[{ toasts?: any[]; className?: string }, InteractionHTMLAttributes<HTMLDivElement>]>;
	NotificationBadge: RecordArchitectureMerge<[INotificationBadgeProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	ErrorBoundary: RecordArchitectureMerge<[IErrorBoundaryProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	ErrorMessage: RecordArchitectureMerge<[ErrorMessageProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	ResponseViewer: RecordArchitectureMerge<[ResponseViewerProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Dialogs
	Dialog: RecordArchitectureMerge<[DialogProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	Modal: RecordArchitectureMerge<[ModalProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SimpleModal: RecordArchitectureMerge<[SimpleModalProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	ConfirmationDialog: RecordArchitectureMerge<[ConfirmationDialogProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Chip & Tag
	Chip: RecordArchitectureMerge<[ChipRecipe, InteractionHTMLAttributes<HTMLSpanElement>]>;
	Tag: RecordArchitectureMerge<[TagRecipe, InteractionHTMLAttributes<HTMLSpanElement>]>;

	// Controls - Tooltip
	Tooltip: TooltipProps;

	// Controls - Rating
	Rating: RecordArchitectureMerge<[IRatingProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Layout
	DragAndDrop: RecordArchitectureMerge<[DragAndDropProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	Click: RecordArchitectureMerge<[ClickProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	Transformation: RecordArchitectureMerge<[TransformationProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Link
	Abbr: RecordArchitectureMerge<[AbbrProps, InteractionHTMLAttributes<HTMLElement>]>;
	InlineCode: RecordArchitectureMerge<[InlineCodeProps, InteractionHTMLAttributes<HTMLElement>]>;
	InlineText: RecordArchitectureMerge<[InlineTextProps, InteractionHTMLAttributes<HTMLSpanElement>]>;

	// Burger Menu
	BurgerMenu: RecordArchitectureMerge<[BurgerMenuProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Account Forms
	AccountSettingsForm: RecordArchitectureMerge<[AccountSettingsFormProps, InteractionHTMLAttributes<HTMLFormElement>]>;
	UserProfileCard: RecordArchitectureMerge<[UserProfileCardProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Time Slot
	TimeSlot: RecordArchitectureMerge<[ITimeSlotProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controller Settings
	ControllerSettings: RecordArchitectureMerge<[InterfaceControllerSettings, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Sortable Table Header
	SortableTableHeader: RecordArchitectureMerge<[SortableTableHeaderProps, InteractionHTMLAttributes<HTMLTableHeaderCellElement>]>;

	// Shared Canvas
	SharedCanvas: RecordArchitectureMerge<[SharedCanvasProps, InteractionHTMLAttributes<HTMLCanvasElement>]>;

	// Node Palette
	NodePalette: RecordArchitectureMerge<[NodePaletteProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Multi-select
	MultiSelect: RecordArchitectureMerge<[MultiSelectProps, InteractionHTMLAttributes<HTMLSelectElement>]>;

	// Overlay
	LoadingOverlay: RecordArchitectureMerge<[ILoadingOverlayProps, InteractionHTMLAttributes<HTMLDivElement>]>;

}
