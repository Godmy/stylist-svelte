<script lang="ts">
	import '../app.css';
	import { ThemeProvider } from '$stylist/theme/component/atom/theme-provider';

	let { children } = $props();
</script>

<ThemeProvider>
	{@render children()}
</ThemeProvider>
