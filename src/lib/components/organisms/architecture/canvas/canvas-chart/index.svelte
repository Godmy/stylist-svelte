<script lang="ts">
  import type { HTMLCanvasAttributes } from 'svelte/elements';

  // Types
  export type ChartDataPoint = {
    x: number | string;
    y: number;
    label?: string;
  };

  export type ChartType = 'line' | 'bar' | 'pie';

  type Props = {
    width?: number;
    height?: number;
    data: ChartDataPoint[];
    type?: ChartType;
    title?: string;
    xAxisLabel?: string;
    yAxisLabel?: string;
    showGrid?: boolean;
    colors?: string[];
  } & HTMLCanvasAttributes;

  let {
    width = 800,
    height = 600,
    data = [],
    type = 'line',
    title = '',
    xAxisLabel = '',
    yAxisLabel = '',
    showGrid = true,
    colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'],
    ...restProps
  }: Props = $props();

  let canvasRef: HTMLCanvasElement | null = null;

  // Draw chart when canvas is mounted or data changes
  $effect(() => {
    if (canvasRef && data.length > 0) {
      drawChart();
    }
  });

  function drawChart() {
    if (!canvasRef) return;

    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    // Add padding
    const padding = {
      top: 40,
      right: 40,
      bottom: 60,
      left: 80
    };

    // Draw title
    if (title) {
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, canvasRef.width / 2, 20);
    }

    // Draw axes labels
    if (xAxisLabel) {
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(xAxisLabel, canvasRef.width / 2, canvasRef.height - 10);
    }

    if (yAxisLabel) {
      ctx.save();
      ctx.translate(20, canvasRef.height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.fillText(yAxisLabel, 0, 0);
      ctx.restore();
    }

    // Draw grid
    if (showGrid) {
      drawGrid(ctx, padding);
    }

    // Draw chart based on type
    switch (type) {
      case 'line':
        drawLineChart(ctx, padding);
        break;
      case 'bar':
        drawBarChart(ctx, padding);
        break;
      case 'pie':
        drawPieChart(ctx);
        break;
    }
  }

  function drawGrid(ctx: CanvasRenderingContext2D, padding: { top: number; right: number; bottom: number; left: number }) {
    const chartWidth = canvasRef!.width - padding.left - padding.right;
    const chartHeight = canvasRef!.height - padding.top - padding.bottom;

    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 0.5;

    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
      const y = padding.top + (chartHeight / 10) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartWidth, y);
      ctx.stroke();
    }

    // Vertical grid lines
    for (let i = 0; i <= data.length; i++) {
      const x = padding.left + (chartWidth / data.length) * i;
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, padding.top + chartHeight);
      ctx.stroke();
    }
  }

  function drawLineChart(ctx: CanvasRenderingContext2D, padding: { top: number; right: number; bottom: number; left: number }) {
    if (data.length === 0) return;

    const chartWidth = canvasRef!.width - padding.left - padding.right;
    const chartHeight = canvasRef!.height - padding.top - padding.bottom;

    // Calculate min and max values for scaling
    const yValues = data.map(d => d.y);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    const yRange = maxY - minY || 1; // Avoid division by zero

    // Calculate X positions
    const xStep = chartWidth / (data.length - 1);

    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = colors[0];
    ctx.lineWidth = 2;

    data.forEach((point, i) => {
      const x = padding.left + xStep * i;
      const y = padding.top + chartHeight - ((point.y - minY) / yRange) * chartHeight;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Draw points
    ctx.fillStyle = colors[0];
    data.forEach((point, i) => {
      const x = padding.left + xStep * i;
      const y = padding.top + chartHeight - ((point.y - minY) / yRange) * chartHeight;

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw X-axis labels
    ctx.fillStyle = '#000';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    data.forEach((point, i) => {
      const x = padding.left + xStep * i;
      ctx.fillText(point.x.toString(), x, canvasRef!.height - padding.bottom + 20);
    });

    // Draw Y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 10; i++) {
      const yValue = minY + (yRange / 10) * i;
      const y = padding.top + chartHeight - (i / 10) * chartHeight;
      ctx.fillText(yValue.toFixed(1), padding.left - 10, y + 4);
    }
  }

  function drawBarChart(ctx: CanvasRenderingContext2D, padding: { top: number; right: number; bottom: number; left: number }) {
    if (data.length === 0) return;

    const chartWidth = canvasRef!.width - padding.left - padding.right;
    const chartHeight = canvasRef!.height - padding.top - padding.bottom;

    // Calculate min and max values for scaling
    const yValues = data.map(d => d.y);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    const yRange = maxY - minY || 1; // Avoid division by zero

    // Calculate dimensions
    const barWidth = (chartWidth / data.length) * 0.8; // 80% of available width per bar
    const xStep = chartWidth / data.length;

    // Draw bars
    data.forEach((point, i) => {
      const x = padding.left + xStep * i + (xStep - barWidth) / 2;
      const barHeight = ((point.y - minY) / yRange) * chartHeight;
      const y = padding.top + chartHeight - barHeight;

      ctx.fillStyle = colors[i % colors.length];
      ctx.fillRect(x, y, barWidth, barHeight);
    });

    // Draw X-axis labels
    ctx.fillStyle = '#000';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    data.forEach((point, i) => {
      const x = padding.left + xStep * i + xStep / 2;
      ctx.fillText(point.x.toString(), x, canvasRef!.height - padding.bottom + 20);
    });

    // Draw Y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 10; i++) {
      const yValue = minY + (yRange / 10) * i;
      const y = padding.top + chartHeight - (i / 10) * chartHeight;
      ctx.fillText(yValue.toFixed(1), padding.left - 10, y + 4);
    }
  }

  function drawPieChart(ctx: CanvasRenderingContext2D) {
    if (data.length === 0) return;

    // Calculate total
    const total = data.reduce((sum, point) => sum + Math.abs(point.y), 0);
    if (total === 0) return;

    // Calculate center and radius
    const centerX = canvasRef!.width / 2;
    const centerY = canvasRef!.height / 2;
    const radius = Math.min(canvasRef!.width, canvasRef!.height) * 0.4;

    let startAngle = -Math.PI / 2; // Start from top

    // Draw sectors
    data.forEach((point, i) => {
      const sliceAngle = (Math.abs(point.y) / total) * Math.PI * 2;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();

      // Draw labels
      const labelX = centerX + Math.cos(startAngle + sliceAngle / 2) * radius * 0.7;
      const labelY = centerY + Math.sin(startAngle + sliceAngle / 2) * radius * 0.7;

      ctx.fillStyle = '#000';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(point.x.toString(), labelX, labelY);

      startAngle = endAngle;
    });
  }
</script>

<canvas
  bind:this={canvasRef}
  width={width}
  height={height}
  class="c-canvas-chart border border-gray-300 rounded-md"
  {...restProps}
></canvas>
