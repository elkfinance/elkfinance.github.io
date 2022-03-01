<template>
  <section class="sectionRoadmap flex flex--x-center">
    <div class="sectionRoadmap__container flex flex--y-center">
      <div class="sectionRoadmap__header flex flex--x-between flex--y-center">
        <BaseTitle class="sectionRoadmap__title">Roadmap</BaseTitle>
        <img class="sectionRoadmap__logo" src="~/static/elklogoicon.svg" alt="Elk Logo">
      </div>
      <div class="sectionRoadmap__dropdown-wrap pos--rel">
        <select class="sectionRoadmap__dropdown fs--28 fc--green" @change="$refs.dropdown.changeYear($event)">
          <option value="2021" selected>2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <BaseRoadmapTiles ref="dropdown" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionRoadmap'
}
</script>

<style lang="scss">
.sectionRoadmap {
  padding: 32px 16px;
  width: 100%;
  background: $darkblue;

  &__container {
    flex-direction: column;
    width: 100%;
  }

  &__header {
    width: 100%;
  }

  &__title {
    margin: 0;
  }

  &__logo {
    height: 48px;
  }

  &__dropdown-wrap {
    align-self: flex-start;
    margin: 0 0 16px;

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      right: -10px;
      width: 5px;
      height: 5px;
      border: 2px solid $green;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
    }
  }

  &__dropdown {
    background: $darkblue;
    border: 0;
    font-family: $aeonik;
    -webkit-appearance: none;
    appearance: none;
  }
}

@media (min-width: 1258px) {
  .sectionRoadmap {

    &__container {
      padding: 32px 24px;
      width: auto;
      border: 1px solid rgba(white,.1);
      border-radius: 16px;
    }
  }
}
</style>