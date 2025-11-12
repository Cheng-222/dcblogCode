import { defineStore } from 'pinia';
import type { BlogState } from '../types';

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => ({
    posts: [
      {
        id: 1,
        title: 'Vue 3 组合式 API 最佳实践',
        excerpt: '深入探讨 Vue 3 组合式 API 的使用方法和最佳实践，帮助你写出更清晰、更易维护的代码。',
        content: '',
        category: '前端开发',
        tags: ['Vue.js', 'JavaScript', '前端'],
        image: 'https://picsum.photos/seed/blog1/600/400',
        date: '2023-05-15',
        readingTime: 8,
        exclusiveLink: 'https://www.baidu.com'
      },
      {
        id: 2,
        title: '响应式设计原则与实践',
        excerpt: '了解响应式网页设计的核心原则，掌握如何创建在各种设备上都能完美展示的网站。',
        content: '',
        category: 'UI/UX',
        tags: ['响应式设计', 'CSS', '设计'],
        image: 'https://picsum.photos/seed/blog2/600/400',
        date: '2023-04-28',
        readingTime: 6,
        exclusiveLink: 'https://www.taobao.com'
      },
      {
        id: 3,
        title: '前端性能优化指南',
        excerpt: '分享前端性能优化的实用技巧，从资源加载、渲染优化到运行时性能，全面提升网站体验。',
        content: '',
        category: '性能优化',
        tags: ['性能优化', 'JavaScript', '前端'],
        image: 'https://picsum.photos/seed/blog3/600/400',
        date: '2023-04-10',
        readingTime: 10,
        exclusiveLink: 'https://www.jd.com'
      },
      {
        id: 4,
        title: 'CSS Grid 布局完全指南',
        excerpt: '掌握 CSS Grid 布局的强大功能，创建复杂且响应式的网页布局，提升你的 CSS 技能。',
        content: '',
        category: '前端开发',
        tags: ['CSS', '布局', '前端'],
        image: 'https://picsum.photos/seed/blog4/600/400',
        date: '2023-03-25',
        readingTime: 7,
        exclusiveLink: 'https://www.bing.com'
      },
      {
        id: 5,
        title: '用户体验设计的心理学原理',
        excerpt: '了解用户体验设计背后的心理学原理，设计出更符合用户直觉和需求的产品。',
        content: '',
        category: 'UI/UX',
        tags: ['UX设计', '心理学', '设计'],
        image: 'https://picsum.photos/seed/blog5/600/400',
        date: '2023-03-12',
        readingTime: 9,
        exclusiveLink: 'https://www.youku.com'
      },
      {
        id: 6,
        title: 'TypeScript 进阶技巧',
        excerpt: '探索 TypeScript 的高级特性和使用技巧，提高代码质量和开发效率。',
        content: '',
        category: '前端开发',
        tags: ['TypeScript', 'JavaScript', '前端'],
        image: 'https://picsum.photos/seed/blog6/600/400',
        date: '2023-02-28',
        readingTime: 8,
        exclusiveLink: 'https://www.github.com'
      }
    ],
    filteredPosts: [],
    currentPage: 1,
    postsPerPage: 3,
    searchQuery: '',
    activeTag: '全部',
    loading: false,
    error: null
  }),

  getters: {
    // 获取过滤后的文章
    filteredPosts: (state) => {
      let result = [...state.posts];

      // 搜索过滤
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        result = result.filter(post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
        );
      }

      // 标签过滤
      if (state.activeTag !== '全部') {
        result = result.filter(post => post.tags.includes(state.activeTag));
      }

      return result;
    },

    // 获取分页后的文章
    paginatedPosts: (state) => {
      const start = (state.currentPage - 1) * state.postsPerPage;
      const end = start + state.postsPerPage;
      return state.filteredPosts.slice(start, end);
    },

    // 获取总页数
    totalPages: (state) => {
      return Math.ceil(state.filteredPosts.length / state.postsPerPage);
    },

    // 获取所有标签（包含'全部'）
    tags: (state) => {
      const allTags = ['全部'];
      const tagSet = new Set<string>();

      state.posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag));
      });

      return [...allTags, ...Array.from(tagSet)];
    }
  },

  actions: {
    // 设置搜索查询
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    // 设置标签过滤
    setActiveTag(tag: string) {
      this.activeTag = tag;
      this.currentPage = 1;
    },

    // 设置当前页
    setCurrentPage(page: number) {
      this.currentPage = page;
    },

    // 上一页
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    // 下一页
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
});
