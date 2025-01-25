import React, { useState } from 'react';
import { useGemini } from '../hooks/useGemini';
import ReactMarkdown from 'react-markdown';
import { Brain, Loader2 } from 'lucide-react';

interface LearningModuleProps {
  topic: string;
}

export const LearningModule: React.FC<LearningModuleProps> = ({ topic }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { generateLearningContent } = useGemini();

  const generateContent = async () => {
    setLoading(true);
    try {
      const prompt = `Create a comprehensive learning module about ${topic}. Include:
        1. Introduction
        2. Key concepts
        3. Practical examples
        4. Quiz questions
        Format in markdown.`;
      
      const response = await generateLearningContent(prompt);
      setContent(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{topic}</h2>
        <button
          onClick={generateContent}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Brain className="w-5 h-5" />
          )}
          Generate Content
        </button>
      </div>
      
      <div className="prose max-w-none">
        {content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          <p className="text-gray-500 italic">
            Click "Generate Content" to create an AI-powered learning module.
          </p>
        )}
      </div>
    </div>
  );
};