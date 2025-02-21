import Image from "next/image";

interface GalleryImageProps {
  src: string;
  alt: string;
}

export function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="relative group">
      <Image
        src={src || "/placeholder.svg"}
        width={400}
        height={300}
        alt={alt}
        className="rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-75"
      />
    </div>
  );
}
