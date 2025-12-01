<script lang="ts">
  import LocaleSwitcher from './LocaleSwitcher.svelte';

  type Locale = {
    code: string;
    name: string;
    region?: string;
    flag?: string;
  };

  let locales: Locale[] = [
    { code: 'en-US', name: 'English', region: 'United States', flag: '🇺🇸' },
    { code: 'es-ES', name: 'Spanish', region: 'Spain', flag: '🇪🇸' },
    { code: 'fr-FR', name: 'French', region: 'France', flag: '🇫🇷' },
    { code: 'de-DE', name: 'German', region: 'Germany', flag: '🇩🇪' },
    { code: 'ja-JP', name: 'Japanese', region: 'Japan', flag: '🇯🇵' },
    { code: 'zh-CN', name: 'Chinese', region: 'China', flag: '🇨🇳' }
  ];

  let currentLocale: string = 'en-US';
  let showRegional: boolean = true;
  let showDatePreview: boolean = true;
  let showTimePreview: boolean = true;

  let timezoneOptions = [
    { value: 'America/New_York', label: 'Eastern Time (New York)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (Los Angeles)' },
    { value: 'Europe/London', label: 'Greenwich Mean Time (London)' },
    { value: 'Europe/Paris', label: 'Central European Time (Paris)' },
    { value: 'Asia/Tokyo', label: 'Japan Standard Time (Tokyo)' },
    { value: 'Asia/Shanghai', label: 'China Standard Time (Shanghai)' }
  ];

  let currentTimezone: string = 'America/New_York';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">LocaleSwitcher Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive LocaleSwitcher</h2>
    <div class="max-w-3xl mx-auto">
      <LocaleSwitcher 
        {locales}
        {currentLocale}
        {showRegional}
        {showDatePreview}
        {showTimePreview}
        {timezoneOptions}
        {currentTimezone}
        onLocaleChange={(localeCode) => {
          currentLocale = localeCode;
          console.log('Locale changed to:', localeCode);
        }}
        onTimezoneChange={(timezone) => {
          currentTimezone = timezone;
          console.log('Timezone changed to:', timezone);
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-regional" class="flex items-center gap-1">
          <input id="show-regional" type="checkbox" bind:checked={showRegional} />
          Show Regional
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-date-preview" class="flex items-center gap-1">
          <input id="show-date-preview" type="checkbox" bind:checked={showDatePreview} />
          Show Date Preview
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-time-preview" class="flex items-center gap-1">
          <input id="show-time-preview" type="checkbox" bind:checked={showTimePreview} />
          Show Time Preview
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">LocaleSwitcher Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Without Regional Info</h3>
        <div class="max-w-3xl mx-auto">
          <LocaleSwitcher 
            {locales}
            currentLocale="es-ES"
            showRegional={false}
            showDatePreview={true}
            showTimePreview={true}
          />
        </div>
      </div>
    </div>
  </div>
</div>