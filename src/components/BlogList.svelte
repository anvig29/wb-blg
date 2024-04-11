<!-- BlogList.svelte -->
<script>
    import BlogCard from './BlogCard.svelte';
  
    export let blogs;
  </script>
  
  <div class="blog-list">
    {#each blogs as blog}
      <BlogCard {blog} />
    {/each}
  </div>
  
  <style>
    /* Style the blog list container as needed */
    .blog-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }
  </style>
  