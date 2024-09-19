import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SliderProps {
    pictures: string[];
}

const Slider: React.FC<SliderProps> = ({ pictures }) => {
    const [sliderIndex, setSliderIndex] = useState(1);
    const picturesLength = pictures.length;

    const prevImage = useCallback(() => {
        setSliderIndex((prev) => (prev <= 1 ? picturesLength : prev - 1));
    }, [picturesLength]);

    const nextImage = useCallback(() => {
        setSliderIndex((next) => (next >= picturesLength ? 1 : next + 1));
    }, [picturesLength]);

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
    }, [prevImage, nextImage]);

    // Reset slider index when pictures change
    useEffect(() => {
        setSliderIndex(1);
    }, [pictures]);

    return (
        <div className="flex items-center">
            <div className="slider relative sm:m-8 p-6">
                <Image
                    src={pictures[sliderIndex - 1]}
                    alt={`Slide ${sliderIndex}`}
                    className="slider-img border border-black rounded-lg"
                    width={1200}
                    height={800}
                />
                {picturesLength > 1 && (
                    <>
                        <button onClick={prevImage} className="navigation-button prev-button absolute left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                            <IoIosArrowBack size={24} />
                        </button>
                        <button onClick={nextImage} className="navigation-button next-button absolute right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
                            <IoIosArrowForward size={24} />
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