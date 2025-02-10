import PdfView from "@/components/pdfView";
import { auth } from "@clerk/nextjs/server";
import ChatComp from "@/components/ChatComp";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  const docRef = await adminDB
    .collection("users")
    .doc(userId)
    .collection("files")
    .doc(id)
    .get();

  const downloadURL = await docRef.data()?.url;

  return (
    <>
      <p>kunj</p>
    </>
  );
};

export default page;