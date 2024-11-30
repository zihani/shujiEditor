<template>
    <div>
        <div id="tinymceEditor" class="tinymce"></div>
    </div>
</template>
<script>
  export default {
    name: 'TinyMce',
    props: {
      msg: String
    },
    data() {
        return{
        //    src: window.location.origin + '/tinymce7.0.0/tinymce.min.js'
           src: window.location.origin + '/tinymce7.5.1/js/tinymce/tinymce.min.js'
        }
    },
    methods:{
        btn() {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'zh-CN'; // 设置为中文识别
            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript; // 获取识别结果文本
                console.log('识别结果:', transcript);
            };
            recognition.start();
            setTimeout(() => {
                recognition.stop();
            }, 2000);
        },
        createTinymceScript() {
          let script =  document.createElement('script')
          script.src = this.src
          let head =  document.querySelector('head')
          head.appendChild(script)
        },
        //  chushhua
        initTinymce() {
            if(window.tinymce.init){
                window.tinymce.init({
                    selector:'#tinymceEditor',
                    language: 'zh_CN',
                    browser_spellcheck: true,
                    branding: false, // 去水印,
                    statusbar: false, // 隐藏编辑器底部的状态栏
                    menubar:false,
                    inline: true,
                    media_live_embeds: true,
                    min_height: 400,
                    sandbox_iframes: false,
                    paste_data_images: true,
                    toolbar:'undo redo formatpainter blocks',
                    font_size_formats: '默认 12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 40px 44px 48px 52px 56px 60px',
                    font_family_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;宋体=simsun,serif,sans-serif;仿宋体=FangSong,serif,sans-serif;楷体=KaiTi,serif,sans-serif;黑体=SimHei,sans-serif;隶书=LiSu,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Times New Roman=Times New Roman,helvetica,sans-serif;',
                    block_formats: '标题1=h1; 标题2=h2; 标题3=h3; 标题4=h4; 标题5=h5; 标题6=h6; 正文=p;',
                    init_instance_callback: (editor) =>{
                       console.log('editor')
                       console.log(editor)
                       console.log('editor')
                    },
                    editimage_cors_hosts:'' , //  跨域地址
                    setup: function (editor) {
                        editor.on('click', function() {
                            
                        });
                        editor.on('init', function(){
                        });
                        editor.on('EditorContentLoaded', function () {
                        });
                    }
                })
            }
        }
    },
    created() {
        this.createTinymceScript()
    },
    mounted(){
        setTimeout(() => {
            this.initTinymce()
        }, 1000);
    }
  }
</script>
<style scoped>
  
</style>
  