<script lang="ts">
  let count = $state(0);

  const handleClick = (event: MouseEvent) => {
    count++;
    console.log('Button clicked!', event);
  };
</script>

<button onclick={handleClick}>
  Click me {count} times
</button>

<style>
  button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
