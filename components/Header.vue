<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">1С админ-панель</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/order">Заказы</b-nav-item>
          <b-nav-item href="/shipment">Отгрузки</b-nav-item>
          <b-nav-item href="/payments">Платежи</b-nav-item>
          <b-nav-item href="/information">Информация</b-nav-item>
          <b-nav-item href="#" @click="logger">logger</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-spinner
            variant="light"
            type="grow"
            label="Spinning"
            v-if="isAuthLoading"
          ></b-spinner>
          <b-nav-item-dropdown right v-if="!isAuthLoading && isAuth">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logger() {
      console.log(this)
    }
  },
  computed: {
    isAuthLoading() {
      return this.$store.getters['auth/getIsAuthLoading']
    },
    isAuth() {
      return this.$store.getters['auth/getIsAuth']
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
}
</style>
