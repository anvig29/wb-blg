<!-- BlogCard.svelte -->
<script>
    export let blog;
  
    function handleClick() {
      // Redirect to the blog page when the card is clicked
      window.location.href = `/blogs/${blog.id}`;
    }
  </script>
  
  <div class="blog-card" on:click={handleClick}>
    <h2>{blog.title}</h2>
    <p>{blog.summary}</p>
  </div>
  
  <style>
    /* Style the blog card as needed */
    .blog-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .blog-card:hover {
      background-color: #f0f0f0;
    }
  </style>
  