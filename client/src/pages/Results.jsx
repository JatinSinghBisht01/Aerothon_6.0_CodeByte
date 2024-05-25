    import React from 'react';

    function Results() {
        const images = [
            '../../public/sampleInput.jpg',
            '../../public/sampleOutput.jpg',
        ];

        
        const videos = [
            'path/to/your/video1.mp4',
            'path/to/your/video2.mp4',

        ];

        return (
            <div className="h-fit font-sans text-gray-900 bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className="flex flex-col items-center h-full pt-20">
                    <h2 className="text-4xl font-semibold mb-10 m-2 text-white">
                        Results
                    </h2>
                    <div className="flex flex-row overflow-x-auto space-x-4 mt-4 mb-10 px-4">
                        {images.map((image, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md min-w-max">
                                <img src={image} alt={`image-${index}`} className="w-[600px] h-[400px] object-cover rounded-lg" />
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex flex-row overflow-x-auto space-x-4 mt-4 mb-10 px-4">
                        {videos.map((video, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md min-w-max">
                                <video controls className="w-[600px] h-[400px] rounded-lg">
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        );
    }

    export default Results;
