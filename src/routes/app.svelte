<script lang="ts">
	import { ThemeProvider } from '$stylist';
	import { Button } from '$stylist';

	let selectedTheme: 'light' | 'dark' = 'light';

	const toggleTheme = () => {
		selectedTheme = selectedTheme === 'light' ? 'dark' : 'light';
	};
</script>

<ThemeProvider themeMode={selectedTheme}>
	<div class="_c1">
		<h1 class="_c2">Theme Example</h1>
		<Button variant="primary" onclick={toggleTheme}>
			Toggle theme ({selectedTheme})
		</Button>
		<div class="_c3">
			<Button variant="primary" class="_c4">Primary</Button>
			<Button variant="secondary" class="_c4">Secondary</Button>
			<Button variant="success" class="_c4">Success</Button>
			<Button variant="warning" class="_c4">Warning</Button>
			<Button variant="danger" class="_c4">Danger</Button>
			<Button variant="outline" class="_c4">Outline</Button>
			<Button variant="ghost" class="_c4">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
	</div>
</ThemeProvider>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: var(--space-4);
		font-size: var(--font-size-4-5);
	}
	._c3 {
		margin-top: var(--space-6);
	}
	._c3 :global(._c4) {
		margin-right: var(--space-3);
	}
</style>
