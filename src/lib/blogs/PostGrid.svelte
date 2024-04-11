<script>
    import PostCard from './PostCard.svelte';

    // Define an array of objects containing blog details
    const blogs = [
        {
            title: "Your eyes",
            description: "poem",
            image: "https://tse1.mm.bing.net/th?id=OIP.wlN0A8U1w5uNV5fq1giB9QHaHa&pid=Api&P=0&h=180",
            category: "#Dev", 
            url: "https://thriving-kleicha-869b7a.netlify.app/" // Example URL
        },
        {
            title: "Shadow of Transition",
            description: "Blog2",
            image: "https://i.pinimg.com/736x/5a/a3/73/5aa37347521ff50c9df88885a02b0632.jpg",
            category: "#SelfMusing" ,
            url: "https://starlit-bunny-9706ca.netlify.app/" // Example URL
        },
        {
            title: "A Poet's Friend",
            description: "Poem",
            image: "https://i.pinimg.com/originals/18/b5/64/18b5641e458dd513e3ac2fb18fcc2508.png",
            category: "#Poem",
            url: "https://steady-macaron-f5a4e5.netlify.app/" // Example URL
        },
        {
            title: "Persists in opening my eyes",
            description: "Poem",
            image: "https://66.media.tumblr.com/cebf718a70fbd6491e0aa53f3d953beb/tumblr_pkewk3ahhA1valbo1_540.jpg",
            category: "#Poem",
            url: "https://unique-trifle-54e494.netlify.app/" // Example URL
        },
        // Add more blog objects as needed
    ];
</script>

<div class="articles-grid">
    {#each blogs as blog, i}
        <a href={blog.url} target="_blank" rel="noopener noreferrer">
            <PostCard
                title={blog.title}
                description={blog.description}
                image={blog.image}
                category={blog.category}
                url={blog.url}
            />
        </a>
    {/each}
</div>

<style lang="scss">
    .articles-grid {
        display: grid;
        grid-auto-columns: 100px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 3rem 1rem;
        transition: all 200ms ease-in-out;
        @media screen and (max-width: $tablet) {
            margin-inline: -1rem;
        }
    }
</style>
