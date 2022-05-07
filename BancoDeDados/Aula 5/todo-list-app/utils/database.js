import { MongoClient } from 'mongodb';
  
const URL = process.env.MONGODB_URL;

export default async function getDataBase() {
    // Estabelecendo a conexão com o bando de dados
    const client = new MongoClient(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
    );
    // Função será assíncrona pq precisamos esperar a resposta da conexão com o banco
    await client.connect();

    return client.db("TesteDatabase")
}