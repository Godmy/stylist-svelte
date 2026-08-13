import type { ExportFormat } from '$stylist/file/type/alias/export-format';
import type { FilterPanelLayout } from '$stylist/control/type/alias/filter-panel-layout';
import type { SlotFilterChangePayload } from '$stylist/control/interface/slot/filter-change-payload';
import type { SlotFilterPanelState } from '$stylist/control/interface/slot/filter-panel-state';

export class ControlManager {
	static detectClipboardSupport(): boolean {
		return typeof navigator !== 'undefined' && 'clipboard' in navigator;
	}

	static copyTextToClipboard(text: string): Promise<boolean> {
		return (async () => {
			if (!ControlManager.detectClipboardSupport()) {
				console.error('Clipboard API is not supported in this browser');
				return false;
			}

			try {
				await navigator.clipboard.writeText(text);
				return true;
			} catch (error) {
				const textarea = document.createElement('textarea');
				textarea.value = text;
				textarea.style.position = 'fixed';
				textarea.style.opacity = '0';
				document.body.appendChild(textarea);
				textarea.select();

				try {
					document.execCommand('copy');
					return true;
				} catch (execError) {
					console.error('Failed to copy to clipboard', execError);
					return false;
				} finally {
					document.body.removeChild(textarea);
				}
			}
		})();
	}

	static debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
		let timeoutId: number | null = null;

		return ((...args: any[]) => {
			if (timeoutId) {
				window.clearTimeout(timeoutId);
			}

			timeoutId = window.setTimeout(() => {
				fn(...args);
			}, delay);
		}) as T;
	}

	static handleFilterChange(
		state: SlotFilterPanelState,
		onFilterChange?: (payload: SlotFilterChangePayload) => void
	): void {
		onFilterChange?.({
			showObjects: state.objectsVisible,
			showInterfaces: state.interfacesVisible,
			showUnions: state.unionsVisible,
			showEnums: state.enumsVisible,
			showScalars: state.scalarsVisible,
			showInputs: state.inputsVisible,
			layout: state.currentLayout
		});
	}

	static handleLayoutChange(
		event: Event,
		state: SlotFilterPanelState,
		onFilterChange?: (payload: SlotFilterChangePayload) => void
	): void {
		const target = event.target as HTMLSelectElement;
		state.currentLayout = target.value as FilterPanelLayout;
		ControlManager.handleFilterChange(state, onFilterChange);
	}

	static handleReset(
		state: SlotFilterPanelState,
		onFilterChange?: (payload: SlotFilterChangePayload) => void,
		onReset?: () => void
	): void {
		state.objectsVisible = true;
		state.interfacesVisible = true;
		state.unionsVisible = true;
		state.enumsVisible = true;
		state.scalarsVisible = true;
		state.inputsVisible = true;
		state.currentLayout = 'force-directed';
		ControlManager.handleFilterChange(state, onFilterChange);
		onReset?.();
	}

	static toolbarHandleZoomIn(onZoomIn?: () => void): void {
		onZoomIn?.();
	}

	static toolbarHandleZoomOut(onZoomOut?: () => void): void {
		onZoomOut?.();
	}

	static toolbarHandleFitView(onFitView?: () => void): void {
		onFitView?.();
	}

	static toolbarHandleResetView(onResetView?: () => void): void {
		onResetView?.();
	}

	static toolbarHandleExport(
		format: ExportFormat,
		onExportImage?: (format: ExportFormat) => void
	): void {
		onExportImage?.(format);
	}

	static toolbarHandleLegendToggle(isVisible: boolean, onToggle?: () => void): void {
		onToggle?.();
	}

	static toolbarHandleSearchToggle(isVisible: boolean, onToggle?: () => void): void {
		onToggle?.();
	}
}
