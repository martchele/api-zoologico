import express from 'express';
import cors from 'cors';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get ('/', (req, res)=> {
    let ave: Ave = new Ave(`Papagaio`, 30,`Masculino`, 10);
    res.json(ave);
//res.json('Olá mundo!!');
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})
