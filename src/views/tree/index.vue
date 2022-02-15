<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />
    <el-tree
      :props="props1"
      :load="loadNode1"
      lazy
      show-checkbox
    />

    <!-- <el-tree
      ref="tree2"
      :data="data2"
      :props="props"
      @check-change="handleCheckChange"
      class="filter-tree"
  </el-tree> -->
  </div>
</template>

<script>
import { getBlob } from '@/api/tree'

export default {

  data() {
    return {
      filterText: '',
      data2: [],
      tempTree: [],
      props1: {
        label: 'name',
        value: 'value',
        children: 'zones',
        isLeaf: 'leaf'
      }
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    loadNode1(node, resolve) {
      if (node.level === 0) {
        getBlob('').then(response => {
          this.tempTree = []
          response.data.forEach(element => {
            this.tempTree.push({ 'name': element, 'value': element + '/' })
          })
          return resolve(this.tempTree)
        })
      }
      if (node.level === 1) {
        getBlob(node.label).then(response => {
          this.tempTree = []
          response.data.forEach(element => {
            this.tempTree.push({ 'name': element, 'value': node.label + '/' })
          })
          return resolve(this.tempTree)
        })
      }
      if (node.level > 1) {
        getBlob(node.parent.data.value + node.label).then(response => {
          this.tempTree = []
          response.data.forEach(element => {
            this.tempTree.push({ 'name': element, 'value': node.parent.data.value })
          })
          return resolve(this.tempTree)
        })
      }
    }
  }
}
</script>

