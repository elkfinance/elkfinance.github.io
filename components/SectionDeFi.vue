<template>
  <section class="sectionDeFi flex flex--y-center pos--rel">
    <div class="sectionDeFi__wrap z--1">
      <TheStats />
      <BaseTitle class="sectionDeFi__title">The DeFi Gateway</BaseTitle>
      <div class="sectionDeFi__content flex flex--x-center flex--y-center">
        <div class="sectionDeFi__about flex lh--180">
          <p class="about__text">
            The ElkNet enables fast, safe, cheap, and trustless
            cross-chain value exchange across all blockchains.
          </p>
          <p class="about__text">
            We aim to break down barriers between chains, making it so that you
            no longer have to think about what chain you are on.
          </p>
          <p class="about__text">
            Improving cross-chain interoperability while reducing fragmentation
            is at the heart of our vision.
          </p>
          <div class="about__buttons flex">
            <a class="about__button button button--white" href="https://medium.com/elk-finance/a-closer-look-at-elknet-bd45920b0a1c/">
              ElkNet Documentation
            </a>
            <a class="about__button button button--limegreen" href="">SDK Docs (soon)</a>
          </div>
        </div>
        <BaseTokenomics />
      </div>
      <div class="sectionDeFi__logos flex flex--x-around flex--y-center">
        <img
          class="sectionDeFi__logo"
          src="~/static/coinmarketcap.svg"
          alt="CoinMarketCap Logo"
        />
        <img
          class="sectionDeFi__logo"
          src="~/static/coingecko.svg"
          alt="CoinGecko Logo"
        />
        <img
          class="sectionDeFi__logo"
          src="~/static/hashex.svg"
          alt="HashEx Logo"
        />
      </div>
    </div>
    <div class="circle pos--abs"></div>
    <div class="circle circle-2 pos--abs"></div>
    <div class="circle circle-3 pos--abs"></div>
    <div class="circle circle-4 pos--abs"></div>
  </section>
</template>

<script>
export default {
  name: "SectionDeFi",
};
</script>

<style lang="scss">
.sectionDeFi {
  flex-direction: column;
  padding: 32px 16px 200px;
  width: 100%;
  background: linear-gradient($darkblue 40%, $green);
  overflow: hidden;

  &__wrap {
    width: 100%;
    max-width: max-content;
  }

  &__title {
    margin: 90px 0 0;
  }

  &__content {
    margin: 64px 0;
    width: 100%;
  }

  &__about {
    flex-direction: column;
    margin: 0 0 32px;
  }

  &__logos {
    width: 100%;
  }

  &__logo {
    margin: 16px;
    max-width: 60vw;
  }
}

.about__text {
  max-width: 50ch;
}

.about__text + .about__text {
  margin: 24px 0 0;
}

.about__buttons {
  margin: 32px 0 0;
}

.about__button {
  width: 100%;
  height: 50px;
}

.about__button + .about__button {
  margin: 16px 0 0;
}

.circle {
  bottom: 0;
  border: 4px solid #38ff63;
  border-radius: 50%;
  transform: translateY(50%);
  box-shadow: 0 0 0 #38ff63, inset 0 0 0 #38ff63;
  animation: circles 12s cubic-bezier(0, 0, 0.5, 1) infinite;

  &-2 {
    animation-delay: 3s;
  }

  &-3 {
    animation-delay: 6s;
  }

  &-4 {
    animation-delay: 9s;
  }
}

@keyframes circles {
  0% {
    width: 200px;
    height: 200px;
  }

  100% {
    width: 1000px;
    height: 1000px;
    border-color: #10a32500;
    box-shadow: 0 0 16px #10a32500, inset 0 0 16px #10a32500;
  }
}

@media (min-width: 1121px) {
  .sectionDeFi {
    &__content {
      justify-content: space-between;
    }

    &__about {
      margin: 32px 0;
    }
  }

  .about__button {
    width: 210px;
  }

  .about__button + .about__button {
    margin: 0 0 0 16px;
  }
}
</style>
