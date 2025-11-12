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
            v-for="post in filteredPosts" 
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
              <a href="#" class="blog-link">阅读更多</a>
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
import { ref, computed, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

// 博客文章数据
const posts = [
  {
    id: 1,
    title: 'Vue 3 组合式 API 最佳实践',
    excerpt: '深入探讨 Vue 3 组合式 API 的使用方法和最佳实践，帮助你写出更清晰、更易维护的代码。',
    content: '',
    category: '前端开发',
    tags: ['Vue.js', 'JavaScript', '前端'],
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: '2023-05-15',
    readingTime: 8
  },
  {
    id: 2,
    title: '响应式设计原则与实践',
    excerpt: '了解响应式网页设计的核心原则，掌握如何创建在各种设备上都能完美展示的网站。',
    content: '',
    category: 'UI/UX',
    tags: ['响应式设计', 'CSS', '设计'],
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: '2023-04-28',
    readingTime: 6
  },
  {
    id: 3,
    title: '前端性能优化指南',
    excerpt: '分享前端性能优化的实用技巧，从资源加载、渲染优化到运行时性能，全面提升网站体验。',
    content: '',
    category: '性能优化',
    tags: ['性能优化', 'JavaScript', '前端'],
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: '2023-04-10',
    readingTime: 10
  },
  {
    id: 4,
    title: 'CSS Grid 布局完全指南',
    excerpt: '掌握 CSS Grid 布局的强大功能，创建复杂且响应式的网页布局，提升你的 CSS 技能。',
    content: '',
    category: '前端开发',
    tags: ['CSS', '布局', '前端'],
    image: 'https://picsum.photos/seed/blog4/600/400',
    date: '2023-03-25',
    readingTime: 7
  },
  {
    id: 5,
    title: '用户体验设计的心理学原理',
    excerpt: '了解用户体验设计背后的心理学原理，设计出更符合用户直觉和需求的产品。',
    content: '',
    category: 'UI/UX',
    tags: ['UX设计', '心理学', '设计'],
    image: 'https://picsum.photos/seed/blog5/600/400',
    date: '2023-03-12',
    readingTime: 9
  },
  {
    id: 6,
    title: 'TypeScript 进阶技巧',
    excerpt: '探索 TypeScript 的高级特性和使用技巧，提高代码质量和开发效率。',
    content: '',
    category: '前端开发',
    tags: ['TypeScript', 'JavaScript', '前端'],
    image: 'https://picsum.photos/seed/blog6/600/400',
    date: '2023-02-28',
    readingTime: 8
  }
]

// 状态管理
const searchQuery = ref('')
const activeTag = ref('全部')
const currentPage = ref(1)
const postsPerPage = 3

// 提取所有标签
const tags = computed(() => {
  const allTags = ['全部']
  const tagSet = new Set()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag))
  })
  
  return [...allTags, ...Array.from(tagSet)]
})

// 过滤文章
const filteredPosts = computed(() => {
  let result = posts
  
  // 搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    )
  }
  
  // 标签过滤
  if (activeTag.value !== '全部') {
    result = result.filter(post => post.tags.includes(activeTag.value))
  }
  
  return result
})

// 分页
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage)
})

// 方法
function filterByTag(tag) {
  activeTag.value = tag
  currentPage.value = 1
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
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