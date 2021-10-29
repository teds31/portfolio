<script>
	import Footer from '$lib/components/Footer.svelte';
	import logo from '../../../static/blog-logo.png';
</script>

<!-- header  -->
<div class="max-w-screen-2xl">
	<div class="flex justify-between p-4">
		<a href="/">
			<button class="bg-white rounded px-4 py-1 font-bold text-black shadow-lg"> HomePage </button>
		</a>
		<a href="/contact">
			<button class="bg-white rounded px-4 py-1 font-bold text-black shadow-lg">
				Contact Me
			</button>
		</a>
	</div>
</div>
<div class="flex justify-center my-8">
	<div class="mx-auto px-4 md:px-0">
		<img src={logo} alt="Teddy Code Bytes Blog" class="h-32" />
	</div>
</div>
<!-- /header  -->
<!-- /posts -->
<div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:px-8 my-8">
	<article>
		<div class="card bordered">
			<figure>
				<img src="https://picsum.photos/id/1005/400/250" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">New Post</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias corporis iure eos ipsam
					provident voluptatibus, nam, numquam modi unde labore, quidem quae eius a quis itaque
					saepe quam accusamus. Cupiditate!
				</p>
				<div class="justify-end card-actions">
					<div class="btn btn-secondary">More Info</div>
				</div>
			</div>
		</div>
	</article>
	<article>
		<div class="card bordered">
			<figure>
				<img src="https://picsum.photos/id/1005/400/250" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">New Post</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias corporis iure eos ipsam
					provident voluptatibus, nam, numquam modi unde labore, quidem quae eius a quis itaque
					saepe quam accusamus. Cupiditate!
				</p>
				<div class="justify-end card-actions">
					<div class="btn btn-secondary">More Info</div>
				</div>
			</div>
		</div>
	</article>
	<article>
		<div class="card bordered">
			<figure>
				<img src="https://picsum.photos/id/1005/400/250" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">New Post</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias corporis iure eos ipsam
					provident voluptatibus, nam, numquam modi unde labore, quidem quae eius a quis itaque
					saepe quam accusamus. Cupiditate!
				</p>
				<div class="justify-end card-actions">
					<div class="btn btn-secondary">More Info</div>
				</div>
			</div>
		</div>
	</article>
	<article>
		<div class="card bordered">
			<figure>
				<img src="https://picsum.photos/id/1005/400/250" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">New Post</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias corporis iure eos ipsam
					provident voluptatibus, nam, numquam modi unde labore, quidem quae eius a quis itaque
					saepe quam accusamus. Cupiditate!
				</p>
				<div class="justify-end card-actions">
					<div class="btn btn-secondary">More Info</div>
				</div>
			</div>
		</div>
	</article>
</div>
<!-- /posts -->
<Footer />

<style lang="postcss">
	article {
		@apply my-4 px-4;
	}
</style>
