.
    |   .gitignore
    |   .npmrc
    |   .prettierignore
    |   .prettierrc
    |   .yarnrc.yml
    |   CONTRIBUTING.md
    |   index.md
    |   LICENSE
    |   map.md
    |   nul
    |   package.json
    |   package.tgz
    |   QWEN.md
    |   README.md
    |   stylist-svelte-v0.1.0.tgz
    |   svelte.config.js
    |   tailwind.config.js
    |   tsconfig.json
    |   vite.config.ts
    |   yarn.lock
    +---.claude
        |   settings.local.json
    +---.yarn
        |   install-state.gz
    +---docs
        +---ad
            |   ATOMIC_DESIGN_GUIDE.md
            |   ATOMIC_DESIGN_GUIDE_RU.md
            |   CanvasComponents.md
            |   component-diagram.mmd
            |   GRAPHQL_VISUALIZER_PLAN.md
            |   GRAPHVIZ_VISUALIZER_PLAN.md
            |   IMPLEMENTATION_DOCS.md
            |   PLAYGROUND.md
        +---adr
            |   0001-use-svelte-5-runes.md
            |   0002-use-tailwind-css.md
            |   0003-build-playground-system.md
            |   0004-component-architecture.md
            |   0005-yarn-workspaces.md
            |   0006-tailwind-postcss-implementation.md
            |   0007-design-system-types.md
            |   0007-playground-story-architecture.md
            |   0008-new-atoms-switch-radio-slider.md
            |   0008-slot-usage-guidelines.md
            |   0008-utility-functions-implementation.md
            |   0009-form-handling-architecture.md
            |   0009-new-molecules-suite.md
            |   0010-table-component-architecture.md
            |   0011-error-types-and-solutions.md
            |   0012-component-library-error-fixes.md
            |   0012-error-types-and-solutions.md
        +---backlog
            +---errors
        +---cookbooks
            |   COOKBOOK_AI_EN.md
            |   COOKBOOK_HUMAN_RU.md
        +---source
            +---yarn
                +---check
    +---src
        |   app.css
        |   app.html
        +---lib
            |   index.ts
            |   playground.ts
            +---components
                |   index.ts
                +---atoms
                    |   Card.svelte
                    |   index.md
                    |   index.ts
                    +---controls
                        |   index.ts
                        +---buttons
                            |   Button.story.svelte
                            |   Button.svelte
                            |   Buttons.story.svelte
                            |   CloseButton.svelte
                            |   IconButton.svelte
                            |   index.ts
                            |   SplitButton.svelte
                        +---overlays
                            |   index.ts
                            |   Overlays.story.svelte
                            |   SimpleTooltip.svelte
                        +---selectors
                            |   ColorSwatch.svelte
                            |   index.ts
                            |   InputAddon.svelte
                            |   Select.story.svelte
                            |   Select.svelte
                            |   Selectors.story.svelte
                        +---sliders
                            |   index.ts
                            |   RangeSlider.story.svelte
                            |   RangeSlider.svelte
                            |   SliderTick.svelte
                        +---toggles
                            |   Checkbox.story.svelte
                            |   Checkbox.svelte
                            |   index.ts
                            |   Radio.story.svelte
                            |   Radio.svelte
                            |   Switch.story.svelte
                            |   Switch.svelte
                            |   Toggle.story.svelte
                            |   Toggle.svelte
                    +---feedback
                        |   index.ts
                        |   Loader.svelte
                        +---placeholders
                            |   index.ts
                            |   Skeleton.story.svelte
                            |   Skeleton.svelte
                            |   SkeletonCircle.svelte
                            |   SkeletonRectangle.svelte
                            |   SkeletonText.svelte
                            |   TableSkeleton.story.svelte
                            |   TableSkeleton.svelte
                        +---process
                            |   index.ts
                            |   Spinner.story.svelte
                            |   Spinner.svelte
                        +---progress
                            |   index.ts
                            |   ProgressBar.story.svelte
                            |   ProgressBar.svelte
                            |   ProgressCircle.story.svelte
                            |   ProgressCircle.svelte
                            +---steps
                                |   index.ts
                                |   StepConnector.story.svelte
                                |   StepConnector.svelte
                                |   StepIcon.story.svelte
                                |   StepIcon.svelte
                    +---input
                        |   index.ts
                        +---base
                            |   index.ts
                            |   Input.story.svelte
                            |   Input.svelte
                            |   Textarea.story.svelte
                            |   Textarea.svelte
                        +---helpers
                            |   CharacterCount.svelte
                            |   FormErrorMessage.svelte
                            |   FormHelperText.svelte
                            |   index.ts
                            |   PinInputDigit.svelte
                        +---specialized
                            |   EmailInput.svelte
                            |   index.ts
                            |   PasswordInput.svelte
                            |   PhoneNumberInput.svelte
                            |   SpecializedInputs.story.svelte
                    +---media
                        |   Avatar.story.svelte
                        |   Avatar.svelte
                        |   CountryFlag.svelte
                        |   Favicon.svelte
                        |   Icon.story.svelte
                        |   Icon.svelte
                        |   IconWrapper.svelte
                        |   Image.svelte
                        |   index.ts
                    +---typography
                        |   index.ts
                        +---accordion
                            |   AccordionIcon.story.svelte
                            |   AccordionIcon.svelte
                            |   index.ts
                        +---animation
                            |   index.ts
                            |   NumberFlow.story.svelte
                            |   NumberFlow.svelte
                        +---block
                            |   Block.story.svelte
                            |   Blockquote.svelte
                            |   index.ts
                        +---elements
                            |   Badge.story.svelte
                            |   Badge.svelte
                            |   Chip.story.svelte
                            |   Chip.svelte
                            |   CodeBlock.story.svelte
                            |   CodeBlock.svelte
                            |   Elements.story.svelte
                            |   index.ts
                            |   Label.story.svelte
                            |   Label.svelte
                            |   Tag.story.svelte
                            |   Tag.svelte
                        +---indicators
                            |   BreadcrumbSeparator.story.svelte
                            |   BreadcrumbSeparator.svelte
                            |   CountBadge.svelte
                            |   Counter.svelte
                            |   Dot.story.svelte
                            |   Dot.svelte
                            |   index.ts
                            |   Indicators.story.svelte
                            |   ListItemMarker.story.svelte
                            |   ListItemMarker.svelte
                            |   PageEllipsis.svelte
                            |   StatusIndicator.svelte
                        +---inline
                            |   Abbr.svelte
                            |   Counter.story.svelte
                            |   DefinitionDescription.svelte
                            |   DefinitionTerm.svelte
                            |   Divider.story.svelte
                            |   Divider.svelte
                            |   Em.svelte
                            |   Highlight.svelte
                            |   index.ts
                            |   Inline.story.svelte
                            |   InlineCode.story.svelte
                            |   InlineCode.svelte
                            |   Kbd.story.svelte
                            |   Kbd.svelte
                            |   Link.story.svelte
                            |   Link.svelte
                            |   Separator.story.svelte
                            |   Separator.svelte
                            |   Spacer.story.svelte
                            |   Spacer.svelte
                            |   Strikethrough.svelte
                            |   Strong.svelte
                            |   Subscript.svelte
                            |   Superscript.svelte
                        +---tabs
                            |   index.ts
                            |   TabIndicator.story.svelte
                            |   TabIndicator.svelte
                        +---text
                            |   Caption.svelte
                            |   Heading.svelte
                            |   index.ts
                            |   Paragraph.svelte
                            |   SectionHeading.svelte
                            |   Small.svelte
                            |   Text.story.svelte
                            |   Text.svelte
                +---molecules
                    |   index.ts
                    +---accessibility
                        |   AccessibilityToolbar.svelte
                        |   HighContrastToggle.svelte
                        |   index.ts
                        |   ScreenReaderTester.svelte
                        |   ZoomControls.svelte
                    +---ai-ml
                        |   ChatInterface.svelte
                        |   index.ts
                        |   ModelSelector.svelte
                        |   PredictionResult.svelte
                        |   PromptBuilder.svelte
                        |   SentimentAnalysis.svelte
                    +---analytics
                        |   AnalyticsChart.svelte
                        |   ConversionFunnel.svelte
                        |   index.ts
                        |   PerformanceDashboard.svelte
                        |   TrafficAnalytics.svelte
                        |   UserBehaviorMetrics.svelte
                    +---calendar
                        |   CalendarView.svelte
                        |   EventCalendar.svelte
                        |   index.ts
                        |   MiniCalendar.svelte
                        |   ScheduleCalendar.svelte
                        |   TimeGrid.svelte
                    +---canvas
                        |   CanvasDrawingSurface.svelte
                        |   CanvasToolbar.svelte
                        |   ChartCanvas.svelte
                        |   ImageEditorCanvas.svelte
                        |   index.ts
                    +---charts
                        |   BarChart.svelte
                        |   Heatmap.svelte
                        |   index.ts
                        |   LineChart.svelte
                        |   PieChart.svelte
                        |   ScatterPlot.svelte
                    +---chat
                        |   AttachmentPreview.svelte
                        |   ChatHeader.svelte
                        |   ChatMessage.svelte
                        |   ChatRoom.svelte
                        |   index.ts
                        |   MessageComposer.svelte
                        |   MessageInput.svelte
                        |   MessageMeta.svelte
                        |   MessageThread.svelte
                        |   UserStatus.svelte
                        +---atoms
                            |   ChatStatusIndicator.story.svelte
                            |   ChatStatusIndicator.svelte
                            |   index.ts
                            |   MessageStatus.story.svelte
                            |   MessageStatus.svelte
                            |   MessageTimestamp.story.svelte
                            |   MessageTimestamp.svelte
                    +---code
                        |   CodeBlockWithLineNumbers.svelte
                        |   CodeDiff.svelte
                        |   CodeWithCopy.svelte
                        |   CopyableCodeBlock.svelte
                        |   index.ts
                        |   ResponseViewer.svelte
                        |   SyntaxHighlightedCode.svelte
                    +---collaboration
                        |   CollaborativeEditor.svelte
                        |   CommentThread.svelte
                        |   index.ts
                        |   RealTimePresence.svelte
                        |   SharedCanvas.svelte
                        |   TeamAvatarStack.svelte
                    +---controls
                        |   index.ts
                        +---copy
                            |   CopyButton.story.svelte
                            |   CopyButton.svelte
                            |   index.ts
                        +---menus
                            |   BurgerMenu.story.svelte
                            |   BurgerMenu.svelte
                            |   DropdownMenu.svelte
                            |   index.ts
                            |   MenuItem.story.svelte
                            |   MenuItem.svelte
                        +---toggles
                            |   index.ts
                            |   ToggleGroupItem.svelte
                            |   ToggleGroupRoot.svelte
                        +---trees
                            |   index.ts
                            |   TreeNodeItem.svelte
                    +---dashboard
                        |   DashboardCard.svelte
                        |   index.ts
                        |   KPIIndicator.svelte
                        |   MetricCard.svelte
                        |   StatusDashboard.svelte
                        |   WidgetContainer.svelte
                    +---data-display
                        |   AvatarGroup.svelte
                        |   BadgeGroup.svelte
                        |   Card.svelte
                        |   CardSkeleton.svelte
                        |   CardWithImage.svelte
                        |   ComparisonTable.svelte
                        |   DataTable.svelte
                        |   ExpandableCard.svelte
                        |   ExpandableTableRow.svelte
                        |   ImageGallery.svelte
                        |   index.ts
                        |   ListWithAvatars.svelte
                        |   ProgressBarWithLabel.svelte
                        |   Rating.story.svelte
                        |   Rating.svelte
                        |   StatsCard.story.svelte
                        |   StatsCard.svelte
                        |   StatusIndicatorWithLabel.svelte
                        |   TableWithStripes.svelte
                        |   Timeline.svelte
                        |   UserCard.svelte
                    +---development
                        |   CodeEditor.svelte
                        |   DebugConsole.svelte
                        |   ErrorBoundary.svelte
                        |   index.ts
                        |   LoadingBoundary.svelte
                        |   MockDataSelector.svelte
                    +---drag-drop
                        |   DragAndDropList.svelte
                        |   DraggableCard.svelte
                        |   DropZone.svelte
                        |   index.ts
                        |   SortableGrid.svelte
                        |   SortableList.svelte
                    +---feedback
                        |   ConfirmationDialog.svelte
                        |   ErrorBoundary.svelte
                        |   index.ts
                        |   LoadingSpinner.svelte
                        |   SuccessMessage.svelte
                        |   WarningMessage.svelte
                        +---alerts
                            |   Alert.story.svelte
                            |   Alert.svelte
                            |   ErrorMessage.svelte
                            |   index.ts
                        +---overlays
                            |   index.ts
                            |   LoadingOverlay.svelte
                        +---states
                            |   EmptyState.story.svelte
                            |   EmptyState.svelte
                            |   index.ts
                        +---toasts
                            |   index.ts
                            |   NotificationItem.story.svelte
                            |   NotificationItem.svelte
                            |   Toast.svelte
                    +---file-management
                        |   FileBrowser.svelte
                        |   FileExplorer.svelte
                        |   FileListItem.svelte
                        |   index.ts
                        |   UploadProgress.svelte
                        |   ZipViewer.svelte
                    +---forms
                        |   AddressForm.svelte
                        |   CheckboxGroup.svelte
                        |   DateRangePicker.svelte
                        |   DateTimeRangePicker.svelte
                        |   FormFooter.svelte
                        |   FormHeader.svelte
                        |   FormWithValidation.svelte
                        |   index.ts
                        |   LoginForm.svelte
                        |   RadioButtonGroup.svelte
                        |   SearchForm.svelte
                        +---base
                            |   index.ts
                            |   InputField.svelte
                            |   InputGroup.svelte
                            |   SearchBar.story.svelte
                            |   SearchInput.story.svelte
                        +---composite
                            |   FileUpload.story.svelte
                            |   FileUpload.svelte
                            |   FormSection.story.svelte
                            |   FormSection.svelte
                            |   index.ts
                            |   RadioGroup.story.svelte
                            |   RadioGroup.svelte
                            |   TagInput.story.svelte
                            |   TagInput.svelte
                        +---validation
                            |   FormFieldGroup.story.svelte
                            |   FormFieldGroup.svelte
                            |   index.ts
                    +---graph
                        |   GraphEdge.svelte
                        |   GraphNode.svelte
                        |   index.ts
                    +---input
                        |   index.ts
                        +---base
                            |   index.ts
                            |   SearchInput.svelte
                        +---helpers
                            |   FieldHighlighter.svelte
                            |   index.ts
                        +---pickers
                            |   ColorPicker.svelte
                            |   DatePicker.svelte
                            |   index.ts
                        +---upload
                            |   FileInput.svelte
                            |   index.ts
                    +---internationalization
                        |   index.ts
                        |   LanguageSelector.svelte
                        |   LocaleSwitcher.svelte
                        |   TranslationEditor.svelte
                    +---layout
                        |   AspectRatio.story.svelte
                        |   AspectRatio.svelte
                        |   Container.story.svelte
                        |   Container.svelte
                        |   index.ts
                        |   Stack.story.svelte
                        |   Stack.svelte
                    +---media
                        |   AudioPlayer.svelte
                        |   ImageWithCaption.svelte
                        |   index.ts
                        |   VideoPlayer.svelte
                    +---navigation
                        |   Breadcrumb.story.svelte
                        |   Breadcrumb.svelte
                        |   BreadcrumbLink.svelte
                        |   index.ts
                        |   PageButton.svelte
                    +---search
                        |   index.ts
                        |   SearchBar.svelte
                    +---security
                        |   AuthGuard.svelte
                        |   index.ts
                        |   PermissionGate.svelte
                        |   SecureForm.svelte
                        |   SessionManager.svelte
                    +---settings
                        |   AccountSettingsForm.svelte
                        |   AppearanceSettings.svelte
                        |   index.ts
                        |   NotificationSettings.svelte
                        |   PrivacySettings.svelte
                        |   SecuritySettings.svelte
                    +---testing
                        |   ABTestConfigurator.svelte
                        |   FeatureToggle.svelte
                        |   index.ts
                        |   TestResultsViewer.svelte
                    +---tools
                        |   ButtonGroup.svelte
                        |   ColorPalette.svelte
                        |   DesignTokens.svelte
                        |   FilterPanel.svelte
                        |   IconPicker.svelte
                        |   index.ts
                        |   OperationsHistory.svelte
                        |   PictureToolbar.svelte
                        |   ThemeSwitcher.svelte
                        |   Toolbar.svelte
                        |   VariablesEditor.svelte
                        |   ZoomToolbar.svelte
                        +---general
                            |   index.ts
                            |   QuickAccessButtons.svelte
                            |   Toolbar.svelte
                    +---tooltips
                        |   index.ts
                        |   Tooltip.story.svelte
                        |   Tooltip.svelte
                    +---visualization
                        |   GraphNodeCard.svelte
                        |   GraphvizCluster.svelte
                        |   GraphvizClusterWithTitle.svelte
                        |   GraphvizDirectedEdge.svelte
                        |   GraphvizEdge.svelte
                        |   GraphvizNode.svelte
                        |   GraphvizNodeConnection.svelte
                        |   GraphvizNodeWithLabel.svelte
                        |   GraphvizSubgraph.svelte
                        |   GraphvizUndirectedEdge.svelte
                        |   index.ts
                        |   LegendItem.svelte
                        |   OntologyEdgeComponent.svelte
                        |   OntologyNodeComponent.svelte
                +---organisms
                    |   index.ts
                    +---canvas
                        |   CanvasBoard.svelte
                        |   EraserTool.svelte
                        |   index.ts
                        |   PenTool.svelte
                    +---code
                        |   CodeSection.svelte
                        |   DocumentationBlock.svelte
                        |   index.ts
                    +---controls
                        |   Combobox.story.svelte
                        |   Combobox.svelte
                        |   ControlPanel.svelte
                        |   ExportPanel.svelte
                        |   FilterBar.story.svelte
                        |   FilterBar.svelte
                        |   index.ts
                        +---accordion
                            |   Accordion.svelte
                            |   AccordionHeader.svelte
                            |   AccordionItem.svelte
                            |   AccordionPanel.svelte
                            |   index.ts
                        +---tables
                            |   ColumnManager.story.svelte
                            |   ColumnManager.svelte
                            |   index.ts
                            |   PaginationTable.svelte
                            |   Table.svelte
                            |   TableBody.svelte
                            |   TableCell.svelte
                            |   TableHeader.svelte
                            |   TableRow.svelte
                        +---tabs
                            |   index.ts
                            |   Tab.svelte
                            |   TabList.svelte
                            |   TabPanel.svelte
                            |   TabPanels.svelte
                            |   Tabs.svelte
                        +---trees
                            |   AdvancedVirtualTree.svelte
                            |   FlatTree.svelte
                            |   FolderTree.story.svelte
                            |   FolderTree.svelte
                            |   index.ts
                            |   TreeViewer.svelte
                            |   VirtualTree.svelte
                    +---dialogs
                        |   ConfirmDialog.svelte
                        |   index.ts
                        |   Modal.svelte
                    +---layout
                        |   index.ts
                        +---agile
                            |   Backlog.story.svelte
                            |   Backlog.svelte
                            |   BurnDownChart.story.svelte
                            |   BurnDownChart.svelte
                            |   index.ts
                        +---chat
                            |   ChatItem.svelte
                            |   ChatList.svelte
                            |   ChatWindow.svelte
                            |   index.ts
                            |   MessageItem.svelte
                            |   MessageList.svelte
                        +---kanban
                            |   index.ts
                            |   KanbanBoard.story.svelte
                            |   KanbanBoard.svelte
                            |   KanbanColumn.story.svelte
                            |   KanbanColumn.svelte
                            +---molecules
                                |   index.ts
                                |   KanbanCard.story.svelte
                                |   KanbanCard.svelte
                    +---navigation
                        |   index.ts
                        +---breadcrumbs
                            |   Breadcrumbs.svelte
                            |   index.ts
                        +---pagination
                            |   index.ts
                            |   Pagination.svelte
            +---playground
                |   index.ts
                +---components
                    |   Canvas.svelte
                    |   CodeViewer.svelte
                    |   index.ts
                    |   MarkdownRenderer.svelte
                    |   Navigator.svelte
                    |   PlaygroundControlPanel.svelte
                    |   PlaygroundToolbar.svelte
                    |   Story.svelte
                    |   StoryRoot.svelte
                +---stores
                    |   index.ts
                    |   playground.svelte.ts
                +---types
                    |   index.ts
                +---utils
                    |   code-generator.ts
                    |   index.ts
                    |   keyboard.ts
                    |   syntax-highlighter.ts
            +---styles
                |   design-tokens.css
                |   index.ts
                |   variables.css
            +---types
                |   components.ts
                |   design-tokens.ts
                |   form.ts
                |   index.ts
                |   table.ts
            +---utils
                |   clipboard.ts
                |   debounce.ts
                |   index.ts
        +---routes
            |   +layout.svelte
            |   +page.svelte