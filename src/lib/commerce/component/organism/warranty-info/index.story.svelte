<script lang="ts">
	import type { RecipeWarrantyInfo as RecipeWarrantyInfoProps } from '$stylist/commerce/interface/recipe/warranty-info';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeWarrantyInfo from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'showCoverageDetails', type: 'boolean', defaultValue: true },
		{ name: 'showClaimsHistory', type: 'boolean', defaultValue: true }
	];

	const warrantyData = {
		productName: 'Aurora Pro Headphones',
		purchaseDate: new Date('2023-03-18'),
		warrantyPeriod: {
			type: 'extended' as const,
			duration: 24,
			description: 'Extended protection for premium electronics.',
			coverage: ['Electronic components', 'Housing materials', 'Firmware support'],
			exclusions: ['Water exposure', 'Unauthorized repair']
		},
		claims: [
			{
				id: 'claim-1',
				date: new Date('2024-06-12'),
				status: 'resolved' as const,
				issue: 'Battery drain',
				description: 'Battery replacement required.',
				resolution: 'Battery replaced.',
				claimNumber: 'WC-10452'
			}
		],
		serialNumber: 'AP-4482-NEBULA',
		productId: 'SKY-2048',
		termsUrl: 'https://example.com/warranty'
	};
</script>

<Story
	component={RecipeWarrantyInfo}
	title="Warranty Info"
	description="Warranty details with optional claims history."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeWarrantyInfo
			{...warrantyData}
			showCoverageDetails={values.showCoverageDetails as boolean}
			showExclusions={true}
			showClaimsHistory={values.showClaimsHistory as boolean}
			showFileDownload={true}
			showClaimForm={true}
			onClaimSubmit={(
				claim: Parameters<NonNullable<RecipeWarrantyInfoProps['onClaimSubmit']>>[0]
			) => {
				console.log('Submitting warranty claim:', claim);
			}}
			onTermsClick={() => {
				console.log('Viewing warranty terms');
			}}
			onFileDownload={() => {
				console.log('Downloading warranty certificate');
			}}
		/>
	{/snippet}
</Story>
