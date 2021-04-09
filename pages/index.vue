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
                autocomplete="on"
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
  middleware: 'notAuth',
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
        return this.$store.getters['customAuth/getUserLogin']
      },
      set: function (val) {
        this.$store.dispatch('customAuth/setUserLogin', val)
      }
    },
    userPassword: {
      get: function () {
        return this.$store.getters['customAuth/getUserPassword']
      },
      set: function (val) {
        this.$store.dispatch('customAuth/setUserPassword', val)
      }
    }
  },
  methods: {
   async login(e) {
     e.preventDefault()
     await this.$store.dispatch('customAuth/setLogin').then(res => {
       if(res.Access) {
         const user = this.$store.getters['customAuth/getUser']
         this.$store.dispatch('customAuth/setAuth', {...user, userID: res.Client_id, isAuth: true})
         this.$cookiz.set('isAuth', this.$store.getters['customAuth/getUser'])
         this.$router.push('/order');
       }  else {
         this.$store.dispatch('customAuth/setAuth', {login: '', password: '', userID: '', isAuth: false})
         this.$cookiz.remove('isAuth')
       }
     })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
