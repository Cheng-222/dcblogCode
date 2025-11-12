<template>
  <div class="about-view">
    <NavBar />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title fade-in">关于我</h1>
        <p class="page-subtitle fade-in">了解我的故事和专业背景</p>
      </div>
    </section>
    
    <!-- 个人简介 -->
    <section class="about-section">
      <div class="container">
        <div class="about-content slide-up">
          <div class="about-image">
            <img src="https://picsum.photos/seed/avatar/400/400" alt="个人照片" />
          </div>
          <div class="about-text">
            <h2 class="section-title">你好，我是<span class="highlight">设计师</span></h2>
            <p class="about-description">
              我是一名充满热情的前端开发者和UI/UX设计师，拥有超过5年的行业经验。
              我热衷于将复杂的问题转化为简单、优雅的解决方案，始终追求卓越的用户体验。
            </p>
            <p class="about-description">
              我的设计理念是"形式服从功能"，但同时也注重美学细节。我相信优秀的设计
              应该既美观又实用，能够在第一时间吸引用户，并提供流畅直观的交互体验。
            </p>
            <p class="about-description">
              在过去的项目中，我积累了丰富的前端开发经验，熟练掌握现代Web技术栈，
              包括HTML5、CSS3、JavaScript、Vue.js、React等。我善于与团队协作，
              能够高效地将设计稿转化为高质量的代码。
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 技能展示 -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title slide-up">专业技能</h2>
        <div class="skills-grid">
          <div class="skill-category slide-up">
            <h3 class="category-title">前端开发</h3>
            <div class="skill-bar" v-for="skill in frontendSkills" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-progress">
                <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
          
          <div class="skill-category slide-up">
            <h3 class="category-title">设计技能</h3>
            <div class="skill-bar" v-for="skill in designSkills" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-progress">
                <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 教育经历 -->
    <section class="education-section">
      <div class="container">
        <h2 class="section-title slide-up">教育经历</h2>
        <div class="timeline">
          <div class="timeline-item slide-up" v-for="(edu, index) in education" :key="index">
            <div class="timeline-icon"></div>
            <div class="timeline-content">
              <span class="timeline-date">{{ edu.date }}</span>
              <h3 class="timeline-title">{{ edu.degree }}</h3>
              <p class="timeline-subtitle">{{ edu.school }}</p>
              <p class="timeline-description">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 数据统计 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item slide-up" v-for="stat in stats" :key="stat.title">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-title">{{ stat.title }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

// 技能数据
const frontendSkills = [
  { name: 'HTML5/CSS3', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'React', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Webpack/Vite', level: 80 }
]

const designSkills = [
  { name: 'UI设计', level: 85 },
  { name: 'UX设计', level: 80 },
  { name: 'Figma', level: 90 },
  { name: 'Adobe XD', level: 85 },
  { name: '响应式设计', level: 90 },
  { name: '动效设计', level: 75 }
]

// 教育经历
const education = [
  {
    date: '2016 - 2020',
    degree: '计算机科学与技术 学士学位',
    school: '北京大学',
    description: '主修计算机科学，辅修设计学，GPA 3.8/4.0，获得优秀毕业生称号。'
  },
  {
    date: '2020 - 2022',
    degree: '交互设计 硕士学位',
    school: '清华大学',
    description: '专注于用户体验设计和前端开发，发表2篇学术论文，获得优秀研究生奖学金。'
  }
]

// 统计数据
const stats = [
  { number: '5+', title: '年工作经验' },
  { number: '50+', title: '完成项目' },
  { number: '25+', title: '满意客户' },
  { number: '10+', title: '行业奖项' }
]

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
  
  document.querySelectorAll('.skill-category, .timeline-item, .stat-item').forEach(item => {
    observer.observe(item)
  })
})
</script>

<style lang="scss" scoped>
.about-view {
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

.about-section {
  padding: var(--spacing-2xl) 0;
  
  .container {
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-2xl);
      align-items: center;
      
      .about-image {
        position: relative;
        
        img {
          width: 100%;
          max-width: 400px;
          border-radius: 8px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          transition: transform var(--transition-normal);
          
          &:hover {
            transform: scale(1.02);
          }
        }
        
        &::after {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: -20px;
          bottom: -20px;
          border: 2px solid var(--primary-color);
          border-radius: 8px;
          z-index: -1;
        }
      }
      
      .about-text {
        .section-title {
          font-family: var(--font-secondary);
          font-size: 2.5rem;
          margin-bottom: var(--spacing-lg);
          
          .highlight {
            color: var(--primary-color);
          }
        }
        
        .about-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
          line-height: 1.8;
        }
      }
    }
  }
}

.skills-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--bg-secondary);
  
  .container {
    .section-title {
      font-family: var(--font-secondary);
      font-size: 2.5rem;
      margin-bottom: var(--spacing-2xl);
      text-align: center;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
      
      .skill-category {
        .category-title {
          font-family: var(--font-secondary);
          font-size: 1.5rem;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }
        
        .skill-bar {
          margin-bottom: var(--spacing-md);
          
          .skill-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: var(--spacing-xs);
            
            .skill-name {
              font-weight: 600;
              color: var(--text-primary);
            }
            
            .skill-level {
              color: var(--primary-color);
              font-weight: 600;
            }
          }
          
          .skill-progress {
            height: 8px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
            
            .skill-fill {
              height: 100%;
              background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
              border-radius: 4px;
              transition: width 1s ease;
            }
          }
        }
      }
    }
  }
}

.education-section {
  padding: var(--spacing-2xl) 0;
  
  .container {
    .section-title {
      font-family: var(--font-secondary);
      font-size: 2.5rem;
      margin-bottom: var(--spacing-2xl);
      text-align: center;
    }
    
    .timeline {
      position: relative;
      padding-left: var(--spacing-xl);
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
      }
      
      .timeline-item {
        position: relative;
        margin-bottom: var(--spacing-2xl);
        
        .timeline-icon {
          position: absolute;
          top: 0;
          left: -40px;
          width: 16px;
          height: 16px;
          background-color: var(--primary-color);
          border-radius: 50%;
          border: 4px solid var(--bg-primary);
        }
        
        .timeline-content {
          background-color: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          
          .timeline-date {
            display: inline-block;
            font-size: 0.875rem;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: var(--spacing-sm);
            background-color: rgba(61, 90, 254, 0.1);
            padding: 4px 8px;
            border-radius: 4px;
          }
          
          .timeline-title {
            font-family: var(--font-secondary);
            font-size: 1.25rem;
            margin-bottom: var(--spacing-xs);
            color: var(--text-primary);
          }
          
          .timeline-subtitle {
            font-size: 1rem;
            color: var(--text-secondary);
            margin-bottom: var(--spacing-md);
          }
          
          .timeline-description {
            color: var(--text-secondary);
            line-height: 1.6;
          }
        }
      }
    }
  }
}

.stats-section {
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(135deg, rgba(61, 90, 254, 0.1) 0%, rgba(255, 64, 129, 0.1) 100%);
  
  .container {
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-xl);
      
      .stat-item {
        text-align: center;
        
        .stat-number {
          font-family: var(--font-secondary);
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: var(--spacing-sm);
        }
        
        .stat-title {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }
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
  
  .about-section {
    .container {
      .about-content {
        grid-template-columns: 1fr;
        text-align: center;
        
        .about-image {
          margin-bottom: var(--spacing-xl);
          
          img {
            max-width: 300px;
          }
        }
        
        .about-text {
          .section-title {
            font-size: 2rem;
          }
        }
      }
    }
  }
  
  .section-title {
    font-size: 2rem !important;
  }
  
  .stats-section {
    .container {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>