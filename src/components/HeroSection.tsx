export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8 rounded-lg animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/f562e91c-4123-457c-93c4-91a97374ee9f.png" 
            alt="Versova Logo" 
            className="h-8 sm:h-10 w-auto" // Reduced from h-16 sm:h-20 to h-8 sm:h-10
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-5xl mb-4">
          AI Training Hub
        </h1>
        <p className="text-xl text-gray-600">
          Enhance your productivity with generative AI in your role at Versova
        </p>
      </div>
    </div>
  );
}