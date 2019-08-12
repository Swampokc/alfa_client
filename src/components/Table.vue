<template>
    <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            align="center">
        <el-table-column
                prop="place"
                label="Место"
                width="70">
        </el-table-column>
        <el-table-column
                prop="fio"
                label="ФИО"
                width="330">
        </el-table-column>
        <el-table-column
                prop="status"
                label="Статус"
                width="180">
        </el-table-column>
        <el-table-column
                prop="rate"
                label="Опыт"
                width="180">
        </el-table-column>
        <el-table-column
                prop="money"
                label="Монеты"
                width="180">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: 'Table',
        props: {
            tableData: []
        }
    }
</script>