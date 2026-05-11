CODER-016-interface-migration-conflict-apply-report

# Interface Migration Conflict Apply Report

Rows: `72`.
Written files: `62`.
Overwritten files: `10`.
Missing declarations: `0`.

## Written

- `calendar/interface/component/calendar-view/contract/index.ts#CalendarDay` -> `calendar/interface/contract/calendar-day-calendar-view/index.ts#ContractCalendarDay`
- `calendar/interface/component/event-calendar/contract/index.ts#CalendarDay` -> `calendar/interface/contract/calendar-day-event-calendar/index.ts#ContractCalendarDay`
- `calendar/interface/component/calendar-view/contract/index.ts#CalendarEvent` -> `calendar/interface/contract/calendar-event-calendar-view/index.ts#ContractCalendarEvent`
- `calendar/interface/component/event-calendar/contract/index.ts#CalendarEvent` -> `calendar/interface/contract/calendar-event-event-calendar/index.ts#ContractCalendarEvent`
- `calendar/interface/record/calendar/index.ts#CalendarViewEvent` -> `calendar/interface/contract/calendar-view-event/index.ts#ContractCalendarViewEvent`
- `calendar/interface/record/calendar/index.ts#CalendarViewDay` -> `calendar/interface/contract/calendar-view-day/index.ts#ContractCalendarViewDay`
- `calendar/interface/record/calendar/index.ts#EventCalendarEvent` -> `calendar/interface/contract/event-calendar-event/index.ts#ContractEventCalendarEvent`
- `calendar/interface/record/calendar/index.ts#EventCalendarDay` -> `calendar/interface/contract/event-calendar-day/index.ts#ContractEventCalendarDay`
- `calendar/interface/record/calendar/index.ts#ScheduleCalendarEvent` -> `calendar/interface/contract/schedule-calendar-event/index.ts#ContractScheduleCalendarEvent`
- `calendar/interface/record/calendar/index.ts#ScheduleCalendarTimeSlot` -> `calendar/interface/contract/schedule-calendar-time-slot/index.ts#ContractScheduleCalendarTimeSlot`
- `calendar/interface/record/calendar/index.ts#ScheduleCalendarDaySchedule` -> `calendar/interface/contract/schedule-calendar-day-schedule/index.ts#ContractScheduleCalendarDaySchedule`
- `calendar/interface/record/calendar/index.ts#TimeGridEvent` -> `calendar/interface/contract/time-grid-event/index.ts#ContractTimeGridEvent`
- `calendar/interface/record/calendar/index.ts#TimeGridExtendedTimeSlot` -> `calendar/interface/contract/time-grid-extended-time-slot/index.ts#ContractTimeGridExtendedTimeSlot`
- `calendar/interface/record/calendar/index.ts#TimeGridDayTimeGrid` -> `calendar/interface/contract/time-grid-day-time-grid/index.ts#ContractTimeGridDayTimeGrid`
- `calendar/interface/record/calendar/index.ts#MiniCalendarEvent` -> `calendar/interface/contract/mini-calendar-event/index.ts#ContractMiniCalendarEvent`
- `calendar/interface/record/calendar/index.ts#RealTimePresenceUser` -> `calendar/interface/contract/real-time-presence-user/index.ts#ContractRealTimePresenceUser`
- `calendar/interface/record/calendar/index.ts#TimeSlotEvent` -> `calendar/interface/contract/time-slot-event/index.ts#ContractTimeSlotEvent`
- `calendar/interface/record/calendar/index.ts#MapCalendarContract` -> `calendar/interface/contract/map-calendar/index.ts#ContractMapCalendar`
- `commerce/interface/component/order-confirmation/contract/index.ts#OrderItemContract` -> `commerce/interface/contract/order-item-order-confirmation/index.ts#ContractOrderItem`
- `commerce/interface/component/order-history/contract/index.ts#OrderItemContract` -> `commerce/interface/contract/order-item-order-history/index.ts#ContractOrderItem`
- `communication/interface/component/chat-message/other/index.ts#ChatMessageProps` -> `communication/interface/slot/chat-message-chat-message/index.ts#SlotChatMessage`
- `communication/interface/component/chat/other/index.ts#ChatMessageProps` -> `communication/interface/slot/chat-message-chat/index.ts#SlotChatMessage`
- `control/interface/component/checkbox/index.ts#CheckboxProps` -> `control/interface/contract/checkbox-checkbox/index.ts#ContractCheckbox`
- `control/interface/component/toggles/index.ts#CheckboxProps` -> `control/interface/contract/checkbox-toggles/index.ts#ContractCheckbox`
- `control/interface/component/radio/index.ts#RadioProps` -> `control/interface/contract/radio-radio/index.ts#ContractRadio`
- `control/interface/component/toggles/index.ts#RadioProps` -> `control/interface/contract/radio-toggles/index.ts#ContractRadio`
- `control/interface/component/toggle/index.ts#ToggleProps` -> `control/interface/contract/toggle-toggle/index.ts#ContractToggle`
- `control/interface/component/toggles/index.ts#ToggleProps` -> `control/interface/contract/toggle-toggles/index.ts#ContractToggle`
- `control/interface/component/tab-group/other/index.ts#ITab` -> `control/interface/slot/tab-tab-group/index.ts#SlotTab`
- `control/interface/component/tabs/other/index.ts#TabProps` -> `control/interface/slot/tab-tabs/index.ts#SlotTab`
- `file/interface/component/drop-zone/other/index.ts#IDropZoneProps` -> `file/interface/slot/drop-zone-drop-zone/index.ts#SlotDropZone`
- `file/interface/component/drop-zone/struct/props/index.ts#IDropZoneProps` -> `file/interface/slot/drop-zone-drop-zone-2/index.ts#SlotDropZone`
- `file/interface/component/upload-progress/other/index.ts#IUploadFile` -> `file/interface/slot/upload-file-upload-progress/index.ts#SlotUploadFile`
- `file/interface/component/upload-progress/struct/file/index.ts#IUploadFile` -> `file/interface/slot/upload-file-upload-progress-2/index.ts#SlotUploadFile`
- `file/interface/component/upload-progress/other/index.ts#IUploadProgressProps` -> `file/interface/slot/upload-progress-upload-progress/index.ts#SlotUploadProgress`
- `file/interface/component/upload-progress/struct/props/index.ts#IUploadProgressProps` -> `file/interface/slot/upload-progress-upload-progress-2/index.ts#SlotUploadProgress`
- `file/interface/component/zip-viewer/other/index.ts#IZipViewerProps` -> `file/interface/slot/zip-viewer-zip-viewer/index.ts#SlotZipViewer`
- `file/interface/component/zip-viewer/struct/props/index.ts#IZipViewerProps` -> `file/interface/slot/zip-viewer-zip-viewer-2/index.ts#SlotZipViewer`
- `geo/interface/component/map-selector/other/index.ts#IMapSelectorProps` -> `geo/interface/slot/map-selector-map-selector/index.ts#SlotMapSelector`
- `geo/interface/component/map-selector/struct/props/index.ts#IMapSelectorProps` -> `geo/interface/slot/map-selector-map-selector-2/index.ts#SlotMapSelector`
- `input/interface/component/time-slot/other/index.ts#ITimeSlot` -> `input/interface/slot/time-slot-time-slot/index.ts#SlotTimeSlot`
- `input/interface/component/time-slot/other/index.ts#ITimeSlotProps` -> `input/interface/slot/time-slot-time-slot-2/index.ts#SlotTimeSlot`
- `notification/interface/component/error-message/other/index.ts#ErrorMessageProps` -> `notification/interface/slot/error-message-error-message/index.ts#SlotErrorMessage`
- `notification/interface/component/error-message/struct/props/index.ts#IErrorMessageProps` -> `notification/interface/slot/error-message-error-message-2/index.ts#SlotErrorMessage`
- `notification/interface/component/notification/other/index.ts#IErrorMessageProps` -> `notification/interface/slot/error-message-notification/index.ts#SlotErrorMessage`
- `science/interface/record/science/index.ts#GraphToolbarItem` -> `science/interface/contract/graph-toolbar-item/index.ts#ContractGraphToolbarItem`
- `science/interface/record/science/index.ts#SentimentAnalysisResult` -> `science/interface/contract/sentiment-analysis-result/index.ts#ContractSentimentAnalysisResult`
- `science/interface/record/science/index.ts#SentimentAnalysisContractBase` -> `science/interface/contract/sentiment-analysis/index.ts#ContractSentimentAnalysis`
- `science/interface/record/science/index.ts#PromptVariable` -> `science/interface/contract/prompt-variable/index.ts#ContractPromptVariable`
- `science/interface/record/science/index.ts#PromptTemplate` -> `science/interface/contract/prompt-template/index.ts#ContractPromptTemplate`
- `science/interface/record/science/index.ts#PromptBuilderContractBase` -> `science/interface/contract/prompt-builder/index.ts#ContractPromptBuilder`
- `science/interface/record/science/index.ts#Prediction` -> `science/interface/contract/prediction/index.ts#ContractPrediction`
- `science/interface/record/science/index.ts#PredictionResultContractBase` -> `science/interface/contract/prediction-result/index.ts#ContractPredictionResult`
- `science/interface/record/science/index.ts#AiResultCardContractBase` -> `science/interface/contract/ai-result-card/index.ts#ContractAiResultCard`
- `science/interface/record/science/index.ts#ModelOption` -> `science/interface/contract/model-option/index.ts#ContractModelOption`
- `science/interface/record/science/index.ts#ModelSelectorContractBase` -> `science/interface/contract/model-selector/index.ts#ContractModelSelector`
- `science/interface/record/science/index.ts#LitegraphNodeProperty` -> `science/interface/contract/litegraph-node-property/index.ts#ContractLitegraphNodeProperty`
- `science/interface/record/science/index.ts#LitegraphPort` -> `science/interface/contract/litegraph-port/index.ts#ContractLitegraphPort`
- `science/interface/record/science/index.ts#LitegraphNode` -> `science/interface/contract/litegraph-node/index.ts#ContractLitegraphNode`
- `science/interface/record/science/index.ts#LitegraphConnection` -> `science/interface/contract/litegraph-connection/index.ts#ContractLitegraphConnection`
- `science/interface/record/science/index.ts#LitegraphCanvasContractBase` -> `science/interface/contract/litegraph-canvas/index.ts#ContractLitegraphCanvas`
- `science/interface/record/science/index.ts#MapScienceContract` -> `science/interface/contract/map-science/index.ts#ContractMapScience`

## Overwritten

- `calendar/interface/record/calendar/index.ts#CalendarViewContractBase` -> `calendar/interface/contract/calendar-view/index.ts#ContractCalendarView`
- `calendar/interface/record/calendar/index.ts#EventCalendarContractBase` -> `calendar/interface/contract/event-calendar/index.ts#ContractEventCalendar`
- `calendar/interface/record/calendar/index.ts#ScheduleCalendarContractBase` -> `calendar/interface/contract/schedule-calendar/index.ts#ContractScheduleCalendar`
- `calendar/interface/record/calendar/index.ts#TimeGridContractBase` -> `calendar/interface/contract/time-grid/index.ts#ContractTimeGrid`
- `calendar/interface/record/calendar/index.ts#MiniCalendarDay` -> `calendar/interface/contract/mini-calendar-day/index.ts#ContractMiniCalendarDay`
- `calendar/interface/record/calendar/index.ts#MiniCalendarContractBase` -> `calendar/interface/contract/mini-calendar/index.ts#ContractMiniCalendar`
- `calendar/interface/record/calendar/index.ts#RealTimePresenceContractBase` -> `calendar/interface/contract/real-time-presence/index.ts#ContractRealTimePresence`
- `calendar/interface/record/calendar/index.ts#TimelineItem` -> `calendar/interface/contract/timeline-item/index.ts#ContractTimelineItem`
- `calendar/interface/record/calendar/index.ts#TimelineContractBase` -> `calendar/interface/contract/timeline/index.ts#ContractTimeline`
- `calendar/interface/record/calendar/index.ts#TimeSlotContractBase` -> `calendar/interface/contract/time-slot/index.ts#ContractTimeSlot`

## Missing
