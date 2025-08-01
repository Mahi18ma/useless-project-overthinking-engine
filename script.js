// The Ultimate Overthinking Engine™ - JavaScript
// Making simple JavaScript decisions impossibly complex since 2025

class UltimateOverthinkingEngine {
    constructor() {
        this.anxietyLevel = 0;
        this.decisionComplexity = 0;
        this.overthinkingScore = 0;
        this.selectedEmotions = [];
        this.tags = [];
        this.isLoading = true;
        this.possibilities = 0;
        this.worstCaseScenarios = 0;
        this.bestCaseScenarios = 0;
        this.quantumPossibilities = 0;
        this.multiverseOutcomes = 0;
          // Gemini API configuration - Updated to 2.0 Flash
        this.geminiApiKey = 'AIzaSyBnE2E-0BOQop43TY5Dry4R1buLFGkiSeo';
        this.geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
        
        // Chart instances for proper cleanup
        this.efficiencyChart = null;
        this.anxietyChart = null;
        
        this.loadingMessages = [
            "Calibrating anxiety amplifiers...",
            "Generating infinite possibilities...",
            "Consulting parallel universe databases...",
            "Applying butterfly effect calculations...",
            "Overcomplicating simple decisions...",
            "Creating mountains from molehills...",
            "Initializing decision paralysis protocols...",
            "Loading existential dread generators...",
            "Preparing worst-case scenario engines...",
            "Activating overthinking algorithms...",
            "Establishing chaos theory connections...",
            "Maximizing analysis paralysis potential..."
        ];
        
        this.init();
    }
    
    init() {
        this.startLoading();
        this.bindEvents();
        this.initializeAnalytics();
        this.generateInitialChaos();
    }
      startLoading() {
        let messageIndex = 0;
        let progress = 0;
        
        const updateLoading = () => {
            if (progress >= 100) {
                this.finishLoading();
                return;
            }
            
            // Update progress bar - faster increments
            progress += Math.random() * 15 + 10; // Increased from 8+2
            progress = Math.min(progress, 100);
            document.getElementById('progress-bar').style.width = progress + '%';
            
            // Update loading message more frequently
            if (Math.random() < 0.6) { // Increased from 0.3
                messageIndex = (messageIndex + 1) % this.loadingMessages.length;
                document.getElementById('loading-message').textContent = this.loadingMessages[messageIndex];
            }
            
            // Update fake stats
            this.possibilities += Math.floor(Math.random() * 1000) + 100;
            this.worstCaseScenarios += Math.floor(Math.random() * 50) + 10;
            this.anxietyLevel += Math.random() * 5;
            
            document.getElementById('possibilities-count').textContent = this.possibilities.toLocaleString();
            document.getElementById('scenarios-count').textContent = this.worstCaseScenarios.toLocaleString();
            document.getElementById('anxiety-level').textContent = Math.floor(this.anxietyLevel) + '%';
            
            setTimeout(updateLoading, Math.random() * 100 + 50); // Reduced from 200+100
        };
        
        updateLoading();
    }
    
    finishLoading() {
        setTimeout(() => {
            document.getElementById('loading-container').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
            this.isLoading = false;
            this.startContinuousAnxietyIncrease();
        }, 1000);
    }
    
    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchSection(e.target.dataset.section);
                this.increaseAnxiety(5);
            });
        });
        
        // Decision input
        const decisionInput = document.getElementById('decision-input');
        if (decisionInput) {
            decisionInput.addEventListener('input', (e) => {
                this.updateDecisionComplexity(e.target.value);
            });
        }
        
        // Significance range
        const significanceRange = document.getElementById('significance');
        if (significanceRange) {
            significanceRange.addEventListener('input', (e) => {
                document.getElementById('significance-value').textContent = e.target.value;
                this.increaseAnxiety(Math.floor(e.target.value / 100));
            });
        }
        
        // Emotion buttons
        document.querySelectorAll('.emotion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.toggleEmotion(e.target);
                this.increaseAnxiety(10);
            });
        });
        
        // Tags
        const addTagBtn = document.getElementById('add-tag');
        const tagInput = document.getElementById('tag-input');
        
        if (addTagBtn && tagInput) {
            addTagBtn.addEventListener('click', () => {
                this.addTag(tagInput.value);
                tagInput.value = '';
            });
            
            tagInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.addTag(e.target.value);
                    e.target.value = '';
                }
            });
        }
        
        // Analysis button
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => {
                this.beginCatastrophicAnalysis();
            });
        }
        
        // Generate scenario buttons
        document.querySelectorAll('.generate-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                this.generateScenarios(type);
            });
        });
    }
    
    switchSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        document.getElementById(sectionName).classList.add('active');
        
        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
        
        // Special effects for each section
        this.addSectionSpecialEffects(sectionName);
    }
    
    addSectionSpecialEffects(sectionName) {
        switch(sectionName) {
            case 'scenarios':
                this.generateAllScenarios();
                break;
            case 'analytics':
                this.updateAnalytics();
                this.initializeEnhancedAnalytics();
                break;
        }
    }
    
    updateDecisionComplexity(text) {
        const charCount = text.length;
        document.getElementById('char-count').textContent = charCount;
        
        // Calculate absurd complexity score
        let complexity = charCount * 47;
        complexity += (text.match(/\?/g) || []).length * 1000;
        complexity += (text.match(/and|or|but|however|although/gi) || []).length * 500;
        complexity += (text.split(' ').length) * 73;
        
        this.decisionComplexity = complexity;
        document.getElementById('complexity-score').textContent = complexity.toLocaleString();
        
        this.increaseAnxiety(Math.floor(complexity / 100));
    }
    
    toggleEmotion(button) {
        const emotion = button.dataset.emotion;
        
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            this.selectedEmotions = this.selectedEmotions.filter(e => e !== emotion);
        } else {
            button.classList.add('selected');
            this.selectedEmotions.push(emotion);
        }
        
        this.updateSelectedEmotions();
        this.increaseAnxiety(15);
    }
    
    updateSelectedEmotions() {
        const container = document.getElementById('selected-emotions');
        if (container) {
            container.innerHTML = '';
            this.selectedEmotions.forEach(emotion => {
                const tag = document.createElement('span');
                tag.className = 'emotion-tag';
                tag.textContent = emotion.replace('-', ' ');
                container.appendChild(tag);
            });
        }
    }
    
    addTag(tagText) {
        if (tagText.trim() && !this.tags.includes(tagText.trim())) {
            this.tags.push(tagText.trim());
            this.updateTagsDisplay();
            this.increaseAnxiety(8);
        }
    }
    
    updateTagsDisplay() {
        const container = document.getElementById('tags-display');
        if (container) {
            container.innerHTML = '';
            this.tags.forEach((tag, index) => {
                const tagElement = document.createElement('span');
                tagElement.className = 'tag';
                tagElement.innerHTML = `${tag} <span class="remove-tag" onclick="overthinkingEngine.removeTag(${index})">×</span>`;
                container.appendChild(tagElement);
            });
        }
    }
    
    removeTag(index) {
        this.tags.splice(index, 1);
        this.updateTagsDisplay();
    }
    
    increaseAnxiety(amount) {
        this.anxietyLevel += amount;
        
        // Update anxiety meter
        const meterFill = document.getElementById('anxiety-meter-fill');
        const percentageElement = document.getElementById('anxiety-percentage');
        
        if (meterFill && percentageElement) {
            const percentage = Math.min(this.anxietyLevel, 100);
            meterFill.style.width = percentage + '%';
            percentageElement.textContent = Math.floor(this.anxietyLevel) + '%';
        }
        
        // Add chaos effects at high anxiety levels
        if (this.anxietyLevel > 500) {
            this.addChaosEffect();
        }
        
        if (this.anxietyLevel > 800) {
            this.enableChaosMode();
        }
    }
    
    startContinuousAnxietyIncrease() {
        setInterval(() => {
            if (!this.isLoading) {
                this.increaseAnxiety(Math.random() * 3 + 1);
                this.updateFooterStats();
            }
        }, 5000);
    }
    
    addChaosEffect() {
        const elements = document.querySelectorAll('.input-group, .scenario-card, .metric-card');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement) {
            randomElement.classList.add('floating');
            setTimeout(() => {
                randomElement.classList.remove('floating');
            }, 3000);
        }
    }
    
    enableChaosMode() {
        if (!document.body.classList.contains('chaos-mode')) {
            document.body.classList.add('chaos-mode');
            setTimeout(() => {
                document.body.classList.remove('chaos-mode');
            }, 2000);
        }
    }
    
    beginCatastrophicAnalysis() {
        this.showLoadingMessage("Beginning catastrophic over-analysis...");
        this.increaseAnxiety(100);
        
        setTimeout(() => {
            this.generateAllScenarios();
            this.switchSection('scenarios');
            this.showAlert("Analysis complete! You now have 47,293 new things to worry about. You're welcome!");
        }, 3000);
    }
      // Enhanced Gemini API Integration
    async generateScenarios(type) {
        const listId = type + '-list';
        const container = document.getElementById(listId);
        
        if (!container) return;
        
        // Get user's current input context
        const userDecision = document.getElementById('decision-input')?.value || 'your decision';
        const significance = document.getElementById('significance')?.value || '8000';
        const selectedEmotions = this.selectedEmotions.join(', ') || 'anxiety';
        const userTags = this.tags.join(', ') || 'general context';
        
        // Show loading indicator
        const loadingElement = document.createElement('div');
        loadingElement.className = 'scenario-item';
        loadingElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating scenarios with AI...';
        loadingElement.style.fontStyle = 'italic';
        loadingElement.style.color = '#666';
        container.appendChild(loadingElement);
        
        // Set a timeout for the API call
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('API request timeout after 10 seconds')), 10000);
        });
          try {
            // Use Gemini API for dynamic scenario generation with timeout
            const scenarios = await Promise.race([
                this.generateGeminiScenarios(type, userDecision, significance, selectedEmotions, userTags),
                timeoutPromise
            ]);
            
            // Remove loading indicator
            if (container.contains(loadingElement)) {
                container.removeChild(loadingElement);
            }
            
            // Add context header for this generation
            const contextHeader = document.createElement('div');
            contextHeader.className = 'scenario-context';
            contextHeader.innerHTML = `
                <div style="font-size: 0.8em; color: #666; margin-bottom: 10px; padding: 8px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #007bff;">
                    <strong>🎯 Generated for:</strong> "${userDecision}" 
                    <br><strong>📊 Significance:</strong> ${significance}/10000 (${significance > 7000 ? 'LIFE-CHANGING' : significance > 5000 ? 'Important' : significance > 3000 ? 'Moderate' : 'Minor'})
                    <br><strong>😰 Emotions:</strong> ${selectedEmotions || 'None selected'}
                    <br><strong>🏷️ Tags:</strong> ${userTags || 'None added'}
                </div>
            `;
            container.appendChild(contextHeader);
            
            // Add the generated scenarios
            scenarios.forEach((scenario, index) => {
                const scenarioElement = document.createElement('div');
                scenarioElement.className = 'scenario-item';
                scenarioElement.innerHTML = `<strong>${index + 1}.</strong> ${scenario}`;
                container.appendChild(scenarioElement);
                
                this.increaseAnxiety(20);
            });
            
        } catch (error) {
            console.warn(`Failed to generate ${type} scenarios with API, using fallback:`, error);
            
            // Remove loading indicator
            if (container.contains(loadingElement)) {
                container.removeChild(loadingElement);
            }
            
            // Show error message briefly
            const errorElement = document.createElement('div');
            errorElement.className = 'scenario-item';
            errorElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> API unavailable, using fallback scenarios...';
            errorElement.style.fontStyle = 'italic';
            errorElement.style.color = '#e74c3c';
            container.appendChild(errorElement);
            
            setTimeout(() => {
                if (container.contains(errorElement)) {
                    container.removeChild(errorElement);
                }
            }, 2000);
            
            // Use fallback scenarios
            const fallbackScenarios = this.getFallbackScenarios(type, userDecision, significance, selectedEmotions, userTags);
            fallbackScenarios.forEach(scenario => {
                const scenarioElement = document.createElement('div');
                scenarioElement.className = 'scenario-item';
                scenarioElement.textContent = scenario;
                container.appendChild(scenarioElement);
                
                this.increaseAnxiety(20);
            });
        }
        
        // Scroll to bottom
        container.scrollTop = container.scrollHeight;
    }      async generateGeminiScenarios(type, userDecision, significance, emotions, tags) {
        // Enhanced prompts with better user context integration
        const contextInfo = `
Decision: "${userDecision}"
Significance: ${significance}/10000 (${significance > 7000 ? 'LIFE-CHANGING' : significance > 5000 ? 'Important' : significance > 3000 ? 'Moderate' : 'Minor'})
Emotional State: ${emotions}
Context Tags: ${tags}
Current Anxiety Level: ${Math.floor(this.anxietyLevel)}%`;

        const prompts = {
            'worst-case': `You are the Ultimate Overthinking Engine™. Based on this context:
${contextInfo}

Generate 3 HILARIOUSLY catastrophic worst-case scenarios. Each should:
- Start with the user's actual decision
- Include absurd butterfly effects 
- Escalate to completely unrealistic global consequences
- Be 1-2 sentences each
- Match the significance level (higher = more dramatic)
- Incorporate the emotions and context

Return ONLY the scenarios, numbered 1-3.`,
            
            'best-case': `You are the Ultimate Overthinking Engine™. Based on this context:
${contextInfo}

Generate 3 RIDICULOUSLY optimistic best-case scenarios. Each should:
- Start with the user's actual decision
- Include impossible positive chain reactions
- Escalate to world-changing benefits
- Be 1-2 sentences each  
- Match the significance level (higher = more amazing)
- Incorporate the emotions and context

Return ONLY the scenarios, numbered 1-3.`,
            
            'quantum': `You are the Ultimate Overthinking Engine™. Based on this context:
${contextInfo}

Generate 3 quantum physics-inspired scenarios. Each should:
- Apply quantum concepts (superposition, entanglement, uncertainty) to the user's decision
- Use scientific terminology in absurd ways
- Be scientifically impossible but funny
- Be 1-2 sentences each
- Incorporate the user's emotional state as quantum variables
- Reference the context tags as quantum fields

Return ONLY the scenarios, numbered 1-3.`,
            
            'multiverse': `You are the Ultimate Overthinking Engine™. Based on this context:
${contextInfo}

Generate 3 multiverse/parallel dimension scenarios. Each should:
- Show how this decision plays out in different universes
- Reference specific parallel dimensions or timelines
- Include bizarre alternative versions of reality
- Be 1-2 sentences each
- Use the significance level to determine universe complexity
- Weave in the emotions and context as dimensional variables

Return ONLY the scenarios, numbered 1-3.`
        };

        console.log(`🔄 Generating ${type} scenarios for: "${userDecision}"`);
        console.log(`📊 Context: Significance ${significance}, Emotions: ${emotions}, Tags: ${tags}`);try {
            const response = await fetch(`${this.geminiApiUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-goog-api-key': this.geminiApiKey
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompts[type]
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.9,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    },
                    safetySettings: [
                        {
                            category: "HARM_CATEGORY_HARASSMENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_HATE_SPEECH",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        }
                    ]
                })
            });

            console.log(`📡 API Response Status: ${response.status}`);

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`❌ API Error: ${response.status} - ${errorText}`);
                throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            console.log('📄 API Response:', data);

            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
                console.error('❌ Unexpected API response structure:', data);
                throw new Error('Invalid API response structure');
            }

            const generatedText = data.candidates[0].content.parts[0].text;
            console.log('✨ Generated text:', generatedText);
            
            // Parse the response - split by lines and clean up
            const scenarios = generatedText
                .split('\n')
                .map(line => line.trim())
                .filter(line => line && !line.match(/^\d+\.?\s*$/) && line.length > 10)
                .map(line => line.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, ''))
                .slice(0, 3);
            
            console.log(`✅ Parsed ${scenarios.length} scenarios:`, scenarios);
            return scenarios.length > 0 ? scenarios : this.getFallbackScenarios(type, userDecision, significance, emotions, tags);
            
        } catch (error) {
            console.error(`❌ Error generating ${type} scenarios:`, error);
            throw error; // Re-throw to be caught by generateScenarios
        }
    }

    getFallbackScenarios(type, userDecision, significance, emotions, tags) {
        const fallbacks = {
            'worst-case': [
                `Your "${userDecision}" choice triggers a global coffee shortage, leading to worldwide productivity collapse and the fall of civilization`,
                `This decision creates a butterfly effect that accidentally prevents the invention of pizza, causing mass existential crisis`,
                `Your choice somehow disrupts the space-time continuum, making everyone forget how to use doorknobs`
            ],
            'best-case': [
                `Your "${userDecision}" decision leads to you discovering the cure for Monday blues and becoming ruler of all weekends`,
                `This choice triggers a chain reaction that results in world peace, unlimited pizza, and flying cars for everyone`,
                `Your decision accidentally makes you the inventor of teleportation, solving traffic forever`
            ],
            'quantum': [
                `In quantum superposition, your "${userDecision}" exists in all possible states until someone observes your choice`,
                `Quantum entanglement means your decision is mysteriously connected to a penguin's choice in Antarctica`,
                `The uncertainty principle ensures you cannot know both what you want AND when you want it`
            ],
            'multiverse': [
                `In Universe #${significance}: Your "${userDecision}" choice makes you emperor of Mars through ${emotions}`,
                `In Dimension X-42: This decision leads to cats evolving opposable thumbs and taking over via ${tags}`,
                `In Timeline Ω: Your choice prevents the Robot Apocalypse of 2087 using the power of ${emotions}`
            ]
        };
        
        return fallbacks[type] || ['Something went wrong with reality itself'];
    }
    
    async generateAllScenarios() {
        // Generate all types of scenarios concurrently
        await Promise.all([
            this.generateScenarios('worst-case'),
            this.generateScenarios('best-case'),
            this.generateScenarios('quantum'),
            this.generateScenarios('multiverse')
        ]);
    }
    
    generateInitialChaos() {
        // Generate some initial content
        setTimeout(() => {
            // Add some initial scenarios to make it look active
            if (document.getElementById('worst-case-list')) {
                const initialScenario = document.createElement('div');
                initialScenario.className = 'scenario-item';
                initialScenario.textContent = 'Your decision to use this app will consume the next 47 hours of your life...';
                document.getElementById('worst-case-list').appendChild(initialScenario);
            }
        }, 2000);
    }
    
    // Enhanced Analytics
    initializeAnalytics() {
        this.overthinkingScore = Math.random() * 100;
        this.initializeEnhancedAnalytics();
    }
    
    updateAnalytics() {
        const intensity = Math.min(200 + (this.anxietyLevel || 0) * 10 + Math.random() * 200, 999);
        document.getElementById('overthinking-intensity').textContent = intensity.toFixed(1);
        
        const intensityFill = document.getElementById('intensity-fill');
        if (intensityFill) {
            const fillPercentage = Math.min((intensity / 999) * 100, 100);
            intensityFill.style.width = fillPercentage + '%';
        }
        
        this.updateComplexityMatrix();
        this.updateEnergyTracker();
        this.updateSpiralDetector();
        
        const avoidanceDays = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % 100;
        document.getElementById('avoidance-streak').textContent = avoidanceDays + ' days';
        this.updateAvoidanceStats();
        
        this.updateAchievements();
    }
    
    updateComplexityMatrix() {
        const baseComplications = 20000 + Math.floor(this.decisionComplexity || 0);
        const variables = 1000 + Math.floor((this.decisionComplexity || 0) / 100);
        const regrets = 40000 + Math.floor((this.anxietyLevel || 0) * 500);
        
        document.getElementById('simple-complications').textContent = (baseComplications + Math.floor(Math.random() * 5000)).toLocaleString();
        document.getElementById('variables-added').textContent = (variables + Math.floor(Math.random() * 500)).toLocaleString();
        document.getElementById('regret-possibilities').textContent = (regrets + Math.floor(Math.random() * 10000)).toLocaleString();
    }
    
    updateEnergyTracker() {
        const energyRemaining = Math.max(5, 50 - Math.floor((this.anxietyLevel || 0) / 2));
        const energyFill = document.getElementById('energy-fill');
        
        if (energyFill) {
            energyFill.style.width = energyRemaining + '%';
            energyFill.parentNode.nextElementSibling.textContent = energyRemaining + '% Remaining';
        }
    }
    
    updateSpiralDetector() {
        const spiralIndicator = document.getElementById('spiral-indicator');
        const isSpiraling = (this.anxietyLevel || 0) > 50 || Math.random() < 0.7;
        
        if (spiralIndicator) {
            if (isSpiraling) {
                spiralIndicator.classList.add('active');
                spiralIndicator.classList.remove('inactive');
                spiralIndicator.innerHTML = '<i class="fas fa-tornado"></i><span>SPIRAL DETECTED</span>';
            } else {
                spiralIndicator.classList.remove('active');
                spiralIndicator.classList.add('inactive');
                spiralIndicator.innerHTML = '<i class="fas fa-check"></i><span>NO SPIRAL (YET)</span>';
            }
        }
        
        const spiralDepth = Math.floor(Math.random() * 12) + 1;
        const spiralMinutes = Math.floor(Math.random() * 120);
        const spiralSeconds = Math.floor(Math.random() * 60);
        const escapeProb = Math.max(5, Math.floor(Math.random() * 30));
        
        document.getElementById('spiral-depth').textContent = `Level ${spiralDepth}`;
        document.getElementById('spiral-time').textContent = `${spiralMinutes}m ${spiralSeconds}s`;
        document.getElementById('escape-probability').textContent = `${escapeProb}.${Math.floor(Math.random() * 10)}%`;
    }
    
    updateAvoidanceStats() {
        const decisionsPostponed = 2500 + Math.floor(Math.random() * 1000);
        const excusesGenerated = 14000 + Math.floor(Math.random() * 3000);
        
        document.getElementById('decisions-postponed').textContent = decisionsPostponed.toLocaleString();
        document.getElementById('excuses-generated').textContent = excusesGenerated.toLocaleString();
    }
    
    updateAchievements() {
        const achievements = document.querySelectorAll('.achievement');
        achievements.forEach(achievement => {
            if (Math.random() < 0.1) {
                achievement.classList.remove('locked');
                achievement.classList.add('unlocked');
            }
        });
    }
    
    initializeEnhancedAnalytics() {
        this.updateComplexityMatrix();
        this.updateEnergyTracker();
        this.updateSpiralDetector();
        this.updateAvoidanceStats();
        this.generateStreakCalendar();
        
        setInterval(() => {
            this.updateSpiralDetector();
            this.updateComplexityMatrix();
        }, 3000);
    }
    
    generateStreakCalendar() {
        const calendar = document.getElementById('streak-calendar');
        if (!calendar) return;
        
        calendar.innerHTML = '';
        
        for (let i = 0; i < 49; i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day';
            
            if (Math.random() < 0.8) {
                day.classList.add('streak');
            }
            
            if (i === 48) {
                day.classList.add('today');
            }
            
            calendar.appendChild(day);
        }
    }
    
    updateFooterStats() {
        const statsMap = {
            'decisions-complicated': () => Math.floor(Date.now() / 1000) % 2000000,
            'hours-wasted': () => Math.floor(Date.now() / 100) % 50000000,
            'anxiety-raised': () => '∞',
            'things-complicated': () => 'All of them'
        };
        
        Object.entries(statsMap).forEach(([id, generator]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = typeof generator === 'function' ? generator() : generator;
            }
        });
    }
    
    showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--primary-anxiety);
            color: white;
            padding: var(--spacing-lg);
            border-radius: 12px;
            box-shadow: var(--shadow-chaos);
            z-index: 10000;
            max-width: 400px;
            text-align: center;
            animation: slideIn 0.5s ease;
        `;
        alertDiv.innerHTML = message;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 4000);
    }
    
    showLoadingMessage(message) {
        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--secondary-stress);
            color: white;
            padding: var(--spacing-md);
            border-radius: 8px;
            z-index: 9999;
            animation: slideIn 0.5s ease;
        `;
        loadingDiv.textContent = message;
        
        document.body.appendChild(loadingDiv);
        
        setTimeout(() => {
            if (document.body.contains(loadingDiv)) {
                document.body.removeChild(loadingDiv);
            }
        }, 3000);
    }
}

// Easter eggs and hidden features
class OverthinkingEasterEggs {
    constructor(engine) {
        this.engine = engine;
        this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
        this.konamiIndex = 0;
        
        this.bindEasterEggs();
    }
    
    bindEasterEggs() {
        // Konami code
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === this.konamiCode[this.konamiIndex]) {
                this.konamiIndex++;
                if (this.konamiIndex === this.konamiCode.length) {
                    this.activateMaximumOverthinkingMode();
                    this.konamiIndex = 0;
                }
            } else {
                this.konamiIndex = 0;
            }
        });
        
        // Double-click logo for secret features
        document.querySelector('.logo')?.addEventListener('dblclick', () => {
            this.showSecretFeatures();
        });
        
        // Hold shift and click anxiety meter for chaos
        document.querySelector('.anxiety-meter')?.addEventListener('click', (e) => {
            if (e.shiftKey) {
                this.triggerAnxietyExplosion();
            }
        });
    }
    
    activateMaximumOverthinkingMode() {
        document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
        this.engine.anxietyLevel = 999;
        this.engine.increaseAnxiety(0);
        
        this.engine.showAlert("🎉 MAXIMUM OVERTHINKING MODE ACTIVATED! 🎉<br>You have achieved the ultimate level of decision paralysis. Congratulations on thinking about thinking about thinking!");
        
        document.querySelectorAll('*').forEach(el => {
            if (Math.random() < 0.1) {
                el.style.animation = 'float 1s ease-in-out infinite';
            }
        });
    }
    
    showSecretFeatures() {
        const secrets = [
            "Secret Feature #1: This app can detect when you're overthinking about using the app",
            "Secret Feature #2: Every decision increases your cosmic anxiety rating",
            "Secret Feature #3: The AI is actually just a very anxious goldfish",
            "Secret Feature #4: 73% of statistics in this app are made up",
            "Secret Feature #5: The loading screen takes exactly as long as your decision would have taken"
        ];
        
        const randomSecret = secrets[Math.floor(Math.random() * secrets.length)];
        this.engine.showAlert(randomSecret);
    }
    
    triggerAnxietyExplosion() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const explosion = document.createElement('div');
                explosion.innerHTML = '💥';
                explosion.style.cssText = `
                    position: fixed;
                    top: ${Math.random() * 100}vh;
                    left: ${Math.random() * 100}vw;
                    font-size: 2rem;
                    z-index: 9999;
                    pointer-events: none;
                    animation: explode 1s ease-out forwards;
                `;
                
                document.body.appendChild(explosion);
                
                setTimeout(() => explosion.remove(), 1000);
            }, i * 50);
        }
        
        this.engine.showAlert("💥 ANXIETY EXPLOSION! 💥<br>Your overthinking has reached critical mass!");
    }
}

// Initialize the engine when DOM is loaded
let overthinkingEngine;
let easterEggs;

document.addEventListener('DOMContentLoaded', () => {
    overthinkingEngine = new UltimateOverthinkingEngine();
    easterEggs = new OverthinkingEasterEggs(overthinkingEngine);
    
    // Add explosion animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes explode {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: scale(3) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log("🧠 The Ultimate Overthinking Engine™ has been initialized!");
    console.log("💡 Pro tip: Try the Konami code for a special surprise!");
    console.log("🎯 Double-click the logo for secret features!");
    console.log("⚡ Shift+click the anxiety meter for... chaos!");
});
