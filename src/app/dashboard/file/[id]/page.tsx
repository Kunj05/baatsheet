'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PdfView from '@/components/PdfView';
import ChatComp from '@/components/ChatComp';

const ChatPage = () => {
  const { id } = useParams();
  const [pdf, setPdf] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    fetch(`/api/pdf/${id}`)
      .then((res) => res.json())
      .then((data) => setPdf(data));

    fetch(`/api/chat/${id}`)
      .then((res) => res.json())
      .then((data) => setChatHistory(data.messages));
  }, [id]);

  return (
    <div className="flex h-screen">
      {/* Left: PDF Viewer */}
      <div className="w-1/2 border-r p-4">
        {pdf && <PdfView pdfUrl={pdf.fileUrl} />}
      </div>

      {/* Right: Chat Component */}
      <div className="w-1/2 p-4">
        <ChatComp chatHistory={chatHistory} pdfId={id} />
      </div>
    </div>
  );
};

export default ChatPage;
