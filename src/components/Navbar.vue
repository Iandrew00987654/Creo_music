<script setup>
import { ref } from 'vue'

const show = ref(false);
const imgCreo = 'src/assets/Creo.jpg';
</script>

<template>
  <header class="flex w-full h-20">
    <img class="rounded-full border border-slate-400 m-3" :src="imgCreo" alt="imgCreo" />
    <nav class="w-full h-full">
      <ul id="landing-header" class="hidden lg:flex  justify-start items-center h-full">
        <li><router-link to="/" class="text-white text-base mx-8">Inicio</router-link></li>
        <li><router-link to="/canciones" class="text-white text-base mx-8">Canciones</router-link></li>
        <li><router-link to="/registrarse" class="text-white text-base mx-8">Registrate</router-link></li>
      </ul>
      <div class="flex lg:hidden justify-end h-full items-center ">
        <button @click="show = !show" class="text-4xl rounded-full self-center px-3 ">☰</button>
      </div>
    </nav>
    <div id="menu-backdrop" class=" 
      absolute dark:bg-slate-800 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
      ">
      </div>
  </header>



  <transition name="slide-fade">
    <div v-if="show" class="flex-col lg:hidden border-t-2 border-stone-700 ">
      <ul>
        <li class="text-white text-base mx-5 py-1">Inicio</li>
        <li class="text-white text-base mx-5 py-1">Canciones</li>
        <li class="text-white text-base mx-5 py-1">Registrate</li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    this.setupMenu();
  },
  methods: {
    setupMenu() {
      const listItem = document.querySelectorAll("#landing-header li");
      const menuBackDrop = document.querySelector("#menu-backdrop");

      listItem.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const { left, top, width, height } = item.getBoundingClientRect();

          menuBackDrop.style.setProperty("--left", `${left}px`);
          menuBackDrop.style.setProperty("--top", `${top}px`);
          menuBackDrop.style.setProperty("--width", `${width}px`);
          menuBackDrop.style.setProperty("--height", `${height}px`);

          menuBackDrop.style.opacity = "1";
          menuBackDrop.style.visibility = "visible";
        });

        item.addEventListener("mouseleave", () => {
          menuBackDrop.style.opacity = "0";
          menuBackDrop.style.visibility = "hidden";
        });
      });
    },
  },
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>