/**
 * Ensures `localStorage` exists during server-side rendering.
 * Some environments inject an incomplete experimental implementation,
 * which breaks libraries that expect the DOM Storage API.
 */
class MemoryStorage implements Storage {
  private store = new Map<string, string>();

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    const value = this.store.get(key);
    return typeof value === 'undefined' ? null : value;
  }

  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] ?? null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }

  get length(): number {
    return this.store.size;
  }
}

const globalWithStorage = globalThis as typeof globalThis & {
  localStorage?: Storage;
};

const runningInServer = typeof window === 'undefined';
const needsPolyfill =
  typeof globalWithStorage.localStorage === 'undefined' ||
  typeof globalWithStorage.localStorage?.getItem !== 'function';

if (runningInServer && needsPolyfill) {
  globalWithStorage.localStorage = new MemoryStorage();
}

export {};

