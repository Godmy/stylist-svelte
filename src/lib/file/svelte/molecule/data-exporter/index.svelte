<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { ExportFormat } from '$stylist/file/type/enum/data-exporter';
    import type { DataItem } from '$stylist/file/type/struct/data-exporter';
    import { exportData as exportDataFn } from '$stylist/file/function/script/data-exporter';
    import { createDataExporterState } from '$stylist/file/function/state/data-exporter';

    interface DataExporterProps {
        data?: DataItem[];
        format?: ExportFormat;
        disabled?: boolean;
        fileName?: string;
    }

    let props: DataExporterProps = $props();
    const exporterState = createDataExporterState(props as DataExporterProps & Record<string, unknown>);
    let selectedFormat = $state(props.format ?? 'csv');

    const dispatch = createEventDispatcher<{ export: { format: ExportFormat; fileName: string } }>();

    function exportData() {
        if (exporterState.disabled) return;
        exportDataFn(exporterState.data, selectedFormat, exporterState.fileName, exporterState.formats, dispatch);
    }
</script>

<div class="data-exporter">
    <select bind:value={selectedFormat} disabled={exporterState.disabled}>
        <option value="csv">CSV</option>
        <option value="json">JSON</option>
        <option value="excel">Excel</option>
    </select>
    <button onclick={exportData} disabled={exporterState.disabled}>
        Export Data
    </button>
</div>

<style>
    .data-exporter {
        display: flex;
        gap: var(--spacing-2);
        align-items: center;
    }

    select, button {
        padding: var(--spacing-2);
        border-radius: var(--border-radius-base);
        border: 1px solid var(--color-border-secondary);
    }

    button:disabled {
        opacity: var(--opacity-50);
        cursor: not-allowed;
    }
</style>
