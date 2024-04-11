<!-- src/components/BlogPostLayout.svelte -->
<script>
    // Import any necessary modules
</script>

<div>
    <slot></slot>
</div>

<style>
    /* Global Styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Blog Post Styles */
.blog-post {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.blog-post h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.blog-post p {
  margin-bottom: 15px;
}

.blog-post img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

/* Meta Info Styles */
.meta-info {
  margin-bottom: 20px;
}

.meta-info span {
  margin-right: 10px;
  font-size: 14px;
  color: #999;
}

/* Share Buttons Styles */
.share-buttons {
  margin-top: 20px;
}

.share-buttons a {
  display: inline-block;
  margin-right: 10px;
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

/* Comments Section Styles */
.comments-section {
  margin-top: 40px;
}

.comment {
  margin-bottom: 20px;
}

.comment-author {
  font-weight: bold;
  margin-bottom: 5px;
}

.comment-date {
  font-size: 12px;
  color: #999;
}

.comment-content {
  margin-left: 20px;
}

.comment-actions {
  margin-top: 10px;
}

.comment-actions a {
  margin-right: 10px;
  color: #007bff;
}

</style>
