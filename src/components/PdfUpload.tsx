'use client';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Upload } from 'lucide-react';

const PdfUpload = () => {
  const [uploading, setUploading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;
      
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      if (res.ok) {
        window.location.reload(); // Refresh to show new PDF
      }
      setUploading(false);
    },
  });

  return (
    <div 
      {...getRootProps()} 
      className="bg-green-500 text-black p-4 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-green-400"
    >
      <input {...getInputProps()} />
      {uploading ? 'Uploading...' : <><Upload className="h-5 w-5" /> Upload PDF</>}
    </div>
  );
};

export default PdfUpload;
