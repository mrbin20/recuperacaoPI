/*
Micro desafio - Passo 1
Crie um array de objetos consertos que tenha como atributos: aparelho (string),
itens consertados (array de strings), valores (array de números) e pronto (booleano). Deve
ter ao menos 15 itens dentro de consertos salve o arquivo como consertos.js e exporte
este módulo. Módelo de exemplo do array de consertos:
*/

let consertos = [
    {
        aparelho: 'Sansung A10',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            10,
            100,
            25
        ],
        pronto: true
    },
    {
        aparelho: 'Sansung A20',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            15,
            115,
            35
        ],
        pronto: true
    },
    {
        aparelho: 'Sansung A30',
        itensConsertados: [
            'pelicula',
            'bateria',
            'camera'
        ],
        valores: [
            5,
            120,
            150
        ],
        pronto: false
    },
    {
        aparelho: 'Motorola G8',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            12,
            130,
            30
        ],
        pronto: false
    },
    {
        aparelho: 'Motorola G9',
        itensConsertados: [
            'pelicula',
            'bateria',
            'camera'
        ],
        valores: [
            15,
            80,
            90
        ],
        pronto: true
    },
    {
        aparelho: 'Motorola G10',
        itensConsertados: [
            'tela',
            'bateria',
            'camera'
        ],
        valores: [
            20,
            105,
            130
        ],
        pronto: false
    },
    {
        aparelho: 'LG K20',
        itensConsertados: [
            'pelicula',
            'bateria',
            'camera'
        ],
        valores: [
            5,
            100,
            70
        ],
        pronto: true
    },
    {
        aparelho: 'LG k41',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            20,
            90,
            20
        ],
        pronto: false
    },
    {
        aparelho: 'LG k52',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            15,
            95,
            29
        ],
        pronto: false
    },
    {
        aparelho: 'Nokia C2',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            10,
            100,
            25
        ],
        pronto: true
    },
    {
        aparelho: 'Nokia X2',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            5,
            60,
            15
        ],
        pronto: false
    },
    {
        aparelho: 'Huawei P30',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            30,
            97,
            23
        ],
        pronto: true
    },
    {
        aparelho: 'Huawei P50',
        itensConsertados: [
            'pelicula',
            'bateria',
            'camera'
        ],
        valores: [
            15,
            99,
            150
        ],
        pronto: true
    },
    {
        aparelho: 'Asus Zenfone 7',
        itensConsertados: [
            'tela',
            'bateria',
            'teclado'
        ],
        valores: [
            20,
            103,
            22
        ],
        pronto: false
    },
    {
        aparelho: 'Iphone 6S',
        itensConsertados: [
            'pelicula',
            'bateria',
            'sensor'
        ],
        valores: [
            18,
            120,
            55
        ],
        pronto: false
    },
    {
        aparelho: 'Iphone 7 Plus',
        itensConsertados: [
            'tela',
            'bateria',
            'sensor'
        ],
        valores: [
            23,
            115,
            43
        ],
        pronto: true
    }
]
module.exports = consertos;