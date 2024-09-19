<svelte:head>
	<title>Carlos R. Rodriguez</title>
</svelte:head>

<script>
	import gifImage from "$lib/assets/coding.gif";
</script>

<div class="container">
	<div class="card">
		<img src={gifImage} alt="coding gif">
		<h1>Let me cook...</h1>
		<p>This portfolio is under active development. Check back later!</p>
		<small>Last updated: <span>September 18, 2024</span></small>
	</div>
</div>

<style>
	.container {
		width: 100%;
		min-height: 100dvh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		text-align: center;
    background-color: hsl(205, 10%, 15%);
		padding: 2rem;
		border-radius: 1rem;
	}
	small span {
		color: hsl(162, 71%, 67%);
	}
</style>