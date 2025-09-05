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

  transformHead({ assets }) {
    const fontFileNames = [
      'MapleMono-Regular.ttf.woff2',
      'MapleMono-Bold.ttf.woff2',
      'MapleMono-Italic.ttf.woff2',
      'MapleMono-ExtraBoldItalic.ttf.woff2'
    ];
    const preloadLinks = fontFileNames.flatMap(fileName => {
      const fontAsset = assets.find(asset => asset.endsWith(fileName));
      if (fontAsset) {
        return [
          [
            'link',
            {
              rel: 'preload',
              href: fontAsset,
              as: 'font',
              type: 'font/woff2',
              crossorigin: 'anonymous'
            }
          ]
        ];
      }
      return [];
    });
    return preloadLinks;
  },

  base: '/',
  
  title: "✨Academia",
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
      { text: "思政课", link: "/sizheng/" },
      { text: "关于", link: "/about" },
      {
        text: "更多",
        items: [
          { text: "外部链接示例", link: "https://vitepress.dev/" },
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Wxh-1104/academia" },
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

            { text: "每个计算机科学专业的学生应该知道什么？", link: "/guide/cs-should-know" },
          ],
        },
        {
          text: "进阶",
          collapsed: false,
          items: [
            { text: "python入门", link: "/guide/python-tutorial" },
            { text: "NumPy", link: "/guide/numpy" },
            { text: "计算机视觉", link: "/guide/cv" },
          ]
        },
      ],
      "/sizheng/": [
        {
          text: "思政课",
          collapsed: false,
          items: [
            { text: "思想道德与法治", link: "/sizheng/ideology-morality-and-rule-of-law" },
            { text: "马克思主义基本原理", link: "/sizheng/marxism-general-principle" },
            { text: "中国近现代史纲要", link: "/sizheng/essentials-of-chinese-modern-history" },
            { text: "毛泽东思想和中国特色社会主义理论体系概论", link: "/sizheng/fundamentals-of-mao-zedong-thoughts-and-socialism-with-chinese-characteristics" },
            { text: "习近平新时代中国特色社会主义思想概论", link: "/sizheng/introduction-to-xijinping-thought-on-socialism-with-chinese-characteristics-for-a-new-era" },
            { text: "形势与政策", link: "/sizheng/situation-and-policy" },
            { text: "劳动教育", link: "/sizheng/labor-education" },
            { text: "军事理论", link: "/sizheng/military-theory" },
            { text: "心理健康教育", link: "/sizheng/mental-health-education" },
          ]
        }
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