/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type {
  IKeep3rDisputable,
  IKeep3rDisputableInterface,
} from "../IKeep3rDisputable";

const _abi = [
  {
    inputs: [],
    name: "AlreadyDisputed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotDisputed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_jobOrKeeper",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_disputer",
        type: "address",
      },
    ],
    name: "Dispute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_jobOrKeeper",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_resolver",
        type: "address",
      },
    ],
    name: "Resolve",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_jobOrKeeper",
        type: "address",
      },
    ],
    name: "dispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_jobOrKeeper",
        type: "address",
      },
    ],
    name: "resolve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKeep3rDisputable__factory {
  static readonly abi = _abi;
  static createInterface(): IKeep3rDisputableInterface {
    return new utils.Interface(_abi) as IKeep3rDisputableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKeep3rDisputable {
    return new Contract(address, _abi, signerOrProvider) as IKeep3rDisputable;
  }
}
