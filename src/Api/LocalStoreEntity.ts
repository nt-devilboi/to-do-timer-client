import { ILocalStore } from "./ILocalStore";

export class LocalStoreEntity implements ILocalStore {
  constructor(private readonly key: string) {
    this.key = key;
  }

  set(entity: string) {
    localStorage.setItem(this.key, entity);
  }

  remove(): void {
    localStorage.removeItem(this.key);
  }

  get get(): string {
    return localStorage.getItem(this.key) ?? "";
  }
}
