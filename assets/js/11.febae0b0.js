(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{288:function(s,a,n){"use strict";n.r(a);var e=n(13),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"nuxt-js-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-js-是什么"}},[s._v("#")]),s._v(" Nuxt.js 是什么？")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Nuxt.js 是一个基于 Vue.js 的通用应用框架。")]),s._v("\n一个基于 Vue.js 的服务端渲染应用框架\nSSR，即服务器渲染，就是在服务器端将对 Vue 页面进行渲染生成 html 文件，将 html 页面传递给浏览器。SSR 两个优点：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("SEO不同于SPA的HTML只有一个无实际内容的HTML和一个app.js，SSR生成的HTML是有内容的，这让搜索引擎能够索引到页面内容。\n\n更快内容到达时间，传统的SPA应用是将bundle.js从服务器获取，然后在客户端解析并挂载到dom。而SSR直接讲HTML字符串传递给浏览器。大大加快了首屏加载时间。\n")])])]),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("为了快速入门，Nuxt.js 团队创建了脚手架工具 create-nuxt-app。\n"),a("code",[s._v("yarn create nuxt-app <项目名>")])]),s._v(" "),a("h3",{attrs:{id:"nuxt-目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-目录结构"}},[s._v("#")]),s._v(" Nuxt 目录结构")]),s._v(" "),a("p",[s._v("|-- .nuxt // Nuxt 自动生成，临时的用于编辑的文件，build")]),s._v(" "),a("p",[s._v("|-- assets // 用于组织未编译的静态资源入 LESS、SASS 或 JavaScript")]),s._v(" "),a("p",[s._v("|-- components // 用于自己编写的 Vue 组件，比如滚动组件，日历组件，分页组件")]),s._v(" "),a("p",[s._v("|-- layouts // 布局目录，用于组织应用的布局组件，不可更改。")]),s._v(" "),a("p",[s._v("|-- middleware // 用于存放中间件")]),s._v(" "),a("p",[s._v("|-- pages // 用于存放写的页面，我们主要的工作区域")]),s._v(" "),a("p",[s._v("|-- plugins // 用于存放 JavaScript 插件的地方")]),s._v(" "),a("p",[s._v("|-- static // 用于存放静态资源文件，比如图片")]),s._v(" "),a("p",[s._v("|-- store // 用于组织应用的 Vuex 状态管理。")]),s._v(" "),a("p",[s._v("|-- .editorconfig // 开发工具格式配置")]),s._v(" "),a("p",[s._v("|-- .eslintrc.js // ESLint 的配置文件，用于检查代码格式")]),s._v(" "),a("p",[s._v("|-- .gitignore // 配置 git 不上传的文件")]),s._v(" "),a("p",[s._v("|-- nuxt.config.json // 用于组织 Nuxt.js 应用的个性化配置，已覆盖默认配置")]),s._v(" "),a("p",[s._v("|-- package-lock.json // npm 自动生成，用于帮助 package 的统一性设置的，yarn 也有相同的操作")]),s._v(" "),a("p",[s._v("|-- package-lock.json // npm 自动生成，用于帮助 package 的统一性设置的，yarn 也有相同的操作")]),s._v(" "),a("p",[s._v("|-- package.json // npm 包管理配置文件\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/66fdd08e10e44d16b7a85cb795afd201.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LiA5Y-q5qWg5ZaD,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[s._v("#")]),s._v(" 布局")]),s._v(" "),a("h3",{attrs:{id:"默认模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认模板"}},[s._v("#")]),s._v(" 默认模板")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE html>\n\x3c!--[if IE 9]><html lang="en-US" class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]--\x3e\n\x3c!--[if (gt IE 9)|!(IE)]>\x3c!--\x3e<html {{ HTML_ATTRS }}>\x3c!--<![endif]--\x3e\n  <head {{ HEAD_ATTRS }}>\n    {{ HEAD }}\n  </head>\n  <body {{ BODY_ATTRS }}>\n    {{ APP }}\n  </body>\n</html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"自定义布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义布局"}},[s._v("#")]),s._v(" 自定义布局")]),s._v(" "),a("p",[s._v("可通过添加 layouts/default.vue 文件来扩展应用的默认布局。\n"),a("strong",[s._v("layouts 目录中的每个文件 (顶级) 都将创建一个可通过页面组件中的 layout 属性访问的自定义布局。")]),s._v("\n假设我们要创建一个 博客布局 并将其保存到 layouts/blog.vue:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>\n    <div>我的博客导航栏在这里</div>\n    <nuxt />\n  </div>\n</template>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("然后我们必须告诉页面 (即 pages/posts.vue) 使用您的自定义布局：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  \x3c!-- Your template --\x3e\n</template>\n<script>\n  export default {\n    layout: 'blog'\n    // page component definitions\n  }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"错误页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误页面"}},[s._v("#")]),s._v(" 错误页面")]),s._v(" "),a("p",[s._v("通过编辑 layouts/error.vue 文件来定制化错误页面.\n虽然此文件放在 layouts 文件夹中, 但应该将它看作是一个 页面(page).\n"),a("strong",[s._v("这个布局文件不需要包含 "),a("nuxt"),s._v(" 标签。你可以把这个布局文件当成是显示应用错误（404，500 等）的组件。")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div class="container">\n    <h1 v-if="error.statusCode === 404">页面不存在</h1>\n    <h1 v-else>应用发生错误异常</h1>\n    <nuxt-link to="/">首 页</nuxt-link>\n  </div>\n</template>\n\n<script>\n  export default {\n    props: [\'error\'],\n    layout: \'blog\' // 你可以为错误页面指定自定义的布局\n  }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面"}},[s._v("#")]),s._v(" 页面")]),s._v(" "),a("p",[s._v("页面组件实际上是 Vue 组件，只不过 Nuxt.js 为这些组件添加了一些特殊的配置项（对应 Nuxt.js 提供的功能特性）以便你能快速开发通用应用。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <h1 class=\"red\">Hello {{ name }}!</h1>\n</template>\n\n<script>\n  export default {\n    asyncData (context) {\n      // called every time before loading the component\n      return { name: 'World' }\n    },\n    fetch () {\n      // The fetch method is used to fill the store before rendering the page\n    },\n    head () {\n      // Set Meta Tags for this Page\n    },\n    // and more functionality to discover\n    ...\n  }\n<\/script>\n\n<style>\n  .red {\n    color: red;\n  }\n</style>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("Nuxt.js 为页面提供的特殊配置项：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("asyncData")]),s._v(" "),a("td",[s._v("最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。")])]),s._v(" "),a("tr",[a("td",[s._v("fetch")]),s._v(" "),a("td",[s._v("与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。")])]),s._v(" "),a("tr",[a("td",[s._v("head")]),s._v(" "),a("td",[s._v("配置当前页面的 Meta 标签")])]),s._v(" "),a("tr",[a("td",[s._v("layout")]),s._v(" "),a("td",[s._v("指定当前页面使用的布局（layouts 根目录下的布局文件）。")])]),s._v(" "),a("tr",[a("td",[s._v("loading")]),s._v(" "),a("td",[s._v("如果设置为 false，则阻止页面自动调用 this.$nuxt.$loading.finish()和 this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在 nuxt.config.js 中设置 loading 的情况下。")])]),s._v(" "),a("tr",[a("td",[s._v("transition")]),s._v(" "),a("td",[s._v("指定页面切换的过渡动效")])]),s._v(" "),a("tr",[a("td",[s._v("scrollToTop")]),s._v(" "),a("td",[s._v("布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。")])]),s._v(" "),a("tr",[a("td",[s._v("validate")]),s._v(" "),a("td",[s._v("校验方法用于校验 动态路由的参数。")])]),s._v(" "),a("tr",[a("td",[s._v("middleware")]),s._v(" "),a("td",[s._v("指定页面的中间件，中间件会在页面渲染之前被调用")])])])]),s._v(" "),a("h3",{attrs:{id:"asyncdata-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncdata-方法"}},[s._v("#")]),s._v(" asyncData 方法")]),s._v(" "),a("p",[a("strong",[s._v("asyncData 方法使得你能够在渲染组件之前异步获取数据。限于页面组件每次加载之前被调用。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export default {\n  async asyncData({ req, res }) {\n    // 使用 req 和 res\n    if (process.server) {  // 检查是否来自服务端渲染\n      return { host: req.headers.host }\n    }\n\n    return {}\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ol",[a("li",[s._v("第一个参数被设定为当前页面的上下文对象")]),s._v(" "),a("li",[s._v("app: 包含所有插件的 Vue 根实例，context.app.$axios 来获取 axios")]),s._v(" "),a("li",[s._v("req： Request 对象")]),s._v(" "),a("li",[s._v("res: Response 对象")]),s._v(" "),a("li",[s._v("isDev: 是否开发者模式")]),s._v(" "),a("li",[s._v("route： 路由实例")]),s._v(" "),a("li",[s._v("store：Vuex.Store 实例")]),s._v(" "),a("li",[s._v("env：nuxt.config.js 中配置的环境变量")]),s._v(" "),a("li",[s._v("params、query: route.params、 route.query")]),s._v(" "),a("li",[s._v("error: error(params),显示错误信息页面,params 参数应该包含 statusCode 和 message 字段")])]),s._v(" "),a("h3",{attrs:{id:"fetch-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-方法"}},[s._v("#")]),s._v(" fetch 方法")]),s._v(" "),a("p",[s._v("fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。\n"),a("strong",[s._v("如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用（在服务端或切换至目标路由之前）。")])]),s._v(" "),a("blockquote",[a("p",[s._v("fetch 方法的第一个参数是页面组件的上下文对象 context，我们可以用 fetch 方法来获取数据填充应用的状态树。为了让获取过程可以异步，你需要返回一个 Promise，Nuxt.js 会等这个 promise 完成后再渲染组件。\n"),a("strong",[s._v("您无法在内部使用 this 获取组件实例，fetch 是在组件初始化之前被调用")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <h1>Stars: {{ $store.state.stars }}</h1>\n</template>\n\n<script>\n  export default {\n    async fetch({ store, params }) {\n      let { data } = await axios.get('http://my-api/stars')\n      store.commit('setStars', data)\n    }\n  }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[s._v("#")]),s._v(" 区别")]),s._v(" "),a("p",[a("strong",[s._v("asyncData 只能用于页面组件，不能用于自定义组件,而 fetch 在任何组件中使用")]),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d4a36a1c13354e718944dcc0d99b5c72.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LiA5Y-q5qWg5ZaD,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"上下文对象-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下文对象-context"}},[s._v("#")]),s._v(" 上下文对象(context)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function (context) {\n  const {\n    app,\n    store,\n    route,\n    params,\n    query,\n    env,\n    isDev,\n    isHMR,\n    redirect,\n    error,\n    $config\n  } = context\n  // Server-side\n  if (process.server) {\n    const { req, res, beforeNuxtRender } = context\n  }\n  // Client-side\n  if (process.client) {\n    const { from, nuxtState } = context\n  }}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("上下文对象提供额外的参数，帮助开发者更精细的控制应用逻辑。它可以在 nuxt 的以下生命周期函数中获取到，如： asyncData, fetch, middleware 等")]),s._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[s._v("#")]),s._v(" 生命周期")]),s._v(" "),a("h3",{attrs:{id:"服务端生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端生命周期"}},[s._v("#")]),s._v(" 服务端生命周期")]),s._v(" "),a("blockquote",[a("p",[s._v("服务端生命周期运行完了之后再运行客户端(跟页面没有关系，每个页面都会执行服务端生命周期)")])]),s._v(" "),a("p",[a("strong",[s._v("1.nuxtServerInit(nuxt 中第一个运行的生命周期)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 在store(vuex)\nexport const  state={\n    token:'tokennnnnn'\n}\n\nexport const mutations={\n    setToken(state,token){\n        state.token=token\n    }\n}\n\nexport const actions={\n    nuxtServerInit(store,context){\n    // 也是有参数的\n\t// 参数1:vuex上下文\n\t// 参数2:nuxt上下文\n        console.log('nuxtServerInit');\n        store.commit('setToken','abc123')\n        // 执行setToken之后再打印\n        console.log(store);\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("strong",[s._v("2.RouteMiddleware(第二个：中间键，路由导航守卫)")]),s._v("\n全局\n在 nuxt.config.js 文件中的 export default 下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  router:{\n    // 定义一个名称\n    middleware:'auth'\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("在项目文件中新建一个文件夹 middleware 中再新建一个对应在配置文件中起的名字(auth)的 js 文件\n项目/middleware/auth.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// vuex 路由信息 要跳转的页面 传递的参数 请求头 请求接口返回的数据\nexport default function({store,route,redirect,params,req,res}){\n    // 判断是否有token(就是是否登陆了，如果没有就跳转到指定的页面去)\n    let token = store.state.token\n    if(!token){\n        redirect('/list')\n    }\n    console.log('middleware')\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("3.validate() 是用来校验 url 参数符不符合")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("validate({params,query}){\n\t// 可以拿到参数信息\n    console.log('validate',params.id);\n    // 如果不返回true就会报错，页面就会跳转到404的页面\n    return true\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("4.asyncData()")]),s._v("\nasyncData 方法会在组件（"),a("strong",[s._v("限于页面组件")]),s._v("）每次加载之前被调用。它可以在服务端或路由更新之前被调用。在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData 方法来获取数据并返回给当前组件。")]),s._v(" "),a("p",[a("strong",[s._v("5.fetch")]),s._v("\nfetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。")]),s._v(" "),a("p",[s._v("如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用（在服务端或切换至目标路由之前）。")]),s._v(" "),a("h3",{attrs:{id:"服务端和客户端共有的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端和客户端共有的生命周期"}},[s._v("#")]),s._v(" 服务端和客户端共有的生命周期")]),s._v(" "),a("p",[s._v("beforeCreate\ncreated")]),s._v(" "),a("h3",{attrs:{id:"客户端生命周期-vue-的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端生命周期-vue-的生命周期"}},[s._v("#")]),s._v(" 客户端生命周期(Vue 的生命周期)")]),s._v(" "),a("h2",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[s._v("#")]),s._v(" 路由")]),s._v(" "),a("p",[a("strong",[s._v("Nuxt.js 依据 pages 目录结构自动生成 vue-router 模块的路由配置。")]),s._v("\n自动生成基础路由规则")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("路径")]),s._v(" "),a("th",[s._v("组件位置及其名称")]),s._v(" "),a("th",[s._v("规则")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("/")]),s._v(" "),a("td",[s._v("pages/index.vue")]),s._v(" "),a("td",[s._v("默认文件 index.vue")])]),s._v(" "),a("tr",[a("td",[s._v("/user")]),s._v(" "),a("td",[s._v("pages/user/index.vue")]),s._v(" "),a("td",[s._v("默认文件 index.vue")])]),s._v(" "),a("tr",[a("td",[s._v("/user/one")]),s._v(" "),a("td",[s._v("pages/user/one.vue")]),s._v(" "),a("td",[s._v("指定文件")])])])]),s._v(" "),a("ul",[a("li",[s._v("pages/user.vue 文件 【优先级高】")]),s._v(" "),a("li",[s._v("pages/user/index.vue 文件")])]),s._v(" "),a("h3",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[s._v("#")]),s._v(" 动态路由")]),s._v(" "),a("ul",[a("li",[s._v("在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录。")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("路由中路径匹配")]),s._v(" "),a("th",[s._v("组件位置及其名")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("/")]),s._v(" "),a("td",[s._v("pages/index.vue")])]),s._v(" "),a("tr",[a("td",[s._v("/user/:id")]),s._v(" "),a("td",[s._v("pages/user/_id.vue")])]),s._v(" "),a("tr",[a("td",[s._v("/:slug")]),s._v(" "),a("td",[s._v("pages/_slug/index.vue")])]),s._v(" "),a("tr",[a("td",[s._v("/:slug/comments")]),s._v(" "),a("td",[s._v("pages/_slug/comments.vue")])])])]),s._v(" "),a("h3",{attrs:{id:"获取路由参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取路由参数"}},[s._v("#")]),s._v(" 获取路由参数")]),s._v(" "),a("p",[s._v("资源 user/_id.vue")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>\n    查询详情 {{this.$route.params.id}}\n  </div>\n</template>\n\n<script>\nexport default {\n  transition: 'test',\n  mounted() {\n    console.info(this.$route)\n  },\n}\n<\/script>\n\n<style>\n\n</style>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳转"}},[s._v("#")]),s._v(" 跳转")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("getDetails(id, item) {\n   this.$router.push({\n      path: `/new/${id}`\n   })\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),a("blockquote",[a("p",[s._v("Nuxt.js 允许您在运行 Vue.js 应用程序之前执行 js 插件。")])]),s._v(" "),a("p",[s._v("假如我们想使用 vue-notifications 显示应用的通知信息，我们需要在程序运行前配置好这个插件。\n"),a("strong",[s._v("首先增加文件 plugins/vue-notifications.js：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue'\nimport VueNotifications from 'vue-notifications'\n\nVue.use(VueNotifications)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后, 在 nuxt.config.js 内配置 plugins 如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n  plugins: ['~/plugins/vue-notifications']\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("blockquote",[a("p",[s._v("模块是 Nuxt.js 扩展，可以扩展其核心功能并添加无限的集成。\n"),a("strong",[s._v("模块只是在引导 Nuxt 时按顺序调用的函数。 框架在加载之前等待每个模块完成。 如此，模块几乎可以自定义 Nuxt 的任何地方。 我们可以使用功能强大的 Hookable Nuxt.js 系统来完成特定事件的任务。")])])]),s._v(" "),a("p",[a("strong",[s._v("modules/simple.js")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export default function SimpleModule(moduleOptions) {\n  // Write your code here\n}\n// REQUIRED if publishing as an npm package\n// module.exports.meta = require('./package.json')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("this.nuxt 这是对当前 Nuxt 实例的引用。\n...")])]),s._v(" "),a("p",[s._v("*"),a("strong",[s._v("*nuxt")]),s._v(".config.js**")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export default {\n  modules: [\n    // Simple usage\n    '~/modules/simple',\n      // Passing options directly\n    ['~/modules/simple', { token: '123' }]\n  ]\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("在指定钩子上运行任务")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export default function () {\n  // Add hook for modules\n  this.nuxt.hook('module', moduleContainer => {\n    // This will be called when all modules finished loading\n  })\n\n  // Add hook for renderer\n  this.nuxt.hook('renderer', renderer => {\n    // This will be called when renderer was created\n  })\n\n  // Add hook for build\n  this.nuxt.hook('build', async builder => {\n    // This will be called once when builder created\n\n    // We can even register internal hooks here\n    builder.hook('compile', ({ compiler }) => {\n      // This will be run just before webpack compiler starts\n    })\n  })\n\n  // Add hook for generate\n  this.nuxt.hook('generate', async generator => {\n    // This will be called when a Nuxt generate starts\n  })\n  this.nuxt.hook(\"ready\", async (nuxt) => {\n    console.log(nuxt, \" ready\");\n    // Your custom code here\n  });\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h3",{attrs:{id:"热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热更新"}},[s._v("#")]),s._v(" 热更新")]),s._v(" "),a("p",[s._v("发现一个/webpack_hmr/client 请求\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201222182031610.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIxODU5MTE5,size_16,color_FFFFFF,t_70",alt:"image"}}),s._v("\nwebpack 热更新需要向浏览器推送信息，一般都会想到 websocket，但是还有一种方式，叫做 Server-Sent Events（简称 SSE）。")]),s._v(" "),a("p",[s._v("SSE 是 websocket 的一种轻型替代方案。\n和 websocket 有以下几点不同：")]),s._v(" "),a("ul",[a("li",[s._v("SSE 是使用 http 协议，而 websocket 是一种单独的协议")]),s._v(" "),a("li",[s._v("SSE 是单向传输，只能服务端向客户端推送，websocket 是双向")]),s._v(" "),a("li",[s._v("SSE 支持断点续传，websocket 需要自己实现")]),s._v(" "),a("li",[s._v("SSE 支持发送自定义类型消息")])]),s._v(" "),a("h3",{attrs:{id:"nuxt-generate-和-build-打包方式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-generate-和-build-打包方式的区别"}},[s._v("#")]),s._v(' Nuxt "generate"和"'),a("a",{attrs:{href:"https://blog.csdn.net/Tomwildboar/article/details/102745299",target:"_blank",rel:"noopener noreferrer"}},[s._v("build"),a("OutboundLink")],1),s._v('"打包方式的区别')]),s._v(" "),a("p",[a("strong",[s._v('"generate"和"build"打包方式主要有两个区别，文件的区别，和发布的区别')])]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("generate")])]),s._v(" "),a("ul",[a("li",[s._v("generate 打包用于将首页静态化（首页的 nuxt-link 也会被静态化），打包后生成 dist 文件夹（类似于 vue 一般性打包）。发布时，只需要将 dist 文件夹发布即可（同 vue 项目发布）\n"),a("blockquote",[a("p",[s._v("需要注意：")]),s._v(" "),a("ul",[a("li",[s._v("当首页内容发生变化时，需要重新 generate 打包发布")]),s._v(" "),a("li",[s._v("打包生成的文件仍需要容器（如 Nginx）部署方可正常访问")]),s._v(" "),a("li",[s._v("打包过程中需要访问 API 后台获取数据")])])])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("build")])]),s._v(" "),a("ul",[a("li",[s._v("一般情况下，build 打包用的更多。build 打包生成的.nuxt 文件，发布时，需要拷贝 node_modules 等文件/文件夹，一般使用 nodejs 环境下的 pm2 运行发布\n"),a("blockquote",[a("p",[s._v("需要注意：")]),s._v(" "),a("ul",[a("li",[s._v("build 模式下发包发布，发布时需要将.nuxt、static、node_modules 等文件夹，以及 package.json、nuxt.config.js 等文件拷贝出来，使用 pm2 启动运行发布")])])])])])])]),s._v(" "),a("h3",{attrs:{id:"动态路由-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由-2"}},[s._v("#")]),s._v(" 动态路由")]),s._v(" "),a("h2",{attrs:{id:"nuxt-流程总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-流程总结"}},[s._v("#")]),s._v(" nuxt 流程总结")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/cc54918e78b040b39c9d1ec62e557662.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LiA5Y-q5qWg5ZaD,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"image"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);