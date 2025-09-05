import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { Icon as OriginalIcon, addAPIProvider } from "@iconify/vue";

import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import twemoji from 'twemoji'

import "./custom.css";

// --- 关键修复：强制 Iconify 使用 HTTPS API ---
// 在最新版本中，addAPIProvider 直接从 @iconify/vue 导出，非常方便
addAPIProvider("iconify", {
  resources: ["https://api.iconify.design"],
});
// --- 修复结束 ---

// 我们之前创建的增强版 Icon 组件定义 (保持不变)
const EnhancedIcon = {
  props: ["icon", "href", "color"],
  setup(props, { attrs }) {
    return () => {
      const iconAttrs = { ...attrs, icon: props.icon };
      if (props.color === "brand") {
        iconAttrs.class = [attrs.class, "text-brand"].filter(Boolean).join(" ");
      }
      const iconNode = h(OriginalIcon, iconAttrs);
      if (props.href) {
        return h(
          "a",
          {
            class: "icon-link-wrapper",
            href: props.href,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          [iconNode]
        );
      }
      return iconNode;
    };
  },
};

// 导出主题配置 (保持不变)
export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component("Icon", EnhancedIcon);
  },

  setup() {
    const route = useRoute();

    // 定义一个函数，用于查找并解析页面中的 emoji
    const parseEmojis = () => {
      nextTick(() => {
        const content = document.querySelector('.vp-doc');
        if (content) {
          // --- 关键修改在这里 ---
          twemoji.parse(content, {
            // 指定文件夹格式为 SVG
            folder: 'svg',
            // 指定文件扩展名为 .svg
            ext: '.svg',
            // 指定 CDN 的基础 URL，指向 Iconify 提供的 Fluent Emoji Flat 资源
            base: 'https://cdn.jsdelivr.net/npm/@iconify-icons/fluent-emoji-flat@latest/svg/'
          });
        }
      });
    };
    // 页面初次加载时执行
    onMounted(() => {
      parseEmojis();
    });
    // 监听路由变化，VitePress 是 SPA，页面切换时需要重新执行
    watch(
      () => route.path,
      () => parseEmojis()
    );
  }
};
