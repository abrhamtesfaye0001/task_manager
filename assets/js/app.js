// Define UI Variables 

const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

btnAsc = document.getElementById("sort-date-asc");
btnDesc = document.getElementById("sort-date-desc");

btnAsc.addEventListener("click",sortTasksAsc)
btnDesc.addEventListener("click",sortTaskDesc)

class Task {

    constructor(value) {
        
        this.value = value;
        this.date = new Date();
        this.id = this.date.toString().replaceAll("+"," ").replaceAll("(","_").replaceAll(")","_").replaceAll(":","_").replaceAll(" ","_");
        
    }
    dom() {
        return document.getElementById(this.id).parentElement.parentElement;
    }
    
    //     document.getElementById(`${this.date.toString().replaceAll("+"," ").replaceAll("(","_").replaceAll(")","_").replaceAll(":","_").replaceAll(" ","_")}`).addEventListener("click",p.onClick);

}


class Manager {
    
    constructor() {
        this.tasks = [];
        this.taskMap = new Map();// id: taskObj
        console.log(this)
        
    }
    addTaskOop(task){
        this.tasks.push(task);
        this.taskMap.set(task.id,task);
    }
    removeTaskById(id){
        let task = this.taskMap.get(id);
        // this.tasks.indexOf(task)
        this.tasks = this.tasks.filter(function(item){return item!==task})
        
        console.log(id);
        this.taskMap.delete(task.id);

    }
    rebuild(){
        document.getElementsByClassName("collection")[0].innerHTML=""
        for(let i=0;i<this.tasks.length;i++){
            this.addNewTaskLite(this.tasks[i]);
        }
        console.log("rebuilt")
    }
    addNewTaskLite(task){
        const li = document.createElement('li');
        // Adding a class
        li.className = 'collection-item';
        // Create text node and append it 
        li.appendChild(document.createTextNode(task.value));
        // Create new element for the link 
        const link = document.createElement('a');
        // Add class and the x marker for a 
        link.className = 'delete-item secondary-content';
        link.innerHTML = `<i class="fa fa-remove" id="${task.id}"></i>`;
        // Append link to li
        li.appendChild(link);
        // Append to UL 
        taskList.appendChild(li);
    }
    sort(direction){
        if(direction==0){
                this.tasks.sort(
                    function(a,b){
                        if(a.date==b.date){
                            return 0;
                        }
                        else{
                            return a.date>b.date?-1:1;
                        }
                    }
                ) 
                 }else{
                this.tasks.sort(
                    function(a,b){
                        if(a.date==b.date){
                            return 0;
                        }
                        else{
                            return a.date<b.date?-1:1;
                        }
                    }
                ) 
        }
        this.rebuild();
    }
    search(value){
        let locations = []
        for(let i=0;i<this.tasks.length;i++){
            if(this.tasks[i].value.includes(value)){
                locations.push(this.tasks[i]);
            }
        }
        this.rebuildSearch(locations)
    }
    rebuildSearch(list){
        document.getElementsByClassName("collection")[0].innerHTML=""
        for(let i=0;i<list.length;i++){
            this.addNewTaskLite(list[i]);
        }
        console.log("rebuilt search")
    }
    
    

}

let m = new Manager();





// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }
    /************************ */
    let p = new Task(taskInput.value);
    m.addTaskOop(p);

    /************************* */
    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = `<i class="fa fa-remove" id="${p.id}"></i>`;
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);




}






// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
        m.tasks=[];
        m.taskMap = new Map();
    }
    

}

function sortTasksAsc(){
    m.sort(1)

}
function sortTaskDesc(){
    m.sort(0)
}

// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */

   m.search(filter.value);


}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
            m.removeTaskById(e.target.id);

        }

    }
}


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}