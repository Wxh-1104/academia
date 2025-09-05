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
    // 获取 VitePress 的路由对象，以便我们能监听其变化
    const route = useRoute();

    // 定义一个可复用的函数，用于解析和替换 Emoji
    const parseEmojis = () => {
      // nextTick 确保我们在 Vue 完成 DOM 更新之后再执行操作
      // 这可以防止我们尝试操作还不存在的元素
      nextTick(() => {
        // twemoji.parse 会扫描指定的 DOM 元素
        // 并将找到的 Unicode Emoji 字符替换为 <img> 标签
        const content = document.querySelector(".vp-doc");
        if (content) {
          twemoji.parse(content, {
            // 使用 SVG 格式，它们更清晰，并且可以无限缩放
            folder: "svg",
            ext: ".svg",
            // 使用公共 CDN 来提供 SVG 图片，性能好且无需自己托管
            base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
          });
        }
      });
    };

    // onMounted() 会在组件首次挂载到 DOM 后执行
    // 我们用它来处理页面的初次加载
    onMounted(() => {
      parseEmojis();
    });

    // watch() 会监听一个响应式数据的变化
    // 这是处理 SPA 导航的关键！
    // 当 route.path (即页面 URL) 改变时，我们就重新运行解析函数
    watch(
      () => route.path,
      () => parseEmojis()
    );
  },
};
