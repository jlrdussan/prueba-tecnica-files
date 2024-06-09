<template>
    <div class="q-pa-md w-full">
        <form-component :folder-id="folderId" :close="close" :is-open="isOpen" />
        <q-list bordered>
            <q-expansion-item group="somegroup" icon="folder" :label="folder.name" default-opened
                header-class="text-primary" v-for="folder in folderStore.folders" :key="folder.id" :folder="folder">
                <q-card class="py-2">
                    <div class="row justify-between px-10 items-center">
                        <h6 class="text-h6">Documentos</h6>
                        <q-btn dense="" label="Agregar documento" color="primary" @click="add(folder.id)" />
                    </div>
                    <q-card-section>
                        <grid-component :folder-id="folder.id" :files-data="folder.files" />
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFolderStore } from 'src/stores/folder-store';
import GridComponent from 'components/GridComponent.vue';
import FormComponent from 'components/FormComponent.vue';


const isOpen = ref(false)
const folderId = ref('')

const folderStore = useFolderStore();
const add = (id) => {
    folderId.value = id;
    isOpen.value = true
}
const close = () => { isOpen.value = false }

</script>


