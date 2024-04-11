<!-- AnyOtherComponent.svelte -->
<script>
    // Define the categories array directly within the component
    let items = [
      { name: 'Item 1', color: '#EED3D9', logo: 'path/to/item1.png' },
      { name: 'Item 2', color: '#9AD0C2', logo: 'path/to/item2.png' },
      { name: 'Item 3', color: '#33FF33', logo: 'path/to/item3.png' },
      { name: 'Item 4', color: '#FF33FF', logo: 'path/to/item4.png' }
    ];
  </script>
  
  <div class="grid">
    {#each items as item}
      <div class="item-card" style="border: 1px solid white;">
        <img src={item.logo} alt={item.name} width="50" height="50">
        <p style="color: white; margin-top: 5px;">{item.name}</p>
      </div>
    {/each}
  </div>
  
  <style>
    .grid {
      display: flex;
      overflow-x: auto;
      scrollbar-width: none; /* Hide scrollbar for Firefox */
      -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
    }
  
    .grid::-webkit-scrollbar {
      display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
    }
  
    .item-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background-color: var(--item-background-color, #333);
      margin: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  </style>
  