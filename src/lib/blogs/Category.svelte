<!-- CategoryCard.svelte -->
<script>
    export let category = {
      name: 'Category Name',
      tag: 'Category Tag',
      color: '#000000',
      logo: 'path/to/logo.png',
      url: '/blogs/category'
    };
  </script>
  
  <div class="category-card" style="background-color: {category.color}">
    <div class="category-info">
      <img src={category.logo} alt={category.name}>
      <h3>{category.name}</h3>
      <p>{category.tag}</p>
    </div>
    <a href={category.url}>View Blogs</a>
  </div>
  
  <style>
    /* Styles for category card */
    .category-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 20px;
      margin: 10px;
      width: 200px; /* Adjust width as needed */
      height: 180px; /* Adjust height as needed */
      transition: all 0.3s;
    }
  
    .category-info {
      text-align: center;
      margin-bottom: 10px;
    }
  
    .category-info img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
  
    h3, p {
      margin: 5px 0;
    }
  
    a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
  