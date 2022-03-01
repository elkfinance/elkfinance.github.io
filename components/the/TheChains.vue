<template>
  <div v-if="type === 'horizontal'" class="chains chains--horizontal flex flex--r-nowrap">
    <img
      v-for="(chain, index) in chains"
      :key="chain + index"
      class="chains__chain"
      :src="chain.logoWhite"
      :alt="`${chain.name} Logo`"
    >
  </div>
  <div v-else class="chains chains--vertical flex flex--r-nowrap pos--rel">
    <div
      v-for="(chain, index) in chains"
      :key="chain + index"
      class="chains__chainHolder flex flex--x-center"
    >
      <img class="chains__chain" :src="chain.logo" :alt="`${chain.name} Logo`">
    </div>

    <div class="chains__chainHolder flex flex--x-center flex--y-center">
      <span class="sectionHero__alt-title fc--darkblue">All Chains</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheChains',
  props: {
    type: {
      type: String,
      default: 'horizontal'
    }
  },
  data() {
    return {
      chains: [
        { name: 'Avalanche', logo: '/avalanche.svg', logoWhite: '/avalanche.svg' },
        { name: 'Polygon', logo: '/polygon.svg', logoWhite: '/polygon.svg' },
        { name: 'Fantom', logo: '/fantom.svg', logoWhite: '/fantom.svg' },
        { name: 'HECO', logo: '/heco.svg', logoWhite: '/heco.svg' },
        { name: 'xDai', logo: '/xdai.svg', logoWhite: '/xdai.svg' },
        { name: 'Binance Smart Chain', logo: '/binance.svg', logoWhite: '/binance.svg' },
        { name: 'Kucoin Community Chain', logo: '/kucoin.svg', logoWhite: '/kucoin.svg' },
        { name: 'HOO Smart Chain', logo: '/hoo.svg', logoWhite: '/hoo.svg' },
        { name: 'OEC', logo: '/oec.svg', logoWhite: '/oec.svg' },
        { name: 'Harmony', logo: '/harmony.svg', logoWhite: '/harmony.svg' },
        { name: 'Telos', logo: '/telos.svg', logoWhite: '/telos.svg' },
        { name: 'Cronos', logo: '/cronos.svg', logoWhite: '/cronos.svg' },
        { name: 'Elastos', logo: '/elastos.svg', logoWhite: '/elastos.svg' },
        { name: 'Moonriver', logo: '/moonriver.svg', logoWhite: '/moonriver.svg' },
        { name: 'Fuse', logo: '/fuse.svg', logoWhite: '/fuse.svg' },
        { name: 'IoTeX', logo: '/iotex.svg', logoWhite: '/iotex.svg' }
      ]
    }
  }
}
</script>

<style lang="scss">
.chains {
  width: 100%;

  &--vertical {
    flex-direction: column;
    padding: 16px 0;

    .chains__chain {
      transform: translateY(-50%);
      width: 250px;
      height: auto;
    }
  }

  &__chainHolder {
    height: 50px;

    &:not(:last-child) {
      display: none;
    }
  }

  &__chain {
    padding: 0 20px;
    height: 32px;
  }
}

@media (min-width: 400px) {
  .chains {
    &--vertical {
      padding: 16px 32px;
    }
  }
}

@media (min-width: 800px) {
  .chains {
    &--vertical {
      padding: 100px 32px 50px;
    }

    &__chain {
      padding: 0 2.5vw;
      height: 32px;
    }

    &__chainHolder {
      height: 100px;
    }

    &__chainHolder:not(:last-child) {
      display: flex;
    }
  }
}
</style>
