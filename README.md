# Exploratory study of Vue 2.0
> 📒experience summary.

* https://vuejs.org/

# Import Vue 2.0

```js
// Not work
import Vue from 'vue';
```

```
[Vue warn]: You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build. (found in root instance)
```

* Must require the correct file

```js
// Not good
import Vue from 'vue/dist/vue.js';

// Better
// 最佳实践 在 webpack 工作流中添加别名
const alias = {
    'vue' : 'vue/dist/vue.js',
};
```

# Vue packages

* Cause [Yarn](https://yarnpkg.com/) lock the packages version

```
Vue packages version mismatch:

- vue@2.x.x
- vue-template-compiler@2.x.x

This may cause things to work incorrectly. Make sure to use the same version for both.
If you are using vue-loader@>=10.0, simply update vue-template-compiler.
If you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.
```

* Upgrate your packages, or re-install them

```
$ npm i vue --save-dev
$ npm i vue-loader --save-dev
$ npm i vue-template-compiler --save-dev
```

# Babel ES2015

* Vue Loader 1.x used Babel ES2015 as defaults
* Although, Babel is still supported [@see](https://github.com/vuejs/vue-loader/blob/70ca3ff64c1ae69bb4b93a142e937fccd2f06c89/lib/loader.js#L62)
* But, we should config by myself

```js
// webpack
{
    vue : {
        loaders : {
            js : 'babel?presets[]=es2015',
        },
    },
}
```

* Or, you can config in `.babelrc` as you like

# Lifecycle hooks
> from https://segmentfault.com/a/1190000006435886#articleHeader4

* 生命周期钩子对照表

| vue 1.0+ | vue 2.0 | Description |
|---|---|---|
| init | beforeCreate | 组件实例刚被创建，组件属性计算之前，如 `data` 属性等 |
| created | created | 组件实例创建完成，属性已绑定，但 `DOM` 还未生成，`$el` 属性还不存在 |
| beforeCompile | beforeMount | 模板编译/挂载之前 |
| compiled | mounted | 模板编译/挂载之后 |
| ready | mounted | 模板编译/挂载之后（不保证组件已在 `document` 中） |
| - | beforeUpdate | 组件更新之前 |
| - | updated | 组件更新之后 |
| - | activated | `for keep-alive`，组件被激活时调用 |
| - | deactivated | `for keep-alive`，组件被移除时调用 |
| attached | - | 不用了还说啥哪... |
| detached | - | 那就不说了吧... |
| beforeDestory | beforeDestory | 组件销毁前调用 |
| destoryed | destoryed | 组件销毁后调用 |

## License

MIT
