import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryBarista from "@/assets/gallery-barista.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import galleryCustomers from "@/assets/gallery-customers.jpg";

const images = [
  { src: galleryInterior, alt: "Cozy café interior with warm lighting", span: "col-span-2 row-span-2" },
  { src: galleryBarista, alt: "Barista crafting pour-over coffee", span: "" },
  { src: galleryFood, alt: "Fresh breakfast spread", span: "" },
  { src: galleryCustomers, alt: "Friends enjoying coffee together", span: "col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-terracotta font-semibold text-sm tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="section-title">Life at FreshBite</h2>
          <p className="section-subtitle">A peek inside our warm, welcoming space.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img) => (
            <div key={img.alt} className={`gallery-item group ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
