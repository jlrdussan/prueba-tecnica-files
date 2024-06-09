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
      folder?.files.push({...file,id: uuidv4(),pinUp:false});
    },
    editFileFolder(folderId: string, fileData: FileData) {
        const folder = this.folders.find((folder) => folder.id === folderId);
        const files = folder?.files.filter((file) => file.id === fileData.id);
        const index = this.folders.findIndex((folder) => folder.id === folderId);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const fileIndex = files!.findIndex((file) => file.id === fileData.id);
        const file=this.folders[index].files[fileIndex]
        this.folders[index].files[fileIndex] = {...file,...fileData}
    },
    deleteFileFolder(folderId: string, fileId?: string) {
      const folder = this.folders.find((folder) => folder.id === folderId);
      const files = folder?.files.filter((file) => file.id !== fileId);
      const index = this.folders.findIndex((folder) => folder.id === folderId);
      this.folders[index].files = files as  FileData[];
    },
    setPinUpFileFolder(folderId: string, fileId?: string) {
        const folder = this.folders.find((folder) => folder.id === folderId);
        const files = folder?.files.filter((file) => file.id === fileId);
        const index = this.folders.findIndex((folder) => folder.id === folderId);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const fileIndex = files!.findIndex((file) => file.id === fileId);
        this.folders[index].files[fileIndex].pinUp = !this.folders[index].files[fileIndex].pinUp
    },
  },
});
