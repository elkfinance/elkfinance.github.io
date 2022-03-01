<template>
	<nav class="navbar flex flex--x-between flex--y-center flex--r-nowrap">
		<a class="navbar__logo" href="">
			<img class="navbar__logo" src="~/static/elklogo.svg" alt="ElK Finance Logo">
		</a>
		<div class="navbar__links flex flex--x-center">
			<a class="navbar__link pos--rel" href="https://medium.com/elk-finance/tagged/elk-academy/">Elk Academy</a>
			<a class="navbar__link pos--rel" href="https://docs.elk.finance/litepaper/">Litepaper</a>
			<a class="navbar__link pos--rel" href="https://docs.elk.finance/">Docs</a>
			<a class="navbar__link pos--rel" href="https://docs.elk.finance/roadmap/">Roadmap</a>
			<a class="navbar__link pos--rel" href="https://linktr.ee/elk_finance/">Socials</a>
		</div>
		<div class="navbar__buttons flex flex--y-center flex--r-nowrap">
			<a class="button button--purple navbar__button fs--14" href="https://app.elk.finance/#/swap/">dApp</a>
			<button
			@click="menu.open = !menu.open"
			class="navbar__menu-button open-button flex flex--x-center flex--y-center">
				<img
				class="navbar__menu-button--icon"
				src="~/static/menuclosed.svg"
				alt="">
			</button>
		</div>
		<div
		:class="{'menu-open' : menu.open}"
		class="navbar__menu flex flex--x-center flex--y-center pos--abs z--1 fw--700">
			<button
			@click="menu.open = !menu.open"
			class="navbar__menu-button close-button  flex flex--x-center flex--y-center pos--abs">
				<img
				class="navbar__menu-button--icon"
				src="~/static/menuopen.svg"
				alt="">
			</button>
				<a class="navbar__menu-item fs--18" href="https://medium.com/elk-finance/tagged/elk-academy/">Elk Academy</a>
				<a class="navbar__menu-item fs--18" href="https://docs.elk.finance/litepaper/">Litepaper</a>
				<a class="navbar__menu-item fs--18" href="https://docs.elk.finance/">Docs</a>
				<a class="navbar__menu-item fs--18" href="https://docs.elk.finance/roadmap/">Roadmap</a>
				<a class="navbar__menu-item fs--18" href="https://linktr.ee/elk_finance/">Socials</a>
				<a class="navbar__menu-item navbar__button navbar__menu-button--full-width button button--purple" href="https://app.elk.finance/#/swap/">dApp</a>
			</div>
	</nav>
</template>

<script>
export default {
	name: 'TheNavbar',
	data() {
		return {
			menu: {
				open: false
			}
		}
	}
}
</script>

<style lang="scss">
.navbar {
	margin: 16px 0;
	width: 100%;

	&__logo {
		margin: 0 16px 0 0;
		height: 40px;
	}

	&__links {
		display: none;
	}

	&__link {
		margin: 0 16px;
	}

	&__buttons {
		margin: 0 0 0 16px;
	}

	&__button {
		margin: 0 16px 0 0;
		width: 116px;
		height: 40px;

		&:hover {
			box-shadow: 0 0 32px #8247E5;
		}
	}

	&__menu-button {
		padding: 0;
		border: 0;
		border-radius: 0;
		background: 0;

		&--icon {
			height: 50%;
		}

		&--full-width {
			width: 100%;
			height: 50px;
		}
	}

	&__menu {
		flex-direction: column;
		inset: 0;
		padding: 0 16px;
		width: 100%;
		height: 100%;
		background: $green;
		backdrop-filter: blur(12px);
		transform: translateX(100%);
		transition: .3s cubic-bezier(.5,0,.5,1);

		&-item + &-item{
			margin: 44px 0 0;
		}
	}
}

@supports (backdrop-filter: blur()) {
	.navbar__menu {
		background: rgba($green, .7);
	}
}

.close-button {
	top: 28px;
	right: 18px;
}

.menu-open {
	transform: translateX(0)
}

@media (min-width: 800px) {
	.navbar {
		margin: 48px 96px;
		width: calc(100% - 192px);

		&__logo {
			height: auto;
		}

		&__links {
			display: flex;
		}

		&__link {
			transition: .3s;

			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				bottom: -2px;
				left: 0;
				transition: .3s;
			}

			&:hover {
				color: $darkgreen;
				font-weight: 700;

				&::after {
					background: $darkgreen;
				}
			}
		}
	}

	.open-button {
		display: none;
	}
}
</style>