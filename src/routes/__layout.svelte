<script>
	import '../app.css';
</script>

<div class="body">
	<slot />
</div>

<style>
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
</style>
