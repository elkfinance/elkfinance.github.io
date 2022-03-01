<template>
  <section class="sectionWhy flex flex--y-center">
    <BaseTitle class="sectionWhy__title">Why ELK?</BaseTitle>
    <BaseCards />
  </section>
</template>

<script>
export default {
  name: 'SectionWhy'
}
</script>

<style lang="scss">
.sectionWhy {
  flex-direction: column;
  padding: 32px 16px 80px;
  width: 100%;
  overflow-x: hidden;

  &__title {
    margin: 48px 0 32px;
  }
}
</style>