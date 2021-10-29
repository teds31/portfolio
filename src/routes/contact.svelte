<script>
	// import { Recaptcha, recaptcha, observer } from 'svelte-recaptcha-v2';
	import Footer from '$lib/components/Footer.svelte';

	// const googleRecaptchaSiteKey = 'key';
</script>

<!-- navigation links  -->
<div class="max-w-screen-2xl">
	<div class="flex justify-between p-4">
		<a href="/">
			<button class="bg-white rounded px-4 py-2 font-bold text-black shadow-lg"> HomePage </button>
		</a>
		<a href="/blog">
			<button class="bg-white rounded px-4 py-2 font-bold text-black shadow-lg"> Blog </button>
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
	<div class="mx-auto px-4 md:flex md:justify-center">
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
			<button type="submit" class="bg-white text-black rounded px-4 py-2 font-bold shadow-lg my-4">
				<span class="btn-text">Send</span>
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

<style lang="postcss">
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
