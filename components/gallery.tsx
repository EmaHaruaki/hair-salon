import Image from "next/image"

export function Gallery() {
  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Salon Interior 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Hairstyle 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Salon Interior 2" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Hairstyle 2" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Salon Interior 3" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Hairstyle 3" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}

