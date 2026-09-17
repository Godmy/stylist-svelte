<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import ContactRequestForm from './index.svelte';
</script>

<Story
	id="travel-commerce-organisms-contact-request-form"
	title="Travel Commerce / ContactRequestForm"
	category="Travel Commerce/Organisms"
	component={ContactRequestForm}
	description="Contact request form for travel consultation leads."
>
	<div class="_surface">
		<ContactRequestForm />
	</div>
</Story>

<style>
	._surface {
		display: grid;
		place-items: center;
		min-height: 34rem;
		padding: 32px;
		background:
			linear-gradient(180deg, rgba(14, 23, 20, 0.22), rgba(14, 23, 20, 0.68)),
			url('https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80')
				center/cover;
	}
</style>
