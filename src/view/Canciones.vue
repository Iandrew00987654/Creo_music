<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const Endless = '/Endless.jpg';
const Exosphere = '/Exosphere.jpg';
const Aura = '/Aura.jpg';
const Epilogue = '/Epilogue.jpg';

const Lost='/Lost.jpg';
const Black_ice='/Black_ice.jpg';
const Place='/Place_on_fire.jpg';
const Shine='/Shine.jpg';

const Flow='/FLow.jpg';
const Dimension='/Dimension.jpg';
const Showdown='/Showdown.jpg';
const Ahead='/Ahead_of_the_curve.jpg';

const Crazy='/Crazy.jpg';
const Evolution='/Evolution.jpg';
const Worlds='/Worlds.jpg';
const Wavelight='/Wavelight.jpg';
</script>
<template>
    <div>
        <Navbar />
    </div>

    <body class="bg-slate-800 ">
        <div class="flex  flex-col lg:flex-row w-full  lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Endless" alt="Endless" title="Endless">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=MN8xH1J-Jyg" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Exosphere" alt="Exosphere" title="Exosphere">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=LXTrXaYMgYs" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Aura" alt="Aura" title="Aura">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=tOZNh8veU_Y" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Epilogue" alt="Epilogue" title="Epilogue">
                </a>
            </div>
        </div>
        <div class="flex  flex-col lg:flex-row w-full   lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=q0ppj-J5_i4" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Lost" alt="Lost" title="Lost">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=N41ERv0lD8o" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Black_ice" alt="Black_ice" title="Black ice">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=B605goq7vL8" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Place" alt="Place" title="Place on fire">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=KUrePkNVp0s" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Shine" alt="Shine" title="Shine">
                </a>
            </div>
        </div>
        <div class="flex  flex-col lg:flex-row w-full  lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=MM87r7GjzW8" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Flow" alt="Flow" title="Flow">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=MrD05HVGVIQ" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Dimension" alt="Dimension" title="Dimension">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=51tMCy8vhSM" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Showdown" alt="Showdown" title="Showdown">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=fFeI9a-oTKU" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Ahead" alt="Ahead" title="Ahead of the curve">
                </a>
            </div>

        </div>
        <div class="flex  flex-col lg:flex-row w-full  lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=IDaP8LeYsrk" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Crazy" alt="Crazy" title="Crazy">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=95m45ozwwZw" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Evolution" alt="Evolution" title="Evolution">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=jkX7vVNUlBo" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Worlds" alt="Worlds" title="Worlds">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=Kc4lIlboH2M" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Wavelight" alt="Wavelight" title="Wavelight">
                </a>
            </div>
        </div>

    </body>
    <footer>
        <Footer />
    </footer>
</template>