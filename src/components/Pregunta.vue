<script setup>
import { ref } from 'vue'

const perfil = '/perfil.jpeg';

const usuario = ref('')
</script>

<template>
    <div class="flex flex-col lg:flex-row  w-full h-full ">
        <div class="w-full lg:w-1/2  h-full animate-fade-right flex-col items-center justify-center">
            <div class="flex items-center justify-center  py-10 flex-col">
                <p class="text-2xl text-white pb-2">Quieres ser parte de este club de fans de Creo?</p>
                <p class="">Registrate para recibir notificaciones de nuevos lanzamientos</p>
            </div>
            <div class="flex flex-wrap justify-center">
                <form @submit.prevent="guardarDatos" class=" bg-neutral-900 p-5 rounded-md animate-fade-down">
                    <p>Ingresa tu usuario:</p>
                    <input v-model="usuario" placeholder="" class="text-neutral-900" /><br><br>
                    <p>Ingresa tu edad:</p>
                    <input v-model.number="edad" type="number" min="13" max="105" class="text-neutral-900 w-full" />
                    <br>
                    <p v-if="edadValida">Edad válida</p>
                    <p v-else>Edad no válida</p>
                    <br>
                    <p>Ingresa tu correo electrónico:</p>
                    <input v-model="correo" type="email" class="text-neutral-900" />
                    <p v-if="correoValido">Correo válido</p>
                    <p v-else>Correo no válido</p>
                    <br>
                    <p>Ingresa tu teléfono:</p>
                    <input v-model="telefono" type="number" class="text-neutral-900" />
                    <p v-if="telefonoValido">Teléfono válido</p>
                    <p v-else>Teléfono no válido</p>
                    <br>

                    <button type="submit" :disabled="!formValido"
                        class="w-full my-2 bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white cursor-pointer">Guardar</button>
                </form>
            </div>
        </div>
        <div class="w-full lg:w-1/2  lg:h-full h-96 bg-neutral-800 border-l-8  border-dotted border-neutral-900">
            <div class="flex justify-center pt-5">
                <img :src="perfil" alt="perfil" class="rounded-full w-32">
            </div>
            <div>
                <p>Hola! {{ usuario }}</p>
                <p>Usuario: {{ usuario }}</p>
                <p>Edad:{{ edad2 }}</p>
                <p>Correo:{{ correo2 }}</p>
                <p>Telefono:{{ telefono2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            edad: null,
            correo: '',
            telefono: '',
            edad2: 0,
            correo2: '',
            telefono2: '',
        };
    },
    computed: {
        edadValida() {
            return this.edad !== null && this.edad >= 13 && this.edad <= 105;
        },
        correoValido() {
            return this.correo.includes('@');
        },
        telefonoValido() {
            let telefono_string = String(this.telefono)
            return telefono_string.length >= 10;
        },
        formValido() {
            return this.edadValida && this.correoValido && this.telefonoValido;
        },
    },
    methods: {
        guardarDatos() {
            if (this.formValido) {
                alert("Te has registrado correctamente");
                console.log("Datos guardados:");
                console.log("Edad: " + this.edad);
                console.log("Correo: " + this.correo);
                console.log("Teléfono: " + this.telefono);

                this.edad2 = this.edad;
                this.correo2 = this.correo;
                this.telefono2 = this.telefono;

                this.edad = null;
                this.correo = '';
                this.telefono = '';
            }
        },
    },
};
</script>
