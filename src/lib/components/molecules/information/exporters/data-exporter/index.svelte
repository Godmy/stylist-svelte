<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    type ExportFormat = 'csv' | 'json' | 'excel';

    interface ExportFormatDetails {
        ext: string;
        mime: string;
    }

    type DataItem = Record<string, any>;

    let {
        data = [] as DataItem[],
        format = 'csv' as ExportFormat, // csv, json, excel
        disabled = false,
        fileName = 'export'
    } = $props<{
        data?: DataItem[];
        format?: ExportFormat;
        disabled?: boolean;
        fileName?: string;
    }>();

    const dispatch = createEventDispatcher<{ export: { format: ExportFormat; fileName: string } }>();

    const formats: Record<ExportFormat, ExportFormatDetails> = {
        csv: { ext: 'csv', mime: 'text/csv' },
        json: { ext: 'json', mime: 'application/json' },
        excel: { ext: 'xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
    };

    function exportData() {
        if (disabled) return;

        const selectedFormat = formats[format as keyof typeof formats];
        const dataStr = format === 'json'
            ? JSON.stringify(data, null, 2)
            : format === 'csv'
                ? convertToCSV(data)
                : JSON.stringify(data); // For simplicity, just using JSON for excel in this example

        const dataUri = `data:${selectedFormat.mime};charset=utf-8,${encodeURIComponent(dataStr)}`;

        const link = document.createElement('a');
        link.href = dataUri;
        link.download = `${fileName}.${selectedFormat.ext}`;
        link.click();

        dispatch('export', { format, fileName });
    }

    function convertToCSV(objArray: DataItem[]): string {
        if (objArray.length === 0) return '';

        const headers = Object.keys(objArray[0]);
        const headerRow = headers.map(toCsvValue).join(',');
        const dataRows = objArray.map((row) =>
            headers.map((header) => toCsvValue(row[header])).join(',')
        );

        return [headerRow, ...dataRows].join('\n');
    }

    function toCsvValue(value: unknown): string {
        if (value === null || value === undefined) return '';
        const stringValue = String(value);
        const escaped = stringValue.replace(/"/g, '""');
        return /[",\n]/.test(stringValue) ? `"${escaped}"` : escaped;
    }
</script>

<div class="data-exporter">
    <select bind:value={format} disabled={disabled}>
        <option value="csv">CSV</option>
        <option value="json">JSON</option>
        <option value="excel">Excel</option>
    </select>
    <button onclick={exportData} disabled={disabled}>
        Export Data
    </button>
</div>

<style>
    .data-exporter {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    
    select, button {
        padding: 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
    }
    
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
