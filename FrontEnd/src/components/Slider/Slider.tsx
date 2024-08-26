'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SliderProps {
    pictures: string[];
}

//Display a slider with navigation buttons, keyboard navigation and index information
const Slider: React.FC<SliderProps> = ({ pictures }) => {
    const [sliderIndex, setSliderIndex] = useState(1);
    const picturesLength = pictures.length;

    function prevImage() {
        setSliderIndex((prev) => (prev <= 1 ? picturesLength : --prev));
    }

    function nextImage() {
        setSliderIndex((next) => (next >= picturesLength ? 1 : ++next));
    }

    // Add keyboard event listeners for left and right arrow keys
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "37": // left arrow key code
                    prevImage();
                    break;
                case "39": // right arrow key code
                    nextImage();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    },);

    return (
        <div className="flex items-center justify-center">
            <div className="slider m-8 p-4">
                <Image
                    src={pictures[sliderIndex - 1]}
                    alt={`Slide ${sliderIndex}`}
                    className="slider-img border border-black rounded-lg"
                    width={1200}
                    height={800}
                />
                {picturesLength > 1 && (
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex space-x-4">
                            <button onClick={prevImage} className="navigation-button prev-button">
                                <IoIosArrowBack size={32} />
                            </button>
                            <button onClick={nextImage} className="navigation-button next-button">
                                <IoIosArrowForward size={32} />
                            </button>
                        </div>
                        <p className="index-info mt-2 text-sm">
                            {sliderIndex} / {pictures.length}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Slider;