import { FileText, Brain, MessageSquare, Lock } from 'lucide-react';
import { SignUpButton, useUser } from '@clerk/clerk-react';
import Link from 'next/link';
import Image from 'next/image'

const Home = () => {
  const { isSignedIn } = useUser();

  const features = [
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: 'PDF Processing',
      description: 'Upload and process any PDF document with ease.',
    },
    {
      icon: <Brain className="h-8 w-8 text-green-500" />,
      title: 'AI-Powered Analysis',
      description: 'Get intelligent insights and answers from your documents.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      title: 'Interactive Chat',
      description:
        'Ask questions and get real-time responses about your documents.',
    },
    {
      icon: <Lock className="h-8 w-8 text-green-500" />,
      title: 'Secure Storage',
      description: 'Your documents are encrypted and stored securely.',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Transform Your PDFs with AI
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Upload your PDF documents and interact with them using advanced AI.
          Get instant answers, summaries, and insights from your documents.
        </p>
        {!isSignedIn ? (
          <SignUpButton mode="modal">
            <button className="px-8 py-4 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-all transform hover:scale-105">
              Get Started Free
            </button>
          </SignUpButton>
        ) : (
          <Link href='/dashboard'
            className="px-8 py-4 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-all transform hover:scale-105"
          >
            Go to Dashboard
          </Link>
        )}
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-900 border border-green-500/20 hover:border-green-500/40 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">See it in Action</h2>
        <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-green-500/20">
          <Image
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1200&q=80"
            alt="PDF AI Assistant Demo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
