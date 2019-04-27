<template>
    <article>
        <section><h3>Summary List</h3></section>
        <section>
            <h4>table</h4>
            <el-table 
                :data="data" 
                stripe
                max-height="400"
                highlight-current-row
                @current-change="handleCurrentChange"
                :row-class-name="getRowClassName"
                style="with:100%"
            
            >
                <el-table-column prop="id" label="ID" width="180" fixed></el-table-column>
                <el-table-column prop="account" label="Account" width="180"></el-table-column>
                <el-table-column prop="presonName" label="PresonName" width="180"></el-table-column>
                <el-table-column prop="reason" label="Reason" width="180"></el-table-column>
                <el-table-column prop="date" label="Date" width="180"></el-table-column>
                <el-table-column prop="avator" label="Avator" width="180"></el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                    </el-table-column>
            </el-table>
            <!-- <table>
                <tr v-for="item in data" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.account}}</td>
                    <td>{{item.alias}}</td>
                    <td>{{item.presonName}}</td>
                    <td>{{item.reason}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.avator}}</td>
                </tr>
            </table> -->
        </section>
        <section>
            <h4>pagation</h4>
        </section>
    </article>
</template>

<script>
export default {
    name: 'Summary',
    props: {
        list: Array
    },
    data(){
        return {
            data: []
        }
    },
    methods: {
        getRowClassName(row, rowInde) {
            return 'red'
        },
        handleCurrentChange(columnData) {
            console.log('rowindex', columnData)
        }
    },
    mounted(){
        this.axios.get('/api/summary').then( res => {
            this.data = res.data.summaryList
            console.log('get data is', this.data)
        }, err => {
            console.log(err);

        })
    }
}
</script>

<style lang="sass">

</style>


