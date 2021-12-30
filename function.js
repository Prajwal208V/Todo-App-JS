var modal = document.querySelector(".hidden");
var overlay = document.querySelector(".overlay");
var inp_title = document.querySelector(".input_title");
var con_box = document.getElementById("continer_box");
var object_arry = [];
var count = 0;
var plus_icon01 = [];
var trash_icon01 = [];

var modal2 = document.querySelector(".hidden2");
var inp_iteam = document.querySelector(".input_iteam");
var iteam_btn = document.querySelector(".add_button2");
var temp_id;




function Obj_Create(unique_id, title) {
  // creating objects
  this.unique_id = unique_id;
  this.title = title;
  task_obj = {};
}
function add_ele() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function add_ele2() {
  modal2.classList.remove("hidden2");
  overlay.classList.remove("hidden");
}

var task_plus1 = document.querySelector('.index_plus');
task_plus1.addEventListener('click', add_ele);


function closer() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  inp_title.value = "";
}
function closer2() {
  modal2.classList.add("hidden2");
  overlay.classList.add("hidden");
  inp_iteam.value = "";
}



var count2=0;
function plus_icon2(id) {
  temp_id = id;
  add_ele2();
  iteam_btn.addEventListener('click', function () {
    if (inp_iteam.value == "") {
      closer2();
    }
    else {
      var temp_task = document.getElementsByClassName('task_box');
      for (let k = 0; k < temp_task.length; k++) {
        if (temp_task[k].classList[1] == temp_id) {
          var p_tag = document.createElement('p');
          p_tag.classList.add('tasks');
          p_tag.textContent = inp_iteam.value;
          temp_task[k].appendChild(p_tag);
          var tasks_1=document.getElementsByClassName('tasks');
          tasks_1[count2].addEventListener('click', function (count2){
             count2.target.style.textDecoration="line-through";
          });
          count2++
        }
      }
      closer2();
    }
  });
}

function trash_icon2(id) {
  var temp_box = document.getElementsByClassName('index_box');
  for (let i of temp_box) {
    if (i.classList[1] == id) {
      con_box.removeChild(i);
      count--;
    }
  }
}




document.querySelector(".add_button").addEventListener("click", () => {
  if (inp_title.value == "") {
    closer();
  } else {
    //SUB
    var unique_id = new Date().valueOf(); // 1.creating a unique id
    var box_obj = inp_title.value; // 2.getting the title of the box
    var temp_title = box_obj;
    box_obj = new Obj_Create(unique_id, temp_title); // 3.creating an object
    object_arry.push(box_obj); // 4.pushing the object into array


    //SUB
    var box_div = document.createElement("div"); // 5.create an box
    box_div.classList.add("index_box", unique_id); //6. adding classname as [index_box,unique_id]
    //SUB
    var p_tag = document.createElement("p"); // 7.create title of the box
    p_tag.classList.add("title"); //8. adding class name as title
    p_tag.textContent = inp_title.value; //9. passing title to textContent
    box_div.append(p_tag); //10. append child element title 'p' into index_box
    //SUB
    box_div.append(document.createElement("hr")); // 11.creating 'hr' tag and append this into index_box
    //SUB
    var task_box = document.createElement("div"); //12.creating task_box for tasks
    task_box.classList.add("task_box", unique_id); //13.giving class name as task_box
    box_div.append(task_box); // 14. append child to index_box
    //SUB
    var task_icon1 = document.createElement("div"); // 15.icon div continer
    task_icon1.classList.add("task_icon");
    //SUB

    var task_plus1 = document.createElement("i"); // 17.plus symbol
    task_plus1.classList.add("fas", "fa-plus-circle", "task_plus", unique_id);
    task_icon1.append(task_plus1); //19. appending span to task_icon
    // console.log(span_plus);

    var task_trash1 = document.createElement("i"); // 21.trash symbol
    task_trash1.classList.add("fas", "fa-trash-alt", "task_trash", unique_id);
    task_icon1.append(task_trash1); //23. appending span to task_icon
    box_div.append(task_icon1); //24. appending task_icon to index_box
    //SUB
    con_box.append(box_div); //25. appending index_box to continer_box

    plus_icon01 = document.getElementsByClassName("task_plus");
    plus_icon01[count].addEventListener('click', function (count) {
      plus_icon2(count.target.classList[3]);
    });

    trash_icon01 = document.getElementsByClassName("task_trash");
    trash_icon01[count].addEventListener('click', function (count) {
      trash_icon2(count.target.classList[3]);
    });

    count++;
    closer(); // 26.calling hidden fun
  }
});

