'use client';
import { useSession } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PdfUpload from '@/components/PdfUpload';
import { Upload } from 'lucide-react';

const Dashboard = () => {
  const { session } = useSession();
  const router = useRouter();
  const [pdfs, setPdfs] = useState([]); // Store user PDFs

  useEffect(() => {
    if (!session) {
      router.push('/');
    } else {
      fetchPdfs();
    }
  }, [session, router]);

  const fetchPdfs = async () => {
    const res = await fetch('/api/pdfs'); // Backend API to fetch PDFs
    const data = await res.json();
    setPdfs(data);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Your PDFs</h1>

      {/* Show PDFs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.length > 0 ? (
          pdfs.map((pdf) => (
            <div 
              key={pdf.id} 
              className="p-4 border rounded-lg cursor-pointer hover:bg-gray-800 transition"
              onClick={() => router.push(`/chat/${pdf.id}`)}
            >
              <h2 className="text-lg font-medium">{pdf.fileName}</h2>
              <p className="text-gray-400">Uploaded at: {new Date(pdf.uploadedAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No PDFs uploaded yet.</p>
        )}
      </div>

      {/* Floating Upload Button */}
      <div className="fixed bottom-6 right-6">
        <PdfUpload />
      </div>
    </div>
  );
};

export default Dashboard;
