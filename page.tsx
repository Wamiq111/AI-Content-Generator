import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with Next.js and TypeScript',
      excerpt: 'Learn how to set up a new project with Next.js and TypeScript for better development experience.',
      date: '2023-05-15',
      author: 'Jane Doe',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      id: '2',
      title: 'The Power of React Hooks',
      excerpt: 'Discover how React Hooks can simplify your component logic and make your code more reusable.',
      date: '2023-06-22',
      author: 'John Smith',
      readTime: '8 min read',
      category: 'React'
    },
    {
      id: '3',
      title: 'Styling in Modern Web Applications',
      excerpt: 'Explore different styling approaches for your web applications in 2023.',
      date: '2023-07-10',
      author: 'Alex Johnson',
      readTime: '6 min read',
      category: 'CSS'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Head>
        <title>Blog | My Awesome Site</title>
        <meta name="description" content="Read our latest articles and tutorials" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Blog</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the latest insights and tutorials from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="relative group"
            >
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              
              {/* Blog Card */}
              <article className="relative h-full bg-gray-800 rounded-lg p-0.5">
                <div className="h-full bg-gray-900 rounded-lg p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/50 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-6">
                    <FiCalendar className="mr-2 text-purple-400" />
                    <span className="mr-5">{new Date(post.date).toLocaleDateString()}</span>
                    <FiUser className="mr-2 text-purple-400" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      href={`/dashboard/Blogs/${post.id}`} 
                      className="flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                    >
                      Read more <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg overflow-hidden group">
            <span className="relative z-10">Load More Articles</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </main>
    </div>
  );
}