import "./index.scss";

const PhotoModal = ({
  selectedModalImage,
  closeModal,
  isModalOpen,
  modalImages,
}) => {
  return (
    <div
      className="modal-overlay"
      onClick={closeModal}
      style={{ visibility: isModalOpen ? "visible" : "hidden" }}
    >
      <div className="modal-content">
        {modalImages.map((image, index) => (
          <img
            key={image.toString()}
            src={image}
            alt="Modal Content"
            style={{
              display: index === selectedModalImage ? "initial" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoModal;
