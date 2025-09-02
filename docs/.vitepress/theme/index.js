import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

// 1. 导入原始的 Iconify 组件，我们将在内部使用它
import { Icon as OriginalIcon } from '@iconify/vue'

import './custom.css' // 确保你的自定义 CSS 被导入

// 2. 定义我们的“增强版”Icon组件对象
const EnhancedIcon = {
  // 我们告诉 Vue，这个组件接收所有原始 Icon 的属性，以及我们自定义的 href
  // '...' 意味着接收所有未明确定义的属性
  props: ['icon', 'href'],

  setup(props, { attrs }) {
    // setup 函数返回一个渲染函数
    return () => {
      // 创建原始 Icon 组件的虚拟节点，并将所有属性(attrs)传递给它
      // attrs 会包含 style, class, width 等所有非 prop 属性
      const iconNode = h(OriginalIcon, { ...attrs, icon: props.icon })

      // 如果 href prop 存在...
      if (props.href) {
        // ...则返回一个 <a> 标签，它的子元素是我们的 iconNode
        return h('a', {
          class: 'icon-link-wrapper', // 添加一个 class 以便我们设置样式
          href: props.href,
          target: '_blank', // 外部链接默认在新标签页打开
          rel: 'noopener noreferrer', // 安全最佳实践
        }, [iconNode]) // `h` 函数的第三个参数是子元素数组
      }
      
      // 如果 href 不存在，直接返回原始的 iconNode
      return iconNode
    }
  }
}


// 3. 导出主题配置
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 4. 全局注册我们的“增强版”组件，并“覆盖”掉原始的 'Icon' 名称
    // 现在，当你在 Markdown 中使用 <Icon> 时，用的就是我们这个带链接逻辑的版本
    app.component('Icon', EnhancedIcon)

    // 你可能还有其他的全局组件注册，比如 Twemoji
  },
  
  // 你可能还有 setup() 函数，保持原样即可
}