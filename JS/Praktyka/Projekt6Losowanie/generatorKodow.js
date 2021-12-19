const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

codeLenght = 10;
codeAmount = 100;

const generateCode = () => {
    for(let i = 0; i < codeLenght; i++){
        let code = "";
        for(let i = 0; i < codeLenght; i++){
            let index = Math.floor(Math.random() * codeLenght);
            code += chars[index];
        }
        const div = document.createElement("div");
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener("click", generateCode);









