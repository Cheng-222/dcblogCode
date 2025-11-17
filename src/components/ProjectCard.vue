<template>
  <router-link :to="{ name: 'project-detail', params: { id: project.id } }" class="project-card-link">
    <div class="project-card">
    <div class="project-image-container">
      <img :src="project.imageUrl || '/placeholder.jpg'" :alt="project.title" class="project-image" />
      <div class="project-overlay">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link">在线预览</a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link github">GitHub</a>
      </div>
    </div>
    <div class="project-info">
      <span class="project-category">{{ project.category }}</span>
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-tags" v-if="project.tags && project.tags.length > 0">
        <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
      </div>
    </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.project-card {
  background-color: var(--bg-secondary);
  border-radius: 8px;
  overflow: hidden;
  transition: all var(--transition-normal);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    
    .project-overlay {
      opacity: 1;
    }
    
    .project-image {
      transform: scale(1.05);
    }
  }
  
  .project-image-container {
    position: relative;
    overflow: hidden;
    height: 200px;
    
    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(61, 90, 254, 0.8) 0%, rgba(255, 64, 129, 0.8) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
      
      .project-link {
        color: white;
        text-decoration: none;
        font-weight: 600;
        padding: var(--spacing-md) var(--spacing-lg);
        border: 2px solid white;
        border-radius: 4px;
        transition: all var(--transition-fast);
        
        &:hover {
          background-color: white;
          color: var(--primary-color);
        }
      }
    }
  }
  
  .project-info {
    padding: var(--spacing-lg);
    
    .project-category {
      display: inline-block;
      font-size: 0.875rem;
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
      background-color: rgba(61, 90, 254, 0.1);
      padding: 4px 8px;
      border-radius: 4px;
    }
    
    .project-title {
      font-family: var(--font-secondary);
      font-size: 1.25rem;
      margin-bottom: var(--spacing-sm);
      color: var(--text-primary);
    }
    
    .project-description {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }
  }
  
  .project-tags {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .project-tag {
    background-color: var(--bg-primary);
    color: var(--text-secondary);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .project-link.github {
    background-color: #333;
    margin-left: 10px;
  }
  
  .project-link.github:hover {
    background-color: #555;
  }
}

.project-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}
</style>