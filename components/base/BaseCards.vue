<template>
	<div class="cards flex--x-center" ref="slider">
		<div v-for="(card, i) in cards" :key="card + i" class="card flex flex--r-nowrap fc--black">
			<p class="card__title fs--32 fc--green fw--700">{{ card.title }}</p>
			<p class="card__subtitle o--6">{{ card.subtitle }}</p>
			<div class="card__image-wrap flex flex--x-center flex--y-center">
				<img class="card__image" :src="`/${card.src}`" :alt="card.alt">
			</div>
			<p class="card__text o--6">{{ card.text }}</p>
			<a class="button button--purple card__button" :href="(card.link)">{{ card.buttontext }}</a>
		</div>
	</div>
</template>

<script>
import "flickity/css/flickity.css";

export default {
	name: 'BaseCards',
	data() {
		return {
			cards: [
				{
					title: 'Impermanent Loss Protection (ILP)',
					subtitle: 'Prevents users from being penalised for providing liquidity.',
					src: 'card1.png',
					alt: 'Elk ILP Graph',
					text: 'Each day in a farm provides liquidity providers with ~2.5% of ILP coverage until 100% has been reached. Users can claim ELK rewards at any time; ILP coverage is prorated based on length of time in the farm.',
					buttontext: 'Read More',
					link: 'https://medium.com/elk-finance/impermanent-loss-protection-new-farms-aecd6e1e9992/'
				},
				{
					title: 'Dynamic farming',
					subtitle: 'Promotes a sustainable token trajectory.',
					src: 'card2.png',
					text: 'Emission targets are used to adjust rewards dynamically on each chain at the start of each farming round.',
					buttontext: 'Check out Farms',
					link: 'https://app.elk.finance/#/elk/'
				},
				{
					title: '$CHFT',
					subtitle: 'A Multi-chain Native Stablecoin',
					src: 'card3.png',
					text: 'The first cross-chain stablecoin based on an innovative “gyroscopic” design, which allows it to be minted natively on any network that Elk supports.',
					buttontext: 'Read More',
					link: 'https://docs.elk.finance/tokens/chft-stablecoin/'
				},
				{
					title: 'Proxy Tokens',
					subtitle: 'Cross-chain virtual assets.',
					src: 'card4.png',
					text: 'Proxy tokens transform any token into a virtual asset that can be moved to any chain.',
					buttontext: 'Read More',
					link: 'https://medium.com/elk-finance/beyond-the-bridge-exploring-use-cases-for-the-elk-blockchain-b744cd4da8d1'
				}
			]
		}
	},

	mounted() {
		const Flickity = require('flickity')

		const slider = new Flickity(this.$refs.slider, {
			draggable: true,
			prevNextButtons: false
		})

		window.addEventListener('resize', () => {
			if(window.innerWidth < 886) {
				slider.activate()
			} else {
				slider.deactivate()
			}
		})

		window.dispatchEvent(new CustomEvent("resize"))

		if (document.querySelector('.flickity-viewport')) {
			setTimeout(
				() => {
					document.querySelectorAll('.flickity-slider .card').forEach(card => {
						card.style.height = `${document.querySelector('.flickity-viewport').offsetHeight}px`
					})
				}, 300
			)
		}
	}
}
</script>

<style lang="scss">
.cards {
	width: 100%;
	max-width: 864px;

	&.flickity-enabled {
		width: 100%;
	}

	&:focus-visible,
	&:focus-within {
		outline: none;
	}
}

.card {
	flex-direction: column;
	padding: 32px;
	width: 100%;
	max-width: 40ch;
	background: white;
	border-radius: 32px;
	transition: .3s;

	&:focus-visible,
	&:focus-within {
		outline: none;
	}

	& > * + * {
		margin: 16px 0 0;
	}

	&__title,
	&__subtitle,
	&__text {
		width: 100%;
		transition: .3s;
	}

	&__subtitle {
		padding: 0 0 16px;
		border-bottom: 1px solid rgba(black, .1);
	}

	&__image-wrap {
		flex-grow: 1;
	}

	&__image {
		max-width: 100%;
	}

	&__button {
		width: 100%;
		height: 50px;
	}
}



.flickity-slider{

	& .card {
		margin: 0 16px 0 0;
	}
}

ol.flickity-page-dots {
	position: relative;
	bottom: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	margin: 32px 0 0;

	& .dot {
		margin: 7px;
		width: 16px;
		height: 16px;
		background: 0;
		border: 2px solid $green;
		border-radius: 50%;

		&.is-selected {
			margin: 5px;
			width: 20px;
			height: 20px;
			background: $green;
		}
	}
}

.hide {
	display: none;
}

@media (min-width: 886px) {
 .cards {
	display: flex;
	flex-wrap: wrap;
 }

	.card {
		margin: 16px;

		&:hover {
			background: $green;

			& .card__title {
				color: $darkgreen
			}

			& .card__subtitle,
			& .card__text {
				color: white;
				opacity: 1;
			}

			& .card__button {
				background: $limegreen;
				border-color: $limegreen
			}
		}
	}
}
</style>