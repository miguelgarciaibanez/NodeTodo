
const argv = require('./config/yargs').argv;
const todo = require('./TODO/todo');
require('colors');

let comando = argv._[0];

switch(comando) {
    case 'create':
        let task = todo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let todoList = todo.getList();
        for (let task of todoList){
            console.log('=========== TODO =========='.green);
            console.log(task.description);
            console.log('Status:', task.completed);
            console.log('=========== TODO =========='.green);
        }
        break;
    case 'update':
        let updated = todo.updateList(argv.description, argv.completed);
        console.log('Result:', updated);
        break;
    case 'delete':
        let deleted = todo.deleteTask(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Comando no reconocido');
}