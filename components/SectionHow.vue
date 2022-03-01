<template>
  <section class="sectionHow flex flex--y-center pos--rel">
    <picture class="sectionHow__spinning-coin pos--abs" >
      <source srcset="~/static/coin.webp" type="image/webp">
      <source srcset="~/static/coin.gif" type="image/gif">
      <img class="sectionHow__spinning-coin pos--abs" src="~/static/coin.gif">
    </picture>
    <BaseTitle class="sectionHow__title">How ELK Moves</BaseTitle>
    <BaseMoveStats />
    <a class="sectionHow__button button button--limegreen" href="https://dashboard.elk.finance">
      Check out ElkNet Dashboard
    </a>
  </section>
</template>

<script>
export default {
  name: 'SectionHow'
}
</script>

<style lang="scss">
.sectionHow {
  flex-direction: column;
  padding: 100px 16px 32px;
  width: 100%;

  &__spinning-coin {
    top: 0%;
    transform:translate(4px,-50%);
    width: 300px;

    img {
      width: 100%;
    }
  }

    &__title {
    margin: 64px 0 32px;
  }

  &__button {
    width: 100%;
    height: 50px;
  }
}
@media (min-width: 468px) {
  .sectionHow {
    &__button {
      width: 280px;
    }
  }
}
</style>