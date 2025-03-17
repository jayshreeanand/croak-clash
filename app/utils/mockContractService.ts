// Mock data for agents
const mockAgents = [
    { id: '1', name: 'Agent Alpha', power: 85, defense: 70, health: 100, faction: 'AI Overlords' },
    { id: '2', name: 'Agent Beta', power: 75, defense: 85, health: 100, faction: 'Rogue AI' },
    { id: '3', name: 'Agent Gamma', power: 90, defense: 60, health: 100, faction: 'Human Resistance' },
    { id: '4', name: 'Agent Delta', power: 65, defense: 90, health: 100, faction: 'AI Overlords' },
    { id: '5', name: 'Agent Epsilon', power: 80, defense: 80, health: 100, faction: 'Rogue AI' },
];

// Mock contract service
const mockContractService = {
    // Get agent by ID
    getAgentById: async (id: string) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockAgents.find(agent => agent.id === id);
    },
    
    // Get all agents
    getAllAgents: async () => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        return mockAgents;
    },
    
    // Simulate battle between two agents
    simulateBattle: async (attackerId: string, defenderId: string) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const attacker = mockAgents.find(agent => agent.id === attackerId);
        const defender = mockAgents.find(agent => agent.id === defenderId);
        
        if (!attacker || !defender) {
            throw new Error('Agent not found');
        }
        
        // Simple battle logic: compare attack power vs defense
        const attackerScore = attacker.power * (Math.random() * 0.5 + 0.75); // Random factor
        const defenderScore = defender.defense * (Math.random() * 0.5 + 0.75); // Random factor
        
        return {
            winner: attackerScore > defenderScore ? attackerId : defenderId,
            attackerScore,
            defenderScore
        };
    },
    
    // Create a new agent
    createAgent: async (name: string, faction: string) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate random stats
        const power = Math.floor(Math.random() * 30) + 60; // 60-90
        const defense = Math.floor(Math.random() * 30) + 60; // 60-90
        
        const newAgent = {
            id: (mockAgents.length + 1).toString(),
            name,
            power,
            defense,
            health: 100,
            faction
        };
        
        // In a real app, we would add this to the blockchain
        mockAgents.push(newAgent);
        
        return newAgent;
    }
};

export default mockContractService; 