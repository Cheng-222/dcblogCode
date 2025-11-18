<template>
  <div class="contact-view">
    <NavBar />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title fade-in">联系我</h1>
        <p class="page-subtitle fade-in">随时与我取得联系</p>
      </div>
    </section>
    
    <!-- 联系方式 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content slide-up">
          <div class="contact-info">
            <h2 class="section-title">联系信息</h2>
            <p class="contact-description">
              如果你对我的工作感兴趣，或者有任何问题想要咨询，
              请随时通过以下方式与我联系，我会尽快回复你。
            </p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h3>邮箱</h3>
                  <a href="mailto:2518173287@qq.com" class="contact-link">2518173287@qq.com</a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h3>电话</h3>
                  <a href="tel:18717289894" class="contact-link">18717289894</a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h3>地址</h3>
                  <p class="contact-location">深圳大学</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 10c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5S9.33 9 10.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h3>QQ</h3>
                  <p class="contact-location">2518173287</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.5 14.5L11 12l2.5 2.5L16 12l2.5 2.5V4h-11v10.5z M6 2v18l2-2h10l2 2V2H6z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h3>微信</h3>
                  <p class="contact-location">Doec-0222</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://github.com/Cheng-222" class="social-link" aria-label="GitHub" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
                </svg>
              </a>
              
              <div class="social-link" aria-label="QQ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 10c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5S9.33 9 10.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
                <span class="tooltip">2518173287</span>
              </div>
              
              <div class="social-link" aria-label="微信">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 14.5L11 12l2.5 2.5L16 12l2.5 2.5V4h-11v10.5z M6 2v18l2-2h10l2 2V2H6z"/>
                </svg>
                <span class="tooltip">Doec-0222</span>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2 class="section-title">发送消息</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  class="form-input" 
                  placeholder="请输入您的姓名"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="email">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  class="form-input" 
                  placeholder="请输入您的邮箱"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="subject">主题</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject" 
                  class="form-input" 
                  placeholder="请输入消息主题"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="message">消息内容</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  class="form-textarea" 
                  placeholder="请输入您的消息内容"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? '发送中...' : '发送消息' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 地图区域 -->
    <section class="map-section">
      <div class="container">
        <div class="map-container slide-up">
          <!-- 这里可以嵌入真实的地图 -->
          <div class="map-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p>地图位置</p>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

// 表单数据
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// 处理表单提交
function handleSubmit() {
  isSubmitting.value = true
  
  // 模拟API请求
  setTimeout(() => {
    console.log('表单提交:', formData.value)
    // 重置表单
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    isSubmitting.value = false
    
    // 可以在这里添加成功提示
    alert('消息发送成功！')
  }, 1500)
}
</script>

<style lang="scss" scoped>
.contact-view {
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

.contact-section {
  padding: var(--spacing-2xl) 0;
  
  .container {
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-2xl);
      
      .contact-info {
        .section-title {
          font-family: var(--font-secondary);
          font-size: 2.5rem;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }
        
        .contact-description {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xl);
          line-height: 1.8;
        }
        
        .contact-details {
          margin-bottom: var(--spacing-xl);
          
          .contact-item {
            display: flex;
            align-items: flex-start;
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-lg);
            
            .contact-icon {
              width: 40px;
              height: 40px;
              background-color: var(--bg-secondary);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--primary-color);
              flex-shrink: 0;
            }
            
            .contact-text {
              
              h3 {
                font-size: 1.1rem;
                margin-bottom: var(--spacing-xs);
                color: var(--text-primary);
              }
              
              .contact-link,
              .contact-location {
                color: var(--text-secondary);
                text-decoration: none;
                transition: color var(--transition-fast);
                
                &:hover {
                  color: var(--primary-color);
                }
              }
            }
          }
        }
        
        .social-links {
          display: flex;
          gap: var(--spacing-md);
          
          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--bg-secondary);
            color: var(--text-secondary);
            transition: all var(--transition-fast);
            position: relative;
            cursor: pointer;
            
            &:hover {
              background-color: var(--primary-color);
              color: white;
              transform: translateY(-3px);
            }
            
            .tooltip {
              position: absolute;
              bottom: calc(100% + 10px);
              left: 50%;
              transform: translateX(-50%);
              background-color: var(--bg-primary);
              color: var(--text-primary);
              padding: 8px 12px;
              border-radius: 6px;
              font-size: 0.875rem;
              font-weight: 500;
              white-space: nowrap;
              opacity: 0;
              visibility: hidden;
              transition: all var(--transition-fast);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              border: 1px solid rgba(255, 255, 255, 0.1);
              z-index: 1000;
              
              &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border: 6px solid transparent;
                border-top-color: var(--bg-primary);
              }
            }
            
            &:hover .tooltip {
              opacity: 1;
              visibility: visible;
              bottom: calc(100% + 15px);
            }
          }
        }
      }
      
      .contact-form {
        .section-title {
          font-family: var(--font-secondary);
          font-size: 2.5rem;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }
        
        form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          
          .form-group {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
            
            label {
              font-weight: 600;
              color: var(--text-primary);
            }
            
            .form-input,
            .form-textarea {
              padding: var(--spacing-md);
              background-color: var(--bg-secondary);
              border: 2px solid rgba(255, 255, 255, 0.1);
              border-radius: 4px;
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
            
            .form-textarea {
              resize: vertical;
              min-height: 120px;
            }
          }
          
          .btn {
            padding: var(--spacing-md) var(--spacing-xl);
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all var(--transition-fast);
            align-self: flex-start;
            
            &:hover:not(:disabled) {
              background-color: #2948CC;
              transform: translateY(-2px);
            }
            
            &:disabled {
              opacity: 0.6;
              cursor: not-allowed;
              transform: none;
            }
          }
        }
      }
    }
  }
}

.map-section {
  padding: var(--spacing-2xl) 0;
  
  .container {
    .map-container {
      height: 400px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      
      .map-placeholder {
        width: 100%;
        height: 100%;
        background-color: var(--bg-secondary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        
        svg {
          margin-bottom: var(--spacing-md);
          opacity: 0.3;
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
  
  .contact-section {
    .container {
      .contact-content {
        grid-template-columns: 1fr;
        
        .contact-info,
        .contact-form {
          .section-title {
            font-size: 2rem;
          }
        }
        
        .contact-form {
          .btn {
            align-self: stretch;
          }
        }
      }
    }
  }
  
  .map-section {
    .container {
      .map-container {
        height: 300px;
      }
    }
  }
}
</style>