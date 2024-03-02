<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Pregunta from '@/components/Pregunta.vue';
</script>
<template>
    <div>
        <Navbar />
    </div>

    <body class="dark:bg-slate-800 ">
        <div class="h-screen">
            <Pregunta />
        </div>
    </body>
    <footer>
        <Footer />
    </footer>
</template>
