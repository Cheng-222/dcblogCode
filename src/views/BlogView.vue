<template>
  <div class="blog-view">
    <NavBar />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title fade-in">我的博客</h1>
        <p class="page-subtitle fade-in">分享我的思考和学习心得</p>
      </div>
    </section>
    
    <!-- 搜索栏 -->
    <section class="search-section">
      <div class="container">
        <div class="search-container slide-up">
          <input 
            type="text" 
            v-model="searchQuery" 
            class="search-input" 
            placeholder="搜索文章..."
          />
          <button class="search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
    
    <!-- 分类标签 -->
    <section class="tags-section">
      <div class="container">
        <div class="tags-container slide-up">
          <button 
            v-for="tag in tags" 
            :key="tag" 
            class="tag-btn" 
            :class="{ active: activeTag === tag }"
            @click="filterByTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- 博客文章 -->
    <section class="blog-section">
      <div class="container">
        <div class="blog-grid">
          <article 
            v-for="post in paginatedPosts" 
            :key="post.id" 
            class="blog-card slide-up"
          >
            <div class="blog-image-container">
              <img :src="post.image" :alt="post.title" class="blog-image" />
              <div class="blog-category">{{ post.category }}</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ formatDate(post.date) }}</span>
                <span class="blog-reading-time">{{ post.readingTime }} 分钟阅读</span>
              </div>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <a :href="post.exclusiveLink" class="blog-link" target="_blank">阅读更多</a>
            </div>
          </article>
        </div>
        
        <!-- 无文章提示 -->
        <div class="no-posts" v-if="filteredPosts.length === 0">
          <p>没有找到相关文章</p>
        </div>
        
        <!-- 分页 -->
        <div class="pagination slide-up" v-if="filteredPosts.length > 0">
          <button class="pagination-btn" :disabled="currentPage === 1" @click="prevPage">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            上一页
          </button>
          <div class="pagination-info">
            第 {{ currentPage }} 页，共 {{ totalPages }} 页
          </div>
          <button class="pagination-btn" :disabled="currentPage === totalPages" @click="nextPage">
            下一页
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { useBlogStore } from '../store/modules/blog'

// 使用blog store
const blogStore = useBlogStore()

// 从store获取数据和状态
const searchQuery = computed({
  get: () => blogStore.searchQuery,
  set: (value) => blogStore.setSearchQuery(value)
})

const activeTag = computed({
  get: () => blogStore.activeTag,
  set: (value) => blogStore.setActiveTag(value)
})

const currentPage = computed({
  get: () => blogStore.currentPage,
  set: (value) => blogStore.setCurrentPage(value)
})

const filteredPosts = computed(() => blogStore.filteredPosts)
const tags = computed(() => blogStore.tags)
const totalPages = computed(() => blogStore.totalPages)
const paginatedPosts = computed(() => blogStore.paginatedPosts)

// 方法
function filterByTag(tag) {
  blogStore.setActiveTag(tag)
}

function prevPage() {
  blogStore.prevPage()
}

function nextPage() {
  blogStore.nextPage()
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('zh-CN', options)
}

onMounted(() => {
  // 添加滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.1}s`
        entry.target.classList.add('slide-up')
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.blog-card').forEach(item => {
    observer.observe(item)
  })
})
</script>

<style lang="scss" scoped>
.blog-view {
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

.search-section {
  padding: var(--spacing-xl) 0;
  
  .container {
    .search-container {
      max-width: 600px;
      margin: 0 auto;
      position: relative;
      
      .search-input {
        width: 100%;
        padding: var(--spacing-md) var(--spacing-xl) var(--spacing-md) var(--spacing-lg);
        background-color: var(--bg-secondary);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        color: var(--text-primary);
        font-size: 1rem;
        transition: all var(--transition-fast);
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(61, 90, 254, 0.1);
        }
        
        &::placeholder {
          color: var(--text-secondary);
        }
      }
      
      .search-btn {
        position: absolute;
        top: 50%;
        right: var(--spacing-md);
        transform: translateY(-50%);
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        transition: color var(--transition-fast);
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
}

.tags-section {
  padding-bottom: var(--spacing-lg);
  
  .container {
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
      justify-content: center;
      
      .tag-btn {
        padding: var(--spacing-xs) var(--spacing-md);
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--text-secondary);
        border-radius: 50px;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: all var(--transition-fast);
        
        &:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
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

.blog-section {
  padding: var(--spacing-xl) 0;
  
  .container {
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-2xl);
    }
    
    .blog-card {
      background-color: var(--bg-secondary);
      border-radius: 8px;
      overflow: hidden;
      transition: all var(--transition-normal);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        
        .blog-image {
          transform: scale(1.05);
        }
      }
      
      .blog-image-container {
        position: relative;
        overflow: hidden;
        height: 200px;
        
        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        
        .blog-category {
          position: absolute;
          top: var(--spacing-md);
          left: var(--spacing-md);
          background-color: var(--primary-color);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
      }
      
      .blog-content {
        padding: var(--spacing-lg);
        
        .blog-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-md);
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        
        .blog-title {
          font-family: var(--font-secondary);
          font-size: 1.25rem;
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }
        
        .blog-excerpt {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
        }
        
        .blog-link {
          display: inline-flex;
          align-items: center;
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-fast);
          
          &::after {
            content: '→';
            margin-left: var(--spacing-xs);
            transition: transform var(--transition-fast);
          }
          
          &:hover {
            &::after {
              transform: translateX(3px);
            }
          }
        }
      }
    }
    
    .no-posts {
      text-align: center;
      padding: var(--spacing-2xl) 0;
      color: var(--text-secondary);
    }
    
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-xl);
      
      .pagination-btn {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-sm) var(--spacing-lg);
        background-color: var(--bg-secondary);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--text-primary);
        border-radius: 4px;
        cursor: pointer;
        transition: all var(--transition-fast);
        
        &:hover:not(:disabled) {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }
        
        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      
      .pagination-info {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }
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
  
  .blog-section {
    .container {
      .blog-grid {
        grid-template-columns: 1fr;
      }
      
      .pagination {
        flex-direction: column;
        gap: var(--spacing-md);
      }
    }
  }
}
</style>