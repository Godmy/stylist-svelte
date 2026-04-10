<script lang="ts">
	import { Story } from '@google/gemini-cli';
	import NodeIcon from './index.svelte';
</script>

<Story title="NodeIcon">
	<div style="display: flex; gap: 20px; padding: 40px; background: #f5f5f5;">
		<NodeIcon icon="📦" size={32} accent="#3498db" />
		<NodeIcon icon="🎨" size={40} accent="#e74c3c" />
		<NodeIcon icon="⚙️" size={48} accent="#2ecc71" />
		<NodeIcon icon="📊" size={56} accent="#f39c12" />
	</div>

	<div style="padding: 20px; font-family: monospace; font-size: 12px;">
		<p>Node Icon — иконка узла (icon stage)</p>
		<p>Размеры: 32, 40, 48, 56px</p>
	</div>
</Story>
