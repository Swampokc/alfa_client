<template>
  <div class="top">
    <h1>Топ 5 игроков</h1>
    <Table v-bind:tableData="items"></Table>
  </div>
</template>

<script>
  import MainServer from '@/services/mainService'
  import Table from "../components/Table"
  export default {
    name: 'top',
    components: {
      Table
    },
    data() {
      return {
        items: []
      }
    },
    mounted() {
      this.getTop()
    },
    methods: {
      async getTop() {
        const response = await MainServer.top5()
        this.items = response.data
      }
    }
  }
</script>