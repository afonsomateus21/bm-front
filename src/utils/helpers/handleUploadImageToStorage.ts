import { api } from "../../services";

export async function handleUploadImageToStorage(file: File): Promise<string> {
  const response = await api.post("/auth/user/upload-photo", {
    "file_name": file.name,
    "mime_type": file.type
  });

  if (response.status !== 200) throw new Error("Could not generate URL upload");

  const { url, file_path } = response.data;

  const uploadResponse = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });

  if (!uploadResponse.ok) throw new Error("Erro ao fazer upload");

  return `${import.meta.env.VITE_SUPABASE_PROJECT_URL}/storage/v1/object/public/users/${file_path}`
}