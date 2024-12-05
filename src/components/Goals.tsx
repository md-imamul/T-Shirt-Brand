import React from 'react';
import { Home, Heart, Book } from 'lucide-react';

const Goals: React.FC = () => {
  const goals = [
    { icon: <Home className="w-12 h-12 mb-4 text-green-600" />, title: "Human Basic Needs", description: "Establish basic human rights such as food, clothing, shelter, healthcare, and education for all." },
    { icon: <Heart className="w-12 h-12 mb-4 text-green-600" />, title: "Building a Harmonious Village", description: "Create an interest-free and harmonious village community." },
    { icon: <Book className="w-12 h-12 mb-4 text-green-600" />, title: "Promoting Islamic Values", description: "Instill Islamic values in the youth, encouraging them to become future leaders." },
  ];

  return (
    <section id="goals" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow-md">
              {goal.icon}
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;