<!-- PostCard.svelte -->
<script>
    export let title;
    export let description;
    export let image;
    export let category; 
</script>

<div class="card">
    <a href="/blog" class="article-link">
        <div class="card-image">
            <img src={image} alt="thumbnail" />
        </div>
    </a>
    <div class="card-content">
        <a href="/blog" class="article-link" data-sveltekit-preload-data="hover">
            <h2>{title}</h2>
        </a>
        <p>{description}</p>
        {#if category} 
            <p>Category: {category}</p>
        {/if}
    </div>
</div>

<style lang="scss">
	.card {
		position: relative;
		height: calc(100% + 2rem);
		max-width: 630px;
		background: $clr-card;
		border-radius: 1.5rem;
		transition: all 200ms ease-in-out, transform 100ms;
		padding: 0.7rem;

		.card-image {
			width: 100%;
			height: 13rem;
			overflow: hidden;
			border-radius: 1em;
			transition: all 200ms ease-in-out;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center center !important;
				transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);

				@include hover {
					transform: scale(1.05);
				}
			}
		}

		.card-content {
			padding: 0 0.5rem 0.5rem 0.5rem;
			position: relative;
			top: 10px; 
		}

		@media (min-width: $tablet) {
			max-width: 420px;
		}

		.card-info {
			a {
				text-decoration: none;
				transition: 0.2s;
				@include hover {
					filter: brightness(0.9);
				}
			}

			
		@include hover {
			filter: brightness(1.1);
			// transform: translateY(-1%);
			box-shadow: 0px 4px 20px 5px transparentize($clr-bg-450, 0.8);

			.card-image {
				filter: brightness(0.9);
			}
		}
	}

	@media screen and (max-width: $mobile) {
		.card {
			padding: 0.5rem;
			background: none;
		}

		.card-image {
			height: auto !important;
			margin-inline: calc(-50vw + 50%);
			width: 100vw !important;
			border-radius: 0 !important;
			height: auto !important;
			max-height: 18rem;
		}
	}
}
</style>
