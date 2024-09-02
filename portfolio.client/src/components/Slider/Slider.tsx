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
                case "ArrowLeft": // left arrow key
                    prevImage();
                    break;
                case "ArrowRight": // right arrow key
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Reset slider index when pictures change
    useEffect(() => {
        setSliderIndex(1);
    }, [pictures]);

    return (
        <div className="flex items-center justify-center">
            <div className="slider relative m-8 p-6">
                <Image
                    src={pictures[sliderIndex - 1]}
                    alt={`Slide ${sliderIndex}`}
                    className="slider-img border border-black rounded-lg"
                    width={1200}
                    height={800}
                />
                {picturesLength > 1 && (
                    <>
                        <button onClick={prevImage} className="navigation-button prev-button absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                            <IoIosArrowBack size={32} />
                        </button>
                        <button onClick={nextImage} className="navigation-button next-button absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                            <IoIosArrowForward size={32} />
                        </button>
                        <div className="points-container mt-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {pictures.map((_, index) => (
                                <div
                                    key={index}
                                    className={`point w-3 h-3 rounded-full ${sliderIndex === index + 1 ? 'bg-black' : 'bg-gray-400'}`}
                                ></div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Slider;