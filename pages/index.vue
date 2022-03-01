<template>
	<div>
		<SectionHero />
		<SectionDeFi />
		<SectionHow />
		<SectionWhy />
		<SectionRoadmap />
		<SectionJoin />
	</div>
</template>

<script>
export default {
	name: "PageHome",
	mounted() {
		// This is just to force the page to scroll to the top, even if the user refreshes
		window.scrollTo(0, 0)
	}
}
</script>

<style lang="scss">
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	font-family: $aeonik;
	font-weight: 700;
	text-align: center;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		transform: scale(0.95);
	}
}

.button--white {
	color: $green;
	background: white;
	border-color: white;
}

.button--limegreen {
	color: white;
	background: $limegreen;
	border-color: $limegreen;
}

.button--purple {
	color: white;
	background: $purple;
	border-color: $purple;
}
</style>