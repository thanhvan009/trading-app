// src/app/shared/utils/crypto.utils.ts
export class CryptoUtils {
    static generateRandomString(length: number = 40): string {
      // Browser environment
      if (typeof window !== 'undefined' && window.crypto) {
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        return this.base64UrlEncode(array);
      }
      
      // Fallback for non-browser environments
      return this.fallbackRandomString(length);
    }
  
    private static base64UrlEncode(buffer: Uint8Array): string {
      return btoa(String.fromCharCode(...buffer))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    }
  
    private static fallbackRandomString(length: number): string {
      let result = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
  }