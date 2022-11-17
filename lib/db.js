import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://vlada:Promeni01@cluster0.enskszv.mongodb.net/auth-demo?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  );
  return client;
}
