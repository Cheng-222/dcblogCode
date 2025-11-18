import { defineStore } from 'pinia';
import type { Project, ProjectState } from '../types';

// 导入图片资源
import blogImage from '@/assets/img/blog.png';
import ajaxImage from '@/assets/img/ajax.png';

export const useProjectStore = defineStore('project', {
  state: (): ProjectState => ({
    projects: [
      {
        id: 1,
        title: '个人博客前端',
        description: '基于Vue3+TypeScript的现代化响应式博客，支持深色主题与Markdown渲染。',
        category: '网页应用',
        imageUrl: blogImage,
        liveUrl: 'https://dcblog.pages.dev',
        githubUrl: 'https://github.com/Cheng-222/dcblogCode',
        tags: ['Vue3', 'TypeScript', 'Vite', 'Pinia', 'SCSS', 'Markdown'],
        createdAt: '2025-10-15'
      },
      {
        id: 2,
        title: '创新前沿内容管理系统前端',
        description: '原生JS+Bootstrap5实现的内容后台管理界面，支持富文本发布与数据筛选。',
        category: '网页应用',
        imageUrl: ajaxImage,
        liveUrl: 'https://ajax-management-system.pages.dev/',
        githubUrl: 'https://github.com/Cheng-222/Ajax-management-system',
        tags: ['JavaScript', 'Bootstrap5', 'Axios', 'wangEditor', 'HTML', 'CSS'],
        createdAt: '2025-08-15'
      }
    ],
    projectDetails: {
      1: '采用Vue3 Composition API与TypeScript开发，使用Vite构建，Pinia做状态管理，SCSS编写样式，支持分页、搜索、评论、懒加载、进度指示等功能；路由懒加载与代码分割优化性能；完全响应式，多端体验一致。',
      2: '使用原生HTML+CSS+JavaScript配合Bootstrap5搭建，集成wangEditor富文本编辑器与Axios完成前后端数据交互；实现登录状态保持、文章发布、列表筛选、响应式表格、移动端适配等功能；Git进行版本控制，与后端团队协作完成API对接。'
    },
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
    getProjectDetailDescription: (state) => (id: number) => {
      return state.projectDetails[id] || '';
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
