<template>
  <q-dialog v-model="isOpen">
    <q-card class="w-full">
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input filled type="number" v-model="dataForm.identityDocument" label="Id *" lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo requerido']" />
          <q-input filled v-model="dataForm.firstName" label="Nombre de pila *" lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo requerido']" />
          <q-input filled v-model="dataForm.lastName" label="Apellido *" lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo requerido']" />
          <q-input filled v-model="dataForm.nameFile" label="Nombre del archivo *" lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo requerido']" />
          <q-input filled v-model="dataForm.amountPages" label="Cantidad de páginas *" lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo requerido']" />
          <q-input filled type="number" v-model="fileSize" :value="dataForm.size" label="Tamaño *" disable />
          <q-file accept=".pdf,.xls,.xlsx,.png,.jpeg,.gif,.jpg" v-model="dataForm.file" label="Seleccione un archivo"
            lazy-rules :rules="[(val) => (val && val !== null) || 'Campo requerido']" />
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="cancelar" type="button" @click="onClose" color="primary" flat />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useFolderStore } from '../stores/folder-store';
import { FileData } from './models';
const store = useFolderStore();
const { addFileToFolder, editFileFolder } = store;

const defaulDate = {
  identityDocument: 0,
  firstName: '',
  lastName: '',
  nameFile: '',
  amountPages: 0,
  size: 0,
  file: null,
};

const dataForm = ref<FileData>({ ...defaulDate });

interface Props {
  isOpen: boolean;
  fileData?: FileData;
  close: () => void;
  edit?: boolean;
  folderId: string
}

const props = withDefaults(defineProps<Props>(), {
  edit: false,
});

const onSubmit = () => {
  if (props.edit) {
    editFileFolder(props.folderId, dataForm.value);
  } else {
    addFileToFolder(props.folderId, dataForm.value);
  }
  onClose();
};

const onClose = () => {
  dataForm.value = { ...defaulDate };
  props.close();
};

const isOpen = computed(() => props.isOpen);
const fileSize = computed(() => dataForm.value.file?.size || 0);

watch(props, () => {
  console.log(props.fileData)
  if (props.fileData) dataForm.value = props.fileData;
});
</script>
