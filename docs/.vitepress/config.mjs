import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import footnote from 'markdown-it-footnote'
import taskLists from 'markdown-it-task-lists'

export default withMermaid(defineConfig({
  markdown: {
    math: true,
    config: (md) => {
      md.use(footnote)
      md.use(taskLists)
    }
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 8000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue')) return 'vue';
              if (id.includes('vitepress')) return 'vitepress';
              return 'vendor';
            }
          }
        }
      }
    },
  },

  base: '/my-vitepress-site/',
  
  title: "Academia",
  description: "一个基于 VitePress 的 Markdown 文档网站",

  themeConfig: {
    lastUpdated: {
      text: '本页最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      {
        text: "更多",
        items: [
          { text: "关于", link: "/about" },
          { text: "外部链接示例", link: "https://vitepress.dev/" },
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/你的用户名/你的仓库" },
    ],
    sidebar: {
      "/guide/": [
        { text: "指南首页", link: "/guide/" },
        {
          text: "安装与使用",
          collapsed: false,
          items: [
            { text: "安装说明", link: "/guide/install" },
            { text: "开始使用人工智能", link: "/guide/ai" },
            { text: "马克思主义基本原理概论", link: "/guide/marxism" },
            { text: "每个计算机科学专业的学生应该知道什么？", link: "/guide/cs-should-know" },
          ],
        },
      ],
    },
    footer: {
      message: 'Powered by VitePress',
    },

    outline: {
      level: [2, 4],
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    externalLinkIcon: false
  },
}));