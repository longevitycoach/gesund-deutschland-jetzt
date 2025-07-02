// Test script to call the generate-longevity-insights function
const supabaseUrl = 'https://prybthpekucgwivbdjhi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeWJ0aHBla3VjZ3dpdmJkamhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNjc4MzYsImV4cCI6MjA2Njk0MzgzNn0.PLzZGJOF5qP8UMaZ04RAwQ_5kUqc1nOAb4E6tTO6pr8';

async function testGenerateInsights() {
  try {
    const sessionId = '5d64197f-e780-45c0-9838-08b1c416161f';
    
    // First get all responses for this session
    const responsesResponse = await fetch(`${supabaseUrl}/rest/v1/survey_responses?session_id=eq.${sessionId}&order=created_at.asc`, {
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    const responses = await responsesResponse.json();
    console.log('Found responses:', responses.length);
    
    // Call the edge function
    const result = await fetch(`${supabaseUrl}/functions/v1/generate-longevity-insights`, {
      method: 'POST',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sessionId,
        responses
      })
    });
    
    const data = await result.json();
    console.log('Function result:', data);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testGenerateInsights();