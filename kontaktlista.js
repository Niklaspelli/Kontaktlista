window.addEventListener("load", () => {
    const form = document.querySelector("#contact-form");
    const input = document.querySelector("#new-contact-input");
    const phone = document.querySelector("#contact-phone-input");
    const list_el = document.querySelector("#contacts");
    let formMessages = document.getElementById('form-messages');
    let errorMessages = "";



    phone.addEventListener("keyup", (e) => {
        const phoneInputInvalid = e.target.validity.valid;
        const errorMessage = document.querySelector("#phoneErrorMessage");
    
        if (!phoneInputInvalid) {
          errorMessage.classList.replace("hidden", "visible");
          phone.validity.valid = false;
        } else {
          errorMessage.classList.replace("visible", "hidden");
          phone.validity.valid = true;
        }
      });

   form.addEventListener("submit", (e) => {
        e.preventDefault();

       const nameInputValue = input.value;
       const phoneNumberInputValue = phone.value;

       if (nameInputValue === "") {
        errorMessages += 'Fälten måste fyllas i';
      formMessages.innerHTML = "OBS! Fyll i namnet!";
        return;
       }
       if (phoneNumberInputValue === "") {
        errorMessages += 'Fälten måste fyllas i';
        formMessages.innerHTML = "OBS! Fyll i nummer!";
        return;  
      } else {
        errorMessages += "Fyll i nummer!";
      }
  
      if (errorMessages == "") {
        formMessages.innerHTML = '<p style.color="green">Klart!</p>';
      } else {
      
        formMessages.innerHTML = `<p> Kontakten: <b><i style="color: green">${nameInputValue}</i></b> inlagd! </p>`;
        setTimeout(() => {
          formMessages.innerHTML = "Listan uppdaterad";
        }, 2000);
      }

const contact_el = document.createElement("div");
 contact_el.classList.add("contact");

 const contact_content_el = document.createElement("span");
 contact_content_el.classList.add("content");
     
contact_el.appendChild(contact_content_el);

const contact_input_el = document.createElement("input");
contact_input_el.classList.add("text");
contact_input_el.type = "text";
contact_input_el.value = nameInputValue;
contact_input_el.disabled = true;
contact_input_el.setAttribute("readonly", "readonly");
contact_content_el.appendChild(contact_input_el);

const phone_input_i_el = document.createElement("i");
phone_input_i_el.style = "color: white;";
phone_input_i_el.classList.add("hidden");
phone_input_i_el.innerHTML = "Kan bara innehålla siffror";


    
const phone_input_el = document.createElement("input");
phone_input_el.classList.add("text");
phone_input_el.type = "text";
phone_input_el.value = phoneNumberInputValue;
phone_input_el.disabled = true;
phone_input_el.setAttribute("readonly", "readonly");

const phone_content_div = document.createElement("div");
phone_content_div.appendChild(phone_input_i_el);
phone_content_div.appendChild(phone_input_el);
contact_content_el.appendChild(phone_content_div);

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
    contact_input_el.disabled = false; 
    phone_input_el.disabled = false; 
    contact_input_el.removeAttribute("readonly");
    phone_input_el.removeAttribute("readonly");
    contact_input_el.focus(); 
    } else {
        if (!phone_input_el.validity.valid) {
            phone_input_i_el.classList.replace("hidden", "visible");
            return;
          }
          phone_input_i_el.classList.replace("visible", "hidden");

    contact_edit_el.innerText = "Edit";
    contact_input_el.setAttribute("readonly", "readonly");
    contact_input_el.disabled = true; 
    phone_input_el.disabled = true;        
    }
 });
        contact_delete_el.addEventListener("click", () => {
            list_el.removeChild(contact_el);

        });
    });
});

function deleteAllContacts() {
    const parentElement = document.querySelector("#contacts");
  
    if (parentElement) {
      while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
      }
    }
  }







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


