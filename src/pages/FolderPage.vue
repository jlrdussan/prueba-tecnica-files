<template>
    <q-page class="p-10 bg-gray-100">
        <q-input class="mb-6" v-model="folderName" placeholder="Nombre de la carpeta" l />
        <q-btn @click="createFolder" color="primary">Crear Carpeta</q-btn>
        <Folder />
    </q-page>
</template>

<script setup>
import { useFolderStore } from 'src/stores/folder-store';
import Folder from 'components/FolderComponent.vue';
import { ref } from 'vue';

const folderStore = useFolderStore();
const folderName = ref('');

const createFolder = () => {
    if (folderName.value) {
        folderStore.createFolder(folderName.value, Date.now().toString());
        folderName.value = '';
    }
};
</script>