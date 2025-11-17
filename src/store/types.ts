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
  image: string;
  date: string;
  readingTime: number;
  exclusiveLink: string; // 专属链接
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
  projectDetails: Record<number, string>;
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
  activeTag: string;
  loading: boolean;
  error: string | null;
}
