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
            深圳大学计算机专业本科生，热爱前端技术，擅长Vue3+TypeScript，注重用户体验与性能优化。
            专注于创建美观、实用且具有创新性的数字体验。
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
            00后前端开发者，目前就读于深圳大学计算机科学与技术专业，预计2026年毕业。在校期间通过自学与项目实践掌握主流前端技术栈，包括Vue3、TypeScript、Vite、Pinia等，能独立完成响应式Web应用的设计与开发。重视代码规范与工程化，具备良好的团队协作与沟通能力。
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
import { ref, computed, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import ProjectCard from '../components/ProjectCard.vue'
import Footer from '../components/Footer.vue'
import { useProjectStore } from '../store/modules/project'

// 获取项目store
const projectStore = useProjectStore()

// 精选项目 - 从store获取前3个项目
const featuredProjects = computed(() => projectStore.getAllProjects.slice(0, 3))

// 打字机效果
const typedText = ref('')
const texts = ['一名新手前端工程师', '热爱性能优化与用户体验', '持续学习新技术']
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

onMounted(async () => {
  // 从store获取项目数据
  await projectStore.fetchProjects()
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