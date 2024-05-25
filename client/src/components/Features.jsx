import React from 'react'

 const Features = () => {
    return (
        <section id="features" className="py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Features</h2>
            
            <div className="feature mb-8">
                <h3 className="text-xl font-semibold text-sky-600 hover:text-sky-500 ">Fault Detection</h3>
                <p className="text-lg text-gray-700"><strong>Discover potential issues before they become problems!</strong></p>
                <p className="text-gray-600">Upload your aircraft data to quickly and accurately detect any faults using our advanced machine learning models.</p>
            </div>
            
            <div className="feature mb-8">
                <h3 className="text-xl font-semibold text-sky-600 hover:text-sky-500">Interactive Chatbot</h3>
                <p className="text-lg text-gray-700"><strong>Your virtual aviation expert, ready to help 24/7!</strong></p>
                <p className="text-gray-600">Get instant maintenance recommendations and repair instructions tailored to your detected faults through our smart AI chatbot.</p>
            </div>
            
            <div className="feature">
                <h3 className="text-xl font-semibold text-sky-600 hover:text-sky-500">User Feedback</h3>
                <p className="text-lg text-gray-700"><strong>Your insights drive our excellence!</strong></p>
                <p className="text-gray-600">Share your experience and feedback to help us continually improve our services and better serve your needs.</p>
            </div>
        </div>
    </section>
    );
  };

export default Features