// config/configService.js
import dotenv from 'dotenv';
dotenv.config();

class ConfigService {
  /**
   * Get environment variable or return undefined
   * @param {string} key
   * @returns {string | undefined}
   */
  get(key) {
    return process.env[key];
  }

  /**
   * Get environment variable or throw error if not found
   * @param {string} key
   * @returns {string}
   */
  getOrThrow(key) {
    const value = process.env[key];
    if (!value) {
      throw new Error(`❌ Config Error: Missing environment variable "${key}"`);
    }
    return value;
  }
}

const configService = new ConfigService();
export default configService;
