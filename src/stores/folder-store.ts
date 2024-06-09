import { defineStore } from 'pinia';
import { FileData } from 'src/components/models';
import { v4 as uuidv4 } from 'uuid';

interface Folder {
  name: string;
  files: FileData[];
  id?: string;
}

export const useFolderStore = defineStore('folder', {
  state: () => {
    return {
      folders: [] as Folder[],
    };
  },
  actions: {
    createFolder(name: string) {
      this.folders.push({
        name,
        id: uuidv4(),
        files: [],
      });
    },
    addFileToFolder(folderId: string, file: FileData) {
      const folder = this.folders.find((folder) => folder.id === folderId);
      folder?.files.push({ ...file, id: uuidv4(), pinUp: false });
    },
    editFileFolder(folderId: string, fileData: FileData) {
      const folder = this.folders.find(folder => folder.id === folderId);
      if (folder) {
        const fileIndex = folder.files.findIndex(file => file.id === fileData.id);
        if (fileIndex !== -1) {
          folder.files[fileIndex] = fileData;
        }
      }
    },
    deleteFileFolder(folderId: string, fileId?: string) {
      const folder = this.folders.find(folder => folder.id === folderId);
      if (folder) {
        folder.files = folder.files.filter(file => file.id !== fileId || file.pinUp);
      }
    },
    setPinUpFileFolder(folderId: string, fileId?: string) {
      const folder = this.folders.find(folder => folder.id === folderId);
      if (folder) {
        const file = folder.files.find(file => file.id === fileId);
        if (file) {
          file.pinUp = !file.pinUp;
        }
      }
    },
  },
});
