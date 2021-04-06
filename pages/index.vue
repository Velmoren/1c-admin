<template>
  <section class="login">
    <b-container>
      <b-row align-h="center">
        <b-col cols="12" sm="10" md="8" lg="6" xl="4">
          <b-form @submit.prevent="login" @reset="" v-if="show" class="pt-5">
            <b-form-group
              id="input-group-1"
              label="Логин или E-mail"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="userLogin"
                type="text"
                placeholder="Логин или E-mail"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Пароль" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="userPassword"
                type="password"
                placeholder="Пароль"
                required
              ></b-form-input>
            </b-form-group>

          <div class="d-flex align-items-center justify-content-between">
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.checked"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Запомнить меня
            </b-form-checkbox>
            <b-button type="submit" variant="info">Вход</b-button>
          </div>

          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        pass: '',
        checked: []
      },
      show: true
    }
  },
  computed: {
    userLogin: {
      get: function () {
        return this.$store.getters['auth/getUserLogin']
      },
      set: function (val) {
        this.$store.dispatch('auth/setUserLogin', val)
      }
    },
    userPassword: {
      get: function () {
        return this.$store.getters['auth/getUserPassword']
      },
      set: function (val) {
        this.$store.dispatch('auth/setUserPassword', val)
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/setLogin')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
