<template>
  <q-page class="flex justify-center items-center bg-gray-100">
    <q-card class="my-card p-4" bordered>
      <q-form @submit="onLogin">
        <q-card-section class="text-center">
          <h5 class="text-gray-600 text-h5 font-bold">Inicia sesión</h5>
          <p class="text-gray-600">
            Inicia sesión a continuación para acceder a tu cuenta
          </p>
        </q-card-section>
        <q-card-section>
          <q-input
            dense
            outlined
            v-model="email"
            type="email"
            label="Correo electronico"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Por favor escribe tu correo',
            ]"
          />
          <q-input
            dense
            outlined
            class="q-mt-md"
            v-model="password"
            type="password"
            label="Contraseña"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Por favor escribe tu contraseña',
            ]"
          />
        </q-card-section>
        <q-card-section>
          <q-btn
            color="dark"
            type="submit"
            rounded
            size="md"
            label="Inicia sesión"
            no-caps
            class="w-full rounded-md"
          />
        </q-card-section>
      </q-form>
      <q-card-section class="text-center q-pt-none">
        <div class="text-grey-8">
          ¿Aún no tienes una cuenta?
          <RouterLink to="/signUp" class="text-black font-bold"
            >Registrate</RouterLink
          >
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Notify } from 'quasar';
import { signIn } from 'src/services/firebase';
import { setCookie } from 'src/utils/cookies';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
const router = useRouter();
const store = useUserStore();

const password = ref('');
const email = ref('');

const onLogin = async () => {
  try {
    const res = await signIn(email.value, password.value);
    console.log(res);
    const { uid, emailVerified } = res;
    setCookie('accessToken', res.accessToken);
    store.setUser({ email: res.email, uid, emailVerified });
    router.push({ path: '/folder' });
  } catch (error) {
    Notify.create({
      type: 'negative',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      message: error.message,
    });
  }
};
</script>
