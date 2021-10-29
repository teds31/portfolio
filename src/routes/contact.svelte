<script>
	// import { Recaptcha, recaptcha, observer } from 'svelte-recaptcha-v2';
	import Footer from '$lib/components/Footer.svelte';

	// const googleRecaptchaSiteKey = 'key';
</script>

<div class="body h-full md:h-screen xl:h-full">
	<!-- navigation links  -->
	<div class="max-w-screen-2xl">
		<div class="flex justify-between p-4">
			<a href="/">
				<button class="bg-white rounded px-4 py-1 font-bold text-black shadow-lg">
					HomePage
				</button>
			</a>
			<a href="/blog">
				<button class="bg-white rounded px-4 py-1 font-bold text-black shadow-lg">
					Visit Blog
				</button>
			</a>
		</div>
	</div>
	<!-- /navigation links  -->
	<!-- contact form  -->
	<div class="mt-12">
		<div class="my-8 mx-auto px-4 text-center">
			<h3>Contact Form</h3>
			<p class="mt-4 mb-12">
				Use this form to send me a message here and I will get back to you soon.
			</p>
		</div>
		<div class="mx-auto md:flex md:justify-center">
			<form
				name="personal site contact"
				class="form-control align-middle w-full lg:w-1/2 xl:w-2/5 px-4 md:w-3/4 md:px-2"
				method="POST"
				data-netlify="true"
			>
				<label class="label" for="nameInput"> Name </label>
				<input
					class="input"
					type="text"
					name="nameInput"
					id="nameInput"
					aria-required="true"
					required
				/>
				<label class="label" for="emailInput">Email </label>
				<input
					type="email"
					class="input"
					name="emailInput"
					id="emailInput"
					aria-required="true"
					required
				/>
				<label class="label" for="messageInput"> Message </label>
				<textarea
					name="messageInput"
					id="messageInput"
					cols="30"
					rows="10"
					class="textarea"
					aria-required="true"
					required
				/>
				<button
					type="submit"
					class="bg-white text-black rounded px-4 py-1 font-bold shadow-lg my-4"
				>
					<span class="btn-text">Send</span>
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
								d="M22 2C22 2 10.98 13.02 10.97 13.03L14.41 22L22 2Z"
								undefined="1"
							/>
							<path fill="#3359d7" d="M22 2L2 9.59L10.97 13.03L22 2Z" undefined="1" />
						</svg>
					</span>
				</button>
				<!-- <Recaptcha
					sitekey={googleRecaptchaSiteKey}
					badge={'top'}
					size={'invisible'}
					on:success={onCaptchaSuccess}
					on:error={onCaptchaError}
					on:expired={onCaptchaExpire}
					on:close={onCaptchaClose}
					on:ready={onCaptchaReady}
				/> -->
			</form>
		</div>
	</div>

	<!-- /contact form  -->
	<Footer />
</div>

<style lang="postcss">
	.body {
		background: linear-gradient(271deg, #3d2466, #b0344e, #3162c5);
		background-size: 600% 600%;

		-webkit-animation: AnimationName 15s ease infinite;
		-moz-animation: AnimationName 15s ease infinite;
		-o-animation: AnimationName 15s ease infinite;
		animation: AnimationName 15s ease infinite;
	}

	@-webkit-keyframes AnimationName {
		0% {
			background-position: 0% 63%;
		}
		50% {
			background-position: 100% 38%;
		}
		100% {
			background-position: 0% 63%;
		}
	}
	@-moz-keyframes AnimationName {
		0% {
			background-position: 0% 63%;
		}
		50% {
			background-position: 100% 38%;
		}
		100% {
			background-position: 0% 63%;
		}
	}
	@-o-keyframes AnimationName {
		0% {
			background-position: 0% 63%;
		}
		50% {
			background-position: 100% 38%;
		}
		100% {
			background-position: 0% 63%;
		}
	}
	@keyframes AnimationName {
		0% {
			background-position: 0% 63%;
		}
		50% {
			background-position: 100% 38%;
		}
		100% {
			background-position: 0% 63%;
		}
	}
	.btn-text,
	.btn-icon {
		vertical-align: middle;
		display: inline-block;
		margin: 0 0.5rem;
	}

	h3 {
		font-size: 32px;
		color: white;
	}
	p {
		font-size: 18px;
	}
	.label {
		justify-content: flex-start;
	}
</style>
