<template>
	<div class="stats flex flex--x-center">
		<div class="stat flex flex--x-center flex--y-center">
			<span class="stat__header fc--limegreen fs--52 fw--700">130</span>
			<div class="stat__text fs--20">
				<p class="stat__text-line">Assets available</p>
				<p class="stat__text-line">to trade and farm</p>
			</div>
		</div>
		<div class="stat flex flex--x-center flex--y-center">
			<span class="stat__header fc--limegreen fs--52 fw--700">NO</span>
			<div class="stat__text fs--20">
				<p class="stat__text-line">Impermanent</p>
				<p class="stat__text-line">loss</p>
			</div>
		</div>
		<div class="stat flex flex--x-center flex--y-center">
			<span class="stat__header fc--limegreen fs--52 fw--700">369%</span>
			<div class="stat__text fs--20">
				<p class="stat__text-line">Average APR</p>
				<p class="stat__text-line">across chains</p>
			</div>
		</div>
		<div class="stat flex flex--x-center flex--y-center">
			<span class="stat__header fc--limegreen fs--52 fw--700">ALL</span>
			<div class="stat__text fs--20">
				<p class="stat__text-line">Fees to</p>
				<p class="stat__text-line">LP providers</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TheStats",
};
</script>

<style lang="scss">
.stat {
	padding: 32px 0;
	width: 100%;

	&:not(:last-of-type) {
		border-bottom: 1px solid white;
	}

	&__header {
		margin: 0 12px 0 0;
		height: 48px;
	}
}

@media (min-width: 706px) {
	.stats {
		flex-direction: row;
	}

	.stat {
		padding: 8px 32px;
		width: auto;

		&:first-of-type {
			padding: 8px 32px 8px 0;
		}

		&:last-of-type {
			padding: 8px 0 8px 32px;
		}

		&:not(:last-of-type) {
			border: 0;
			border-right: 1px solid white;
		}
	}
}
</style>