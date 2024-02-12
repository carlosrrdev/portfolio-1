<section id="intro">
	<nav>
		<ul>
			<li>
				<a href="#about">About me</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
			<li>
				<a href="#blog">Blog</a>
			</li>
			<li>
				<a href="#contact">Contact</a>
			</li>
		</ul>
	</nav>
	<div class="titles">
		<h1>
			<span>
				<span class="delay-1">Hi,</span>
				<span class="delay-2">I'm</span>
			</span>
			<span class="delay-3 text-grad">Carlos</span>
			<span class="delay-4 text-grad">Rodriguez</span>
		</h1>
		<p>
			<span class="delay-5">Fullstack</span>
			<span class="delay-6">web</span>
			<span class="delay-7">developer.</span>
			<span class="delay-8">I</span>
			<span class="delay-9">specialize</span>
			<span class="delay-10">in</span>
			<span class="delay-11">React,</span>
			<span class="delay-12">Svelte,</span>
			<span class="delay-13">Javascript,</span>
			<span class="delay-14">and</span>
			<span class="delay-15">Node.js</span>
			<span class="delay-16">Let's</span>
			<span class="delay-17">bring</span>
			<span class="delay-18">your</span>
			<span class="delay-19">ideas</span>
			<span class="delay-20">to</span>
			<span class="delay-21">reality</span>
		</p>
	</div>
</section>
<section id="about">
	<h2>About me</h2>
</section>

<style>
    nav {
        display: flex;
        flex-direction: column;
        margin-bottom: auto;
    }

    nav ul {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }

    #intro {
        display: flex;
        min-height: 100dvh;
        flex-direction: column;
        padding: var(--pad-md)
    }

    #about {
        background-color: hsl(0, 0%, 2%);
        padding: var(--pad-md);
    }

    .titles {
        padding: 2rem 0;
    }

    .titles h1 {
        display: flex;
        flex-direction: column;
        font-weight: 900;
        font-size: clamp(1rem, 8vw, 4rem);
        text-transform: uppercase;
        line-height: 1;
    }

    .titles h1 span,
    .titles p span {
        opacity: 0;
				transform-origin: bottom center;
        animation-delay: 0.2s;
        animation-name: slideFromBot;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(.42, 0, .02, .98);
    }

    .titles p {
        margin-top: 2rem;
        line-height: 1.5;
    }

    .titles p span {
        display: inline-block;
    }

    .text-grad {
        font-size: clamp(1rem, 12vw, 4rem);
        background-image: linear-gradient(to right, hsl(23, 72%, 60%), hsl(339, 61%, 61%));
				background-clip: text;
				-webkit-text-fill-color: transparent;
    }
</style>
