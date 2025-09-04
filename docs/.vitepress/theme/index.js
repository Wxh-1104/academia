import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { Icon as OriginalIcon, addAPIProvider } from '@iconify/vue'
import './custom.css'

// --- 关键修复：强制 Iconify 使用 HTTPS API ---
// 在最新版本中，addAPIProvider 直接从 @iconify/vue 导出，非常方便
addAPIProvider('iconify', {
  resources: ['https://api.iconify.design'],
});
// --- 修复结束 ---

// 我们之前创建的增强版 Icon 组件定义 (保持不变)
const EnhancedIcon = {
  props: ['icon', 'href', 'color'],
  setup(props, { attrs }) {
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