import {
  BaseKeyStore,
  // BaseOrderlyKeyPair,
  OrderlyKeyPair,
} from '@orderly.network/core';
import {storage} from './storage';
import {BaseOrderlyKeyPair} from './keyPair';

export class KeyStore extends BaseKeyStore {
  getOrderlyKey(address?: string): OrderlyKeyPair | null {
    //TODO: get secretKey from localStorage, and return a OrderlyKeyPair
    //
    let orderlyKey;

    if (address) {
      orderlyKey = this.getItem(address, 'orderlyKey');
    } else {
      //if address is undefined, get the default address
      const address = this.getAddress();
      if (!address) return null;
      orderlyKey = this.getItem(address, 'orderlyKey');
    }

    if (!orderlyKey) {
      return null;
    }
    return new BaseOrderlyKeyPair(orderlyKey);
  }

  getAccountId(address: string): string | undefined | null {
    return this.getItem(address, 'accountId');
  }

  setAccountId(address: string, accountId: string) {
    // localStorage.setItem(`${this.keyPrefix}accountId`, accountId);
    this.setItem(address, {accountId});
  }

  getAddress(): string | undefined | null {
    // return localStorage.getItem(`${this.keyPrefix}address`);
    return storage.getString(`${this.keyPrefix}address`);
  }

  setAddress(address: string) {
    // localStorage.setItem(`${this.keyPrefix}address`, address);
    storage.set(`${this.keyPrefix}address`, address);
    // this.setItem(address, { address });
  }

  generateKey() {
    return BaseOrderlyKeyPair.generateKey();
  }

  setKey(address: string, orderlyKey: OrderlyKeyPair) {
    // localStorage.setItem(`${this.keyPrefix}orderlyKey`, orderlyKey);
    // localStorage.setItem(`${this.keyPrefix}secretKey`, secretKey);
    this.setItem(address, {orderlyKey: orderlyKey.secretKey});
  }

  cleanAllKey(address: string): void {
    // localStorage.removeItem(`${this.keyPrefix}${address}`);
    // localStorage.removeItem(`${this.keyPrefix}address`);
    storage.delete(`${this.keyPrefix}${address}`);
    storage.delete(`${this.keyPrefix}address`);
  }
  cleanKey(address: string, key: string): void {
    const data = this.getItem(address);
    delete data[key];
    storage.set(`${this.keyPrefix}${address}`, JSON.stringify(data));
  }

  private setItem(address: string, value: Record<string, any>) {
    const key = `${this.keyPrefix}${address}`;
    // let oldValue: any = localStorage.getItem(key);
    let oldValue: any = storage.getString(key);

    if (oldValue) {
      oldValue = JSON.parse(oldValue);
    } else {
      oldValue = {};
    }

    storage.set(
      key,
      JSON.stringify({
        ...oldValue,
        ...value,
      }),
    );
  }

  private getItem(address: string, name?: string) {
    const key = `${this.keyPrefix}${address}`;
    // let value: any = localStorage.getItem(key);
    let value: any = storage.getString(key);

    if (value) {
      value = JSON.parse(value);
    } else {
      value = {};
    }

    if (typeof name === 'undefined') {
      return value;
    }

    return value[name];
  }
}
