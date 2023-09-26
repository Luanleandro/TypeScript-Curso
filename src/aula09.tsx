// enum diasSemana {
//   domingo,
//   segunda,
//   terca,
//   quarta,
//   quinta,
//   sexta,
//   sabado,
// }
// const segunda: string = diasSemana[1];
// console.log(segunda);

// enum tipoUsuario {
//   user = 1,
//   admin = 10,
//   super = 100,
// }

// let admin: tipoUsuario = tipoUsuario.admin;
// console.log(admin);

// enum cores {
//   branco = '#fff',
//   preto = '#000',
//   vermelho = '#00f',
//   verde = '#0f0',
//   azul = '#f00',
// }

// enum tamanhoFonte {
//   xxl = '64px',
//   xl = '52px',
//   l = '36px',
//   r = '16px',
// }

// console.log(cores.branco);
// console.log(`fonteSize: ${tamanhoFonte.xxl}`);

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key]
  if (num == LogLevel.ERROR) {
    return message
  } else return 'Deu bom'
};

console.log(printImportant("ERROR", "THIS FUCK"))

const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
 
let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];

console.log(Direction.Up)