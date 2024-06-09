import imgFolder from '../assets/folder.png';
import imgPdf from '../assets/pdf.png';
import imgXls from '../assets/xls.png';

export const previewImage = (file: File | null) => {
  const imgType = ['image/png', 'image/jpeg', 'image/gif'];
  const pdfType = 'application/pdf';
  const xlsType = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];
  let imageUrl;

  if (file && imgType.includes(file.type)) {
    imageUrl = URL.createObjectURL(file);
  }
  if (pdfType == file?.type) return imgPdf;
  if (file && xlsType.includes(file.type)) return imgXls;

  return imageUrl || imgFolder;
};
