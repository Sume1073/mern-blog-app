import { useState, useEffect } from 'react';

const images = [
 '/images/cs1.png',
 '/images/cs3.jpg',
 '/images/cs4.png',
 '/images/cs5.jpg',
  
];

const testimonials = [
  { text: "This blog has transformed my understanding of web development!", author: "Alex J." },
  { text: "I love the tutorials! They are easy to follow and very informative.", author: "Jamie L." },
  { text: "Sumedha's insights on coding are simply the best!", author: "Chris P." },
  { text: "The articles are well-written and full of useful information!", author: "Maria K." },
  { text: "I appreciate the clear explanations and practical examples.", author: "David T." },
  { text: "This blog is my go-to resource for learning new technologies.", author: "Sophia R." },
  { text: "I always look forward to the new posts each week!", author: "John D." },
  { text: "The community engagement is fantastic; I love reading the comments!", author: "Emily W." },
  { text: "Sumedha covers topics that are relevant and timely.", author: "Michael B." },
  { text: "I have learned so much from this blog; thank you, Sumedha!", author: "Olivia H." }
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 text-center">
        {/* Intro Section */}
        <h1 className="text-4xl font-bold  text-teal-600 dark:text-purple-400 my-7">
          About Sumedha's Blog
        </h1>
        <div className="text-md text-gray-600 dark:text-gray-300 flex flex-col gap-6">
  <p>
    Welcome to <strong>Sumedha's Blog</strong>, a space where technology and creativity come together! Explore a variety of <strong>weekly articles and tutorials</strong> on topics such as web development, software engineering, and programming. Dive into an engaging community of learners and share your thoughts!
  </p>
  <p>
    <strong>Created by Sumedha Chakrabarty</strong>, this blog features <strong>projects</strong> and <strong>tutorials</strong> that are crafted with a passion for coding and innovation. Whether you're a beginner or an experienced developer, there's something here for you to explore.
  </p>
  <p>
    The blog is built using the <strong>MERN (MongoDB, Express.js, React.js, Node.js)</strong> stack, with additional features such as <strong>JWT for authentication</strong> and <strong>Redux Toolkit for state management</strong>.
  </p>
</div>


        {/* Image Slider */}
        <div className="my-8 relative">
          <img
            src={images[currentImageIndex]}
            alt="Blog Highlights"
            className="rounded-lg shadow-md mx-auto w-full max-w-md transition duration-500"
          />
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* New Line Added After Image Slider */}
<p className="text-lg text-gray-600 dark:text-gray-300 my-6">
  Join me on this journey to explore the endless possibilities of technology and development through insightful articles and hands-on tutorials!
</p>

        {/* Testimonials Slider */}
        <div className="my-10 relative">
        <h2
  className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-teal-600 dark:after:bg-purple-400 after:rounded-lg"
>
            What People Are Saying
          </h2>
          <div className="flex justify-center items-center relative">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 z-10"
            >
              &#10094; {/* Left Arrow */}
            </button>

            {/* Testimonial Content */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-none w-full px-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                        "{testimonial.text}"
                      </p>
                      <span className="block mt-2 text-sm text-gray-500 dark:text-gray-400">
                        – {testimonial.author}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="absolute right-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 z-10"
            >
              &#10095; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
