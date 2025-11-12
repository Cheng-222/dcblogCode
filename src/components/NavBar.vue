<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="logo">
          <span class="logo-text">dc-blog</span>
        </router-link>
        
        <!-- 桌面导航 -->
        <div class="nav-links">
          <router-link to="/" class="nav-link" active-class="active">首页</router-link>
          <router-link to="/about" class="nav-link" active-class="active">关于</router-link>
          <router-link to="/projects" class="nav-link" active-class="active">作品</router-link>
          <router-link to="/blog" class="nav-link" active-class="active">博客</router-link>
          <router-link to="/contact" class="nav-link" active-class="active">联系</router-link>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <button class="menu-btn" @click="toggleMenu">
          <span class="menu-icon"></span>
        </button>
      </div>
    </div>
    
    <!-- 移动端导航菜单 -->
    <div class="mobile-menu" :class="{ 'mobile-menu-open': isMenuOpen }">
      <div class="mobile-menu-content">
        <router-link to="/" class="mobile-nav-link" @click="closeMenu">首页</router-link>
        <router-link to="/about" class="mobile-nav-link" @click="closeMenu">关于</router-link>
        <router-link to="/projects" class="mobile-nav-link" @click="closeMenu">作品</router-link>
        <router-link to="/blog" class="mobile-nav-link" @click="closeMenu">博客</router-link>
        <router-link to="/contact" class="mobile-nav-link" @click="closeMenu">联系</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  // 阻止背景滚动
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}

function closeMenu() {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--spacing-md) 0;
  transition: all var(--transition-normal);
  background-color: transparent;
  
  &.navbar-scrolled {
    background-color: rgba(10, 10, 10, 0.95);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: var(--spacing-sm) 0;
  }
  
  .container {
    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .logo {
        text-decoration: none;
        
        .logo-text {
          font-family: var(--font-secondary);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          position: relative;
          
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
      }
      
      .nav-links {
        display: flex;
        gap: var(--spacing-xl);
        
        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
          position: relative;
          
          &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary-color);
            transition: width var(--transition-fast);
          }
          
          &:hover {
            color: var(--primary-color);
            
            &::after {
              width: 100%;
            }
          }
          
          &.active {
            color: var(--primary-color);
            
            &::after {
              width: 100%;
            }
          }
        }
      }
      
      .menu-btn {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: var(--spacing-sm);
        z-index: 1100;
        
        .menu-icon {
          display: block;
          width: 24px;
          height: 2px;
          background-color: var(--text-primary);
          position: relative;
          transition: background-color var(--transition-fast);
          
          &::before,
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: var(--text-primary);
            transition: all var(--transition-fast);
          }
          
          &::before {
            top: -6px;
          }
          
          &::after {
            bottom: -6px;
          }
        }
        
        &:hover .menu-icon {
          background-color: var(--primary-color);
          
          &::before,
          &::after {
            background-color: var(--primary-color);
          }
        }
      }
    }
  }
}

// 移动端菜单
.mobile-menu {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: var(--bg-secondary);
  z-index: 1050;
  transition: right var(--transition-normal);
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
  
  &.mobile-menu-open {
    right: 0;
  }
  
  .mobile-menu-content {
    padding: var(--spacing-2xl) var(--spacing-xl);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    
    .mobile-nav-link {
      color: var(--text-primary);
      text-decoration: none;
      font-size: 1.25rem;
      font-weight: 600;
      padding: var(--spacing-md) 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: color var(--transition-fast);
      
      &:hover,
      &.router-link-active {
        color: var(--primary-color);
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .navbar {
    .container {
      .navbar-content {
        .nav-links {
          display: none;
        }
        
        .menu-btn {
          display: block;
        }
      }
    }
  }
}
</style>