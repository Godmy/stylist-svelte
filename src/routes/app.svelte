<script lang="ts">
	import { ThemeProvider } from '$stylist';
	import { Button } from '$stylist';

	let selectedTheme: 'light' | 'dark' = 'light';

	const toggleTheme = () => {
		selectedTheme = selectedTheme === 'light' ? 'dark' : 'light';
	};
</script>

<ThemeProvider initialMode={selectedTheme}>
	<div class="p-4">
		<h1 class="mb-[--spacing-md] text-[--text-size-lg]">Theme Example</h1>
		<Button variant="primary" onclick={toggleTheme}>
			Toggle theme ({selectedTheme})
		</Button>
		<div class="mt-[--spacing-lg]">
			<Button variant="primary" class="mr-[--spacing-sm]">Primary</Button>
			<Button variant="secondary" class="mr-[--spacing-sm]">Secondary</Button>
			<Button variant="success" class="mr-[--spacing-sm]">Success</Button>
			<Button variant="warning" class="mr-[--spacing-sm]">Warning</Button>
			<Button variant="danger" class="mr-[--spacing-sm]">Danger</Button>
			<Button variant="outline" class="mr-[--spacing-sm]">Outline</Button>
			<Button variant="ghost" class="mr-[--spacing-sm]">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
	</div>
</ThemeProvider>
