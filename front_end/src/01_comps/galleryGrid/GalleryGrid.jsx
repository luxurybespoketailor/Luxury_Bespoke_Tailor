import React, { useState, useCallback } from "react";
import "./_styles/galleryGrid.css";

const GalleryGrid = ({ images, columns = { mobile: 2, tablet: 3, desktop: 4 } }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open lightbox with specific image
  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  // Navigate to previous image
  const previousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Navigate to next image
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        previousImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    },
    [lightboxOpen, closeLightbox, previousImage, nextImage]
  );

  // Add keyboard event listener
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Gallery grid */}
      <div className="galleryGrid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="galleryGrid__item"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${image.alt || 'image'} in lightbox`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="galleryGrid__image"
              loading="lazy"
            />
            <div className="galleryGrid__overlay">
              <span className="galleryGrid__icon">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div className="galleryLightbox" onClick={closeLightbox}>
          {/* Close button */}
          <button
            className="galleryLightbox__close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Previous button */}
          <button
            className="galleryLightbox__prev"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Current image */}
          <div
            className="galleryLightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt || `Gallery image ${currentImageIndex + 1}`}
              className="galleryLightbox__image"
            />
            <p className="galleryLightbox__counter">
              {currentImageIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next button */}
          <button
            className="galleryLightbox__next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;

