/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_wO5qKVNnC1ic@ep-fragrant-cell-a8pk0kkk-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
  };