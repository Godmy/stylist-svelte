<script lang="ts">
  // Props
  let { 
    timestamp,
    formatStyle = 'datetime',
    showRelative = false
  }: {
    timestamp: Date;
    formatStyle?: 'datetime' | 'time' | 'date';
    showRelative?: boolean;
  } = $props();

  // Format timestamp based on style
  const formattedTime = $derived(() => {
    if (showRelative) {
      const diff = Date.now() - timestamp.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);

      if (minutes < 1) return 'Только что';
      if (minutes < 60) return `${minutes} м`;
      if (hours < 24) return `${hours} ч`;
      if (days < 7) return `${days} д`;
    }

    switch (formatStyle) {
      case 'time':
        return timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
      case 'date':
        return timestamp.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
      case 'datetime':
      default:
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const isToday = timestamp.getDate() === today.getDate() &&
          timestamp.getMonth() === today.getMonth() &&
          timestamp.getFullYear() === today.getFullYear();
          
        const isYesterday = timestamp.getDate() === yesterday.getDate() &&
          timestamp.getMonth() === yesterday.getMonth() &&
          timestamp.getFullYear() === yesterday.getFullYear();
          
        if (isToday) {
          return timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        } else if (isYesterday) {
          return `Вчера, ${timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
        } else {
          const dateStr = timestamp.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' });
          const timeStr = timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
          return `${dateStr}, ${timeStr}`;
        }
    }
  });
</script>

<style>
  .timestamp {
    font-size: 0.75rem;
    color: #94a3b8;
    white-space: nowrap;
  }
</style>

<span class="timestamp">
  {formattedTime}
</span>


