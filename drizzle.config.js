/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://AI-Content-Generator_owner:ltOzcghAP1w6@ep-frosty-band-a5qa605e.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require",
    }
}
