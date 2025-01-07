<template>
  <div id="app">
    <section class="layout">
      <div class="header">{{content}}</div>
      <contents class="leftSide"></contents>
      <div class="body">
        <tinymce :newTinymceId="newTinymceId" :newTinymceClass="newTinymceClass"  v-model="content" :config="config" :src_path="src_path" :setTimeout_loading_time='1000' @tinymce-paste='paste' ></tinymce>
      </div>
      <option-elemet class="rightSide"></option-elemet> 
      <div class="footer">5</div>
    </section>
  </div>
</template>
<script>
import tinymce from './components/tinymce/index.vue'
import contents from './components/contents.vue' 
import optionElemet from './components/optionElemet.vue' 
import tinymceApi from './components/tinymce/tinymceApi.js'
export default {
  name: 'App',
  components: {
    tinymce,
    contents,
    optionElemet
  },
  data(){
    return {
      newTinymceId: 'tinymceEditor',   // tinymce id
      newTinymceClass: 'tinymce', // tinymce样式
      config: {}, // tinymce配置
      content:'<p>22222</p>', // 初始化内容
      src_path: window.location.origin + '/tinymce7.5.1/js/tinymce/tinymce.min.js',  // tinymce路径
      api: new tinymceApi('tinymceEditor')
    }
  },
   methods: {
    paste() {
      this.content = this.api.tinymce().getContent()
    },
    newTinymce() {
        // 只对tinymceEditor id的元素进行初始化 
        let _this = this
        this.config = {
            selector:'#tinymceEditor',
            language: 'zh_CN',
            browser_spellcheck: true,
            branding: false, // 去水印,
            statusbar: false, // 隐藏编辑器底部的状态栏
            menubar:false,
            inline: true,
            media_live_embeds: true,
            min_height: 400,
            auto_focus: true,
            sandbox_iframes: false,
            paste_data_images: true,
            toolbar:'undo redo formatpainter blocks kityformula-editor',
            plugins: 'kityformula-editor paste',
            font_size_formats: '默认 12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 40px 44px 48px 52px 56px 60px',
            font_family_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;宋体=simsun,serif,sans-serif;仿宋体=FangSong,serif,sans-serif;楷体=KaiTi,serif,sans-serif;黑体=SimHei,sans-serif;隶书=LiSu,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Times New Roman=Times New Roman,helvetica,sans-serif;',
            block_formats: '标题1=h1; 标题2=h2; 标题3=h3; 标题4=h4; 标题5=h5; 标题6=h6; 正文=p;',
            toolbar_mode: 'float', // 'floating', //'wrap',
            toolbar_sticky: true,
            // toolbar_sticky_offset: 380, // 设置工具栏与视口
            custom_ui_selector: 'body',
            advlist_bullet_styles: 'square',
            init_instance_callback: (editor) =>{
                // console.log(editor.getBody().querySelectorAll('h1, h2, h3, h4, h5, h6'))
                // console.log(Object.keys(editor.getBody().querySelectorAll('h1, h2, h3, h4, h5, h6')).length)
                if(editor.getBody().querySelectorAll('h1, h2, h3, h4, h5, h6')) {
                      for (const element of editor.getBody().querySelectorAll('h1, h2, h3, h4, h5, h6')) {
                        console.log(element)
                      }
                }
            },
            editimage_cors_hosts:'', //  跨域地址
            paste_preprocess: function(plugin, args) {
                let {
                  content,
                  wordContent,
                  imageContent,
                } = args;
                wordContent
                imageContent
                plugin
                content
                let api =  new tinymceApi('tinymceEditor')
                api
                // console.log('api.tinymce')
                // console.log(api.tinymce().getContent())
                // console.log('api.tinymce')
            },
            setup: (editor) =>{
                editor.on('input', function() {});
                editor.on('click', function(e) {
                  e
                    // editor.selectionContentElements = editor.selection.getSelectedBlocks();
                    // editor.selectionContentText = editor.selection.getContent({format: 'text'});
                });
                editor.on('init', function(){
                    editor.setContent(_this.content)
                });
                editor.on('EditorContentLoaded', function () {

                });
                editor.on('ExecCommand', function(e) {
                    _this.content = _this.api.tinymce().getContent()
                    if(e.command === 'mceToggleFormat'){
                        console.log('e.value')
                        console.log(e.value)
                        console.log('e.value')
                    }
                }),
                editor.on('dblclick', function () {
                    alert('dblclick')
                })
            }
        }
    }
   },
   mounted(){
     this.newTinymce()

   }
}
</script>
<style>
.layout {
  width: 100%;
  display: grid;
  grid:
    "header header header" auto
    "leftSide body rightSide" 3fr
    "footer footer footer" auto
    / auto 1fr auto;
  gap: 8px;
  height: 100vh;
}

.header { grid-area: header; }
.leftSide { grid-area: leftSide; }
.body { grid-area: body; margin-top: 50px;}
.rightSide { grid-area: rightSide; }
.footer { grid-area: footer; }
/* .tox-editor-header {
  width: 300px !important;
} */
#tinymceEditor {
    height: 100%; 
    border: 1px solid rgb(166, 166, 166); 
    outline: none;
}
</style>
