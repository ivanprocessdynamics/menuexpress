const defaultCloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
const defaultUploadPreset = process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

if (!defaultCloudName || !defaultUploadPreset) {
  console.warn(
    '[Cloudinary] Faltan VITE_CLOUDINARY_CLOUD_NAME o VITE_CLOUDINARY_UPLOAD_PRESET en .env'
  );
}

type CloudinaryConfig = {
  cloudName?: string;
  uploadPreset?: string;
};

export async function uploadImageToCloudinary(
  file: File,
  config?: CloudinaryConfig
): Promise<string> {
  const cloudName = config?.cloudName ?? defaultCloudName;
  const uploadPreset = config?.uploadPreset ?? defaultUploadPreset;

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary no está configurado (revisa las variables de entorno).');
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    console.error('[Cloudinary] Error en la subida', res.status, res.statusText);
    const text = await res.text();
    throw new Error(`Error subiendo imagen a Cloudinary: ${text}`);
  }

  const data = await res.json();
  return data.secure_url as string;
}
