<script>
  // Define the categories array directly within the component
  let categories = [
    { name: 'Metaphor and Meditation', url: 'https://in.search.yahoo.com/search?fr=mcafee&type=E210IN714G0&p=gradient+text+logo+maker', /*color: 'rgba(208, 208, 254,0.8)',*/ logo: 'https://www.pngkey.com/png/full/181-1818895_dove-of-peace-png.png' },
    { name: 'Reflection and Rhyme', url: 'reflection-rhyme', /*color: 'rgba(255, 209, 209,0.8)',*/ logo: 'https://www.pngmart.com/files/3/Vintage-PNG-Image.png' },
    { name: 'Caffeine of words', url: 'caffeine-words', /* color: 'rgba(215, 253, 223,0.8)',*/ logo: 'http://www.freepngclipart.com/download/coffee/80322-brown-coffee-cup-painted-hand-cafe-drawing.png' },
    { name: 'Self Musings', url: 'self-musings', /*color: 'rgba (	250,	255,	199,0.8)',*/ logo: 'https://pngimg.com/uploads/typewriter/typewriter_PNG42.png' },
    { name: 'Wired and Wise', url: 'wired-wise', /*color: 'rgba (	250,	255,	199,0.8)',*/ logo: 'https://cdn1.iconfinder.com/data/icons/success-and-opportunities-1/66/52-1024.png' },
    { name: 'Voyage and Vision', url: 'voyage-vision', /*color: 'rgba (	250,	255,	199,0.8)',*/ logo: 'http://www.pngmart.com/files/3/Vintage-PNG-Clipart.png' },
    { name: 'Gratitude Garden', url: 'gratitude-garden', /*color: 'rgba (	250,	255,	199,0.8)',*/ logo: 'https://www.freeiconspng.com/uploads/description-textmateicon-png-31.png' }
  ];
</script>

<div class="grid">
  {#each categories as category, i}
    <div class="category" style="background-color: {category.color}">
      <img src="{category.logo}" alt="{category.name}" class="logo">
      <div class="overlay"></div> <!-- Add overlay for parallax effect -->
      <a href="{category.url}">
        <p>{category.name}</p>
      </a>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: flex;
    overflow-x: auto;
    padding: 20px;
    gap: 20px;
    scrollbar-width: none; /* Hide scrollbar for Firefox */
    -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
    max-width: 100%; /* Limit max width for responsiveness */
  }

  .grid::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }

  .category {
    position: relative; /* Position relative for overlay positioning */
    width: 25%; /* Set width as percentage for responsiveness */
    max-width: 200px; /* Limit max width for larger screens */
    flex: 1 0 auto; /* Allow flex items to grow and shrink */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); /* Add glowy white border */
    transition: all 0.3s;
    cursor: pointer;
    overflow: hidden; /* Hide overflow for overlay */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent black overlay */
    z-index: 1; /* Ensure overlay is above content */
    opacity: 0.3; /* Initially set opacity */
    transition: opacity 0.3s; /* Smooth transition for opacity */
  }

  .category:hover .overlay {
    opacity: 0.5; /* Increase opacity on hover */
  }

  img.logo {
    width: 50%; /* Adjust image size as percentage for responsiveness */
    max-width: 100px; /* Limit max width for larger screens */
    height: auto; /* Maintain aspect ratio */
    object-fit: contain;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 14px; /* Adjust font size as needed */
    text-align: center;
  }

  /* Media Queries for Responsive Design */

  /* For mobile devices */
  @media (max-width: 600px) {
    .grid {
      flex-wrap: wrap; /* Allow items to wrap */
      justify-content: center; /* Center items */
      gap: 10px; /* Reduce gap between items */
    }

    .category {
      width: 45%; /* Adjust width for smaller screens */
    }
  }

  /* For tablets and larger devices */
  @media (min-width: 601px) {
    .grid {
      justify-content: flex-start; /* Align items to the start */
    }
  }
</style>
