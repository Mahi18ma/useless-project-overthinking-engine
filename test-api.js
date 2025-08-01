// Test script for Gemini API integration
// This will test if the API key and configuration are working

async function testGeminiAPI() {
    const apiKey = 'AIzaSyBnE2E-0BOQop43TY5Dry4R1buLFGkiSeo';    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    
    const testPrompt = `Generate 2 brief, humorous worst-case scenarios for choosing coffee over tea. Make them absurdly dramatic. Return only the scenarios, one per line.`;
    
    try {
        console.log('Testing Gemini 2.0 Flash API...');
        
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': apiKey
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: testPrompt
                    }]
                }]
            })
        });

        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const generatedText = data.candidates[0].content.parts[0].text;
            console.log('Generated scenarios:');
            console.log(generatedText);
            
            const scenarios = generatedText
                .split('\n')
                .map(line => line.trim())
                .filter(line => line && line.length > 10);
            
            console.log('Parsed scenarios:', scenarios);
            return scenarios;
        } else {
            throw new Error('Unexpected API response structure');
        }
        
    } catch (error) {
        console.error('Gemini API Test Failed:', error);
        return ['API test failed - using fallback scenario 1', 'API test failed - using fallback scenario 2'];
    }
}

// Auto-run the test when this script is loaded
testGeminiAPI().then(scenarios => {
    console.log('✅ Gemini API test completed successfully!');
    console.log('Sample scenarios generated:', scenarios);
}).catch(error => {
    console.error('❌ Gemini API test failed:', error);
});
