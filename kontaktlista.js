window.addEventListener("load", () => {
    const form = document.querySelector("#contact-form");
    const input = document.querySelector("#new-contact-input");
    const phone = document.querySelector("#contact-phone-input");
    const list_el = document.querySelector("#contacts");
    let formMessages = document.getElementById('form-messages');
    let errorMessages = "";




    form.addEventListener("submit", (e) => {
        e.preventDefault();

       const contact = input.value;
        

       if (input.value === "") {
        errorMessages += 'Fälten måste fyllas i';
 formMessages.innerHTML = 
    "Fyll i namnet!";
        return;
       }
       if (phone.value === "") {
        errorMessages += 'Fälten måste fyllas i';
 formMessages.innerHTML = 
    "Fyll i nummer!";
        return;
       
    } else{
        errorMessages += 'Password must be between 6-10 chars<br>';
      }

       if (errorMessages == "") {
         formMessages.innerHTML = 
           '<div style.color="green"  "Klart!">' 
            + 
           '</div>';
       } else {
         formMessages.innerHTML = 
           '<div> <b>Kontakten inlagd!<b>' 
              
           '</div>';
       }
       
     const contact_el = document.createElement("div");
     contact_el.classList.add("contact");

     const contact_content_el = document.createElement("div");
     contact_content_el.classList.add("content");
     
     contact_el.appendChild(contact_content_el);

contact_el.appendChild(contact_content_el);

const contact_input_el = document.createElement("input");

const phone_input_el = document.createElement("phone-input");

contact_input_el.classList.add("text");
contact_input_el.type = "text";
contact_input_el.value = contact;
contact_input_el.setAttribute("readonly", "readonly");

contact_content_el.appendChild(contact_input_el);

const contact_actions_el = document.createElement("div");
contact_actions_el.classList.add("actions");

const contact_edit_el = document.createElement("button");
contact_edit_el.classList.add("edit");
contact_edit_el.innerText = "Edit";

const contact_delete_el = document.createElement("button");
contact_delete_el.classList.add("delete");
contact_delete_el.innerHTML = "Delete";

contact_actions_el.appendChild(contact_edit_el);
contact_actions_el.appendChild(contact_delete_el);

contact_el.appendChild(contact_actions_el);

list_el.appendChild(contact_el);

input.value = "";
phone.value = "";


contact_edit_el.addEventListener("click", () => {
    if (contact_edit_el.innerText.toLowerCase() =="edit") {
contact_edit_el.innerText = "Save";
contact_input_el.removeAttribute("readonly");
    contact_input_el.focus();
    
    } else {
        contact_edit_el.innerText = "Edit";
        contact_input_el.setAttribute("readonly", "readonly");
        
    }

        });
        contact_delete_el.addEventListener("click", () => {
            list_el.removeChild(contact_el);

        });
    });
});









/* const inputName = document.getElementById("input-box");
const inputPhone = document.getElementById("input-telefon");
const listContainer = document.getElementById("list-container");
let formMessages = document.getElementById('form-messages');


function addBtn(){
    let errorMessages = "";
if(inputName.value === ""){
    
    

 errorMessages += 'Information is required';
 formMessages.innerHTML = 
    "Fyll i namnet!";
}
if(inputPhone.value === ""){

 errorMessages += 'Information is required';
 formMessages.innerHTML = 
    'Fyll i telefonnummer!';
}
else{
  let li = document.createElement("li");
  li.innerHTML = inputName.value;
  li.innerHTML = inputPhone.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
}
inputName.value = "";
inputPhone.value = "";
errorMessages.value = "";
}
 */


