// 基础类型定义

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  skills?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
  createdAt: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage?: string;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Store状态类型定义
export interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface ProjectState {
  projects: Project[];
  filteredProjects: Project[];
  currentFilter: string;
  loading: boolean;
  error: string | null;
}

export interface BlogState {
  posts: BlogPost[];
  filteredPosts: BlogPost[];
  currentPage: number;
  postsPerPage: number;
  searchQuery: string;
  selectedCategory: string;
  loading: boolean;
  error: string | null;
}
