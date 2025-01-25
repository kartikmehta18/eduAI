'use client';

import { useState } from 'react';
import { useGemini } from '@/hooks/useGemini';
import ReactMarkdown from 'react-markdown';
import { Brain, Loader2 } from 'lucide-react';

interface LearningPathProps {
  careerPath: string;
}

export const LearningPath: React.FC<LearningPathProps> = ({ careerPath }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { generateLearningContent } = useGemini();

  const generatePath = async () => {
    setLoading(true);
    try {
      const prompt = `Create a detailed learning path for becoming a ${careerPath}. Include:
        1. Required skills and technologies
        2. Learning milestones
        3. Project suggestions
        4. Industry certifications
        5. Estimated timeline
        Format in markdown with clear sections.`;
      
      const response = await generateLearningContent(prompt);
      setContent(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Learning Path: {careerPath}</h2>
        <button
          onClick={generatePath}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Brain className="w-5 h-5" />
          )}
          Generate Path
        </button>
      </div>
      
      <div className="prose max-w-none">
        {content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          <p className="text-gray-500 italic">
            Click "Generate Path" to create your personalized learning journey.
          </p>
        )}
      </div>
    </div>
  );
};