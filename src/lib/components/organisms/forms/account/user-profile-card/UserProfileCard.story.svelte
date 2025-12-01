<script lang="ts">
  import UserProfileCard from './UserProfileCard.svelte';

  type SocialLink = 'twitter' | 'github' | 'linkedin' | 'website' | 'instagram';

  type UserProfileData = {
    id: string;
    name: string;
    username?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    coverImage?: string;
    bio?: string;
    location?: string;
    joinedDate?: Date;
    stats?: {
      posts?: number;
      followers?: number;
      following?: number;
    };
    tags?: string[];
    status?: 'online' | 'offline' | 'away' | 'busy';
    socialLinks?: Array<{ type: SocialLink; url: string }>;
    role?: string;
    achievements?: string[];
    isVerified?: boolean;
    isFollowing?: boolean;
    isFriend?: boolean;
  };

  type ProfilePreset = {
    id: string;
    label: string;
    user: UserProfileData;
  };

  const profilePresets: ProfilePreset[] = [
    {
      id: 'designer',
      label: 'Design Lead',
      user: {
        id: 'user-17',
        name: 'Jade Morales',
        username: '@jadestudio',
        avatar: 'https://i.pravatar.cc/160?img=36',
        coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
        bio: 'Design systems lead focused on accessibility and storytelling.',
        location: 'Barcelona, Spain',
        joinedDate: new Date('2019-04-17'),
        stats: {
          posts: 128,
          followers: 4200,
          following: 318
        },
        tags: ['Accessibility', 'Systems', 'Storytelling'],
        status: 'online',
        socialLinks: [
          { type: 'twitter', url: 'https://twitter.com/jade' },
          { type: 'linkedin', url: 'https://linkedin.com/in/jadem' },
          { type: 'website', url: 'https://jadestudio.co' }
        ],
        role: 'Design Lead',
        achievements: ['Team lead', 'Speaker', 'Mentor'],
        isVerified: true,
        isFollowing: true
      }
    },
    {
      id: 'developer',
      label: 'Full-stack Dev',
      user: {
        id: 'user-18',
        name: 'Leo Custodio',
        username: '@leobuilds',
        avatar: 'https://i.pravatar.cc/160?img=22',
        coverImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80',
        bio: 'Full-stack tinkerer scaling commerce teams.',
        location: 'Lisbon, Portugal',
        joinedDate: new Date('2021-02-09'),
        stats: {
          posts: 87,
          followers: 1870,
          following: 402
        },
        tags: ['Next.js', 'GraphQL', 'Edge'],
        status: 'away',
        socialLinks: [
          { type: 'github', url: 'https://github.com/leocustodio' },
          { type: 'website', url: 'https://leobuilds.dev' }
        ],
        role: 'Full-stack Engineer',
        achievements: ['OSS maintainer'],
        isFriend: true
      }
    },
    {
      id: 'community',
      label: 'Community Host',
      user: {
        id: 'user-19',
        name: 'Mae Jamison',
        username: '@mae-hosts',
        avatar: 'https://i.pravatar.cc/160?img=19',
        coverImage: 'https://images.unsplash.com/photo-1496309732348-3627f3f040ee?auto=format&fit=crop&w=800&q=80',
        bio: 'Hosts live design critiques every week.',
        location: 'Remote',
        joinedDate: new Date('2020-07-22'),
        stats: {
          posts: 230,
          followers: 5150,
          following: 128
        },
        tags: ['Critiques', 'Streams', 'Community'],
        status: 'busy',
        socialLinks: [
          { type: 'twitter', url: 'https://twitter.com/maej' },
          { type: 'instagram', url: 'https://instagram.com/maej' }
        ],
        role: 'Community Host',
        achievements: ['Weekly stream', 'Community award']
      }
    }
  ];

  let selectedPresetId = $state(profilePresets[0].id);
  let showCoverImage = $state(true);
  let showBio = $state(true);
  let showLocation = $state(true);
  let showJoinDate = $state(true);
  let showStats = $state(true);
  let showTags = $state(true);
  let showSocialLinks = $state(true);
  let showActions = $state(true);
  let showStatus = $state(true);
  let compact = $state(false);

  const selectedProfile = $derived(
    profilePresets.find(({ id }) => id === selectedPresetId)?.user ?? profilePresets[0].user
  );
</script>

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow">
    <div class="flex flex-col gap-6 lg:flex-row">
      <div class="max-w-xs space-y-4 rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <h2 class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Настройки вида
        </h2>
        <label class="text-sm text-[--color-text-secondary]" for="preset-select">Профиль</label>
        <select
          id="preset-select"
          class="w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
          bind:value={selectedPresetId}
        >
          {#each profilePresets as preset}
            <option value={preset.id}>{preset.label}</option>
          {/each}
        </select>

        <div class="space-y-2">
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showCoverImage} />
            Cover image
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showBio} />
            Bio
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showLocation} />
            Location
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showJoinDate} />
            Join date
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showStats} />
            Stats
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showTags} />
            Tags
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showSocialLinks} />
            Social links
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showActions} />
            Action buttons
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showStatus} />
            Presence badge
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={compact} />
            Compact mode
          </label>
        </div>
      </div>

      <div class="grow">
        <UserProfileCard
          user={selectedProfile}
          {showCoverImage}
          {showBio}
          {showLocation}
          {showJoinDate}
          {showStats}
          {showTags}
          {showSocialLinks}
          {showActions}
          {showStatus}
          {compact}
        />
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-base font-semibold text-[--color-text-primary]">Командная сетка</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Компактные карточки помогают показать несколько участников одновременно.
        </p>
      </div>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2">
      {#each profilePresets as preset (preset.id)}
        <UserProfileCard
          user={preset.user}
          showCoverImage={false}
          showBio={false}
          showJoinDate={false}
          showSocialLinks={false}
          showTags={false}
          showStats={false}
          showActions={true}
          showStatus={true}
          compact={true}
        />
      {/each}
    </div>
  </section>
</div>
