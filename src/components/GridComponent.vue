<template>
  <div class="w-full px-10">
    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      <form-component :folder-id="folderId" :edit="true" :file-data="fileData" :close="close" :is-open="isOpen" />
      <q-card class="my-card justify-self-center relative px-3 pt-3 " v-for="(file) in filesData" :key="file.id">

        <q-icon class="absolute top-4 right-3 p-1 bg-slate-100 rounded-full cursor-pointer" size="2em"
          :color="file.pinUp ? 'red' : 'grey-7'" @click="store.setPinUpFileFolder(folderId,file.id)" name="push_pin"><q-tooltip>
            Fijar
          </q-tooltip></q-icon>
        <div class="bg-indigo-50 ">
          <img class="object-fill w-[180px] h-[120px]" :src="previewImage(file.file)" alt="file-image">
        </div>
        <q-card-actions class="justify-center">
          <q-btn size="sm" round color="red" :disable="file.pinUp" icon="delete" @click="store.deleteFileFolder( folderId,file.id)">
            <q-tooltip>
              Elimiar
            </q-tooltip></q-btn>
          <q-btn size="sm" round color="primary" icon="edit" @click="edit(file)"> <q-tooltip>
              Editar
            </q-tooltip></q-btn>
          <dialog-info :file-data="{ ...file }" />
        </q-card-actions>
      </q-card>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useFolderStore } from 'src/stores/folder-store';
import FormComponent from 'components/FormComponent.vue';
import DialogInfo from './DialogInfoComponent.vue';
import { previewImage } from '../utils/previewImage';
import { FileData } from './models';
const store = useFolderStore();

interface Props {
  filesData: FileData[];
  folderId:string
}

 withDefaults(defineProps<Props>(), {});

const isOpen = ref(false)
const close = () => isOpen.value = false
const fileData = ref<FileData>()

const edit = (file: FileData) => {
  fileData.value = file
  isOpen.value = true
}

</script>
