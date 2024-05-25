import React from 'react'

 const Features = () => {
    return (
        <section id="features" class="py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Our Features</h2>
            
            <div class="feature mb-8">
                <h3 class="text-xl font-semibold text-sky-600 hover:text-sky-500 ">Fault Detection</h3>
                <p class="text-lg text-gray-700"><strong>Discover potential issues before they become problems!</strong></p>
                <p class="text-gray-600">Upload your aircraft data to quickly and accurately detect any faults using our advanced machine learning models.</p>
            </div>
            
            <div class="feature mb-8">
                <h3 class="text-xl font-semibold text-sky-600 hover:text-sky-500">Interactive Chatbot</h3>
                <p class="text-lg text-gray-700"><strong>Your virtual aviation expert, ready to help 24/7!</strong></p>
                <p class="text-gray-600">Get instant maintenance recommendations and repair instructions tailored to your detected faults through our smart AI chatbot.</p>
            </div>
            
            <div class="feature">
                <h3 class="text-xl font-semibold text-sky-600 hover:text-sky-500">User Feedback</h3>
                <p class="text-lg text-gray-700"><strong>Your insights drive our excellence!</strong></p>
                <p class="text-gray-600">Share your experience and feedback to help us continually improve our services and better serve your needs.</p>
            </div>
        </div>
    </section>
    );
  };

export default Features