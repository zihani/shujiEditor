MathJax.Extension["TeX/boldsymbol"]={version:"2.7.8"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var o=MathJax.ElementJax.mml,t=MathJax.InputJax.TeX,a=t.Definitions,s={};s[o.VARIANT.NORMAL]=o.VARIANT.BOLD,s[o.VARIANT.ITALIC]=o.VARIANT.BOLDITALIC,s[o.VARIANT.FRAKTUR]=o.VARIANT.BOLDFRAKTUR,s[o.VARIANT.SCRIPT]=o.VARIANT.BOLDSCRIPT,s[o.VARIANT.SANSSERIF]=o.VARIANT.BOLDSANSSERIF,s["-tex-caligraphic"]="-tex-caligraphic-bold",s["-tex-oldstyle"]="-tex-oldstyle-bold",a.Add({macros:{boldsymbol:"Boldsymbol"}},null,!0),t.Parse.Augment({mmlToken:function(t){var a;return this.stack.env.boldsymbol&&(a=t.Get("mathvariant"),t.mathvariant=null==a?o.VARIANT.BOLD:s[a]||a),t},Boldsymbol:function(t){var a=this.stack.env.boldsymbol,o=this.stack.env.font,t=(this.stack.env.boldsymbol=!0,this.stack.env.font=null,this.ParseArg(t));this.stack.env.font=o,this.stack.env.boldsymbol=a,this.Push(t)}}),MathJax.Hub.Startup.signal.Post("TeX boldsymbol Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/boldsymbol.js");