// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CreatorContract {


    struct Request {
        address requester;
        string message;
        uint donation;
        uint createdAt;
    }

    // Struct to represent a data entry
    struct Metadata {
        string post;
        string creatorName;
        string creatorDescription;
        string initialVideoUrls;
        address creatorAddress;
        Request[] requests;
        bool active;
        uint createdAt;
        bool isValue;
        uint256 requestCount;
        Request lastRequest;
    }

    // owner
    address private owner;
    // metadata
    Metadata private metadata;
    string public network;

    // map from post to metadata
    mapping(string => Metadata) private creatorMap;
    mapping(string => Request[]) private postToRequestMap;
    mapping(string => Request) private postToLastRequest;

    event PostCreated(string post);
    event VideoUploaded(address verifier, string video, string description);
    event VideoRequest(address requester, string name, string message, uint donation);

    constructor(string memory _network) {
        owner = msg.sender;
        network = _network;
    }

    function registerPost(string memory _post,
        string memory _creatorName,
        string memory _creatorDescription,
        string memory _initialVideoUrls
    ) public returns (Metadata memory) {
        Metadata storage creator = creatorMap[_post];
        require(!creator.isValue, "A post for this post already exists");

        // set values
        creator.post = _post;
        creator.creatorName = _creatorName;
        creator.creatorDescription = _creatorDescription;
        creator.initialVideoUrls = _initialVideoUrls;
        creator.creatorAddress = msg.sender;
        creator.active = true;
        creator.createdAt = block.timestamp;
        creator.isValue = true;

        creatorMap[_post] = creator;

        emit PostCreated(_post);
        return creatorMap[_post];
    }

    function makeRequest(string memory _post, string memory _message) public payable {
        Metadata storage creator = creatorMap[_post];
        require(creator.isValue, "A post for this post does not exist");

        address requester = msg.sender;
        uint donation = msg.value;

        // assert that the sender is not the creator
        require(msg.sender != creator.creatorAddress, "Creator cannot request their own video");

        if (donation > 0) {
            payable(creator.creatorAddress).transfer(donation);
        }

        // emit event
        emit VideoRequest(requester, _post, _message, donation);

        Request[] storage requests = postToRequestMap[_post];
        Request memory request = Request(requester, _message, donation, block.timestamp);
        requests.push(request);
        postToRequestMap[_post] = requests;
        postToLastRequest[_post] = request;
    }

    function makeUpload(string memory _post, string memory _contentId, string memory _description) public returns (Metadata memory) {
        Metadata memory creator = getMetadataForPost(_post);

        // assert that the sender is the creator
        require(msg.sender == creator.creatorAddress, "Only the owner of this post can upload video content");

        // emit event
        emit VideoUploaded(msg.sender, _contentId, _description);
        return metadata;
    }

    // get metadata
    function getMetadataForPost(string memory _post) public view returns (Metadata memory) {
        // Verify post exists
        require(creatorMap[_post].isValue, "Creator page does not exist");
        return getMetadataUnchecked(_post);
    }

    function getMetadataUnchecked(string memory _post) public view returns (Metadata memory) {
        Metadata memory creator = creatorMap[_post];
        creator.requests = postToRequestMap[_post];
        creator.lastRequest = postToLastRequest[_post];
        return creator;
    }

    // get owner
    function getContractOwner() public view returns (address) {
        return owner;
    }
}
