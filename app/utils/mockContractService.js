// Update the beginning of your file to ensure Web3 only runs on client
const mockContractService = (() => {
  // Mock data for factions
  const mockFactions = [
    { id: 1, name: "Nexus", power: 75, members: 120, victories: 8, color: "#FF5733", emoji: "🤖" },
    { id: 2, name: "Synapse", power: 60, members: 85, victories: 5, color: "#33FF57", emoji: "🧠" },
    { id: 3, name: "Quantum", power: 90, members: 65, victories: 12, color: "#3357FF", emoji: "🔮" },
    { id: 4, name: "Cipher", power: 45, members: 110, victories: 3, color: "#F033FF", emoji: "🔐" },
    { id: 5, name: "Vortex", power: 80, members: 95, victories: 9, color: "#FF9933", emoji: "🌪️" }
  ];

  // Mock battle history
  const mockBattles = [
    { id: 1, attackerId: 1, defenderId: 2, winner: 1, powerGained: 15, timestamp: Date.now() - 86400000 * 2 },
    { id: 2, attackerId: 3, defenderId: 5, winner: 3, powerGained: 10, timestamp: Date.now() - 86400000 },
    { id: 3, attackerId: 2, defenderId: 4, winner: 4, powerGained: 5, timestamp: Date.now() - 43200000 },
    { id: 4, attackerId: 5, defenderId: 1, winner: 1, powerGained: 20, timestamp: Date.now() - 21600000 }
  ];

  // Mock alliances
  const mockAlliances = [
    { id: 1, faction1Id: 1, faction2Id: 3, formed: Date.now() - 86400000 * 5 },
    { id: 2, faction1Id: 2, faction2Id: 5, formed: Date.now() - 86400000 * 3 }
  ];

  // Mock user data
  let currentUserFaction = null;

  // Mock contract methods
  const mockContractService = {
    // Get all factions
    getFactions: () => {
      return Promise.resolve([...mockFactions]);
    },
    
    // Get a specific faction
    getFaction: (id) => {
      const faction = mockFactions.find(f => f.id === id);
      return Promise.resolve(faction ? {...faction} : null);
    },
    
    // Create a new faction
    createFaction: (name) => {
      const newId = mockFactions.length + 1;
      const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF9933"];
      const emojis = ["🤖", "🧠", "🔮", "🔐", "🌪️"];
      
      const newFaction = {
        id: newId,
        name,
        power: Math.floor(Math.random() * 50) + 30,
        members: Math.floor(Math.random() * 50) + 50,
        victories: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      };
      
      mockFactions.push(newFaction);
      currentUserFaction = newFaction.id;
      
      return Promise.resolve(newFaction);
    },
    
    // Initiate a battle
    attack: (attackerId, defenderId) => {
      // Simple battle logic
      const attacker = mockFactions.find(f => f.id === attackerId);
      const defender = mockFactions.find(f => f.id === defenderId);
      
      if (!attacker || !defender) {
        return Promise.reject(new Error("Faction not found"));
      }
      
      // Determine winner (random with power influence)
      const attackerChance = attacker.power / (attacker.power + defender.power);
      const random = Math.random();
      const winnerId = random < attackerChance ? attackerId : defenderId;
      const loserId = winnerId === attackerId ? defenderId : attackerId;
      
      // Update faction stats
      const winner = mockFactions.find(f => f.id === winnerId);
      const powerGained = Math.floor(Math.random() * 20) + 5;
      winner.power += powerGained;
      winner.victories += 1;
      
      // Add battle to history
      const newBattle = {
        id: mockBattles.length + 1,
        attackerId,
        defenderId,
        winner: winnerId,
        powerGained,
        timestamp: Date.now()
      };
      
      mockBattles.push(newBattle);
      
      return Promise.resolve({
        battle: newBattle,
        winner: {...winner}
      });
    },
    
    // Form an alliance
    formAlliance: (faction1Id, faction2Id) => {
      if (faction1Id === faction2Id) {
        return Promise.reject(new Error("Cannot form alliance with yourself"));
      }
      
      const existingAlliance = mockAlliances.find(
        a => (a.faction1Id === faction1Id && a.faction2Id === faction2Id) || 
             (a.faction1Id === faction2Id && a.faction2Id === faction1Id)
      );
      
      if (existingAlliance) {
        return Promise.reject(new Error("Alliance already exists"));
      }
      
      const newAlliance = {
        id: mockAlliances.length + 1,
        faction1Id,
        faction2Id,
        formed: Date.now()
      };
      
      mockAlliances.push(newAlliance);
      
      return Promise.resolve(newAlliance);
    },
    
    // Get battle history
    getBattleHistory: () => {
      return Promise.resolve([...mockBattles].sort((a, b) => b.timestamp - a.timestamp));
    },
    
    // Get alliances
    getAlliances: () => {
      return Promise.resolve([...mockAlliances]);
    },
    
    // Get user's faction
    getUserFaction: () => {
      if (!currentUserFaction) return Promise.resolve(null);
      return mockContractService.getFaction(currentUserFaction);
    },
    
    // Join a faction
    joinFaction: (factionId) => {
      const faction = mockFactions.find(f => f.id === factionId);
      if (!faction) {
        return Promise.reject(new Error("Faction not found"));
      }
      
      currentUserFaction = factionId;
      faction.members += 1;
      
      return Promise.resolve({...faction});
    }
  };

  return mockContractService;
})();

export default mockContractService; 