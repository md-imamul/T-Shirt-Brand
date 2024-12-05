import React from 'react';
import { DollarSign, Users, Mosque, BookOpen, GraduationCap } from 'lucide-react';

const ActionPlans: React.FC = () => {
  const plans = [
    { icon: <DollarSign className="w-8 h-8 text-green-600" />, title: "Al-Ihsan Fund", description: "Collect funds and provide financial assistance for various social development projects." },
    { icon: <Users className="w-8 h-8 text-green-600" />, title: "Zakat Coordination Project", description: "Coordinate and distribute Zakat funds effectively within the community." },
    { icon: <Mosque className="w-8 h-8 text-green-600" />, title: "Al-Ihsan Islamic Center", description: "Serve as the central hub for all activities and provide Islamic education." },
    { icon: <BookOpen className="w-8 h-8 text-green-600" />, title: "Library Establishment", description: "Create a library with Islamic literature, offering resources for youth development and education." },
    { icon: <GraduationCap className="w-8 h-8 text-green-600" />, title: "Educational Support", description: "Provide educational assistance to underprivileged children and organize Iftar events during Ramadan." },
  ];

  return (
    <section id="action-plans" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Action Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="flex items-start p-6 border rounded-lg shadow-md">
              <div className="mr-4">{plan.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p>{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionPlans;