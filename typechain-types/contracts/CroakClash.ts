/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace CroakClash {
  export type BattleStruct = {
    id: BigNumberish;
    player1: AddressLike;
    player2: AddressLike;
    frog1Id: BigNumberish;
    frog2Id: BigNumberish;
    winner: AddressLike;
    timestamp: BigNumberish;
    isComplete: boolean;
  };

  export type BattleStructOutput = [
    id: bigint,
    player1: string,
    player2: string,
    frog1Id: bigint,
    frog2Id: bigint,
    winner: string,
    timestamp: bigint,
    isComplete: boolean
  ] & {
    id: bigint;
    player1: string;
    player2: string;
    frog1Id: bigint;
    frog2Id: bigint;
    winner: string;
    timestamp: bigint;
    isComplete: boolean;
  };

  export type PlayerStatsStruct = {
    battlesWon: BigNumberish;
    battlesLost: BigNumberish;
    totalExperience: BigNumberish;
    lastBattleTime: BigNumberish;
  };

  export type PlayerStatsStructOutput = [
    battlesWon: bigint,
    battlesLost: bigint,
    totalExperience: bigint,
    lastBattleTime: bigint
  ] & {
    battlesWon: bigint;
    battlesLost: bigint;
    totalExperience: bigint;
    lastBattleTime: bigint;
  };
}

export interface CroakClashInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BATTLE_COOLDOWN"
      | "CROAK_REWARD"
      | "EXPERIENCE_PER_BATTLE"
      | "battleCount"
      | "battles"
      | "claimResources"
      | "completeBattle"
      | "createBattle"
      | "croakToken"
      | "factions"
      | "frogNFT"
      | "getBattle"
      | "getFactionResources"
      | "getPlayerStats"
      | "joinFaction"
      | "owner"
      | "pause"
      | "paused"
      | "playerStats"
      | "renounceOwnership"
      | "startBattle"
      | "transferOwnership"
      | "unpause"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BattleCompleted"
      | "BattleCreated"
      | "FactionJoined"
      | "FrogTrained"
      | "OwnershipTransferred"
      | "Paused"
      | "ResourceClaimed"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BATTLE_COOLDOWN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CROAK_REWARD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXPERIENCE_PER_BATTLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "battleCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "battles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimResources",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "completeBattle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createBattle",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "croakToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factions", values: [string]): string;
  encodeFunctionData(functionFragment: "frogNFT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBattle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFactionResources",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayerStats",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "joinFaction",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playerStats",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startBattle",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BATTLE_COOLDOWN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CROAK_REWARD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXPERIENCE_PER_BATTLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "battleCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "battles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "completeBattle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createBattle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "croakToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "frogNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBattle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFactionResources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlayerStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "joinFaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playerStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBattle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
}

export namespace BattleCompletedEvent {
  export type InputTuple = [battleId: BigNumberish, winner: AddressLike];
  export type OutputTuple = [battleId: bigint, winner: string];
  export interface OutputObject {
    battleId: bigint;
    winner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BattleCreatedEvent {
  export type InputTuple = [
    battleId: BigNumberish,
    player1: AddressLike,
    player2: AddressLike
  ];
  export type OutputTuple = [
    battleId: bigint,
    player1: string,
    player2: string
  ];
  export interface OutputObject {
    battleId: bigint;
    player1: string;
    player2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FactionJoinedEvent {
  export type InputTuple = [faction: string, player: AddressLike];
  export type OutputTuple = [faction: string, player: string];
  export interface OutputObject {
    faction: string;
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FrogTrainedEvent {
  export type InputTuple = [frogId: BigNumberish, newLevel: BigNumberish];
  export type OutputTuple = [frogId: bigint, newLevel: bigint];
  export interface OutputObject {
    frogId: bigint;
    newLevel: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ResourceClaimedEvent {
  export type InputTuple = [
    faction: string,
    resourceType: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    faction: string,
    resourceType: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    faction: string;
    resourceType: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CroakClash extends BaseContract {
  connect(runner?: ContractRunner | null): CroakClash;
  waitForDeployment(): Promise<this>;

  interface: CroakClashInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BATTLE_COOLDOWN: TypedContractMethod<[], [bigint], "view">;

  CROAK_REWARD: TypedContractMethod<[], [bigint], "view">;

  EXPERIENCE_PER_BATTLE: TypedContractMethod<[], [bigint], "view">;

  battleCount: TypedContractMethod<[], [bigint], "view">;

  battles: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint, string, bigint, boolean] & {
        id: bigint;
        player1: string;
        player2: string;
        frog1Id: bigint;
        frog2Id: bigint;
        winner: string;
        timestamp: bigint;
        isComplete: boolean;
      }
    ],
    "view"
  >;

  claimResources: TypedContractMethod<
    [factionName: string, resourceType: BigNumberish],
    [void],
    "nonpayable"
  >;

  completeBattle: TypedContractMethod<
    [battleId: BigNumberish],
    [void],
    "nonpayable"
  >;

  createBattle: TypedContractMethod<
    [frogId: BigNumberish, opponent: AddressLike, opponentFrogId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  croakToken: TypedContractMethod<[], [string], "view">;

  factions: TypedContractMethod<
    [arg0: string],
    [
      [string, bigint, bigint] & {
        name: string;
        totalPower: bigint;
        memberCount: bigint;
      }
    ],
    "view"
  >;

  frogNFT: TypedContractMethod<[], [string], "view">;

  getBattle: TypedContractMethod<
    [battleId: BigNumberish],
    [CroakClash.BattleStructOutput],
    "view"
  >;

  getFactionResources: TypedContractMethod<
    [factionName: string],
    [
      [bigint, bigint, bigint] & {
        lilyPads: bigint;
        flies: bigint;
        water: bigint;
      }
    ],
    "view"
  >;

  getPlayerStats: TypedContractMethod<
    [player: AddressLike],
    [CroakClash.PlayerStatsStructOutput],
    "view"
  >;

  joinFaction: TypedContractMethod<
    [factionName: string, frogId: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  playerStats: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        battlesWon: bigint;
        battlesLost: bigint;
        totalExperience: bigint;
        lastBattleTime: bigint;
      }
    ],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  startBattle: TypedContractMethod<
    [attackerId: BigNumberish, defenderId: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BATTLE_COOLDOWN"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "CROAK_REWARD"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "EXPERIENCE_PER_BATTLE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "battleCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "battles"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint, string, bigint, boolean] & {
        id: bigint;
        player1: string;
        player2: string;
        frog1Id: bigint;
        frog2Id: bigint;
        winner: string;
        timestamp: bigint;
        isComplete: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "claimResources"
  ): TypedContractMethod<
    [factionName: string, resourceType: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "completeBattle"
  ): TypedContractMethod<[battleId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createBattle"
  ): TypedContractMethod<
    [frogId: BigNumberish, opponent: AddressLike, opponentFrogId: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "croakToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factions"
  ): TypedContractMethod<
    [arg0: string],
    [
      [string, bigint, bigint] & {
        name: string;
        totalPower: bigint;
        memberCount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "frogNFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getBattle"
  ): TypedContractMethod<
    [battleId: BigNumberish],
    [CroakClash.BattleStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getFactionResources"
  ): TypedContractMethod<
    [factionName: string],
    [
      [bigint, bigint, bigint] & {
        lilyPads: bigint;
        flies: bigint;
        water: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPlayerStats"
  ): TypedContractMethod<
    [player: AddressLike],
    [CroakClash.PlayerStatsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "joinFaction"
  ): TypedContractMethod<
    [factionName: string, frogId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "playerStats"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        battlesWon: bigint;
        battlesLost: bigint;
        totalExperience: bigint;
        lastBattleTime: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startBattle"
  ): TypedContractMethod<
    [attackerId: BigNumberish, defenderId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "BattleCompleted"
  ): TypedContractEvent<
    BattleCompletedEvent.InputTuple,
    BattleCompletedEvent.OutputTuple,
    BattleCompletedEvent.OutputObject
  >;
  getEvent(
    key: "BattleCreated"
  ): TypedContractEvent<
    BattleCreatedEvent.InputTuple,
    BattleCreatedEvent.OutputTuple,
    BattleCreatedEvent.OutputObject
  >;
  getEvent(
    key: "FactionJoined"
  ): TypedContractEvent<
    FactionJoinedEvent.InputTuple,
    FactionJoinedEvent.OutputTuple,
    FactionJoinedEvent.OutputObject
  >;
  getEvent(
    key: "FrogTrained"
  ): TypedContractEvent<
    FrogTrainedEvent.InputTuple,
    FrogTrainedEvent.OutputTuple,
    FrogTrainedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "ResourceClaimed"
  ): TypedContractEvent<
    ResourceClaimedEvent.InputTuple,
    ResourceClaimedEvent.OutputTuple,
    ResourceClaimedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "BattleCompleted(uint256,address)": TypedContractEvent<
      BattleCompletedEvent.InputTuple,
      BattleCompletedEvent.OutputTuple,
      BattleCompletedEvent.OutputObject
    >;
    BattleCompleted: TypedContractEvent<
      BattleCompletedEvent.InputTuple,
      BattleCompletedEvent.OutputTuple,
      BattleCompletedEvent.OutputObject
    >;

    "BattleCreated(uint256,address,address)": TypedContractEvent<
      BattleCreatedEvent.InputTuple,
      BattleCreatedEvent.OutputTuple,
      BattleCreatedEvent.OutputObject
    >;
    BattleCreated: TypedContractEvent<
      BattleCreatedEvent.InputTuple,
      BattleCreatedEvent.OutputTuple,
      BattleCreatedEvent.OutputObject
    >;

    "FactionJoined(string,address)": TypedContractEvent<
      FactionJoinedEvent.InputTuple,
      FactionJoinedEvent.OutputTuple,
      FactionJoinedEvent.OutputObject
    >;
    FactionJoined: TypedContractEvent<
      FactionJoinedEvent.InputTuple,
      FactionJoinedEvent.OutputTuple,
      FactionJoinedEvent.OutputObject
    >;

    "FrogTrained(uint256,uint256)": TypedContractEvent<
      FrogTrainedEvent.InputTuple,
      FrogTrainedEvent.OutputTuple,
      FrogTrainedEvent.OutputObject
    >;
    FrogTrained: TypedContractEvent<
      FrogTrainedEvent.InputTuple,
      FrogTrainedEvent.OutputTuple,
      FrogTrainedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "ResourceClaimed(string,uint8,uint256)": TypedContractEvent<
      ResourceClaimedEvent.InputTuple,
      ResourceClaimedEvent.OutputTuple,
      ResourceClaimedEvent.OutputObject
    >;
    ResourceClaimed: TypedContractEvent<
      ResourceClaimedEvent.InputTuple,
      ResourceClaimedEvent.OutputTuple,
      ResourceClaimedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
