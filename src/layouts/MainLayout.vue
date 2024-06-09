<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <RouterLink class="flex items-center gap-2" to="/">
            <q-img width="30px" src="../assets/folder_open.png" />
            Documentos App
          </RouterLink>
        </q-toolbar-title>
        <q-btn-dropdown flat class="bg-transparent">
          <template v-slot:label>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </template>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <RouterLink to="/profile">Ver perfil</RouterLink>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="signOff">
              <q-item-section>
                <q-item-label>Cerrar sesion</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center">Copyright © {{ date }} all right reserved</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { deleteCookie } from 'src/utils/cookies';
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
const store = useUserStore()
const router = useRouter();

defineOptions({
  name: 'MainLayout',
});

const signOff = () => {
  deleteCookie('accessToken');
  store.clearUser()
  router.push({ path: '/' });
};

const date = ref(new Date().getFullYear())
</script>
