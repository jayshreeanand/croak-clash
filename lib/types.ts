export interface CrossfiConnectData {
    post: string
    name: string
    description: string
}

export interface VideoRequest {
    post: string;
    donation: string;
    message: string;
    requester?: string;
    createdAt?: any;
}

    // struct Metadata {
    //     string post;
    //     string creatorName;
    //     string creatorDescription;
    //     string initialVideoUrls;
    //     address creatorAddress;
    //     VideoRequest[] requests;
    //     bool active;
    //     uint createdAt;
    //     bool isValue;
    // }
export interface ContractMetadata {
    post: string
    creatorName: string
    creatorDescription: string
    initialVideoUrls: any
    creatorAddress: string
    requests: VideoRequest[]
    active: boolean
    createdAt: string
    isValue: boolean
}
