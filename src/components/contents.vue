<template>
    <div class="three">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>
<script>
export default {
    name:'contents-three',
    props: {
        dataTree: {
            type: Array,
            default: ()=> []
        },
    },
    data() {
        return {
            data: [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1',
                             children: [{
                                label: '4级 1-1-1-1',
                                children: [{
                                    label: '5级 1-1-1-1-1',
                                    children: [{
                                        label: '6级 1-1-1-1-1'
                                    }]
                                }]
                             }]
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                        label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                        label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                        label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }

        }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }

}
</script>

<style scoped>
.three {
    width: 100px;
}
</style>