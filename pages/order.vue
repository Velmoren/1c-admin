<template>
  <section class="order">
    <b-container>
      <b-row align-h="center">
        <b-table
          small
          responsive
          :items="documents"
          :fields="headers"
        ></b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      items: [
        {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
        {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
        {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
        {age: 38, first_name: 'Jami', last_name: 'Carney'}
      ]
    }
  },
  computed: {
    documents() {
      return this.$store.getters['order/getDocuments']
    },
    headers() {
      return this.$store.getters['order/getHeaders']
    },
    currentPage() {

    },
    perPage() {

    },
    rows() {
      return this.documents.length
    }
  },
  methods: {
    async setOrderDocuments() {
      await this.$store.dispatch('order/setOrderDocuments').then(res => {
        this.$store.dispatch('order/setDocuments', res.Documents)
      })
    }
  },
  created() {
    this.setOrderDocuments()
  }
}
</script>

<style scoped>

</style>
