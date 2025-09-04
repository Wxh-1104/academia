import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

// 1. 从 Iconify 核心库中导入 'Iconify' 对象
import { Iconify } from '@iconify/vue'

// 2. 导入我们之前创建的“增强版”Icon组件的定义逻辑
import { Icon as OriginalIcon } from '@iconify/vue'

import './custom.css'

// --- 关键修复：强制 Iconify 使用 HTTPS API ---
// 这会覆盖默认的 API 提供商，确保所有请求都是安全的
Iconify.addAPIProvider('iconify', {
  resources: ['https://api.iconify.design'],
});
// --- 修复结束 ---


// 我们之前创建的增强版 Icon 组件定义 (保持不变)
const EnhancedIcon = {
  props: ['icon', 'href', 'color'],
  setup(props, { attrs }) {
    // ... (这里是您之前的组件逻辑，无需修改)
    return () => {
      const iconAttrs = { ...attrs, icon: props.icon };
      if (props.color === 'brand') {
        iconAttrs.class = [attrs.class, 'text-brand'].filter(Boolean).join(' ');
      }
      const iconNode = h(OriginalIcon, iconAttrs)
      if (props.href) {
        return h('a', {
          class: 'icon-link-wrapper',
          href: props.href,
          target: '_blank',
          rel: 'noopener noreferrer',
        }, [iconNode])
      }
      return iconNode
    }
  }
}

// 导出主题配置 (保持不变)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Icon', EnhancedIcon)
  },
}