export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8 rounded-lg animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/f6072392-c3fa-4ebf-a41d-ee23f2134c56.png" 
            alt="Versova Logo" 
            className="h-16 sm:h-20 w-auto"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          AI Training Hub
        </h1>
        <p className="text-xl text-gray-600">
          Enhance your work with AI-powered tools. Learn how to leverage generative AI
          in your role at Versova.
        </p>
      </div>
    </div>
  );
}