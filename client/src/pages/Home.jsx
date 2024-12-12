import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {/* Welcome Section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center'>
  <h1 className="text-3xl lg:text-6xl font-bold text-teal-600 dark:text-purple-400">
    Welcome to My <span className="text-purple-500">Blog World</span>
  </h1>
  <p className='text-gray-500 text-xs sm:text-sm'>
    Explore the realms of <span className="font-semibold text-teal-600">technology</span> with articles and tutorials spanning cutting-edge domains like <br></br><span className="text-teal-600">Artificial Intelligence</span>, <span className="text-teal-600">Cloud Computing</span>, <span className="text-teal-600">Web Development</span>, <span className="text-teal-600">Data Science</span>, <span className="text-teal-600">Cybersecurity</span>, and <span className="text-teal-600">Programming</span>.
  </p>
  <p className='text-gray-500 text-xs sm:text-sm italic'>
    Your one-stop destination to stay updated with the latest trends and breakthroughs in <span className="font-semibold text-teal-600">Computer Science</span>.
  </p>
  <Link
    to='/search'
    className='text-xs sm:text-sm text-teal-500 font-bold hover:underline hover:text-purple-600'
  >
    Browse All Posts
  </Link>
</div>


      {/* Call to Action Section */}
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      {/* Recent Posts Section */}
      <div className='max-w-9xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center underline underline-offset-8 decoration-teal-500 dark:decoration-purple-400'>
              Recent Posts
            </h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center hover:text-purple-600'
            >
              View all posts
            </Link>
          </div>
        )}
        {/* Sign In Message */}
        <div className='text-center mt-6'>
          <p className='text-sm text-gray-600'>
            Want to join the conversation?{' '}
            <Link to='/sign-in' className='text-teal-500 font-semibold hover:underline'>
              Sign In
            </Link> to comment and share your thoughts!
          </p>
        </div>
      </div>
    </div>
  );
}