// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AIApocalypseChain {
    struct Faction {
        string name;
        uint256 strength;
        uint256 defense;
        uint256 alliances;
        address owner;
    }

    mapping(uint256 => Faction) public factions;
    uint256 public factionCount;

    event Battle(uint256 attacker, uint256 defender, bool attackerWon);
    event Alliance(uint256 faction1, uint256 faction2);

    function createFaction(string memory _name) public {
        factions[factionCount] = Faction(_name, 100, 100, 0, msg.sender);
        factionCount++;
    }

    function attack(uint256 attackerId, uint256 defenderId) public {
        require(factions[attackerId].owner == msg.sender, "Not your faction");
        require(attackerId != defenderId, "Cannot attack itself");

        bool attackerWon = factions[attackerId].strength > factions[defenderId].defense;
        if (attackerWon) {
            factions[attackerId].strength += 10;
            factions[defenderId].defense -= 10;
        } else {
            factions[attackerId].strength -= 10;
            factions[defenderId].defense += 10;
        }

        emit Battle(attackerId, defenderId, attackerWon);
    }

    function formAlliance(uint256 faction1, uint256 faction2) public {
        require(factions[faction1].owner == msg.sender, "Not your faction");
        require(faction1 != faction2, "Cannot ally with itself");
        
        factions[faction1].alliances++;
        factions[faction2].alliances++;

        emit Alliance(faction1, faction2);
    }
}
