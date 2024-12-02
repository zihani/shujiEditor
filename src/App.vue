<template>
  <div id="app">
     <tinymce v-model="content"></tinymce>
     {{ content }}
  </div>
</template>
<script>
import tinymce from './components/tinymce/index.vue'
export default {
  name: 'App',
  components: {
    tinymce
  },
  data(){
    return {
      content:'<h1>啦啦啦2222333</h1><h2>22222222222222</h2><h3>33333333333333</h3><h4>33333333333333</h4><h5>333333333333333</h5><h6>333333333333</h6>'
    }
  }
}
</script>
<style>
</style>
