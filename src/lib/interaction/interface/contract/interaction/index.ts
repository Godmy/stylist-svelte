import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
// Buttons - from contract
import type { RecipeButtonProps as ButtonProps } from '$stylist/control/interface/recipe/button-props';
import type { RecipeCloseButtonProps as CloseButtonProps } from '$stylist/control/interface/recipe/close-button-props';
import type { RecipeCopyButtonProps as CopyButtonProps } from '$stylist/control/interface/recipe/copy-button-props';
import type { RecipeIconButtonProps as IconButtonProps } from '$stylist/control/interface/recipe/icon-button-props';
import type { RecipeFollowButtonProps as FollowButtonProps } from '$stylist/control/interface/recipe/follow-button-props';
import type { RecipeSplitButtonProps as SplitButtonProps } from '$stylist/control/interface/recipe/split-button-props';
import type { RecipePageButtonProps as PageButtonProps } from '$stylist/control/interface/recipe/page-button-props';
// Controls - Toggles - from control
import type { RecipeCheckbox as CheckboxProps } from '$stylist/control/interface/recipe/checkbox-checkbox';
import type { RecipeRadio as RadioProps } from '$stylist/control/interface/recipe/radio-radio';
import type { RecipeSwitchProps as SwitchProps } from '$stylist/control/interface/recipe/switch-props';
import type { RecipeToggle as ToggleProps } from '$stylist/control/interface/recipe/toggle-toggle';
import type { RecipeToggleGroupProps as ToggleGroupProps } from '$stylist/control/interface/recipe/toggle-group-props';
// Controls - Toggles - from toggles
import type { RecipeToggleBaseProps as RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';
import type { RecipeToggleInputProps as RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';
// Controls - Tabs - from other
import type { SlotTabContainer as TabContainerProps } from '$stylist/control/interface/slot/tab-container';
import type { SlotTabIndicator as TabIndicatorProps } from '$stylist/control/interface/slot/tab-indicator';
import type { SlotTabPanel as TabPanelProps } from '$stylist/control/interface/slot/tab-panel';
import type { SlotTab as TabProps } from '$stylist/control/interface/slot/tab-tabs';
import type { SlotTabs as TabsProps } from '$stylist/control/interface/slot/tabs';
import type { SlotTab as ITab } from '$stylist/control/interface/slot/tab-tab-group';
import type { SlotTabGroup as ITabGroupProps } from '$stylist/control/interface/slot/tab-group';
import type { SlotTabStyleClasses as ITabStyleClasses } from '$stylist/control/interface/slot/tab-style-classes';
// Controls - Accordion - from other
import type { SlotAccordionBase as AccordionBaseProps } from '$stylist/control/interface/slot/accordion-base';
import type { SlotAccordionHeaderDouble as AccordionHeaderDoubleProps } from '$stylist/control/interface/slot/accordion-header-double';
import type { SlotAccordionHeader as AccordionHeaderProps } from '$stylist/control/interface/slot/accordion-header';
import type { SlotAccordionItem as AccordionItemProps } from '$stylist/control/interface/slot/accordion-item';
import type { SlotAccordionPanel as AccordionPanelProps } from '$stylist/control/interface/slot/accordion-panel';
import type { SlotComplexAccordion as ComplexAccordionProps } from '$stylist/control/interface/slot/complex-accordion';
import type { SlotAccordion as IAccordionProps } from '$stylist/control/interface/slot/accordion';
import type { SlotAdvancedAccordionItem as IAdvancedAccordionItem } from '$stylist/control/interface/slot/advanced-accordion-item';
import type { RecipeAdvancedAccordionProps as IAdvancedAccordionProps } from '$stylist/control/interface/recipe/advanced-accordion-props';
// Controls - Selectors - from other
import type { SlotQuantitySelector as IQuantitySelectorProps } from '$stylist/control/interface/slot/quantity-selector';
import type { SlotSelectOption as ISelectOption } from '$stylist/control/interface/slot/select-option';
import type { SlotSelect as ISelectProps } from '$stylist/control/interface/slot/select';
import type { SlotSelectStyleClasses as ISelectStyleClasses } from '$stylist/control/interface/slot/select-style-classes';
// Controls - Sliders - from other
import type { SlotRangeSlider as IRangeSliderProps } from '$stylist/input/interface/slot/range-slider';
// Controls - Tables - from other
import type { SlotAdvancedColumnDefinition as AdvancedColumnDefinition } from '$stylist/control/interface/slot/advanced-column-definition';
import type { SlotColumnConfig as ColumnConfig } from '$stylist/control/interface/slot/column-config';
import type { SlotColumnManager as ColumnManagerProps } from '$stylist/control/interface/slot/column-manager';
import type { SlotDataTableAdvanced as DataTableAdvancedProps } from '$stylist/control/interface/slot/data-table-advanced';
import type { SlotDataTableColumn as DataTableColumn } from '$stylist/control/interface/slot/data-table-column';
import type { SlotDataTableRecipe as DataTableRecipe } from '$stylist/control/interface/slot/data-table-recipe';
import type { SlotSortableListItem as SortableListItem } from '$stylist/control/interface/slot/sortable-list-item';
import type { SlotSortableList as SortableListProps } from '$stylist/control/interface/slot/sortable-list';
import type { SlotTableRecord as TableRecord } from '$stylist/control/interface/slot/table-record';
import type { SlotTableWithFilters as TableWithFiltersProps } from '$stylist/control/interface/slot/table-with-filters';
import type { SlotTableWithGrouping as TableWithGroupingProps } from '$stylist/control/interface/slot/table-with-grouping';
import type { SlotTableWithStripes as TableWithStripesProps } from '$stylist/control/interface/slot/table-with-stripes';
// Controls - Menus - from other
import type { SlotCloseDropdownFunc as CloseDropdownFunc } from '$stylist/control/interface/slot/close-dropdown-func';
import type { SlotDropdownMenu as IDropdownMenuProps } from '$stylist/control/interface/slot/dropdown-menu';
import type { SlotDropdownMenuStyleClasses as IDropdownMenuStyleClasses } from '$stylist/control/interface/slot/dropdown-menu-style-classes';
import type { SlotMenuItem as MenuItemProps } from '$stylist/control/interface/slot/menu-item';
// Controls - Toolbars - from other
import type { SlotZoomToolbar as ZoomToolbarProps } from '$stylist/control/interface/slot/zoom-toolbar';
import type { SlotZoomControls as ZoomControlsProps } from '$stylist/control/interface/slot/zoom-controls';
// Input - from contract
import type { RecipeInputFieldProps as InputFieldProps } from '$stylist/input/interface/recipe/input-field-props';
import type { RecipeTextAreaProps as TextAreaProps } from '$stylist/input/interface/recipe/text-area-props';
import type { RecipeNumberInputProps as NumberInputProps } from '$stylist/input/interface/recipe/number-input-props';
import type { RecipeSearchBarProps as SearchBarProps } from '$stylist/control/interface/recipe/search-bar-props';
// Input - from other
import type { SlotAdvancedInput as IAdvancedInputProps } from '$stylist/input/interface/slot/advanced-input';
import type { SlotCharacterCount as ICharacterCountProps } from '$stylist/input/interface/slot/character-count';
import type { SlotFormErrorMessage as IFormErrorMessageProps } from '$stylist/input/interface/slot/form-error-message';
import type { SlotFormHelperText as IFormHelperTextProps } from '$stylist/input/interface/slot/form-helper-text';
import type { SlotInputAddon as IInputAddonProps } from '$stylist/input/interface/slot/input-addon';
import type { SlotInputBase as IInputBaseProps } from '$stylist/input/interface/slot/input-base';
import type { SlotInputDouble as IInputDoubleProps } from '$stylist/input/interface/slot/input-double';
import type { SlotInputEmail as IInputEmailProps } from '$stylist/input/interface/slot/input-email';
import type { SlotInputField as IInputFieldProps } from '$stylist/input/interface/slot/input-field';
import type { SlotInputGroup as IInputGroupProps } from '$stylist/input/interface/slot/input-group';
import type { SlotInputLong as IInputLongProps } from '$stylist/input/interface/slot/input-long';
import type { SlotInputPassword as IInputPasswordProps } from '$stylist/input/interface/slot/input-password';
import type { SlotPinInputDigit as IPinInputDigitProps } from '$stylist/input/interface/slot/pin-input-digit';
import type { SlotTextarea as ITextareaProps } from '$stylist/input/interface/slot/textarea';
import type { SlotInputCore as InputCoreProps } from '$stylist/input/interface/slot/input-core';
import type { SlotInputHelperChildren as InputHelperChildrenProps } from '$stylist/input/interface/slot/input-helper-children';
import type { SlotInputHelper as InputHelperProps } from '$stylist/input/interface/slot/input-helper';
import type { SlotInputWithHelper as InputWithHelperProps } from '$stylist/input/interface/slot/input-with-helper';
import type { SlotInputWithLabel as InputWithLabelProps } from '$stylist/input/interface/slot/input-with-label';
import type { SlotInputWithValidation as InputWithValidationProps } from '$stylist/input/interface/slot/input-with-validation';
import type { SlotNumberInput as INumberInputProps } from '$stylist/input/interface/slot/number-input';
import type { SlotPhoneNumberInput as IPhoneNumberInputProps } from '$stylist/input/interface/slot/phone-number-input';
import type { SlotAdvancedPasswordInput as IAdvancedPasswordInputProps } from '$stylist/input/interface/slot/advanced-password-input';
import type { SlotTagInput as TagInputProps } from '$stylist/input/interface/slot/tag-input';
import type { SlotRangeInput as RangeInputProps } from '$stylist/input/interface/slot/range-input';
// Input - Pickers - from other
import type { IReactionPickerStyleClasses } from '$stylist/input/type/struct/reaction-picker-style-classes';
import type { SlotReactionPicker as IReactionPickerProps } from '$stylist/input/interface/slot/reaction-picker';
// Forms - from other
import type { SlotAddressForm as AddressFormProps } from '$stylist/form/interface/slot/address-form';
import type { SlotLoginForm as LoginFormProps } from '$stylist/form/interface/slot/login-form';
import type { SlotSearchForm as SearchFormProps } from '$stylist/form/interface/slot/search-form';
import type { SlotFormWithValidation as FormWithValidationProps } from '$stylist/form/interface/slot/form-with-validation';
import type { SlotFormHeader as FormHeaderProps } from '$stylist/form/interface/slot/form-header';
import type { SlotFormFooter as FormFooterProps } from '$stylist/form/interface/slot/form-footer';
// Search - from other
import type { SlotAutoSearch as AutoSearchProps } from '$stylist/control/interface/slot/auto-search';
import type { SlotAutocompleteDropdownOption as AutocompleteDropdownOption } from '$stylist/control/interface/slot/autocomplete-dropdown-option';
import type { SlotAutocompleteDropdown as AutocompleteDropdownProps } from '$stylist/control/interface/slot/autocomplete-dropdown';
import type { SlotSearchBarEvents as ISearchBarEvents } from '$stylist/control/interface/slot/search-bar-events';
import type { SlotSearchBar as ISearchBarProps } from '$stylist/control/interface/slot/search-bar';
import type { SlotSearchSuggestionItem as SearchSuggestionItem } from '$stylist/control/interface/slot/search-suggestion-item';
import type { SlotSearchSuggestion as SearchSuggestionProps } from '$stylist/control/interface/slot/search-suggestion';
// Navigation - from contract
import type { RecipeLinkProps as LinkProps } from '$stylist/navigation/interface/recipe/link-props';
import type { RecipeBreadcrumbLinkProps as BreadcrumbLinkProps } from '$stylist/navigation/interface/recipe/breadcrumb-link-props';
import type { RecipePaginationProps as PaginationProps } from '$stylist/navigation/interface/recipe/pagination-props';
// Navigation - from other
import type { SlotSidebar as SidebarProps } from '$stylist/navigation/interface/slot/sidebar';
// Feedback - from contract
import type { RecipeSpinnerProps as SpinnerProps } from '$stylist/notification/interface/recipe/spinner-props';
import type { RecipeProgressBarProps as ProgressBarProps } from '$stylist/notification/interface/recipe/progress-bar-props';
import type { RecipeSkeletonProps as SkeletonProps } from '$stylist/notification/interface/recipe/skeleton-props';
import type { RecipeToastProps as ToastProps } from '$stylist/notification/interface/recipe/toast-props';
import type { RecipeTooltipProps as TooltipProps } from '$stylist/control/interface/recipe/tooltip-props';
// Feedback - from other
import type { SlotAccountProgressTracker as IAccountProgressTrackerProps } from '$stylist/notification/interface/slot/account-progress-tracker';
import type { SlotAlert as IAlertProps } from '$stylist/notification/interface/slot/alert';
import type { SlotBaseFeedback as IBaseFeedbackProps } from '$stylist/notification/interface/slot/base-feedback';
import type { SlotErrorMessage as IErrorMessageProps } from '$stylist/notification/interface/slot/error-message-notification';
import type { SlotLoader as ILoaderProps } from '$stylist/notification/interface/slot/loader';
import type { SlotNotificationBadge as INotificationBadgeProps } from '$stylist/notification/interface/slot/notification-badge';
import type { SlotProgressBar as IProgressBarProps } from '$stylist/notification/interface/slot/progress-bar';
import type { SlotProgressCircle as IProgressCircleProps } from '$stylist/notification/interface/slot/progress-circle';
import type { SlotSimpleTooltip as ISimpleTooltipProps } from '$stylist/notification/interface/slot/simple-tooltip';
import type { SlotSkeleton as ISkeletonProps } from '$stylist/notification/interface/slot/skeleton';
import type { SlotSpinner as ISpinnerProps } from '$stylist/notification/interface/slot/spinner';
import type { SlotStepConnector as IStepConnectorProps } from '$stylist/notification/interface/slot/step-connector';
import type { SlotStepIcon as IStepIconProps } from '$stylist/notification/interface/slot/step-icon';
import type { SlotTableSkeleton as ITableSkeletonProps } from '$stylist/notification/interface/slot/table-skeleton';
import type { SkeletonCircleProps } from '$stylist/notification/type/struct/skeleton-circle-props';
import type { SkeletonRectangleProps } from '$stylist/notification/type/struct/skeleton-rectangle-props';
import type { SkeletonTextProps } from '$stylist/notification/type/struct/skeleton-text-props';
import type { SkeletonTableProps } from '$stylist/notification/type/struct/skeleton-table-props';
import type { SlotCardSkeleton as CardSkeletonProps } from '$stylist/notification/interface/slot/card-skeleton';
import type { SlotErrorBoundaryDetails as IErrorBoundaryDetails } from '$stylist/notification/interface/slot/error-boundary-details';
import type { SlotErrorBoundary as IErrorBoundaryProps } from '$stylist/notification/interface/slot/error-boundary';
import type { SlotErrorMessage as ErrorMessageProps } from '$stylist/notification/interface/slot/error-message-error-message';
import type { SlotConfirmationDialog as ConfirmationDialogProps } from '$stylist/navigation/interface/slot/confirmation-dialog';
import type { SlotDialog as DialogProps } from '$stylist/navigation/interface/slot/dialog';
import type { SlotModal as ModalProps } from '$stylist/navigation/interface/slot/modal';
import type { SlotSimpleModal as SimpleModalProps } from '$stylist/notification/interface/slot/simple-modal';
import type { SlotLazyLoader as LazyLoaderProps } from '$stylist/notification/interface/slot/lazy-loader';
import type { SlotLoadingBoundary as LoadingBoundaryProps } from '$stylist/notification/interface/slot/loading-boundary';
import type { SlotResponseViewer as ResponseViewerProps } from '$stylist/notification/interface/slot/response-viewer';
import type { SlotLoadingOverlay as ILoadingOverlayProps } from '$stylist/notification/interface/slot/loading-overlay';
// Rating - from other
import type { SlotRating as IRatingProps } from '$stylist/social/interface/slot/rating';
// Layout - from other
import type { SlotDragAndDrop as DragAndDropProps } from '$stylist/control/interface/slot/drag-and-drop';
import type { SlotClick as ClickProps } from '$stylist/control/interface/slot/click';
import type { SlotTransformation as TransformationProps } from '$stylist/animation/interface/slot/transformation';
// Link types - from other
import type { SlotAbbr as AbbrProps } from '$stylist/navigation/interface/slot/abbr';
import type { SlotInlineBase as InlineBaseProps } from '$stylist/navigation/interface/slot/inline-base';
import type { SlotInlineCode as InlineCodeProps } from '$stylist/navigation/interface/slot/inline-code';
import type { SlotInlineText as InlineTextProps } from '$stylist/navigation/interface/slot/inline-text';
// Burger Menu - from other
import type { SlotBurgerMenu as BurgerMenuProps } from '$stylist/control/interface/slot/burger-menu';
// Account Forms - from other
import type { SlotAccountSettingsForm as AccountSettingsFormProps } from '$stylist/form/interface/slot/account-settings-form';
import type { SlotUserProfileCard as UserProfileCardProps } from '$stylist/form/interface/slot/user-profile-card';
// Time Slot - from other
import type { SlotTimeSlot as ITimeSlot } from '$stylist/input/interface/slot/time-slot-time-slot';
import type { SlotTimeSlotProps as ITimeSlotProps } from '$stylist/input/interface/slot/time-slot-time-slot-2';
// Controller Settings - from other
import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
// Sortable Table Header - from other
import type { SlotSortableTableHeader as SortableTableHeaderProps } from '$stylist/control/interface/slot/sortable-table-header';
// Shared Canvas - from other
import type { SlotSharedCanvas as SharedCanvasProps } from '$stylist/canvas/interface/slot/shared-canvas';
// Node Palette - from other
import type { SlotNodePaletteItem as NodePaletteItem } from '$stylist/science/interface/slot/node-palette-item';
import type { SlotNodePalette as NodePaletteProps } from '$stylist/science/interface/slot/node-palette';
// Multi-select - from other
import type { SlotMultiSelectOption as MultiSelectOption } from '$stylist/control/interface/slot/multi-select-option';
import type { SlotMultiSelect as MultiSelectProps } from '$stylist/control/interface/slot/multi-select';
// Tag and Chip - from information
import type { TagRecipe } from '$stylist/typography/interface/recipe/tag';
import type { ChipRecipe } from '$stylist/typography/interface/recipe/chip';
import type { SlotTransformation } from '$stylist/animation/interface/slot/transformation';
import type { SlotSharedCanvas } from '$stylist/canvas/interface/slot/shared-canvas';
import type { SlotAccordionHeader } from '$stylist/control/interface/slot/accordion-header';
import type { SlotAccordionHeaderDouble } from '$stylist/control/interface/slot/accordion-header-double';
import type { SlotComplexAccordion } from '$stylist/control/interface/slot/complex-accordion';
import type { SlotAccordionItem } from '$stylist/control/interface/slot/accordion-item';
import type { SlotAccordionPanel } from '$stylist/control/interface/slot/accordion-panel';
import type { SlotAccordion } from '$stylist/control/interface/slot/accordion';
import type { RecipeAdvancedAccordionProps } from '$stylist/control/interface/recipe/advanced-accordion-props';
import type { SlotAutoSearch } from '$stylist/control/interface/slot/auto-search';
import type { SlotAutocompleteDropdown } from '$stylist/control/interface/slot/autocomplete-dropdown';
import type { SlotBurgerMenu } from '$stylist/control/interface/slot/burger-menu';
import type { RecipeButtonProps } from '$stylist/control/interface/recipe/button-props';
import type { RecipeCopyButtonProps } from '$stylist/control/interface/recipe/copy-button-props';
import type { RecipeIconButtonProps } from '$stylist/control/interface/recipe/icon-button-props';
import type { RecipePageButtonProps } from '$stylist/control/interface/recipe/page-button-props';
import type { RecipeCheckboxProps } from '$stylist/control/interface/recipe/checkbox-props';
import type { SlotClickable } from '$stylist/interaction/interface/slot/clickable';
import type { RecipeCloseButtonProps } from '$stylist/control/interface/recipe/close-button-props';
import type { SlotDragAndDrop } from '$stylist/control/interface/slot/drag-and-drop';
import type { SlotDropdownMenu } from '$stylist/control/interface/slot/dropdown-menu';
import type { RecipeFollowButtonProps } from '$stylist/control/interface/recipe/follow-button-props';
import type { SlotMenuItem } from '$stylist/control/interface/slot/menu-item';
import type { SlotMultiSelect } from '$stylist/control/interface/slot/multi-select';
import type { SlotQuantitySelector } from '$stylist/control/interface/slot/quantity-selector';
import type { RecipeRadioProps } from '$stylist/control/interface/recipe/radio-props';
import type { RecipeSearchBarProps } from '$stylist/control/interface/recipe/search-bar-props';
import type { SlotSearchSuggestion } from '$stylist/control/interface/slot/search-suggestion';
import type { SlotSelect } from '$stylist/control/interface/slot/select';
import type { SlotSortableTableHeader } from '$stylist/control/interface/slot/sortable-table-header';
import type { RecipeSplitButtonProps } from '$stylist/control/interface/recipe/split-button-props';
import type { SlotSwitch } from '$stylist/control/interface/slot/switch';
import type { SlotTabGroup } from '$stylist/control/interface/slot/tab-group';
import type { SlotColumnManager } from '$stylist/control/interface/slot/column-manager';
import type { SlotDataTableRecipe } from '$stylist/control/interface/slot/data-table-recipe';
import type { SlotDataTableAdvanced } from '$stylist/control/interface/slot/data-table-advanced';
import type { SlotSortableList } from '$stylist/control/interface/slot/sortable-list';
import type { SlotTableWithFilters } from '$stylist/control/interface/slot/table-with-filters';
import type { SlotTableWithGrouping } from '$stylist/control/interface/slot/table-with-grouping';
import type { SlotTableWithStripes } from '$stylist/control/interface/slot/table-with-stripes';
import type { SlotTab } from '$stylist/control/interface/slot/tab';
import type { SlotTabIndicator } from '$stylist/control/interface/slot/tab-indicator';
import type { SlotTabPanel } from '$stylist/control/interface/slot/tab-panel';
import type { SlotTabContainer } from '$stylist/control/interface/slot/tab-container';
import type { SlotTabs } from '$stylist/control/interface/slot/tabs';
import type { RecipeToggleGroupProps } from '$stylist/control/interface/recipe/toggle-group-props';
import type { RecipeToggleProps } from '$stylist/control/interface/recipe/toggle-props';
import type { RecipeToggleGroupRootProps } from '$stylist/control/interface/recipe/toggle-group-root-props';
import type { RecipeToggleGroupItemProps } from '$stylist/control/interface/recipe/toggle-group-item-props';
import type { RecipeRadioButtonGroupProps } from '$stylist/control/interface/recipe/radio-button-group-props';
import type { RecipeActionSegmentedControlProps } from '$stylist/control/interface/recipe/action-segmented-control-props';
import type { RecipeAdvancedToggleProps } from '$stylist/control/interface/recipe/advanced-toggle-props';
import type { SlotTooltip } from '$stylist/control/interface/slot/tooltip';
import type { SlotZoomControls } from '$stylist/control/interface/slot/zoom-controls';
import type { SlotZoomToolbar } from '$stylist/control/interface/slot/zoom-toolbar';
import type { SlotAccountSettingsForm } from '$stylist/form/interface/slot/account-settings-form';
import type { SlotUserProfileCard } from '$stylist/form/interface/slot/user-profile-card';
import type { SlotFormFooter } from '$stylist/form/interface/slot/form-footer';
import type { SlotFormHeader } from '$stylist/form/interface/slot/form-header';
import type { SlotAddressForm } from '$stylist/form/interface/slot/address-form';
import type { SlotFormWithValidation } from '$stylist/form/interface/slot/form-with-validation';
import type { SlotLoginForm } from '$stylist/form/interface/slot/login-form';
import type { SlotSearchForm } from '$stylist/form/interface/slot/search-form';
import type { ContractMapInformation } from '$stylist/geo/interface/contract/map-information';
import type { SlotAdvancedPasswordInput } from '$stylist/input/interface/slot/advanced-password-input';
import type { RecipeInputFieldProps } from '$stylist/input/interface/recipe/input-field-props';
import type { SlotInputEmail } from '$stylist/input/interface/slot/input-email';
import type { SlotInputPassword } from '$stylist/input/interface/slot/input-password';
import type { SlotInputGroup } from '$stylist/input/interface/slot/input-group';
import type { SlotInputLong } from '$stylist/input/interface/slot/input-long';
import type { SlotInputDouble } from '$stylist/input/interface/slot/input-double';
import type { SlotFormErrorMessage } from '$stylist/input/interface/slot/form-error-message';
import type { SlotFormHelperText } from '$stylist/input/interface/slot/form-helper-text';
import type { SlotCharacterCount } from '$stylist/input/interface/slot/character-count';
import type { SlotInputAddon } from '$stylist/input/interface/slot/input-addon';
import type { SlotPinInputDigit } from '$stylist/input/interface/slot/pin-input-digit';
import type { SlotAdvancedInput } from '$stylist/input/interface/slot/advanced-input';
import type { RecipeNumberInputProps } from '$stylist/input/interface/recipe/number-input-props';
import type { SlotPhoneNumberInput } from '$stylist/input/interface/slot/phone-number-input';
import type { SlotRangeInput } from '$stylist/input/interface/slot/range-input';
import type { SlotRangeSlider } from '$stylist/input/interface/slot/range-slider';
import type { SlotReactionPicker } from '$stylist/input/interface/slot/reaction-picker';
import type { SlotTagInput } from '$stylist/input/interface/slot/tag-input';
import type { RecipeTextAreaProps } from '$stylist/input/interface/recipe/text-area-props';
import type { SlotTimeSlot } from '$stylist/input/interface/slot/time-slot';
import type { RecipeBreadcrumbLinkProps } from '$stylist/navigation/interface/recipe/breadcrumb-link-props';
import type { SlotConfirmationDialog } from '$stylist/navigation/interface/slot/confirmation-dialog';
import type { SlotDialog } from '$stylist/navigation/interface/slot/dialog';
import type { SlotModal } from '$stylist/navigation/interface/slot/modal';
import type { SlotLink } from '$stylist/navigation/interface/slot/link';
import type { SlotInlineText } from '$stylist/navigation/interface/slot/inline-text';
import type { SlotAbbr } from '$stylist/navigation/interface/slot/abbr';
import type { SlotInlineCode } from '$stylist/navigation/interface/slot/inline-code';
import type { SlotPagination } from '$stylist/navigation/interface/slot/pagination';
import type { SlotSidebar } from '$stylist/navigation/interface/slot/sidebar';
import type { SlotCardSkeleton } from '$stylist/notification/interface/slot/card-skeleton';
import type { SlotErrorBoundary } from '$stylist/notification/interface/slot/error-boundary';
import type { SlotErrorMessage } from '$stylist/notification/interface/slot/error-message';
import type { SlotSimpleModal } from '$stylist/notification/interface/slot/simple-modal';
import type { SlotLazyLoader } from '$stylist/notification/interface/slot/lazy-loader';
import type { SlotLoadingBoundary } from '$stylist/notification/interface/slot/loading-boundary';
import type { SlotResponseViewer } from '$stylist/notification/interface/slot/response-viewer';
import type { SlotNotificationBadge } from '$stylist/notification/interface/slot/notification-badge';
import type { SlotLoader } from '$stylist/notification/interface/slot/loader';
import type { SlotProgressCircle } from '$stylist/notification/interface/slot/progress-circle';
import type { SlotStepIcon } from '$stylist/notification/interface/slot/step-icon';
import type { SlotStepConnector } from '$stylist/notification/interface/slot/step-connector';
import type { SlotAccountProgressTracker } from '$stylist/notification/interface/slot/account-progress-tracker';
import type { SlotLoadingOverlay } from '$stylist/notification/interface/slot/loading-overlay';
import type { RecipeProgressBarProps } from '$stylist/notification/interface/recipe/progress-bar-props';
import type { RecipeSkeletonProps } from '$stylist/notification/interface/recipe/skeleton-props';
import type { RecipeSpinnerProps } from '$stylist/notification/interface/recipe/spinner-props';
import type { RecipeToastProps } from '$stylist/notification/interface/recipe/toast-props';
import type { SlotNodePalette } from '$stylist/science/interface/slot/node-palette';
import type { SlotRating } from '$stylist/social/interface/slot/rating';

// Organism - Card в†’ РїРµСЂРµРЅРµСЃРµРЅРѕ РІ ContractMapInformation

// Organism - Layout (РёР· architecture) в†’ С‡РµСЂРµР· MapLayoutContract

// Export interface ContractInteraction
// Layout-РїСЂРёРјРёС‚РёРІС‹ (Stack, Container, GridLayout Рё С‚.Рґ.) СѓРЅР°СЃР»РµРґРѕРІР°РЅС‹ РёР· MapLayoutContract
export interface ContractInteraction {
	// Buttons
	Button: RecipeButtonProps;
	IconButton: RecipeIconButtonProps;
	CloseButton: RecipeCloseButtonProps;
	CopyButton: RecipeCopyButtonProps;
	FollowButton: RecipeFollowButtonProps;
	SplitButton: RecipeSplitButtonProps;
	PageButton: RecipePageButtonProps;

	// Controls - Toggles
	SlotToggle: RecipeToggleProps;
	Switch: SlotSwitch;
	SlotCheckbox: RecipeCheckboxProps;
	SlotRadio: RecipeRadioProps;
	ToggleGroup: RecipeToggleGroupProps;
	ToggleGroupItem: StructIntersectAll<[RecipeToggleGroupItemProps, InteractionHTMLAttributes<HTMLButtonElement>]>;
	ToggleGroupRoot: StructIntersectAll<[RecipeToggleGroupRootProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	RadioButtonGroup: StructIntersectAll<[RecipeRadioButtonGroupProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AdvancedToggle: StructIntersectAll<[RecipeAdvancedToggleProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	ActionSegmentedControl: StructIntersectAll<[RecipeActionSegmentedControlProps, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Tabs
	Tab: StructIntersectAll<[SlotTab, InteractionHTMLAttributes<HTMLButtonElement>]>;
	TabPanel: StructIntersectAll<[SlotTabPanel, InteractionHTMLAttributes<HTMLDivElement>]>;
	TabContainer: StructIntersectAll<[SlotTabContainer, InteractionHTMLAttributes<HTMLDivElement>]>;
	Tabs: StructIntersectAll<[SlotTabs, InteractionHTMLAttributes<HTMLDivElement>]>;
	TabIndicator: StructIntersectAll<[SlotTabIndicator, InteractionHTMLAttributes<HTMLDivElement>]>;
	TabGroup: StructIntersectAll<[SlotTabGroup, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Accordion
	Accordion: StructIntersectAll<[SlotAccordion, InteractionHTMLAttributes<HTMLDivElement>]>;
	AdvancedAccordion: StructIntersectAll<[RecipeAdvancedAccordionProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccordionItem: StructIntersectAll<[SlotAccordionItem, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccordionPanel: StructIntersectAll<[SlotAccordionPanel, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccordionHeader: StructIntersectAll<[SlotAccordionHeader, InteractionHTMLAttributes<HTMLButtonElement>]>;
	AccordionHeaderDouble: StructIntersectAll<[SlotAccordionHeaderDouble, InteractionHTMLAttributes<HTMLButtonElement>]>;
	ComplexAccordion: StructIntersectAll<[SlotComplexAccordion, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Selectors
	Select: StructIntersectAll<[SlotSelect, InteractionHTMLAttributes<HTMLSelectElement>]>;
	QuantitySelector: StructIntersectAll<[SlotQuantitySelector, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Sliders
	RangeSlider: StructIntersectAll<[SlotRangeSlider, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Tables
	DataTable: StructIntersectAll<[SlotDataTableRecipe<any>, InteractionHTMLAttributes<HTMLTableElement>]>;
	DataTableAdvanced: StructIntersectAll<[SlotDataTableAdvanced<any>, InteractionHTMLAttributes<HTMLTableElement>]>;
	ColumnManager: StructIntersectAll<[SlotColumnManager, InteractionHTMLAttributes<HTMLDivElement>]>;
	SortableList: StructIntersectAll<[SlotSortableList, InteractionHTMLAttributes<HTMLDivElement>]>;
	TableWithFilters: StructIntersectAll<[SlotTableWithFilters, InteractionHTMLAttributes<HTMLTableElement>]>;
	TableWithGrouping: StructIntersectAll<[SlotTableWithGrouping, InteractionHTMLAttributes<HTMLTableElement>]>;
	TableWithStripes: StructIntersectAll<[SlotTableWithStripes, InteractionHTMLAttributes<HTMLTableElement>]>;

	// Controls - Menus
	DropdownMenu: StructIntersectAll<[SlotDropdownMenu, InteractionHTMLAttributes<HTMLDivElement>]>;
	MenuItem: StructIntersectAll<[SlotMenuItem, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Toolbars
	ZoomToolbar: StructIntersectAll<[SlotZoomToolbar, InteractionHTMLAttributes<HTMLDivElement>]>;
	ZoomControls: StructIntersectAll<[SlotZoomControls, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Input
	AdvancedInput: StructIntersectAll<[SlotAdvancedInput, InteractionHTMLAttributes<HTMLInputElement>]>;
	InputField: RecipeInputFieldProps;
	InputEmail: StructIntersectAll<[SlotInputEmail, InteractionHTMLAttributes<HTMLInputElement>]>;
	InputPassword: StructIntersectAll<[SlotInputPassword, InteractionHTMLAttributes<HTMLInputElement>]>;
	AdvancedPasswordInput: StructIntersectAll<[SlotAdvancedPasswordInput, InteractionHTMLAttributes<HTMLInputElement>]>;
	InputDouble: StructIntersectAll<[SlotInputDouble, InteractionHTMLAttributes<HTMLDivElement>]>;
	InputLong: StructIntersectAll<[SlotInputLong, InteractionHTMLAttributes<HTMLTextAreaElement>]>;
	NumberInput: RecipeNumberInputProps;
	PhoneNumberInput: StructIntersectAll<[SlotPhoneNumberInput, InteractionHTMLAttributes<HTMLInputElement>]>;
	TextArea: RecipeTextAreaProps;
	TagInput: StructIntersectAll<[SlotTagInput, InteractionHTMLAttributes<HTMLDivElement>]>;
	RangeInput: StructIntersectAll<[SlotRangeInput, InteractionHTMLAttributes<HTMLDivElement>]>;
	InputGroup: StructIntersectAll<[SlotInputGroup, InteractionHTMLAttributes<HTMLDivElement>]>;
	InputAddon: StructIntersectAll<[SlotInputAddon, InteractionHTMLAttributes<HTMLDivElement>]>;
	PinInputDigit: StructIntersectAll<[SlotPinInputDigit, InteractionHTMLAttributes<HTMLInputElement>]>;
	CharacterCount: StructIntersectAll<[SlotCharacterCount, InteractionHTMLAttributes<HTMLDivElement>]>;
	FormHelperText: StructIntersectAll<[SlotFormHelperText, InteractionHTMLAttributes<HTMLDivElement>]>;
	FormErrorMessage: StructIntersectAll<[SlotFormErrorMessage, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Input - Pickers
	ReactionPicker: StructIntersectAll<[SlotReactionPicker, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Forms
	AddressForm: StructIntersectAll<[SlotAddressForm, InteractionHTMLAttributes<HTMLFormElement>]>;
	LoginForm: StructIntersectAll<[SlotLoginForm, InteractionHTMLAttributes<HTMLFormElement>]>;
	SearchForm: StructIntersectAll<[SlotSearchForm, InteractionHTMLAttributes<HTMLFormElement>]>;
	FormWithValidation: StructIntersectAll<[SlotFormWithValidation, InteractionHTMLAttributes<HTMLFormElement>]>;
	FormHeader: StructIntersectAll<[SlotFormHeader, InteractionHTMLAttributes<HTMLDivElement>]>;
	FormFooter: StructIntersectAll<[SlotFormFooter, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Search
	AutoSearch: StructIntersectAll<[SlotAutoSearch, InteractionHTMLAttributes<HTMLDivElement>]>;
	AutocompleteDropdown: StructIntersectAll<[SlotAutocompleteDropdown, InteractionHTMLAttributes<HTMLDivElement>]>;
	SearchBar: RecipeSearchBarProps;
	SearchSuggestion: StructIntersectAll<[SlotSearchSuggestion, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Navigation
	Sidebar: StructIntersectAll<[SlotSidebar, InteractionHTMLAttributes<HTMLElement>]>;
	Pagination: SlotPagination;
	Link: SlotLink;
	BreadcrumbLink: RecipeBreadcrumbLinkProps;

	// Feedback
	Spinner: RecipeSpinnerProps;
	ProgressBar: RecipeProgressBarProps;
	ProgressCircle: StructIntersectAll<[SlotProgressCircle, InteractionHTMLAttributes<HTMLElement>]>;
	StepIcon: StructIntersectAll<[SlotStepIcon, InteractionHTMLAttributes<HTMLDivElement>]>;
	StepConnector: StructIntersectAll<[SlotStepConnector, InteractionHTMLAttributes<HTMLDivElement>]>;
	AccountProgressTracker: StructIntersectAll<[SlotAccountProgressTracker, InteractionHTMLAttributes<HTMLDivElement>]>;
	Skeleton: RecipeSkeletonProps;
	SkeletonCircle: StructIntersectAll<[SkeletonCircleProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SkeletonRectangle: StructIntersectAll<[SkeletonRectangleProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SkeletonText: StructIntersectAll<[SkeletonTextProps, InteractionHTMLAttributes<HTMLDivElement>]>;
	SkeletonTable: StructIntersectAll<[SkeletonTableProps, InteractionHTMLAttributes<HTMLTableElement>]>;
	CardSkeleton: StructIntersectAll<[SlotCardSkeleton, InteractionHTMLAttributes<HTMLDivElement>]>;
	Loader: StructIntersectAll<[SlotLoader, InteractionHTMLAttributes<HTMLDivElement>]>;
	LazyLoader: StructIntersectAll<[SlotLazyLoader, InteractionHTMLAttributes<HTMLDivElement>]>;
	LoadingBoundary: StructIntersectAll<[SlotLoadingBoundary, InteractionHTMLAttributes<HTMLDivElement>]>;
	Toast: RecipeToastProps;
	ToastStack: StructIntersectAll<[{ toasts?: any[]; className?: string }, InteractionHTMLAttributes<HTMLDivElement>]>;
	NotificationBadge: StructIntersectAll<[SlotNotificationBadge, InteractionHTMLAttributes<HTMLDivElement>]>;
	ErrorBoundary: StructIntersectAll<[SlotErrorBoundary, InteractionHTMLAttributes<HTMLDivElement>]>;
	ErrorMessage: StructIntersectAll<[SlotErrorMessage, InteractionHTMLAttributes<HTMLDivElement>]>;
	ResponseViewer: StructIntersectAll<[SlotResponseViewer, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Dialogs
	Dialog: StructIntersectAll<[SlotDialog, InteractionHTMLAttributes<HTMLDivElement>]>;
	Modal: StructIntersectAll<[SlotModal, InteractionHTMLAttributes<HTMLDivElement>]>;
	SimpleModal: StructIntersectAll<[SlotSimpleModal, InteractionHTMLAttributes<HTMLDivElement>]>;
	ConfirmationDialog: StructIntersectAll<[SlotConfirmationDialog, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controls - Chip & Tag
	Chip: StructIntersectAll<[ChipRecipe, InteractionHTMLAttributes<HTMLSpanElement>]>;
	Tag: StructIntersectAll<[TagRecipe, InteractionHTMLAttributes<HTMLSpanElement>]>;

	// Controls - Tooltip
	Tooltip: SlotTooltip;

	// Controls - Rating
	Rating: StructIntersectAll<[SlotRating, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Layout
	DragAndDrop: StructIntersectAll<[SlotDragAndDrop, InteractionHTMLAttributes<HTMLDivElement>]>;
	Click: StructIntersectAll<[SlotClickable, InteractionHTMLAttributes<HTMLDivElement>]>;
	Transformation: StructIntersectAll<[SlotTransformation, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Link
	Abbr: StructIntersectAll<[SlotAbbr, InteractionHTMLAttributes<HTMLElement>]>;
	InlineCode: StructIntersectAll<[SlotInlineCode, InteractionHTMLAttributes<HTMLElement>]>;
	InlineText: StructIntersectAll<[SlotInlineText, InteractionHTMLAttributes<HTMLSpanElement>]>;

	// Burger Menu
	BurgerMenu: StructIntersectAll<[SlotBurgerMenu, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Account Forms
	AccountSettingsForm: StructIntersectAll<[SlotAccountSettingsForm, InteractionHTMLAttributes<HTMLFormElement>]>;
	UserProfileCard: StructIntersectAll<[SlotUserProfileCard, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Time Slot
	TimeSlot: StructIntersectAll<[SlotTimeSlot, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Controller Settings
	ControllerSettings: StructIntersectAll<[InterfaceControllerSettings, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Sortable Table Header
	SortableTableHeader: StructIntersectAll<[SlotSortableTableHeader, InteractionHTMLAttributes<HTMLTableHeaderCellElement>]>;

	// Shared Canvas
	SharedCanvas: StructIntersectAll<[SlotSharedCanvas, InteractionHTMLAttributes<HTMLCanvasElement>]>;

	// Node Palette
	NodePalette: StructIntersectAll<[SlotNodePalette, InteractionHTMLAttributes<HTMLDivElement>]>;

	// Multi-select
	MultiSelect: StructIntersectAll<[SlotMultiSelect, InteractionHTMLAttributes<HTMLSelectElement>]>;

	// Overlay
	LoadingOverlay: StructIntersectAll<[SlotLoadingOverlay, InteractionHTMLAttributes<HTMLDivElement>]>;

}
