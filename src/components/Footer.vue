<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <span class="logo-text">Portfolio</span>
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
              <li><a href="mailto:contact@example.com" class="footer-link">contact@example.com</a></li>
              <li><a href="tel:+8612345678901" class="footer-link">+86 123 4567 8901</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-social">
          <h4 class="footer-title">关注我</h4>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Dribbble">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22.8c-.8 0-1.6-.1-2.3-.2-.8-.2-1.5-.4-2.1-.8-.6-.4-1.1-.9-1.5-1.5-.4-.6-.7-1.3-1-2.1-.1-.7-.2-1.5-.2-2.4s.1-1.6.2-2.3c.2-.8.4-1.5.8-2.1.4-.6.9-1.1 1.5-1.5.6-.4 1.3-.7 2.1-1 .7-.1 1.6-.2 2.4-.2.8 0 1.6.1 2.3.2.8.2 1.5.4 2.1.8.6.4 1.1.9 1.5 1.5.4.6.7 1.3 1 2.1.1.7.2 1.5.2 2.4s-.1 1.6-.2 2.3c-.2.8-.4 1.5-.8 2.1-.4.6-.9 1.1-1.5 1.5-.6.4-1.3.7-2.1 1-.7.1-1.6.2-2.4.2zm-3.4-9.3c-.4 0-.7-.2-.9-.6s-.3-.7-.1-1c1.1-2 3.1-3.2 5.3-3.2s4.2 1.2 5.3 3.2c.2.3.2.6.1 1s-.3.6-.6.9c-1.1 2-3.1 3.2-5.3 3.2s-4.2-1.2-5.3-3.2c-.2-.3-.4-.6-.5-1z"/>
              </svg>
            </a>
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
            
            &:hover {
              background-color: var(--primary-color);
              color: white;
              transform: translateY(-3px);
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