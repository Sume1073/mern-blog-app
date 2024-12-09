import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto py-2'>
        {/* Top Section */}
        <div className='flex justify-between items-start'>
          <div className='mt-1'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white p-2 mt-2'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Sumedha's
              </span>
              Blog
            </Link>
          </div>

          {/* Right Sections: About, Follow Me, Legal */}
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-4 px-2'>
            {/* About Section */}
            <div className='p-2'>
              <Footer.Title
                title='About'
                className='mb-4 font-semibold text-teal-500 dark:text-teal-500 transition-colors duration-200 hover:text-teal-700'
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mb-2 hover:text-teal-500'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mb-4 hover:text-teal-500'
                >
                  Sumedha's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Follow Me Section */}
            <div className='p-2'>
              <Footer.Title
                title='Follow Me'
                className='mb-4 font-semibold text-teal-500 dark:text-teal-500 transition-colors duration-200 hover:text-teal-700'
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/Sume1073'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mb-2 hover:text-teal-500'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#' className='mb-4 hover:text-teal-500'>
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal Section */}
            <div className='p-2'>
              <Footer.Title
                title='Legal'
                className='mb-4 font-semibold text-teal-500 dark:text-teal-500 transition-colors duration-200 hover:text-teal-700'
              />
              <Footer.LinkGroup col>
                <Footer.Link href='#' className='mb-2 hover:text-teal-500'>
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href='#' className='mb-4 hover:text-teal-500'>
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider className='my-8' />

        {/* Bottom Section */}
        <div className='flex justify-between items-center mt-4'>
          {/* Left: Copyright */}
          <Footer.Copyright
            href='#'
            by="Sumedha's blog"
            year={new Date().getFullYear()}
            className='text-sm'
          />

          {/* Right: Social Icons */}
          <div className='flex gap-6'>
            <Footer.Icon href='https://www.linkedin.com/in/sumedha-chakrabarty-964810202' icon={BsLinkedin} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='https://github.com/Sume1073' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
