

// comando crear 'crear un elemento por hacer'
//         --descripcion -d

// comando actualizar 'Actualiza el estado completado de una tarea'
//         --description -d 
//         --complete -c default true


const description = {
        demand: true,
        alias: 'd',
        desc:'Description of the todo desc'
    }
const complete = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Set the task as completed'
}

const argv = require('yargs')
            .command('create','Create a TODO task',{
                description
            })
            .command('update', 'Update task status',{
                description,
                complete
            })
            .command('delete', 'Delete a task',{
                description
            } )
            .help()
            .argv;

module.exports = {
    argv
}