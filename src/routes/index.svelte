<script>
	import Footer from '$lib/components/Footer.svelte';
	import image from '../../static/stencil.large-square.png';
</script>

<div class="container mx-auto font-inter">
	<div class="flex">
		<div class="flex-col px-2 md:px-8 mx-auto text-center max-w-4xl">
			<!-- header  -->
			<img
				class="rounded-full shadow-lg my-8 mx-auto max-h-52 lg:max-h-60"
				src={image}
				alt="Teddy Stanowski"
			/>
			<h3>Hello World!</h3>
			<!-- /header  -->
			<div class="content">
				<p>
					My name is Teddy, and I enjoy being a FrontEnd Engineer and implementing <a
						class="underline font-bold"
						href="https://www.jamstack.org"
						target="_blank">Jamstack</a
					>
					concepts!
				</p>
				<p>
					Currently, I'm at working at <a
						class="underline font-bold"
						href="https://www.hdsupply.com"
						target="_blank">HD Supply</a
					>
					as a UI developer and I am implementing
					<a class="underline font-bold" href="https://www.svelte.dev" target="_blank">Svelte</a> into
					their e-commerce ecosystem and helping them modernize their tech stack.
				</p>
				<p>
					Outside of work, I am the goaltending coordinator for the Vegas Golden Knights youth
					programs, a certified mental performance coach, loving husband, hiker, and doggo dad.
				</p>
			</div>
			<!-- /content  -->
			<!-- contact  -->
			<!-- <div class="contact">
				<p>
					You can contact me
					<a
						class="border bg-white px-4 py-2 text-black rounded shadow-lg font-bold"
						href="/contact"
					>
						<span class="inline-block pr-1"> here </span>
						<span class="inline-block align-middle">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								data-reactroot=""
							>
								<path
									stroke-linejoin="round"
									stroke-linecap="round"
									stroke-miterlimit="10"
									stroke-width="1"
									stroke="#221b38"
									fill="none"
									d="M20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20Z"
								/>
								<path
									stroke-linecap="round"
									stroke-miterlimit="10"
									stroke-width="1"
									stroke="#221b38"
									fill="none"
									d="M20 4H4C2.9 4 2 4.9 2 6L12 13L22 6C22 4.9 21.1 4 20 4Z"
								/>
							</svg>
						</span>
					</a>
				</p>
			</div> -->
			<!-- /contact -->
			<!-- links  -->
			<div class="links">
				<p class="text-lg">Or, visit any of these links to learn more about me!</p>
				<!-- /content  -->
				<!-- button links  -->
				<div class="flex-row lg:space-x-6 mt-2 mb-4 lg:mt-4 lg:mb-4">
					<!-- blog  -->
					<a sveltekit:prefetch href="/blog">
						<button class="border rounded py-2 px-4 mx-3 my-3">
							<span class="btn-text">Blog</span>
							<span class="btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.994 9.095l2.974-2.884c.144-.14.331-.211.516-.211.188 0 .375.073.518.22l-4.032 3.911c-.283-.294-.268-.752.024-1.036zm-4.49 8.819c-.06.057-.136.086-.212.086-.168 0-.304-.137-.304-.304 0-.079.031-.159.093-.218l.5-.485.422.436-.499.485zm4.034-2.386c-.919.891-1.796 1.333-3.013 1.728l-.754-.779c.433-1.205.901-2.067 1.819-2.958l1.71-1.657 1.946 2.009-1.708 1.657zm6.965-6.483l-4.402 4.269-2.218-2.29 4.402-4.27c1.016-.984 2.703-.246 2.703 1.146 0 .416-.162.832-.485 1.145z"
									/></svg
								>
							</span>
						</button>
					</a>
					<!-- linkedin -->
					<a href="https://www.linkedin.com/in/teddy-stanowski/" target="_blank">
						<button class="border rounded py-2 px-4 mx-3 my-3">
							<span class="btn-text">LinkedIn</span>
							<span class="btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									/></svg
								>
							</span>
						</button>
					</a>
					<!-- github -->
					<a href="https://github.com/teds31" target="_blank">
						<button class="border rounded py-2 px-4 mx-3 my-3">
							<span class="btn-text"> GitHub </span>
							<span class="btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/></svg
								>
							</span>
						</button>
					</a>
					<!-- twitter  -->
					<a href="https://www.twitter.com/teddystanowski" target="_blank">
						<button class="border rounded py-2 px-4 mx-3 my-3">
							<span class="btn-text">Twitter</span>
							<span class="btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
									/></svg
								>
							</span>
						</button>
					</a>
				</div>
				<!-- /button links -->
			</div>
			<!-- links  -->
		</div>
	</div>
</div>
<Footer />

<style lang="postcss">
	h3 {
		font-size: 32px;
		color: white;
	}
	.content p {
		font-size: 18px;
		color: white;
		margin: 2rem 0;
	}

	.contact p {
		font-size: 18px;
		color: white;
		margin: 2rem 0;
	}
	button {
		@apply shadow-lg;
		color: black;
		background-color: white;
		font-weight: bold;
		width: 135px;
	}
	.btn-text,
	.btn-icon {
		vertical-align: middle;
		display: inline-block;
	}
	.btn-icon {
		margin-left: 0.25rem;
	}
</style>
