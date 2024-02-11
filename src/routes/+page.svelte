<div class="container">
	<h1 class="title">crr.</h1>
	<nav>
		<ul class="links">
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li class="link-center">
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/resume">Resume</a>
			</li>
		</ul>
	</nav>
</div>

<style>
		.title {
				font-size: clamp(1rem, 20vh, 8rem);
				font-weight: 700;
		}
	.container {
			display: flex;
			flex-direction: column;
      min-height: 100dvh;
			justify-content: center;
			align-items: center;
	}
	.links {
			display: flex;
			column-gap: 1rem;
	}
	.link-center {
			padding: 0 1rem;
			border-left: 2px solid var(--font-clr);
			border-right: 2px solid var(--font-clr);
	}
</style>
