const fs = require('fs').promises;
const crypt = require(crypto);

const lerArquivo = async () => {
    try {
        const result = await fs.readFile('./usuarios.json', 'utf-8');
        const resultParsed = await JSON.parse(result);
        return resultParsed;
    } catch (error) {
        console.log(error);
    }
}

const gravarArquivo = async (data) => {
    try {
        const dataToSave = JSON.stringify(data, null, 2);
        await fs.writeFile('.usuario.json', dataToSave);
    } catch (error) {
        console.log(error);
    }
}

const salvarUsuario = async (usuario) => {
    try {
        const listUser = await lerArquivo();
        console.log(listUser);

        usuario.password = crypto.createHash('sha256').update(usuario.password).digest('hex');

        console.log('senha hasheada: ', usuario.password);

        listUser.push(usuario)
        await gravarArquivo(listUser);
    } catch(error){
        console.log(error);
    }
}

const main = async() => {
    await salvarUsuario({"name": "Guilherme", "password": "teste"})
}

main()