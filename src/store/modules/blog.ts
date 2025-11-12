import { defineStore } from 'pinia';
import type { BlogPost, BlogState, User } from '../types';

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => ({
    posts: [
      {
        id: 1,
        title: 'Vue 3 Composition API 最佳实践',
        excerpt: '深入探讨Vue 3 Composition API的高级用法和最佳实践...',
        content: 'Vue 3引入了Composition API，为组件逻辑复用和组织提供了新的方式...',
        category: '前端开发',
        tags: ['Vue.js', 'JavaScript', '前端'],
        coverImage: '/blog1.jpg',
        author: {
          id: 1,
          name: '开发者',
          email: 'dev@example.com',
          avatar: '/avatar.png'
        },
        createdAt: '2024-05-10',
        updatedAt: '2024-05-10'
      },
      {
        id: 2,
        title: 'TypeScript 在大型项目中的应用',
        excerpt: '如何在大型项目中有效使用TypeScript提升代码质量和开发效率...',
        content: 'TypeScript为JavaScript带来了静态类型检查，在大型项目中尤为重要...',
        category: '编程语言',
        tags: ['TypeScript', 'JavaScript', '开发效率'],
        author: {
          id: 1,
          name: '开发者',
          email: 'dev@example.com',
          avatar: '/avatar.png'
        },
        createdAt: '2024-04-25',
        updatedAt: '2024-04-25'
      },
      {
        id: 3,
        title: '响应式设计原则与实践',
        excerpt: '现代网页设计中响应式设计的核心原则和实现方法...',
        content: '响应式设计已经成为现代网页开发的标准要求...',
        category: 'UI设计',
        tags: ['响应式设计', 'CSS', '设计原则'],
        coverImage: '/blog3.jpg',
        author: {
          id: 1,
          name: '开发者',
          email: 'dev@example.com',
          avatar: '/avatar.png'
        },
        createdAt: '2024-04-01',
        updatedAt: '2024-04-01'
      }
    ],
    filteredPosts: [],
    currentPage: 1,
    postsPerPage: 6,
    searchQuery: '',
    selectedCategory: '',
    loading: false,
    error: null
  }),

  getters: {
    // 获取过滤和分页后的文章
    getFilteredAndPaginatedPosts: (state) => {
      let filtered = [...state.posts];

      // 搜索过滤
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
        );
      }

      // 分类过滤
      if (state.selectedCategory) {
        filtered = filtered.filter(post => post.category === state.selectedCategory);
      }

      // 分页
      const startIndex = (state.currentPage - 1) * state.postsPerPage;
      const endIndex = startIndex + state.postsPerPage;

      return filtered.slice(startIndex, endIndex);
    },

    // 获取总页数
    getTotalPages: (state) => {
      let filtered = [...state.posts];

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
        );
      }

      if (state.selectedCategory) {
        filtered = filtered.filter(post => post.category === state.selectedCategory);
      }

      return Math.ceil(filtered.length / state.postsPerPage);
    },

    // 获取所有分类
    getCategories: (state) => {
      const categories = new Set(state.posts.map(post => post.category));
      return Array.from(categories);
    },

    // 获取所有标签
    getTags: (state) => {
      const tags = new Set<string>();
      state.posts.forEach(post => {
        post.tags.forEach(tag => tags.add(tag));
      });
      return Array.from(tags);
    },

    // 根据ID获取文章
    getPostById: (state) => (id: number) => {
      return state.posts.find(post => post.id === id) || null;
    }
  },

  actions: {
    // 设置搜索查询
    setSearchQuery(query: string) {
      this.searchQuery = query;
      this.currentPage = 1; // 重置到第一页
    },

    // 设置分类过滤
    setCategory(category: string) {
      this.selectedCategory = category;
      this.currentPage = 1; // 重置到第一页
    },

    // 设置当前页
    setCurrentPage(page: number) {
      this.currentPage = page;
    },

    // 添加新文章
    addPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) {
      const now = new Date().toISOString().split('T')[0];
      const newPost: BlogPost = {
        ...post,
        id: Date.now(),
        createdAt: now,
        updatedAt: now
      };
      this.posts.unshift(newPost); // 添加到开头
    },

    // 更新文章
    updatePost(id: number, updates: Partial<BlogPost>) {
      const index = this.posts.findIndex(post => post.id === id);
      if (index !== -1) {
        this.posts[index] = {
          ...this.posts[index],
          ...updates,
          updatedAt: new Date().toISOString().split('T')[0]
        };
      }
    },

    // 删除文章
    deletePost(id: number) {
      this.posts = this.posts.filter(post => post.id !== id);
    },

    // 模拟加载文章数据
    async fetchPosts() {
      this.loading = true;
      this.error = null;

      try {
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 800));
        // 实际项目中这里会调用API获取数据
        // const response = await api.getBlogPosts();
        // this.posts = response.data;
      } catch (err) {
        this.error = err instanceof Error ? err.message : '加载文章失败';
      } finally {
        this.loading = false;
      }
    }
  }
});
