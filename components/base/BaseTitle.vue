<template>
  <h2 class="title fs--48"><slot /></h2>
</template>

<script>
export default {
  name: 'BaseTitle'
}
</script>

<style lang="scss">
.title {
  background-image: radial-gradient(#05FF8B, #009F55);
  background-clip: text;
  color: transparent;
  text-align: center;
}

@media (min-width: 600px) {
  .title {
    font-size: 65px;
  }
}
</style>