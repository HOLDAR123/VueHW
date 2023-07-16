<template>
  <div class="animated-element">
    <button @click="toggleAnimation">Анимировать</button> <br>
    <transition name="fade">
      <div v-if="isAnimated" class="content">
        <h1>Hello</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isAnimated: false,
    };
  },
  methods: {
    toggleAnimation() {
      this.isAnimated = !this.isAnimated;
    },
  },
};
</script>

<style>
.animated-element {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.content {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
}
</style>
