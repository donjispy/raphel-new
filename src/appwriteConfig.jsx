import { Client, Account } from 'appwrite';

const client = new Client();
client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('67ccae1100350c45d0dd');

export const account = new Account(client)

export default client;