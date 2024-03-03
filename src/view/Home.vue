<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
const main = '/Red-haze.jpeg';
</script>
<template>
    <div>
        <Navbar />
    </div>

    <body class="dark:bg-slate-800 ">
        <div class="flex flex-col lg:flex-row w-full p-10 ">
            <img class="w-full lg:w-1/2 shadow-md shadow-slate-500 rounded-md" :src="main" alt="main">
            <div class="w-full lg:w-1/2 pt-10 lg:px-10 ">
                <h1 class="text-3xl text-white">¿Quien es Creo?</h1><br>
                <p class="animate-fade-down  animate-duration-[900ms] animate-ease-out text-lg ">Creo es un productor de música
                    electrónica independiente de Viena, Austria. Se especializa en crear música que se encuentra a
                    medio camino entre el EDM y otros géneros.<br><br> Su enfoque es desarrollar canciones que
                    tengan un sonido inusual pero que aún sean agradables de escuchar. <br> Puedes algunas de sus canciones
                    oficialmente lanzadas en esta página.</p>
            </div>
        </div>

    </body>
    <footer>
        <Footer />
    </footer>
</template>
