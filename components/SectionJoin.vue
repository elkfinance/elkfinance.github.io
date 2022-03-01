<template>
	<section class="sectionJoin pos--rel">
		<video class="sectionJoin__video pos--abs" src="~/static/elklogo.mp4" muted playsinline></video>
		<div class="sectionJoin__container flex flex--y-center flex--x-between flex--r-nowrap pos--abs z--1">
			<BaseTitle class="sectionJoin__title">Join the Herd</BaseTitle>
			<div class="sectionJoin__socials flex flex--x-center flex--y-center">
				<a class="sectionJoin__socials-link flex flex--y-center flex--r-nowrap" href="https://t.me/elk_finance_chat/">
					<img class="sectionJoin__socials-link-icon" src="~/static/telegram.svg" />
					<p class="name fs--20 fw--700">telegram</p>
				</a>
				<a class="sectionJoin__socials-link flex flex--y-center flex--r-nowrap" href="https://twitter.com/elk_finance/">
					<img class="sectionJoin__socials-link-icon" src="~/static/twitter.svg"/>
					<p class="name fs--20 fw--700">twitter</p>
				</a>
				<a class="sectionJoin__socials-link flex flex--y-center flex--r-nowrap" href="https://discord.gg/D68vrXgXXZ">
					<img class="sectionJoin__socials-link-icon" src="~/static/discord.svg"/>
					<p class="name fs--20 fw--700">discord</p>
				</a>
				<a class="sectionJoin__socials-link flex flex--y-center flex--r-nowrap" href="https://www.reddit.com/r/ElkFinance/">
					<img class="sectionJoin__socials-link-icon" src="~/static/reddit.svg" />
					<p class="name fs--20 fw--700">reddit</p>
				</a>
				<a class="sectionJoin__socials-link flex flex--y-center flex--r-nowrap" href="https://medium.com/elk-finance/">
					<img class="sectionJoin__socials-link-icon" src="~/static/medium.svg" />
					<p class="name fs--20 fw--700">medium</p>
				</a>
        <a class="sectionJoin__socials-link flex flex--y-center flex--r-nowrap" href="https://www.youtube.com/c/ElkFinance">
          <img class="sectionJoin__socials-link-icon" src="~/static/youtube.svg" />
          <p class="name fs--20 fw--700">youtube</p>
        </a>
			</div>
			<footer class="sectionJoin__footer flex flex--y-start">
				<a class="sectionJoin__footer-logo" href="">
					<img src="~/static/elklogo.svg" alt="ElK Finance Logo" />
				</a>
				<div class="sectionJoin__footer-category flex">
					<p class="sectionJoin__footer-title fs--24 fc--green fw--900">Menu</p>
					<a class="sectionJoin__footer-item pos--rel" href="https://docs.elk.finance/">
						About
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://elk.finance/index.html#tokenomics/">
						Tokenomics
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://docs.elk.finance/roadmap/">
						Roadmap
					</a>
				</div>
				<div class="sectionJoin__footer-category flex">
					<p class="sectionJoin__footer-title fs--24 fc--green fw--900">
						Exchange
					</p>
					<a class="sectionJoin__footer-item pos--rel" href="https://app.elk.finance/#/swap/">
						Launch dApp
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://docs.elk.finance/analytics">
						Analytics
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://app.elk.finance/#/elk/">
						Farms
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://app.elk.finance/#/stake/">
						Staking
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://app.elk.finance/#/elknet/">
						Cross-Chain
					</a>
				</div>
				<div class="sectionJoin__footer-category flex">
					<p class="sectionJoin__footer-title fs--24 fc--green fw--900">
						Documentation
					</p>
					<a class="sectionJoin__footer-item pos--rel" href="https://medium.com/elk-finance/tagged/elk-academy/">
						Elk Academy
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://docs.elk.finance/litepaper/">
						Litepaper
					</a>
					<!-- <a class="sectionJoin__footer-item pos--rel" href=""> Ecosystem </a> -->
					<a class="sectionJoin__footer-item pos--rel" href="https://docs.elk.finance/">
						Docs
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://docs.elk.finance/faq/">
						FAQ
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://docs.elk.finance/brand-assets/">
						Press Kit & Media Assets
					</a>
				</div>
				<div class="sectionJoin__footer-category flex">
					<p class="sectionJoin__footer-title fs--24 fc--green fw--900">
						Community
					</p>
					<!-- <a class="sectionJoin__footer-item pos--rel" href=""> Media </a> -->
					<a class="sectionJoin__footer-item pos--rel" href="https://discord.gg/D68vrXgXXZ">
						Join our Discord
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://t.me/elk_finance_chat/">
						Join our Telegram
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://medium.com/elk-finance/">
						Visit our Medium
					</a>
					<a class="sectionJoin__footer-item pos--rel" href="https://twitter.com/elk_finance/">
						Follow us on Twitter
					</a>
				</div>
			</footer>
		</div>
	</section>
</template>

<script>
export default {
	name: "SectionJoin",

	data() {
		return {
			hasAnimationPlayed: false
		}
	},

	methods: {
    intersectionCallback(entry) {
      if(!entry[0].isIntersecting || this.hasAnimationPlayed) {
        return
      }
			document.querySelector('.sectionJoin__video').play()
			this.hasAnimationPlayed = true
		}
	},
	mounted() {
		const observer = new IntersectionObserver(this.intersectionCallback, { threshold: 0.33 })
		observer.observe(document.querySelector(".sectionJoin"))
	}
}
</script>

<style lang="scss">
.sectionJoin {
	width: 100%;
	min-height: 100vh;
	background-color: white;
	background-image: url(~/static/elklogo.png);
	background-position: 50% 20%;
	background-size: 100vmin;
	background-repeat: no-repeat;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		height: 100vh;
		background: $darkgrey;
		mix-blend-mode: multiply;
		z-index: 0;
	}

	&__video {
		display: none;
		top: 0;
		width: 100%;
		height: 88vh;
	}

	&__container {
		flex-direction: column;
		inset: 0;
		padding: 32px 16px;
		height: 100vh;
	}

	&__title {
		margin: 0 0 48px;
	}

	&__socials {
		margin: 0 0 36px;
		width: 100%;

		&-link {
			margin: 4vw 2vw;

			&-icon {
				margin: 0 16px 0 0;
				max-width: 20px;
				max-height: 20px;
			}
		}
	}

	&__footer {
		flex-direction: column;
		margin: 0 0 0 -12px;
		width: 100%;

		& > * {
			margin: 12px 3vw;
		}

		&-item {
			width: max-content;

			&::after {
				content: "";
				position: absolute;
				width: 100%;
				height: 2px;
				bottom: -2px;
				left: 0;
				transition: 0.3s;
			}

			&:hover {
				color: $green;

				&::after {
					background: $green;
				}
			}
		}

		&-category {
			flex-direction: column;

			& > * + * {
				margin: 16px 0 0;
			}
		}
	}
}

@media (min-width: 400px) {
	.sectionJoin {
		&__title {
			margin: 80px 0 0;
		}

		&__socials {

			&-link-icon {
				margin: 0 1vw 0 0;
				min-width: 30px;
				min-height: 30px;
			}
		}
	}
}

@media (min-width: 800px) {
	.sectionJoin {
		background: white;

		&__video {
			display: initial;
		}

		&__footer {
			flex-direction: row;
			margin: 0 0 64px;
			justify-content: center;
		}
	}
}

@media (max-width: 880px) {
	.sectionJoin {

		&__socials {
			flex-direction: column;
			justify-content: flex-start;
			height: 200px;
		}

		&__footer {
			&-logo {
				width: 100%;
			}
		}
	}
}
</style>