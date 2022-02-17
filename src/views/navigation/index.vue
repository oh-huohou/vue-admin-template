<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple" align="center">
          <img src="../../assets/images/monitor.png" class="logo">
          <div>
            <el-link type="primary" href="http://20.52.247.192:3000/" target="_blank" style="font-size:18px">监控系统</el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" align="center">
          <img src="../../assets/images/yunkuangjian.png" class="logo">
          <div>
            <el-link type="primary" href="https://ykj.canaan-creative.com/" target="_blank" style="font-size:18px">云矿监系统</el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" align="center">
          <img src="../../assets/images/guoneishouhou.jpeg" class="logo">
          <div>
            <el-link type="primary" href="https://as.canaan-creative.com/" target="_blank" style="font-size:18px">国内售后系统</el-link>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple" align="center">
          <img src="../../assets/images/shouhou.jpeg" class="logo">
          <div>
            <el-link type="primary" href="https://asi.canaan-creative.com/" target="_blank" style="font-size:18px">国外售后系统</el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" align="center">
          <img src="../../assets/images/jenkins.png" class="logo">
          <div>
            <el-link type="primary" href="https://jks.b-bug.org/" target="_blank" style="font-size:18px">jenkins</el-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import { getSaleBomList } from '@/api/miner'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    parseTime(value) {
      console.log(new Date(value).format('yyyy-MM-dd hh:mm:ss'))
      return value
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
        console.log(response.total)
        this.listLoading = false
      })
    },
    parseTime(value) {
      console.log('shijian' + value)
      return value
    }
  }
}
</script>

<style>
  .logo {
      width: 50%;
      height: 150px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 200px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #cfd9ec;
  }
</style>
