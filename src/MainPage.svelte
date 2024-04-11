<!-- Page.svelte -->
<script>
    import BlogList from './BlogList.svelte';
  
    // Sample data for demonstration
    let blogs = [
      { id: 1, title: 'Blog 1', summary: 'Summary of Blog 1' },
      { id: 2, title: 'Blog 2', summary: 'Summary of Blog 2' },
      // Add more blogs as needed
    ];
  </script>
  
  <main>
    <h1>My Blog</h1>
    <BlogList {blogs} />
  </main>
  
  <style>
    /* Add any main page styles as needed */
    main {
      padding: 20px;
    }
  </style>
  