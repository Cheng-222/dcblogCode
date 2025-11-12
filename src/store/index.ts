import { createPinia } from 'pinia';

// 创建pinia实例
const pinia = createPinia();

// 导出pinia实例
export default pinia;

// 导出各个store模块
export * from './modules/user';
export * from './modules/project';
export * from './modules/blog';
