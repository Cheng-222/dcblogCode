import { defineStore } from 'pinia';
import type { User, UserState } from '../types';


export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    currentUser: null,
    isAuthenticated: false,
    loading: false,
    error: null
  }),

  getters: {
    getUserInfo: (state) => state.currentUser,
    isLoggedIn: (state) => state.isAuthenticated,
    isLoading: (state) => state.loading,
    getError: (state) => state.error
  },

  actions: {
    // 模拟登录
    async login(email: string, password: string) {
      this.loading = true;
      this.error = null;

      try {
        // 这里模拟API请求
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 模拟成功响应
        if (email && password) {
          this.currentUser = {
            id: 1,
            name: '开发者',
            email: email,
            avatar: '/avatar.png',
            bio: '前端开发工程师',
            skills: ['Vue.js', 'TypeScript', 'SCSS', 'JavaScript']
          };
          this.isAuthenticated = true;
        } else {
          throw new Error('邮箱和密码不能为空');
        }
      } catch (err) {
        this.error = err instanceof Error ? err.message : '登录失败';
      } finally {
        this.loading = false;
      }
    },

    // 登出
    logout() {
      this.currentUser = null;
      this.isAuthenticated = false;
      this.error = null;
    },

    // 更新用户信息
    updateUserInfo(updates: Partial<User>) {
      if (this.currentUser) {
        this.currentUser = { ...this.currentUser, ...updates };
      }
    },

    // 清除错误
    clearError() {
      this.error = null;
    }
  }
});
