
//task description
type Task = {
  id: Number;
  description: string
  status:string
  completed: boolean
}
//global variables
  let i = 1;
  let item: Task = {id: 0, description: "", status: "", completed: false};
 
  //DOM properties
const table = document.querySelector('#table') as HTMLTableElement
const taskQuery = document.querySelector('.query') as HTMLInputElement
const newTaskBtn = document.querySelector('.create') as HTMLButtonElement
const resetBtn = document.querySelector(".btn-warning") as HTMLButtonElement
const completeBtn = document.querySelector(".btn-success") as HTMLButtonElement
const deleteBtn = document.querySelector(".btn-danger") as HTMLButtonElement

//id incrementor
function taskCounter () {
  i++

}

//Button tasks

resetBtn.addEventListener('click', () => { 
  //delete all contents of table
})
completeBtn.addEventListener('click', () => {
  item.completed = true;
 })
deleteBtn.addEventListener('click', () => {
  table.removeChild //clicked row ()

 })

newTaskBtn.addEventListener('click', (event)=>{
  event.preventDefault();
const newitem: Task = {
id :i,
status : 'In Progress',
description : taskQuery.value,
completed : false
}

console.log(newitem)
appendTask(newitem);


});

  



// create a function that counts tasks and sets count to task.id asfter parsing it to string -- Done, almost

//create a eventListener that takes the written query and sets it to task.description -- Should be done
//set default value of task.status to 'In progress' and task.completed to false -- done
//make finished button set task.status to completed  --  done
// make delete buttons work -- almost done



function appendTask(item:Task){
  taskCounter();
  const newRow = document.createElement('tr');

 newRow.innerHTML = `
            <th scope="row">${item.id}</th>
            <td contenteditable="true">${item.description}</td>
            <td contenteditable="true">${item.status}</td>
            <td>
                <button type="submit" class="btn btn-danger">Delete</button>
                <button type="submit" class="btn btn-success ms-1">Finished</button>
            </td>
        `;

      
        table.getElementsByTagName('tbody')[0].appendChild(newRow);



}