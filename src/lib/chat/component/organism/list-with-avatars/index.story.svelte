<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ListWithAvatars from './index.svelte';

	type ListItem = {
		id: string;
		title: string;
		subtitle?: string;
		avatar?: string;
		status?: 'online' | 'offline' | 'away' | 'busy';
		description?: string;
		actions?: Array<{
			label: string;
			onClick: () => void;
			variant?: 'primary' | 'secondary' | 'danger';
		}>;
	};

	let items: ListItem[] = [
		{
			id: '1',
			title: 'John Doe',
			subtitle: 'Software Engineer',
			avatar: 'https://placehold.co/40x40',
			status: 'online',
			description: 'Active now',
			actions: [
				{
					label: 'Message',
					onClick: () => console.log('Messaging John Doe'),
					variant: 'primary'
				}
			]
		},
		{
			id: '2',
			title: 'Jane Smith',
			subtitle: 'Product Manager',
			avatar: 'https://placehold.co/40x40',
			status: 'away',
			description: 'Will be back in 30 mins',
			actions: [
				{
					label: 'Call',
					onClick: () => console.log('Calling Jane Smith'),
					variant: 'primary'
				}
			]
		},
		{
			id: '3',
			title: 'Bob Johnson',
			subtitle: 'Designer',
			avatar: 'https://placehold.co/40x40',
			status: 'busy',
			description: 'In a meeting',
			actions: [
				{
					label: 'Email',
					onClick: () => console.log('Emailing Bob Johnson'),
					variant: 'primary'
				}
			]
		},
		{
			id: '4',
			title: 'Alice Williams',
			subtitle: 'Marketing Specialist',
			avatar: 'https://placehold.co/40x40',
			status: 'online',
			description: 'Working from home',
			actions: [
				{
					label: 'Chat',
					onClick: () => console.log('Chatting with Alice Williams'),
					variant: 'primary'
				}
			]
		},
		{
			id: '5',
			title: 'Charlie Brown',
			subtitle: 'QA Engineer',
			avatar: 'https://placehold.co/40x40',
			status: 'offline',
			description: 'Last seen 2 hours ago',
			actions: [
				{
					label: 'Schedule',
					onClick: () => console.log('Scheduling with Charlie Brown'),
					variant: 'primary'
				}
			]
		}
	];

	let showAvatar: boolean = true;
	let showStatus: boolean = true;
	let showSubtitle: boolean = true;
	let showDescription: boolean = true;
	let showActions: boolean = true;
	let size: 'sm' | 'md' | 'lg' = 'md';

	type Props = {
		showAvatar: boolean;
		showStatus: boolean;
		showSubtitle: boolean;
		showDescription: boolean;
		showActions: boolean;
		size: 'sm' | 'md' | 'lg';
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showAvatar', type: 'boolean', defaultValue: true },
		{ name: 'showStatus', type: 'boolean', defaultValue: true },
		{ name: 'showSubtitle', type: 'boolean', defaultValue: true },
		{ name: 'showDescription', type: 'boolean', defaultValue: true },
		{ name: 'showActions', type: 'boolean', defaultValue: true },
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
	];
</script>

<Story
	id="organisms-list-with-avatars"
	title="Organisms / Interaction / Controls / Lists / ListWithAvatars"
	component={ListWithAvatars}
	category="Organisms/Interaction/Controls/Lists"
	description="List component with avatars, status indicators, and optional action buttons."
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-list-with-avatars _c1">
			<h1 class="_c2">ListWithAvatars Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive ListWithAvatars</h2>
				<div class="_c5">
					<ListWithAvatars
						{items}
						showAvatar={values.showAvatar}
						showStatus={values.showStatus}
						showSubtitle={values.showSubtitle}
						showDescription={values.showDescription}
						showActions={values.showActions}
						size={values.size}
					/>
				</div>

				<div class="_c6">
					<div class="_c7">
						<label for="show-avatar" class="_c8">
							<input id="show-avatar" type="checkbox" bind:checked={showAvatar} />
							Show Avatar
						</label>
					</div>

					<div class="_c7">
						<label for="show-status" class="_c8">
							<input id="show-status" type="checkbox" bind:checked={showStatus} />
							Show Status
						</label>
					</div>

					<div class="_c7">
						<label for="show-subtitle" class="_c8">
							<input id="show-subtitle" type="checkbox" bind:checked={showSubtitle} />
							Show Subtitle
						</label>
					</div>

					<div class="_c7">
						<label for="show-description" class="_c8">
							<input id="show-description" type="checkbox" bind:checked={showDescription} />
							Show Description
						</label>
					</div>

					<div class="_c7">
						<label for="show-actions" class="_c8">
							<input id="show-actions" type="checkbox" bind:checked={showActions} />
							Show Actions
						</label>
					</div>

					<div>
						<label for="avatar-size" class="_c9">Size:</label>
						<select id="avatar-size" bind:value={size} class="_c10">
							<option value="sm">Small</option>
							<option value="md">Medium</option>
							<option value="lg">Large</option>
						</select>
					</div>
				</div>
			</div>

			<div class="_c11">
				<h2 class="_c4">ListWithAvatars Variations</h2>
				<div class="_c12">
					<div>
						<h3 class="_c13">Without Avatars</h3>
						<div class="_c5">
							<ListWithAvatars {items} showAvatar={false} />
						</div>
					</div>
					<div>
						<h3 class="_c13">Without Status</h3>
						<div class="_c5">
							<ListWithAvatars
								{items}
								showStatus={false}
								showSubtitle={false}
								showDescription={true}
							/>
						</div>
					</div>
					<div>
						<h3 class="_c13">Large Size</h3>
						<div class="_c5">
							<ListWithAvatars {items} size="lg" showActions={false} />
						</div>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c10 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.25rem;
	}
	._c11 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c12 > * + * {
		margin-top: 1rem;
	}
	._c13 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		margin-left: auto;
		margin-right: auto;
		max-width: 28rem;
	}
	._c6 {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	._c7 {
		display: flex;
		align-items: flex-end;
	}
	._c8 {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	._c9 {
		margin-bottom: 0.25rem;
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
