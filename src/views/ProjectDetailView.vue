<template>
  <div class="project-detail">
    <NavBar />
    <div class="container">
      <div class="back-link">
        <router-link to="/projects">&larr; 返回项目列表</router-link>
      </div>
      
      <div v-if="project" class="project-content">
        <h1 class="project-title">{{ project.title }}</h1>
        
        <div class="project-meta">
          <span class="project-category">{{ getCategoryLabel(project.category) }}</span>
          <span class="project-date">{{ project.createdAt }}</span>
        </div>
        
       
        
        <div class="project-showcase">
          <h2>成果展示</h2>
          <div class="project-images">
            <img 
              :src="project.imageUrl || '/placeholder.jpg'" 
              :alt="project.title"
              class="project-image"
            />
          </div>
        </div>

         <div class="project-tech-stack">
          <h2>技术栈</h2>
          <div class="tech-tags">
            <span 
              v-for="(tag, index) in project.tags || []" 
              :key="index"
              class="tech-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>

         <div class="project-description">
          <h2>项目详情</h2>
          <p>{{ getProjectDetailDescription(project.id) }}</p>
        </div>
        
       
        
        <div class="project-links">
          <h2>作品链接</h2>
          <a 
            :href="project.liveUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="project-link live"
          >
            在线预览
          </a>
          <a 
            :href="project.githubUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="project-link github"
          >
            GitHub 仓库
          </a>
        </div>
        
       
      </div>
      
      <div v-else class="not-found">
        <h2>项目未找到</h2>
        <p>抱歉，找不到指定的项目。</p>
        <router-link to="/projects" class="back-btn">返回项目列表</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectStore } from '../store/modules/project'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'ProjectDetailView',
  setup() {
    const route = useRoute()
    const projectStore = useProjectStore()
    
    // 从路由参数获取项目ID并转换为数字
    const projectId = computed(() => {
      const id = route.params.id
      return typeof id === 'string' ? parseInt(id, 10) : id
    })
    
    // 从store获取项目详情
    const project = computed(() => {
      return projectStore.getProjectById(projectId.value)
    })
    
    // 分类映射
    const getCategoryLabel = (category) => {
      const categoryMap = {
        'web': '网页应用',
        'mobile': '移动应用',
        'design': '品牌设计',
        'frontend': '前端开发',
        'backend': '后端开发',
        'fullstack': '全栈开发'
      }
      return categoryMap[category] || category
    }
    
    // 根据项目ID返回详细描述
    const getProjectDetailDescription = (id) => {
      // 根据项目ID返回详细描述
      const descriptions = {
        1: '这是一个完整的电商网站解决方案，包含商品浏览、分类筛选、购物车管理和订单系统。前端采用响应式设计，适配各种屏幕尺寸，提供流畅的用户体验。后端实现了完整的API服务，支持商品管理、用户认证和支付集成。',
        2: '任务管理应用提供了直观的用户界面，支持拖拽排序、状态管理和截止日期提醒。应用采用现代前端框架构建，具有良好的性能和可维护性。数据存储使用Firebase，确保数据同步和实时更新。',
        3: '移动音乐播放器支持本地音频播放和在线流媒体功能，采用Flutter开发，实现了iOS和Android平台的统一体验。应用包含专辑封面显示、歌词同步、播放控制等功能，提供优质的音乐播放体验。',
        4: '品牌设计系统包含完整的UI组件库和设计规范，为企业提供统一的视觉语言。设计系统涵盖了颜色系统、排版规范、组件设计和交互模式，确保产品设计的一致性和可扩展性。'
      }
      return descriptions[id] || '暂无详细描述'
    }
    
    return {
      project,
      getCategoryLabel,
      getProjectDetailDescription
    }
  }
}
</script>

<style lang="scss" scoped>
.project-detail {
  position: relative;
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-primary);
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.back-link {
  margin-bottom: var(--spacing-xl);
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.2s;
}

.back-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-fast);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-link a:hover {
  color: #2948CC;
  transform: translateX(-3px);
}

.project-content {
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: var(--spacing-2xl);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.4s;
}

.project-title {
  font-family: var(--font-secondary);
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  line-height: 1.2;
}

.project-meta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
  align-items: center;
}

.project-category {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
}

.project-date {
  color: var(--text-secondary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.project-overview,
.project-showcase,
.project-links,
.project-description,
.project-tech-stack {
  margin-bottom: var(--spacing-2xl);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.project-overview {
  animation-delay: 0.6s;
}

.project-showcase {
  animation-delay: 0.8s;
}

.project-links {
  animation-delay: 1s;
}

.project-description {
  animation-delay: 1.2s;
}

.project-tech-stack {
  animation-delay: 1.4s;
}

.project-overview h2,
.project-showcase h2,
.project-links h2,
.project-description h2,
.project-tech-stack h2 {
  font-family: var(--font-secondary);
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
  position: relative;
  display: inline-block;
}

.project-overview h2::after,
.project-showcase h2::after,
.project-links h2::after,
.project-description h2::after,
.project-tech-stack h2::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  border-radius: 3px;
}

.project-overview p,
.project-description p {
  line-height: 1.8;
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.project-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-lg);
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-normal);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-image:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-links {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  align-items: center;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
  gap: 0.5rem;
  min-width: 150px;
  text-align: center;
  border: 2px solid transparent;
}

.project-link.live {
  background-color: var(--secondary-color);
  color: white;
}

.project-link.live:hover {
  background-color: transparent;
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  transform: translateY(-3px);
}

.project-link.github {
  background-color: #333;
  color: white;
}

.project-link.github:hover {
  background-color: transparent;
  border-color: #333;
  color: #333;
  transform: translateY(-3px);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.tech-tag {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.tech-tag:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.not-found {
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  background-color: var(--bg-secondary);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.not-found h2 {
  font-family: var(--font-secondary);
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.not-found p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  font-size: 1.1rem;
}

.back-btn {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all var(--transition-fast);
  border: 2px solid transparent;
}

.back-btn:hover {
  background-color: transparent;
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-3px);
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .project-detail {
    padding: var(--spacing-xl) 0;
  }
  
  .project-content {
    padding: var(--spacing-xl);
  }
  
  .project-title {
    font-size: 2.2rem;
  }
  
  .project-overview h2,
  .project-showcase h2,
  .project-links h2,
  .project-description h2,
  .project-tech-stack h2 {
    font-size: 1.6rem;
  }
  
  .project-images {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .project-links {
    flex-direction: column;
    align-items: stretch;
  }
  
  .project-link {
    min-width: auto;
  }
}
</style>