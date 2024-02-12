
//task description
type Task = {
  id: string;
  description: string
  status:string
  completed: boolean
}
//global variables
  let i = 0;
  let item: Task;
 
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

newTaskBtn.addEventListener('click', ()=>{
  
  taskCounter()
item.id =i.toString();
item.status = 'In Progress';
item.description = taskQuery.value;
item.completed = false;
console.log(item)
appendTask(item);


})

  



// create a function that counts tasks and sets count to task.id asfter parsing it to string -- Done, almost

//create a eventListener that takes the written query and sets it to task.description -- Should be done
//set default value of task.status to 'In progress' and task.completed to false -- done
//make finished button set task.status to completed  -- not done
// make delete buttons work -- not done



function appendTask(item:Task){
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


 
//   const todoID = document.createElement('th');
//   const todoDesc = document.createElement('td');
//   const todoStatus = document.createElement('td');
// ;

//   todoID.textContent = item.id; //add scope row to id
//   todoDesc.textContent = item.description; //add contenteditable
//   todoStatus.textContent = item.status;  //add contenteditable

// newRow.appendChild(todoID);
// newRow.appendChild(todoDesc);
// newRow.appendChild(todoStatus);



//   table.appendChild(newRow);
}