<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SocialFeed, { type FeedUser as User, type Post, type Props } from './index.svelte';

    const defaultUser: User = {
        id: 'user-1',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40'
    };

    const defaultPosts: Post[] = [
        {
            id: 'post-1',
            title: 'New Project Launch',
            subtitle: 'Milestone update',
            image: 'https://via.placeholder.com/640x360?text=Launch',
            date: new Date(Date.now() - 3600000).toISOString(),
            excerpt: 'Shipping the first milestone of our next-gen platform.',
            author: 'John Doe',
            tags: ['#product', '#launch'],
            content: 'Just finished working on an amazing new project! Can\'t wait to share it with everyone.',
            authorAvatar: 'https://via.placeholder.com/40',
            authorIsVerified: true,
            likes: 24,
            comments: 5,
            shares: 2,
            isLiked: false,
            isBookmarked: false
        },
        {
            id: 'post-2',
            title: 'Golden Hour Inspiration',
            subtitle: 'Nature photography',
            image: 'https://via.placeholder.com/640x360?text=Sunset',
            date: new Date(Date.now() - 7200000).toISOString(),
            excerpt: 'Captured one of the best sunsets I\'ve seen this year.',
            author: 'Jane Smith',
            tags: ['#photography', '#nature'],
            content: 'Beautiful sunset today. Nature never fails to amaze me.',
            authorAvatar: 'https://via.placeholder.com/40',
            authorIsVerified: false,
            likes: 42,
            comments: 8,
            shares: 5,
            isLiked: true,
            isBookmarked: true
        },
        {
            id: 'post-3',
            title: 'Web Dev Trends 2025',
            subtitle: 'Article drop',
            image: 'https://via.placeholder.com/640x360?text=Article',
            date: new Date(Date.now() - 10800000).toISOString(),
            excerpt: 'A quick tour through the frameworks you should watch.',
            author: 'Bob Johnson',
            tags: ['#webdev', '#thoughts'],
            content: 'Just published a new article about web development trends in 2025. Check it out!',
            authorAvatar: 'https://via.placeholder.com/40',
            authorIsVerified: false,
            likes: 18,
            comments: 3,
            shares: 7,
            isLiked: false,
            isBookmarked: false
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'showFilters',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showSearch',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showCreatePost',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-social-feed"
    title="SocialFeed"
    component={SocialFeed}
    category="Molecules"
    description="Social feed component for displaying user posts"
    controls={controls}
>
    {#snippet children(props: Props)}
            <SocialFeed
                posts={props.posts || defaultPosts}
                currentUser={props.currentUser || defaultUser}
                showFilters={props.showFilters}
                showSearch={props.showSearch}
                showCreatePost={props.showCreatePost}
            />
    {/snippet}
</Story>
