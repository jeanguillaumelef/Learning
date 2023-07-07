<script lang="ts">
    let textboxValue = '';
  
    async function saveText() {
      // Send the textbox value to the API defined in worker.ts
      try {
        const response = await fetch('https://helloworld.jeanguillaumelefebvre.workers.dev/api/worker', {
          method: 'POST',
          body: JSON.stringify({ text: textboxValue }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
  
        // Handle the API response here
        console.log(data);
      } catch (error) {
        // Handle any errors that occurred during the API call
        console.error(error);
      }
    }
  </script>
  
  <main>
    <h1>Form Page</h1>
    <input type="text" bind:value={textboxValue} placeholder="Enter text" />
    <button on:click={saveText}>Save</button>
  </main>
  
  <style>
    main {
      padding: 2rem;
    }
  </style>
  