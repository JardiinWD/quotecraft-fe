import { Client, Databases, Account } from "appwrite";

// ------------ APP WRITE CLIENT
const client = new Client().setEndpoint(import.meta.env.VITE_APPWRITE_BASEURL).setProject(import.meta.env.VITE_APPWRITE_PROJECT);

// ------------ APP WRITE DB
const AppWriteDB = new Databases(client);

// ------------ APP WRITE ACCOUNT
const AppWriteAccount = new Account(client);


export { AppWriteDB, AppWriteAccount };