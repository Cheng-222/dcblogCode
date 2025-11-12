<template>
  <div class="home-view">
    <!-- 导航栏 -->
    <NavBar />
    
    <!-- 英雄区 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content fade-in">
          <h1 class="hero-title">
            你好，我是<span class="highlight">杜程</span><br>
            <span class="typing-text">{{ typedText }}</span>
            <span class="cursor">|</span>
          </h1>
          <p class="hero-description">
            专注于创建美观、实用且具有创新性的数字体验。
            结合技术与艺术，打造令人难忘的用户界面。
          </p>
          <div class="hero-cta">
            <router-link to="/projects" class="btn btn-primary">
              查看作品
            </router-link>
            <router-link to="/contact" class="btn btn-secondary">
              联系我
            </router-link>
          </div>
        </div>
      </div>
      <!-- 动态背景 -->
      <div class="particle-bg"></div>
    </section>
    
    <!-- 关于简介 -->
    <section class="about-preview">
      <div class="container">
        <div class="about-content slide-up">
          <h2 class="section-title">关于我</h2>
          <p class="about-text">
            我是一名充满热情充满探索欲的新手前端开发者
          </p>
          <router-link to="/about" class="btn btn-outline">了解更多</router-link>
        </div>
      </div>
    </section>
    
    <!-- 精选项目 -->
    <section class="featured-projects">
      <div class="container">
        <h2 class="section-title slide-up">精选项目</h2>
        <div class="projects-grid">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project"
          />
        </div>
        <div class="view-all slide-up">
          <router-link to="/projects" class="btn btn-outline">查看全部</router-link>
        </div>
      </div>
    </section>
    
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import ProjectCard from '../components/ProjectCard.vue'
import Footer from '../components/Footer.vue'

// 打字机效果
const typedText = ref('')
const texts = ['前端开发者', '探索新的技术']
const typingSpeed = 150
const deletingSpeed = 100
const delayBetweenTexts = 2000

let textIndex = 0
let charIndex = 0
let isDeleting = false

function type() {
  const currentText = texts[textIndex]
  
  if (isDeleting) {
    typedText.value = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    typedText.value = currentText.substring(0, charIndex + 1)
    charIndex++
  }
  
  let typeSpeed = typingSpeed
  
  if (isDeleting) {
    typeSpeed = deletingSpeed
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true
    setTimeout(type, delayBetweenTexts)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    setTimeout(type, 500)
  } else {
    setTimeout(type, typeSpeed)
  }
}

// 精选项目数据
const featuredProjects = [
  {
    id: 1,
    title: '金融科技平台',
    description: '现代化金融科技平台界面设计与开发',
    category: '网页应用',
    image: 'https://picsum.photos/seed/project1/600/400'
  },
  {
    id: 2,
    title: '电子商务应用',
    description: '响应式电子商务平台，提供流畅购物体验',
    category: '移动应用',
    image: 'https://picsum.photos/seed/project2/600/400'
  },
  {
    id: 3,
    title: '数据可视化仪表板',
    description: '交互式数据可视化仪表板，直观展示复杂数据',
    category: '网页应用',
    image: 'https://picsum.photos/seed/project3/600/400'
  }
]

onMounted(() => {
  type()
  
  // 添加滚动动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = '0.2s'
        entry.target.classList.add('slide-up')
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.projects-grid > *').forEach(item => {
    observer.observe(item)
  })
})
</script>

<style lang="scss" scoped>
.home-view {
  position: relative;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: var(--spacing-2xl) 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(61, 90, 254, 0.1) 0%, rgba(255, 64, 129, 0.1) 100%);
    z-index: 0;
  }
  
  .container {
    position: relative;
    z-index: 1;
  }
  
  .hero-content {
    max-width: 800px;
    
    .hero-title {
      font-family: var(--font-secondary);
      font-size: 4.5rem;
      line-height: 1.1;
      margin-bottom: var(--spacing-lg);
      font-weight: 700;
      
      .highlight {
        color: var(--primary-color);
      }
      
      .typing-text {
        color: var(--secondary-color);
      }
      
      .cursor {
        animation: blink 1s infinite;
      }
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: var(--spacing-xl);
      max-width: 600px;
    }
    
    .hero-cta {
      display: flex;
      gap: var(--spacing-lg);
      
      .btn {
        padding: var(--spacing-md) var(--spacing-xl);
        border-radius: 4px;
        font-weight: 600;
        text-decoration: none;
        transition: all var(--transition-fast);
        
        &.btn-primary {
          background-color: var(--primary-color);
          color: white;
          border: none;
          
          &:hover {
            background-color: #2948CC;
            transform: translateY(-2px);
          }
        }
        
        &.btn-secondary {
          background-color: var(--secondary-color);
          color: white;
          border: none;
          
          &:hover {
            background-color: #E0336A;
            transform: translateY(-2px);
          }
        }
      }
    }
  }
}

.particle-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  // 这里可以添加粒子效果的CSS
  background-image: radial-gradient(circle at 10% 20%, rgba(61, 90, 254, 0.1) 0%, transparent 20%),
                    radial-gradient(circle at 90% 80%, rgba(255, 64, 129, 0.1) 0%, transparent 20%),
                    radial-gradient(circle at 50% 50%, rgba(61, 90, 254, 0.05) 0%, transparent 30%);
}

.about-preview {
  background-color: var(--bg-secondary);
  padding: var(--spacing-2xl) 0;
  
  .about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    .section-title {
      font-family: var(--font-secondary);
      font-size: 2.5rem;
      margin-bottom: var(--spacing-lg);
      color: var(--text-primary);
    }
    
    .about-text {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: var(--spacing-xl);
    }
    
    .btn {
      padding: var(--spacing-md) var(--spacing-xl);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      border-radius: 4px;
      font-weight: 600;
      text-decoration: none;
      transition: all var(--transition-fast);
      
      &:hover {
        background-color: var(--primary-color);
        color: white;
        transform: translateY(-2px);
      }
    }
  }
}

.featured-projects {
  padding: var(--spacing-2xl) 0;
  
  .container {
    .section-title {
      font-family: var(--font-secondary);
      font-size: 2.5rem;
      margin-bottom: var(--spacing-2xl);
      text-align: center;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xl);
    }
    
    .view-all {
      text-align: center;
      
      .btn {
        padding: var(--spacing-md) var(--spacing-xl);
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        border-radius: 4px;
        font-weight: 600;
        text-decoration: none;
        transition: all var(--transition-fast);
        
        &:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }
      }
    }
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

// 响应式设计
@media (max-width: 768px) {
  .hero-section {
    .hero-content {
      .hero-title {
        font-size: 3rem;
      }
      
      .hero-description {
        font-size: 1rem;
      }
      
      .hero-cta {
        flex-direction: column;
      }
    }
  }
  
  .section-title {
    font-size: 2rem !important;
  }
}
</style>