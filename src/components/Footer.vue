<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <span class="logo-text">dc-blog</span>
          <p class="logo-description">
            专注于创建美观、实用且具有创新性的数字体验。
          </p>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h4 class="footer-title">快速链接</h4>
            <ul class="link-list">
              <li><router-link to="/" class="footer-link">首页</router-link></li>
              <li><router-link to="/about" class="footer-link">关于</router-link></li>
              <li><router-link to="/projects" class="footer-link">作品</router-link></li>
              <li><router-link to="/blog" class="footer-link">博客</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-title">联系方式</h4>
            <ul class="link-list">
              <li><i class="footer-link">2518173287@qq.com</i></li>
              <li><i class="footer-link">+86 187 1728 9894</i></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-social">
          <h4 class="footer-title">关注我</h4>
          <div class="social-links">
            <a href="https://github.com/Cheng-222" class="social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
              </svg>
            </a>
            <div class="social-link qq-tooltip" aria-label="QQ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-3 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 1.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm2 0c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm-1 3.5c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span class="tooltip">2518173287</span>
            </div>
            <div class="social-link wechat-tooltip" aria-label="WeChat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .652-.52 1.181-1.162 1.181-.642 0-1.162-.529-1.162-1.18 0-.652.52-1.181 1.162-1.181zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .652-.52 1.181-1.162 1.181-.642 0-1.162-.529-1.162-1.18 0-.652.52-1.181 1.162-1.181zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982 0 .542-.434.982-.969.982s-.969-.44-.969-.982c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982 0 .542-.434.982-.969.982s-.969-.44-.969-.982c0-.542.434-.982.969-.982z"/>
              </svg>
              <span class="tooltip">Doec-0222</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ new Date().getFullYear() }} 个人作品集. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer组件
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-secondary);
  padding: var(--spacing-2xl) 0;
  
  .container {
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-2xl);
      
      .footer-logo {
        .logo-text {
          font-family: var(--font-secondary);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          position: relative;
          display: inline-block;
          margin-bottom: var(--spacing-md);
          
          &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            right: -8px;
            width: 8px;
            height: 8px;
            background-color: var(--primary-color);
            border-radius: 50%;
          }
        }
        
        .logo-description {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }
      }
      
      .footer-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: var(--spacing-xl);
        
        .footer-column {
          .footer-title {
            font-family: var(--font-secondary);
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: var(--spacing-lg);
            color: var(--text-primary);
            position: relative;
            padding-bottom: var(--spacing-sm);
            
            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 30px;
              height: 2px;
              background-color: var(--primary-color);
            }
          }
          
          .link-list {
            list-style: none;
            padding: 0;
            margin: 0;
            
            li {
              margin-bottom: var(--spacing-md);
              
              .footer-link {
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
      }
      
      .footer-social {
        .footer-title {
          font-family: var(--font-secondary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
          position: relative;
          padding-bottom: var(--spacing-sm);
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 30px;
            height: 2px;
            background-color: var(--primary-color);
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
            background-color: rgba(255, 255, 255, 0.1);
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
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: var(--spacing-xl);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      
      .copyright {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-xl) 0;
    
    .container {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
        
        .footer-links {
          .footer-column {
            .footer-title {
              &::after {
                left: 50%;
                transform: translateX(-50%);
              }
            }
          }
        }
        
        .footer-social {
          .footer-title {
            &::after {
              left: 50%;
              transform: translateX(-50%);
            }
          }
          
          .social-links {
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>