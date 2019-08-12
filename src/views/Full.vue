<template>
    <div class="full">
        <h1>Все игроки</h1>
        <Table v-bind:tableData="items"></Table>
    </div>
</template>

<script>
    import MainServer from '@/services/mainService'
    import Table from "../components/Table";
    export default {
        name: 'full',
        components: {
            Table
        },
        data() {
            return {
                items: []
            }
        },
        mounted() {
            this.getFull()
        },
        methods: {
            async getFull() {
                const response = await MainServer.full()
                this.items = response.data
            }
        }
    }
</script>