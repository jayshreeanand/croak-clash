use near_sdk::{env, near_bindgen, AccountId, Balance};
use std::collections::HashMap;

#[near_bindgen]
#[derive(Default)]
pub struct ApocalypseChain {
    agents: HashMap<AccountId, Agent>,
    factions: HashMap<String, Faction>,
}

#[derive(Clone, Debug)]
pub struct Agent {
    name: String,
    power: u64,
    faction: String,
}

#[derive(Clone, Debug)]
pub struct Faction {
    name: String,
    total_power: u64,
}

#[near_bindgen]
impl ApocalypseChain {
    pub fn register_agent(&mut self, name: String, faction: String) {
        let account_id = env::signer_account_id();
        let power = 100;  // Default power level

        let agent = Agent { name: name.clone(), power, faction: faction.clone() };
        self.agents.insert(account_id.clone(), agent);
        
        self.factions.entry(faction.clone()).or_insert(Faction { name: faction.clone(), total_power: 0 }).total_power += power;
    }

    pub fn attack(&mut self, attacker_id: AccountId, defender_id: AccountId) {
        let attacker = self.agents.get_mut(&attacker_id).expect("Attacker not found");
        let defender = self.agents.get_mut(&defender_id).expect("Defender not found");

        if attacker.power > defender.power {
            attacker.power += defender.power / 2;
            defender.power /= 2;
        } else {
            defender.power += attacker.power / 2;
            attacker.power /= 2;
        }
    }

    pub fn train_agent(&mut self, agent_id: AccountId, increase: u64) {
        let agent = self.agents.get_mut(&agent_id).expect("Agent not found");
        agent.power += increase;
    }

    pub fn get_agent(&self, agent_id: AccountId) -> Option<Agent> {
        self.agents.get(&agent_id).cloned()
    }
}
