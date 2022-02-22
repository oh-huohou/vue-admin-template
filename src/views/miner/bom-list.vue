<template>
  <div class="app-container">
    <div class="search-bar">
      <el-input
        v-model="query.minerSn"
        placeholder="miner sn"
        size="mini"
        multiple
        clearable
        class="search-item multiple-width"
        @change="fetchData"
      />
      <el-input
        v-model="query.bomSn"
        placeholder="bom sn"
        size="mini"
        multiple
        clearable
        class="search-item multiple-width"
        @change="fetchData"
      />
      <el-button
        type="primary"
        size="mini"
        class="btn-bold"
        @click="getMinerList"
      >搜索</el-button>
    </div>
    <div>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="bomId">
          <template slot-scope="{row}">{{ row.bomId }}</template>
        </el-table-column>
        <el-table-column align="center" label="bomSn">
          <template slot-scope="{row}">{{ row.bomSn }}</template>
        </el-table-column>
        <el-table-column align="center" label="minerSn">
          <template slot-scope="{row}">{{ row.minerSn }}</template>
        </el-table-column>
        <el-table-column align="center" label="batch">
          <template slot-scope="{row}">{{ row.batch }}</template>
        </el-table-column>
        <el-table-column align="center" label="bomType">
          <template slot-scope="{row}">{{ row.bomType }}</template>
        </el-table-column>
        <el-table-column align="center" label="createAt">
          <template slot-scope="{row}"> {{ row.createAt | moment('YYYY-MM-DD HH:mm:ss') }}</template>
        </el-table-column>
        <el-table-column align="center" label="saleDate">
          <template slot-scope="{row}">{{ row.saleDate | moment('YYYY-MM-DD HH:mm:ss') }}</template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <pagination
        v-show="true"
        :total="total"
        :page.sync="query.pageIndex"
        :limit.sync="query.pageSize"
        @pagination="fetchData"
      />
    </div>
  </div>
</template>

<script>
import { getSaleBomList } from '@/api/miner'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      total: 0,
      list: null,
      listLoading: true,
      query: {
        bomSn: '',
        minerSn: '',
        pageIndex: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getSaleBomList(this.query).then(response => {
        this.list = response.data
        this.total = response.total
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.multiple-width {
  width: 300px;
}
</style>
