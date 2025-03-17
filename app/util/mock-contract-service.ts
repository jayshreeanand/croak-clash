// Define types for our data
export interface Faction {
    id: number;
    name: string;
    power: number;
    members: number;
    victories: number;
    color: string;
    emoji: string;
}

// Mock data for factions
const mockFactions: Faction[] = [
    { id: 1, name: "AI Overlords", power: 85, members: 1250, victories: 42, color: "blue", emoji: "🤖" },
    { id: 2, name: "Rogue AI", power: 78, members: 980, victories: 38, color: "red", emoji: "🔥" },
    { id: 3, name: "Human Resistance", power: 65, members: 750, victories: 35, color: "green", emoji: "🛡️" },
    { id: 4, name: "Quantum Collective", power: 72, members: 620, victories: 28, color: "purple", emoji: "🔮" },
];

// Mock user faction (simulating that the user has joined the Human Resistance)
const mockUserFaction: Faction = mockFactions[2];

// Mock contract service to simulate blockchain interactions
export const mockContractService = {
    // Get all factions
    getFactions: async (): Promise<Faction[]> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return mockFactions;
    },
    
    // Get user's faction
    getUserFaction: async (): Promise<Faction> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        return mockUserFaction;
    },
    
    // Join a faction
    joinFaction: async (factionId: number): Promise<boolean> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        return true;
    },
    
    // Propose alliance between factions
    proposeAlliance: async (factionId1: number, factionId2: number): Promise<boolean> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        // 70% chance of success for demo purposes
        return Math.random() > 0.3;
    }
};