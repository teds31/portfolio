<script>
	import logo from '../../../static/blog-logo.png';
</script>

<div class="max-w-screen-2xl">
	<div class="flex justify-between p-4">
		<a href="/">
			<button class="bg-white rounded px-4 py-1 font-bold text-black shadow-lg">
				Return To Main Page
			</button>
		</a>
		<a href="/contact">
			<button class="bg-white rounded px-4 py-1 font-bold text-black shadow-lg">
				Contact Me
			</button>
		</a>
	</div>
</div>
<div class="flex justify-center my-8">
	<div class="mx-auto">
		<img src={logo} alt="Teddy Code Bytes Blog" class="h-32" />
	</div>
</div>
<div class="grid grid-cols-3 gap-12 px-8 my-8">
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

<style>
	h1 {
		font-size: 48px;
	}
</style>
