import React from 'react';
import { Utensils, Stethoscope, UserCheck } from 'lucide-react';

const Objectives: React.FC = () => {
  const objectives = [
    { icon: <Utensils className="w-12 h-12 mb-4 text-green-600" />, title: "Eradicate Hunger by 2035", description: "Ensuring that no one goes to bed hungry in the target area by 2035." },
    { icon: <Stethoscope className="w-12 h-12 mb-4 text-green-600" />, title: "Healthcare for All by 2025", description: "Guarantee that no one remains without medical treatment by 2025." },
    { icon: <UserCheck className="w-12 h-12 mb-4 text-green-600" />, title: "Drug-Free Youth", description: "Creating a drug-free youth community." },
  ];

  return (
    <section id="objectives" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white text-center p-6 rounded-lg shadow-md">
              {objective.icon}
              <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
              <p>{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;