<script>
	import '../global.css';
</script>

<div class="container">
	<div>
		<slot />
	</div>
</div>

<style>
    .container {
        width: 100%;
        min-height: 100dvh;
        overflow-x: hidden;
        position: relative;
        background-image:
				url("/noise.svg"),
                radial-gradient(at 65% 0%, rgba(255, 193, 122, .4) 0px, transparent 65%),
                radial-gradient(at 50% 100%, rgba(31, 221, 225, .1) 0px, transparent 95%),
                radial-gradient(at 80% 50%, rgba(255, 133, 173, .1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(255, 181, 138, 0) 0px, transparent 50%),
                radial-gradient(at 80% 100%, rgba(107, 102, 255, 0) 0px, transparent 50%),
                radial-gradient(at 0% 0%, rgba(255, 133, 167, .25) 0px, transparent 50%);
    }
</style>