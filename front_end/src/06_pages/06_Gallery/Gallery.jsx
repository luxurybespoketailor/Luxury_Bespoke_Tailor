import React, { useState, useMemo } from "react";
import { GalleryFilter, GalleryGrid, SectionHeading } from "../../01_comps/comps.index.js";
import { galleryImages, filterCategories } from "./Gallery_comps/galleryData.js";
import "./_styles/Gallery.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeFilter === "all") {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  return (
    <div className="gallery">
      {/* Page Header */}
      <section className="gallery__header section--small">
        <div className="container">
          <SectionHeading
            title="Our Lookbook"
            subtitle="Explore our collection of bespoke tailoring creations"
          />
        </div>
      </section>

      {/* Filter Bar */}
      <GalleryFilter
        categories={filterCategories}
        activeCategory={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Gallery Grid */}
      <div className="gallery__content">
        <GalleryGrid images={filteredImages} />
      </div>

      {/* Results count */}
      <div className="gallery__footer">
        <p className="gallery__count">
          Showing {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"}
        </p>
      </div>
    </div>
  );
};

export default Gallery;
