import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

export const TestAnalysis = () => {
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testAnalysis = async () => {
    setIsLoading(true);
    try {
      const sessionId = '5d64197f-e780-45c0-9838-08b1c416161f';
      
      // Get responses for this session
      const { data: responses } = await supabase
        .from('survey_responses')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      console.log('Found responses:', responses?.length);
      
      if (!responses || responses.length === 0) {
        setResult('No responses found for session');
        return;
      }

      // Call the edge function
      const { data, error } = await supabase.functions.invoke('generate-longevity-insights', {
        body: { sessionId, responses }
      });

      if (error) {
        console.error('Function error:', error);
        setResult(`Error: ${error.message}`);
      } else {
        console.log('Function result:', data);
        setResult(JSON.stringify(data, null, 2));
      }
    } catch (error) {
      console.error('Error:', error);
      setResult(`Unexpected error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Test Analysis Function</h2>
      <Button onClick={testAnalysis} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Analysis'}
      </Button>
      {result && (
        <div className="mt-4">
          <h3 className="font-semibold">Result:</h3>
          <pre className="bg-gray-100 p-4 rounded mt-2 text-sm overflow-auto">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
};