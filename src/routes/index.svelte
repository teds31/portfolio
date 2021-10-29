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
			<div class="contact">
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
			</div>
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
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									data-reactroot=""
								>
									<path
										fill="#3359d7"
										d="M16.6 22H3C2.5 22 2 21.5 2 21V3C2 2.5 2.5 2 3 2H21C21.5 2 22 2.5 22 3V16.6C22 16.9 21.9 17.1 21.7 17.3L17.3 21.7C17.1 21.9 16.9 22 16.6 22Z"
										undefined="1"
									/>
									<path
										stroke-linejoin="round"
										stroke-linecap="round"
										stroke-miterlimit="10"
										stroke-width="1"
										stroke="#221b38"
										d="M17 7H7"
									/>
									<path
										stroke-linejoin="round"
										stroke-linecap="round"
										stroke-miterlimit="10"
										stroke-width="1"
										stroke="#221b38"
										d="M17 12H7"
									/>
									<path
										stroke-linejoin="round"
										stroke-linecap="round"
										stroke-miterlimit="10"
										stroke-width="1"
										stroke="#221b38"
										d="M12 17H7"
									/>
									<path
										stroke-linejoin="round"
										stroke-miterlimit="10"
										stroke-width="1"
										stroke="#221b38"
										d="M22 16H16V22"
									/>
									<path
										fill="#3359d7"
										d="M16.6 22C16.9 22 17.1 21.9 17.3 21.7L21.7 17.3C21.9 17.1 22 16.9 22 16.6V16H16V22H16.6Z"
										undefined="1"
									/>
								</svg>
							</span>
						</button>
					</a>
					<!-- linkedin -->
					<a href="https://www.linkedin.com/in/teddy-stanowski/" target="_blank">
						<button class="border rounded py-2 px-4 mx-3 my-3">
							<span class="btn-text">LinkedIn</span>
							<span class="btn-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									data-reactroot=""
								>
									<path
										fill="#3359d7"
										d="M19.34 22H4.66C3.19 22 2 20.81 2 19.34V4.66C2 3.19 3.19 2 4.66 2H19.33C20.81 2 22 3.19 22 4.66V19.33C22 20.81 20.81 22 19.34 22Z"
										undefined="1"
									/>
									<path
										stroke-linejoin="round"
										stroke-linecap="round"
										stroke-miterlimit="10"
										stroke-width="1"
										stroke="#000000"
										d="M7 10V17"
									/>
									<path
										stroke-linejoin="round"
										stroke-linecap="round"
										stroke-miterlimit="10"
										stroke-width="1"
										stroke="#000000"
										d="M17 17C17 17 17 12.45 17 12.44C17 11.87 17.03 11.21 16.76 10.69C16.16 9.50999 14.57 10.11 13.72 10.6C12.84 11.1 12.04 11.74 11.28 12.4C11.19 12.48 11.09 12.57 11 12.65V10.01V17"
									/>
									<path
										fill="#3359d7"
										d="M7 7C7.27614 7 7.5 6.77614 7.5 6.5C7.5 6.22386 7.27614 6 7 6C6.72386 6 6.5 6.22386 6.5 6.5C6.5 6.77614 6.72386 7 7 7Z"
										undefined="1"
									/>
									<path
										stroke-linejoin="round"
										stroke-linecap="round"
										stroke-miterlimit="10"
										stroke-width="1"
										stroke="#000000"
										d="M7 7C7.27614 7 7.5 6.77614 7.5 6.5C7.5 6.22386 7.27614 6 7 6C6.72386 6 6.5 6.22386 6.5 6.5C6.5 6.77614 6.72386 7 7 7Z"
									/>
								</svg>
							</span>
						</button>
					</a>
					<!-- github -->
					<a href="https://github.com/teds31" target="_blank">
						<button class="border rounded py-2 px-4 mx-3 my-3">
							<span class="btn-text"> GitHub </span>
							<span class="btn-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									data-reactroot=""
								>
									<path
										fill="#3359d7"
										d="M20.88 6.72C22.76 5 21.7 2 21.7 2C21.7 2 18.7 2 17.65 3.87C17.05 3.65 16.41 3.51 15.74 3.51H12.77C12.12 3.51 11.5 3.64 10.92 3.85C9.86996 2 6.88997 2 6.88997 2C6.88997 2 5.83997 5 7.70997 6.72C7.70997 6.72 7.21996 8.19 7.21996 9.07C7.21996 11.73 9.10996 13.96 11.61 14.5C11.43 14.88 11.33 15.29 11.33 15.73V18.61C10.64 18.77 8.96996 19.39 8.40997 17.68C7.95997 16.31 5.97997 13.74 3.33997 14C2.52997 14.07 1.92997 14.79 2.00997 15.6C2.08997 16.41 2.79997 17.02 3.60997 16.93C3.96997 16.89 5.11997 17.39 5.66997 18.77C6.00997 19.61 6.31996 20.4 6.94997 20.93C7.61997 21.51 8.49996 21.69 9.35996 21.69C9.85996 21.69 11.21 21.62 11.64 21.54C12.12 22.51 17.19 21.86 17.19 20.25V15.72C17.19 15.28 17.08 14.86 16.91 14.49C19.41 13.95 21.3 11.72 21.3 9.06C21.3 8.14 20.88 6.72 20.88 6.72Z"
										undefined="1"
									/>
								</svg>
							</span>
						</button>
					</a>
					<!-- twitter  -->
					<a href="https://www.twitter.com/teddystanowski" target="_blank">
						<button class="border rounded py-2 px-4 mx-3 my-3">
							<span class="btn-text">Twitter</span>
							<span class="btn-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									data-reactroot=""
								>
									<path
										fill="#3359d7"
										d="M22 5.89C21.26 6.21 20.46 6.42 19.64 6.53C20.49 6.03 21.14 5.24 21.44 4.3C20.65 4.77 19.77 5.09 18.84 5.28C18.09 4.49 17.02 4 15.85 4C13.58 4 11.75 5.81 11.75 8.04C11.75 8.36 11.78 8.67 11.84 8.96C8.43999 8.79 5.41999 7.19 3.38999 4.74C3.03999 5.34 2.82999 6.03 2.82999 6.78C2.82999 8.18 3.55999 9.42 4.64999 10.13C3.98999 10.12 3.33999 9.93 2.79999 9.63V9.67C2.79999 11.63 4.21999 13.26 6.07999 13.64C5.74999 13.73 5.37999 13.77 4.99999 13.77C4.73999 13.77 4.46999 13.76 4.21999 13.7C4.74999 15.3 6.25999 16.48 8.04999 16.51C6.65999 17.59 4.87999 18.23 2.96999 18.23C2.62999 18.23 2.30999 18.21 1.98999 18.17C3.81999 19.34 5.96999 20 8.28999 20C15.84 20 19.96 13.85 19.96 8.51C19.96 8.33 19.95 8.16 19.94 7.99C20.76 7.42 21.44 6.71 22 5.89Z"
										undefined="1"
									/>
								</svg>
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
