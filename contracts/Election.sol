// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Election {
    // Create Candidate Schema
    struct Candidate {
        uint id; 
        string name;
        uint voteCount;
    }
    
    // Candidate Count
    uint public candidateCount;
    
    // Store Address voting eligibility
    mapping(address => bool) public voteEligible;

    // Store Candidates
    mapping(uint => Candidate) public candidates;
    
    // Event that's emitted when the election has been updated
    event ElectionUpdated (uint id, string name, uint voteCount);
    
    
    constructor() {
        // Code to initiate on contract deployment
        addCandidate("Barack Obama");
        addCandidate('Joe Biden');
    }
    
    // add candidates
    function addCandidate(string memory name) private {
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, name, 0);
    }
    
    function Vote(uint _id) public {
        // Require the voter is eligible to vote
        require(!voteEligible[msg.sender], "You have already Voted");
        // Require that the candidate ID that the voter is targeting is valid
        require(candidates[_id].id != 0, "The ID does not exist");
        // Increment the vote count for the specified candidate
        candidates[_id].voteCount+=1;
        // Change vote eligibility to false after msg.sender has Voted
        voteEligible[msg.sender] = false;
        // Emit the Election Update event when the voter's vote  has been made
        emit ElectionUpdated(_id, candidates[_id].name, candidates[_id].voteCount);
    }
}