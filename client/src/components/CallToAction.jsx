import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Discover the Unique World of My Tech Blog
            </h2>
            <p className='text-gray-500 my-2'>
                Dive into content that breaks down complex tech topics like AI, Cloud Computing, Web Development, and more—tailored for tech enthusiasts at all levels.
            </p>
            <p className='text-gray-500 my-2'>
                Ready to connect with me? Check out my professional journey and let's share knowledge!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.linkedin.com/in/sumedha-chakrabarty-964810202/" target='_blank' rel='noopener noreferrer'>
                    Connect on LinkedIn
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="/images/SumedhaHub.png" alt="Tech Blog Visual" className='rounded-lg  shadow-md' />
        </div>
    </div>
  )
}
