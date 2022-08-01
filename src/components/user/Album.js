import { useEffect, useState } from "react";

const Album = ({ photos, setPhotos }) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
      const dropZoneElement = inputElement.closest(".drop-zone");

      dropZoneElement.addEventListener("click", () => {
        inputElement.click();
      });

      inputElement.addEventListener("change", () => {
        if (inputElement.files.length) {
          updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
      });

      dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, () => {
          dropZoneElement.classList.remove("drop-zone--over");
        });
      });

      dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
          inputElement.files = e.dataTransfer.files;
          updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  }, []);

  function updateThumbnail(dropZoneElement, file) {
    const copyPhotos = [...photos];
    copyPhotos.push({ file: file, id: id });
    setId(id + 1);
    setPhotos(copyPhotos);
  }

  const images = photos.map((x) => (
    <img
      className={"album"}
      key={x.id}
      src={`${URL.createObjectURL(x.file)}`}
      alt={"aaa"}
    />
  ));
  return (
    <>
      <div className="drop-zone">
        <span className="drop-zone__prompt">
          Drop file here or click to upload
        </span>
        <input
          type="file"
          name="myFile"
          className="drop-zone__input"
          accept={"*/image"}
        />
      </div>
      <div>{images}</div>
    </>
  );
};

export default Album;
