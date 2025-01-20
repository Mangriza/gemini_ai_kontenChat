import React, { useState } from 'react';
import { generateContent } from '../utils/geminiAPI';

const ContentGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGenerateContent = async () => {
    if (!prompt) return;

    setLoading(true);
    setError('');
    try {
      const result = await generateContent(prompt);
      console.log('Generated Content:', result);  // Log untuk debugging

      // Periksa apakah result.contents ada dan valid
      if (result?.contents && result.contents.length > 0 && result.contents[0].parts && result.contents[0].parts.length > 0) {
        setGeneratedContent(result.contents[0].parts[0].text || 'No content generated');
      } else {
        setGeneratedContent('No content generated');
      }
    } catch (error) {
      setError('Failed to generate content. Please try again.');
      console.error(error);  // Log error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-generator">
      <h1>AI Content Generator</h1>
      <div>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
        />
        <button onClick={handleGenerateContent} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {generatedContent && (
        <div className="generated-content">
          <h2>Generated Content:</h2>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
