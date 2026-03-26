<script lang="ts">
	import Grid from './index.svelte';
</script>

<div style="width: 800px; height: 600px; border: 1px solid #ccc; position: relative; background: #fafafa;">
	<Grid zoom={1} gridSize={50} visible={true} />
</div>

<div style="margin-top: 20px;">
	<p>Grid: zoom=1, gridSize=50, visible=true</p>
</div>

<div style="width: 800px; height: 600px; border: 1px solid #ccc; position: relative; background: #fafafa; margin-top: 20px;">
	<Grid zoom={0.3} gridSize={50} visible={true} />
</div>

<div style="margin-top: 20px;">
	<p>Grid: zoom=0.3 (низкая прозрачность)</p>
</div>
