
<script>
    import { goto } from '$app/navigation';
    let categories = [
        { name: "Caffeine of words", count: 2, color: "#FF33F6" ,url: "/blogs/caffeine-of-words" },
        { name: "Self musings", count: 2, color: "#8E7AB5", url: "/blogs/self-musing" },
        { name: "Metaphor and Meditation", count: 2, color: "#efcc00" , url: "/blogs/metaphor-and-meditation" },
        { name: "Reflection and Rhyme", count: 2, color: "#a2006d", url: "/blogs/reflection-and-rhyme" },
        { name: "Voyage and Vision", count: 2, color: "#ff7f50" , url: "/blogs/voyage-and-vision" },
        { name: "Gratitude Garden", count: 2, color: "#4CACBC", url: "/blogs/gratitude-garden" },
        { name: "Wired and Wise", count: 2, color: "#5733FF", url: "/blogs/wired-and-wise"  },
    ];

    function navigateToCategory(categoryUrl) {
        goto(categoryUrl);
    }
</script>

<style>
    body {
        padding-bottom: 80px; 
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
        gap: 1rem; 
    }

    .category {
        position: relative; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 360px; 
        width: 290px; 
        border-radius: 1rem;
        padding: 1.5rem; 
        color: white; 
        background-color: #333; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        transition: transform 0.3s ease-in-out; 
        cursor: pointer; 
        overflow-wrap: break-word;
        text-align: center;
        font-size: 16px; 
    }
    .category:hover {
        transform: translateY(-3px); 
    }

    .category .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: rgba(0, 0, 0, 0.5); 
    }

    .category .content {
        position: relative; 
        z-index: 1;
    }

    h2, .count {
        color: white; 
        margin: 0; 
    }

    .count {
        margin-top: 5px; 
    }

    @media screen and (max-width: 1024px) {
        .grid {
            grid-template-columns: repeat(3, 1fr); 
        }
        .category:hover {
        transform: translateY(-3px); 
    }
    }

    @media screen and (max-width: 768px) {
        .grid {
            grid-template-columns: repeat(2, 1fr); 
        }
        .category {
            height: 200px;
            width: 230px; 
            font-size: 12px; 
            padding: 1rem; 
        }
        .category:hover {
        transform: translateY(-3px);
    }
    }
</style>

<div class="grid">
    {#each categories as category}
        <div class="category" style="background-color: {category.color}" on:click={() => navigateToCategory(category.url)}>
            <div class="overlay"></div>
            <div class="content">
                <h2>{category.name}</h2>
                <span class="count">{category.count} posts</span>
            </div>
        </div>
    {/each}
</div>
