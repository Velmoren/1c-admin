<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <nuxt-link to="/" class="navbar-brand">Home page</nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/order" class="nav-link">Заказы</nuxt-link>
          <nuxt-link to="/shipment" class="nav-link">Отгрузки</nuxt-link>
          <nuxt-link to="/payments" class="nav-link">Платежи</nuxt-link>
          <nuxt-link to="/information" class="nav-link">Информация</nuxt-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="user.isAuth">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{user.login}}</em>
            </template>
            <b-dropdown-item @click="logout">Выход</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('customAuth/setAuth', {userID: '', isAuth: false})
      this.$cookiz.remove('isAuth')
      this.$router.push('/');
    }
  },
  computed: {
    user() {
      return this.$store.getters['customAuth/getUser']
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
