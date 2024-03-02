<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const Endless = 'src/assets/Endless.jpg';
const Exosphere = 'src/assets/Exosphere.jpg';
const Aura = 'src/assets/Aura.jpg';
const Epilogue = 'src/assets/Epilogue.jpg';

const Lost='src/assets/Lost.jpg';
const Black_ice='src/assets/Black_ice.jpg';
const Place='src/assets/Place_on_fire.jpg';
const Shine='src/assets/Shine.jpg';

const Flow='src/assets/FLow.jpg';
const Dimension='src/assets/Dimension.jpg';
const Showdown='src/assets/Showdown.jpg';
const Ahead='src/assets/Ahead_of_the_curve.jpg';

const Crazy='src/assets/Crazy.jpg';
const Evolution='src/assets/Evolution.jpg';
const Worlds='src/assets/Worlds.jpg';
const Wavelight='src/assets/Wavelight.jpg';
</script>
<template>
    <div>
        <Navbar />
    </div>

    <body class="dark:bg-slate-800 ">
        <div class="flex  flex-col lg:flex-row w-full  lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Endless" alt="Endless" title="Endless">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Exosphere" alt="Exosphere" title="Exosphere">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Aura" alt="Aura" title="Aura">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Epilogue" alt="Epilogue" title="Epilogue">
                </a>
            </div>
        </div>
        <div class="flex  flex-col lg:flex-row w-full   lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Lost" alt="Lost" title="Lost">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Black_ice" alt="Black_ice" title="Black ice">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Place" alt="Place" title="Place on fire">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Shine" alt="Shine" title="Shine">
                </a>
            </div>
        </div>
        <div class="flex  flex-col lg:flex-row w-full  lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Flow" alt="Flow" title="Flow">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Dimension" alt="Dimension" title="Dimension">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Showdown" alt="Showdown" title="Showdown">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Ahead" alt="Ahead" title="Ahead of the curve">
                </a>
            </div>

        </div>
        <div class="flex  flex-col lg:flex-row w-full  lg:pt-5 items-center lg:justify-around ">

            <div class="w-72 shadow-md shadow-slate-500 mb-10 mt-10 lg:mb-5  lg:ml-5 lg:mr-0 lg:mt-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Crazy" alt="Crazy" title="Crazy">
                </a>

            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Evolution" alt="Evolution" title="Evolution">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:ml-5 lg:mr-0 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
                    <img class="rounded-md w-full h-full object-cover hover:animate-jump hover:animate-duration-[1000ms] hover:animate-ease-in-out hover:animate-delay-70"
                        :src="Worlds" alt="Worlds" title="Worlds">
                </a>
            </div>
            <div class="w-72 shadow-md shadow-slate-500 mb-10 lg:mb-5  lg:mx-5 hover:shadow-none">
                <a href="https://www.youtube.com/watch?v=nTxXy0cHdVI" target="_blank" class="block w-full h-full ">
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