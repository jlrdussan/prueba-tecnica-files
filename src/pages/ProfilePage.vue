<template>
  <q-page class="flex justify-center items-center bg-gray-100">
    <q-card class="my-card p-4" bordered>
      <q-card-section class="text-center q-pt-md">
        <h4>Perfil</h4>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <p class=" q-pt-md">Id: {{ store.user?.uid }}</p>
        <p class=" q-pt-md">Email: {{ store.user?.email }}</p>
        <p class=" q-pt-md">Email verificado: {{ store.user?.email ? 'si' : 'no' }}</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/user-store';
const store = useUserStore()




</script>
