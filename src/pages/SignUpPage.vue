<template>
  <q-page class="flex justify-center items-center bg-gray-100 ">
    <q-card class="my-card p-4" bordered>
      <q-card-section class="text-center">
        <h5 class="text-gray-600 text-h5 font-bold">Registrate</h5>
        <p class="text-gray-600">Registrate a continuación para crear a tu cuenta</p>
      </q-card-section>
      <q-form @submit="onRegister">
        <q-card-section>
          <q-input dense outlined type="email" v-model="email" label="Correo electronico" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Por favor escribe tu correo'
          ]" />
          <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Contraseña" lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Por favor escribe tu contraseña'
            ]" />
        </q-card-section>
        <q-card-section>
          <q-btn color="dark" type="submit" rounded size="md" label="Registrate" no-caps class="w-full rounded-md" />
        </q-card-section>
      </q-form>
      <q-card-section class="text-center q-pt-none">
        <div class="text-grey-8">¿Aún no tienes una cuenta?
          <RouterLink to="/" class="text-black font-bold">Inicia sesión</RouterLink>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Notify } from 'quasar';
import { signUp } from 'src/services/firebase';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()

const password = ref('')
const email = ref('')


const onRegister = async () => {
  try {
    await signUp(email.value, password.value)
    Notify.create({
      type: 'positive',
      message: 'Usuario registrado'
    })
    router.push({ path: '/' })
  } catch (error) {
    Notify.create({
      type: 'negative',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      message: error.message
    })
  }
}
</script>
