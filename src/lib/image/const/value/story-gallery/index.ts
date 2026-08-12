export const IMAGE_STORY_GALLERY = Object.entries(
	(import.meta as any).glob('/src/lib/image/data/png/*.png', {
		eager: true,
		query: '?url',
		import: 'default'
	}) as Record<string, string>
)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([path, src]) => {
		const fileName = path.split('/').pop() ?? path;
		const id = fileName.replace(/\.png$/i, '');
		const label = id.replace(/^\d+-/, '').split('-').join(' ');
		return { id, label: label.charAt(0).toUpperCase() + label.slice(1), src };
	});
