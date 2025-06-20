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

interface IKeep3rDisputableInterface extends ethers.utils.Interface {
  functions: {
    "dispute(address)": FunctionFragment;
    "resolve(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "dispute", values: [string]): string;
  encodeFunctionData(functionFragment: "resolve", values: [string]): string;

  decodeFunctionResult(functionFragment: "dispute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;

  events: {
    "Dispute(address,address)": EventFragment;
    "Resolve(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Dispute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Resolve"): EventFragment;
}

export class IKeep3rDisputable extends BaseContract {
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

  interface: IKeep3rDisputableInterface;

  functions: {
    dispute(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resolve(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  dispute(
    _jobOrKeeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resolve(
    _jobOrKeeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    dispute(_jobOrKeeper: string, overrides?: CallOverrides): Promise<void>;

    resolve(_jobOrKeeper: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Dispute(
      _jobOrKeeper?: string | null,
      _disputer?: string | null
    ): TypedEventFilter<
      [string, string],
      { _jobOrKeeper: string; _disputer: string }
    >;

    Resolve(
      _jobOrKeeper?: string | null,
      _resolver?: string | null
    ): TypedEventFilter<
      [string, string],
      { _jobOrKeeper: string; _resolver: string }
    >;
  };

  estimateGas: {
    dispute(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resolve(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    dispute(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resolve(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
