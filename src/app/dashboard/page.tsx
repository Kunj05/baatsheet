import PdfView from "@/components/pdfView";
import { auth } from "@clerk/nextjs/server";
import ChatComp from "@/components/ChatComp";
import { useSession  } from '@clerk/nextjs'
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";

const dashboard = async () => {
  const user = useSession()
  const route = useRouter()
  const [file, setFile] = useState<File | null>(null);

  useEffect({
    if(!user.isSignedIn){
      route.push('/');
    }
  })

  return (
    <>
        {!file && (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-green-500 bg-green-500/10' : 'border-gray-700 hover:border-green-500/50'}`}
            >
              <input {...getInputProps()} />
              <Upload className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <p className="text-lg mb-2">
                {isDragActive ? 'Drop your PDF here' : 'Drag & drop your PDF here'}
              </p>
              <p className="text-sm text-gray-400">or click to select a file</p>
            </div>
          )}
    </>
  );
};

export default dashboard;