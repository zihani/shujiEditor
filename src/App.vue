<template>
  <div id="app">
     <tinymce v-model="content"></tinymce>
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
      content:'<p>啦啦啦</p>'
    }
  }
}
</script>
<style>
</style>
