import { Router } from 'express';

const routes = Router();


// #swagger.tags = ['HOME']
// #swagger.description = 'Endpoint para a rota principal da aplicação'
// #swagger.parameters[] = { description: 'Não recebe nenhum parâmetro' }
routes.get('/', (req, res) => {
    /* 
        #swagger.responses[200] = { description: 'Retorna uma message' } 
    */
    return res.json({ message: "Olá Swaggger" });
})

export { routes }