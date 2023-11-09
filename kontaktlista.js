window.addEventListener("load", () => {
    const form = document.querySelector("#contact-form");
    const input = document.querySelector("#new-contact-input");
    const phone = document.querySelector("#contact-phone-input");
    const list_el = document.querySelector("#contacts");
    let formMessages = document.getElementById('form-messages');
  

   form.addEventListener("submit", (e) => {
        e.preventDefault();

       const nameInputValue = input.value;
       const phoneNumberInputValue = phone.value;

       if (nameInputValue === "") {
      
      formMessages.innerHTML = "OBS! Fyll i namnet!";
        return;
       }
       if (phoneNumberInputValue === "") {
       
        formMessages.innerHTML = "OBS! Fyll i nummer!";
        
        return;  
      }  else {
      
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
contact_input_el.required = true; 
contact_content_el.appendChild(contact_input_el);


const phone_input_i_el = document.createElement("i");
phone_input_i_el.style = "color: white;";
phone_input_i_el.classList.add("hidden");



const phone_input_el = document.createElement("input");
phone_input_el.classList.add("text");
phone_input_el.type = "text";
phone_input_el.value = phoneNumberInputValue;
phone_input_el.disabled = true;
phone_input_el.setAttribute("readonly", "readonly");
phone_input_el.required = true;
phone_input_el.maxlength="10";





const phone_content_div = document.createElement("div");
phone_content_div.appendChild(phone_input_i_el);
phone_content_div.appendChild(phone_input_el);
contact_content_el.appendChild(phone_content_div);

const contact_actions_el = document.createElement("div");
contact_actions_el.classList.add("actions");

const contact_edit_el = document.createElement("button");
contact_edit_el.classList.add("ändra");
contact_edit_el.innerText = "Ändra";

const contact_delete_el = document.createElement("button");
contact_delete_el.classList.add("radera");
contact_delete_el.innerHTML = "Radera";

contact_actions_el.appendChild(contact_edit_el);
contact_actions_el.appendChild(contact_delete_el);

contact_el.appendChild(contact_actions_el);

list_el.appendChild(contact_el);
input.value = "";
phone.value = "";

contact_edit_el.addEventListener("click", () => {
    if (contact_edit_el.innerText.toLowerCase() =="ändra") {
    contact_edit_el.innerText = "Spara";
    contact_input_el.disabled = false; 
    contact_input_el.required = true; 
    phone_input_el.disabled = false; 
    contact_input_el.removeAttribute("readonly");
    phone_input_el.removeAttribute("readonly");
    contact_input_el.focus(); 
    
    } else {
        if (!phone_input_el.validity.valid || !contact_input_el.validity.valid ) {
            phone_input_i_el.classList.replace("hidden", "visible");
            return;
          }


    phone_input_i_el.classList.replace("visible", "hidden");

    contact_edit_el.innerText = "Ändra";
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







