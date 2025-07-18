/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  CallOverrides,
  ContractTransaction,
  ethers,
  Overrides,
  PopulatedTransaction,
  Signer,
} from "ethers";
import { TypedEvent, TypedEventFilter, TypedListener } from "./commons";

interface Keep3rAccountanceForTestInterface extends ethers.utils.Interface {
  functions: {
    "bonds(address,address)": FunctionFragment;
    "canActivateAfter(address,address)": FunctionFragment;
    "canWithdrawAfter(address,address)": FunctionFragment;
    "disputes(address)": FunctionFragment;
    "firstSeen(address)": FunctionFragment;
    "hasBonded(address)": FunctionFragment;
    "jobTokenCredits(address,address)": FunctionFragment;
    "jobs()": FunctionFragment;
    "keepers()": FunctionFragment;
    "pendingBonds(address,address)": FunctionFragment;
    "pendingUnbonds(address,address)": FunctionFragment;
    "setJob(address)": FunctionFragment;
    "setKeeper(address)": FunctionFragment;
    "workCompleted(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bonds",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canActivateAfter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canWithdrawAfter",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "disputes", values: [string]): string;
  encodeFunctionData(functionFragment: "firstSeen", values: [string]): string;
  encodeFunctionData(functionFragment: "hasBonded", values: [string]): string;
  encodeFunctionData(
    functionFragment: "jobTokenCredits",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "jobs", values?: undefined): string;
  encodeFunctionData(functionFragment: "keepers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingBonds",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingUnbonds",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "setJob", values: [string]): string;
  encodeFunctionData(functionFragment: "setKeeper", values: [string]): string;
  encodeFunctionData(
    functionFragment: "workCompleted",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "bonds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canActivateAfter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canWithdrawAfter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "firstSeen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasBonded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "jobTokenCredits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jobs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keepers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingBonds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingUnbonds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setJob", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "workCompleted",
    data: BytesLike
  ): Result;

  events: {
    "Bonding(address,address,uint256)": EventFragment;
    "Unbonding(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bonding"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unbonding"): EventFragment;
}

export class Keep3rAccountanceForTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: Keep3rAccountanceForTestInterface;

  functions: {
    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    disputes(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    firstSeen(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    hasBonded(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    jobs(overrides?: CallOverrides): Promise<[string[]] & { _list: string[] }>;

    keepers(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _list: string[] }>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setJob(
      job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeeper(
      keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    workCompleted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  bonds(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  canActivateAfter(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  canWithdrawAfter(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  disputes(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  firstSeen(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  hasBonded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  jobTokenCredits(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  jobs(overrides?: CallOverrides): Promise<string[]>;

  keepers(overrides?: CallOverrides): Promise<string[]>;

  pendingBonds(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingUnbonds(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setJob(
    job: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeeper(
    keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  workCompleted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disputes(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    firstSeen(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    hasBonded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jobs(overrides?: CallOverrides): Promise<string[]>;

    keepers(overrides?: CallOverrides): Promise<string[]>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setJob(job: string, overrides?: CallOverrides): Promise<void>;

    setKeeper(keeper: string, overrides?: CallOverrides): Promise<void>;

    workCompleted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Bonding(
      _keeper?: string | null,
      _bonding?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeper: string; _bonding: string; _amount: BigNumber }
    >;

    Unbonding(
      _keeperOrJob?: string | null,
      _unbonding?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeperOrJob: string; _unbonding: string; _amount: BigNumber }
    >;
  };

  estimateGas: {
    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disputes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    firstSeen(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    hasBonded(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jobs(overrides?: CallOverrides): Promise<BigNumber>;

    keepers(overrides?: CallOverrides): Promise<BigNumber>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setJob(
      job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeeper(
      keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    workCompleted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disputes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    firstSeen(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasBonded(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jobs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keepers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setJob(
      job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeeper(
      keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    workCompleted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
