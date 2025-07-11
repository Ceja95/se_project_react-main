import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, closeOnOverlayClick, closeActiveModal, onHandleAddItemSubmit }) {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [weather, setWeather] = useState("");

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleImageChange = (e) => {
        e.preventDefault();
        setImageUrl(e.target.value);
    };

    const handleWeatherChange = (e) => {
        setWeather(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onHandleAddItemSubmit({ name, imageUrl, weather});
    };

    useEffect(() => {
            if (isOpen) {
                setName("");
                setImageUrl("");
                setWeather("");
            }   
        }, [isOpen]);

    return (
        <ModalWithForm
            buttonText="Add garment"
            title="New garment"
            isOpen={isOpen}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleSubmit={handleSubmit}
        >
            <label htmlFor="name" className="modal__label">
                Name
                <input
                    type="text"
                    id="name"
                    className="modal__input"
                    placeholder="Name"
                    onChange={handleNameChange}
                    value={name}
                />
            </label>

            <label htmlFor="imageUrl" className="modal__label">
                Image
                <input
                    type="url"
                    id="imageUrl"
                    className="modal__input"
                    placeholder="Image Url"
                    onChange={handleImageChange}
                    value={imageUrl}
                />
            </label>

            <fieldset className="modal__radio-buttons">
                <legend className="modal__legend">Select the weather type:</legend>

                <label htmlFor="hot" className="modal__label modal__label_type_radio">
                    <input
                        type="radio"
                        name="weather-type-select"
                        id="hot"
                        className="modal__radio-input"
                        onChange={handleWeatherChange}
                        value="hot"
                        checked={weather === "hot"}
                    />
                    Hot
                </label>

                <label
                    htmlFor="warm"
                    className="modal__label modal__label_type_radio"
                >
                    <input
                        type="radio"
                        name="weather-type-select"
                        id="warm"
                        className="modal__radio-input"
                        onChange={handleWeatherChange}
                        value="warm"
                        checked={weather === "warm"}
                    />
                    Warm
                </label>

                <label
                    htmlFor="cold"
                    className="modal__label modal__label_type_radio"
                >
                    <input
                        type="radio" name="weather-type-select"
                        id="cold"
                        className="modal__radio-input"
                        onChange={handleWeatherChange}
                        value="cold"
                        checked={weather === "cold"}
                    />
                    Cold
                </label>
            </fieldset>
        </ModalWithForm>
    )
}

export default AddItemModal;