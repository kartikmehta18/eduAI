'use client';

import { Users, MessageSquare } from 'lucide-react';

interface MentorListProps {
  careerPath: string;
}

const MOCK_MENTORS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior AI Engineer',
    company: 'Google',
    rate: 150,
    availability: 'Available',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'Microsoft',
    rate: 120,
    availability: 'Booked',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Data Scientist',
    company: 'Amazon',
    rate: 100,
    availability: 'Available',
  },
];

export const MentorList: React.FC<MentorListProps> = ({ careerPath }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold">Available Mentors</h2>
      </div>

      <div className="space-y-4">
        {MOCK_MENTORS.map((mentor) => (
          <div
            key={mentor.id}
            className="border rounded-lg p-4 hover:border-blue-200 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{mentor.name}</h3>
                <p className="text-sm text-gray-600">{mentor.role} at {mentor.company}</p>
              </div>
              <span className={`text-sm px-2 py-1 rounded ${
                mentor.availability === 'Available'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {mentor.availability}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-600">${mentor.rate}/hour</span>
              <button
                disabled={mentor.availability !== 'Available'}
                className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageSquare className="w-4 h-4" />
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};