<template>
    <q-icon size="md" class="ml-1" color="primary" name="more_horiz" @click="isOpen = true">
        <q-tooltip> Ver detalles </q-tooltip></q-icon>
    <q-dialog v-model="isOpen">
        <q-card class=" p-3 w-full md:max-w-lg">
            <q-toolbar>
                <q-avatar>
                    <img :src="previewImage(fileData.file)" />
                </q-avatar>
                <q-toolbar-title><span class="text-weight-bold">{{ fileData.nameFile }}</span>
                </q-toolbar-title>
                <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>
            <q-separator size="2px" color="blue mt-2" dark inset />
            <q-card-section>
                <q-list>
                    <q-item>
                        <q-item-section>
                            <div class="q-gutter-sm">
                                <span class="text-weight-bold inline-block">Nombre archivo:</span><span
                                    class="inline-block">{{ fileData.nameFile }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item v-ripple>
                        <q-item-section>
                            <div class="q-gutter-sm">
                                <span class="text-weight-bold">Nombres:</span>
                                <span>{{ fileData.firstName + fileData.lastName
                                    }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item v-ripple>
                        <q-item-section>
                            <div class="q-gutter-sm">
                                <span class="text-weight-bold">Cantidad de paginas</span> <span>{{
                                    fileData.amountPages }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                    <q-item v-ripple>
                        <q-item-section>
                            <div class="q-gutter-sm">
                                <span class="text-weight-bold">Tamaño:</span> <span>{{ fileData.size }}</span>
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>

            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FileData } from './models';
import { previewImage } from '../utils/previewImage';

const isOpen = ref(false);

export interface DialogInfoProps {
    fileData: FileData;
}

withDefaults(defineProps<DialogInfoProps>(), {});
</script>
