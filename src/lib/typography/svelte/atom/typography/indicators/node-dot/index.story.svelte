<script lang="ts">
	import NodeDot from './index.svelte';
</script>

<div style="display: flex; gap: 20px; padding: 40px; background: #f5f5f5;">
	<NodeDot accent="#3498db" size={16} />
	<NodeDot accent="#e74c3c" size={24} />
	<NodeDot accent="#2ecc71" size={32} />
	<NodeDot accent="#f39c12" size={40} opacity={1} />
</div>

<div style="padding: 20px; font-family: monospace; font-size: 12px;">
	<p>Node Dot — базовый индикатор узла (dot stage)</p>
	<p>Размеры: 16, 24, 32, 40px</p>
</div>
