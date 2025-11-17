<template>
  <div class="projects-view">
    <NavBar />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title fade-in">我的作品</h1>
        <p class="page-subtitle fade-in">探索我设计和开发的项目</p>
      </div>
    </section>
    
    <!-- 项目过滤 -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-container slide-up">
          <button 
            v-for="category in categories" 
            :key="category" 
            class="filter-btn" 
            :class="{ active: activeCategory === category }"
            @click="filterProjects(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- 项目展示 -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project"
          />
        </div>
        
        <!-- 无项目提示 -->
        <div class="no-projects" v-if="filteredProjects.length === 0">
          <p>没有找到相关项目</p>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import ProjectCard from '../components/ProjectCard.vue'
import Footer from '../components/Footer.vue'
// 导入project store
import { useProjectStore } from '../store/modules/project'

// 创建store实例
const projectStore = useProjectStore()

// 使用store中的getters
const filteredProjects = computed(() => projectStore.getFilteredProjects)
const categories = computed(() => {
  // 确保第一个是'全部'选项
  return ['全部', ...projectStore.getProjectCategories]
})
const activeCategory = computed(() => {
  // 特殊处理'all'类别
  if (projectStore.getCurrentFilter === 'all') {
    return '全部'
  }
  return projectStore.getCurrentFilter || '全部'
})

// 过滤项目
function filterProjects(category) {
  projectStore.setFilter(category === '全部' ? 'all' : category)
  
    
  // 添加滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`
        entry.target.classList.add('slide-up')
      }
    })
  }, { threshold: 0.1 })
  
  setTimeout(() => {
    document.querySelectorAll('.projects-grid > *').forEach(item => {
      item.classList.remove('slide-up')
      observer.observe(item)
    })
  }, 100)
}

onMounted(async () => {
  // 从store获取项目数据
  await projectStore.fetchProjects()
  
  // 添加滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`
        entry.target.classList.add('slide-up')
      }
    })
  }, { threshold: 0.1 })
  
  setTimeout(() => {
    document.querySelectorAll('.projects-grid > *').forEach(item => {
      item.observe(item)
    })
  }, 100)
})
</script>

<style lang="scss" scoped>
.projects-view {
  position: relative;
}

.page-header {
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(135deg, rgba(61, 90, 254, 0.1) 0%, rgba(255, 64, 129, 0.1) 100%);
  
  .container {
    text-align: center;
    
    .page-title {
      font-family: var(--font-secondary);
      font-size: 3.5rem;
      margin-bottom: var(--spacing-md);
      color: var(--text-primary);
    }
    
    .page-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
    }
  }
}

.filter-section {
  padding: var(--spacing-lg) 0;
  background-color: var(--bg-secondary);
  
  .container {
    .filter-container {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-md);
      justify-content: center;
      
      .filter-btn {
        padding: var(--spacing-sm) var(--spacing-lg);
        background-color: transparent;
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: var(--text-secondary);
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition-fast);
        
        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          transform: translateY(-2px);
        }
        
        &.active {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }
      }
    }
  }
}

.projects-section {
  padding: var(--spacing-2xl) 0;
  
  .container {
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xl);
    }
    
    .no-projects {
      text-align: center;
      padding: var(--spacing-2xl) 0;
      color: var(--text-secondary);
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .page-header {
    .container {
      .page-title {
        font-size: 2.5rem;
      }
    }
  }
  
  .filter-section {
    .container {
      .filter-container {
        flex-direction: column;
        align-items: center;
        
        .filter-btn {
          width: 100%;
          max-width: 200px;
        }
      }
    }
  }
  
  .projects-section {
    .container {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>