# Desafio Nginx com Node.js

Para rodar o projeto: 
```
docker-compose up -d --build
```

A aplicação ficará disponível na porta 8080 no seguinte endereço:
`http://localhost:8080` 

Adicionalmente implementei um endpoint para excluir os registros de nomes no banco de dados:
`http://localhost:8080/delete` 

Usei a lib human-names para gerar nomes aleatórios.
