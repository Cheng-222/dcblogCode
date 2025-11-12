import { defineStore } from 'pinia';
import type { Project, ProjectState } from '../types';

export const useProjectStore = defineStore('project', {
  state: (): ProjectState => ({
    projects: [
      {
        id: 1,
        title: '电商网站',
        description: '响应式电商平台，支持商品浏览、购物车和支付功能',
        category: 'web',
        imageUrl: '/project1.jpg',
        liveUrl: 'https://baidu.com',
        githubUrl: 'https://github.com/example/project1',
        tags: ['Vue.js', 'TypeScript', 'SCSS'],
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        title: '任务管理应用',
        description: '现代化任务管理工具，支持拖拽排序和状态管理',
        category: 'web',
        imageUrl: '/project2.jpg',
        liveUrl: 'https://taobao.com',
        githubUrl: 'https://github.com/example/project2',
        tags: ['React', 'Firebase'],
        createdAt: '2024-02-10'
      },
      {
        id: 3,
        title: '移动音乐播放器',
        description: '跨平台移动应用，支持本地音频播放和在线音乐流媒体',
        category: 'mobile',
        imageUrl: '/project3.jpg',
        liveUrl: 'https://example.com/project3',
        tags: ['Flutter', 'Dart'],
        createdAt: '2024-03-05'
      },
      {
        id: 4,
        title: '品牌设计系统',
        description: '完整的企业品牌设计系统，包含UI组件库和设计规范',
        category: 'design',
        imageUrl: '/project4.jpg',
        githubUrl: 'https://github.com/example/project4',
        tags: ['Figma', 'Design System'],
        createdAt: '2024-04-20'
      },
      {
        id: 5,
        title: '个人博客',
        description: '响应式个人博客，支持Markdown写作和评论功能',
        category: 'web12',
        imageUrl: '/project5.jpg',
        liveUrl: 'https://example.com/project5',
        githubUrl: 'https://github.com/example/project5',
        tags: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
        createdAt: '2024-05-12'
      }
    ],
    filteredProjects: [],
    currentFilter: 'all',
    loading: false,
    error: null
  }),

  getters: {
    getAllProjects: (state) => state.projects,
    getFilteredProjects: (state) => {
      if (state.currentFilter === 'all') {
        return state.projects;
      }
      return state.projects.filter(project => project.category === state.currentFilter);
    },
    getProjectById: (state) => (id: number) => {
      return state.projects.find(project => project.id === id) || null;
    },
    getProjectCategories: (state) => {
      const categories = new Set(state.projects.map(project => project.category));
      return Array.from(categories);
    },
    getCurrentFilter: (state) => state.currentFilter
  },

  actions: {
    // 设置过滤条件
    setFilter(filter: string) {
      this.currentFilter = filter;
    },

    // 添加新项目
    addProject(project: Omit<Project, 'id' | 'createdAt'>) {
      const newProject: Project = {
        ...project,
        id: Date.now(),
        createdAt: new Date().toISOString().split('T')[0]
      };
      this.projects.push(newProject);
    },

    // 更新项目
    updateProject(id: number, updates: Partial<Project>) {
      const index = this.projects.findIndex(project => project.id === id);
      if (index !== -1) {
        this.projects[index] = { ...this.projects[index], ...updates };
      }
    },

    // 删除项目
    deleteProject(id: number) {
      this.projects = this.projects.filter(project => project.id !== id);
    },

    // 模拟加载项目数据
    async fetchProjects() {
      this.loading = true;
      this.error = null;

      try {
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        // 实际项目中这里会调用API获取数据
        // const response = await api.getProjects();
        // this.projects = response.data;
      } catch (err) {
        this.error = err instanceof Error ? err.message : '加载项目失败';
      } finally {
        this.loading = false;
      }
    }
  }
});
