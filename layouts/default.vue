<template>
  <div class="wrapper">
    <Header/>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components:{Header}
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

main {
  flex-grow: 1;
}
</style>
