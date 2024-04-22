let titleblock = document.getElementById("jobtitlejs");
let descblock = document.getElementById("jobdescjs");
let feildblock = document.getElementById("jobfeildjs");
let costblock = document.getElementById("jobcostjs");
let requireblock = document.getElementById("jobrequijs");
let titleerrorblock = document.getElementById("titleerror");
let descerrorblock = document.getElementById("descerror");
let feilderrorblock = document.getElementById("feilderror");
let radioerrorblock = document.getElementById("radioerror");
let costerrorblock = document.getElementById("costerror");
let requireerrorblock = document.getElementById("requireerror");
let nablock = document.getElementById("nacontent");
let locateblock = document.getElementById("section2");
let not_available_parent_typing = document.getElementById("notavailable");
let typing_post_block = document.getElementById("typingpost");
let signin_name_element = document.getElementById("signin_name");
let signin_contact_element = document.getElementById("signin_contact");
let signin_email_element = document.getElementById("signin_email");
let signin_locality_element = document.getElementById("signin_locality");
let signin_gender_element = document.getElementById("signin_gender");
let employer_signin_name_element = document.getElementById("asignin_name");
let employer_signin_contact_element = document.getElementById("asignin_contact");
let employer_signin_email_element = document.getElementById("asignin_email");
let employer_signin_locality_element = document.getElementById("asignin_locality");
let employer_signin_gender_element = document.getElementById("asignin_gender");

let employee = [{
        name: "Uday kiran",
        contact: "9177765166",
        email: "makineni.uday@gmail.com",
        locality: "Shadnagar",
        gender: "Male"
    },
    {
        name: "Ayilvar Raj Kumar",
        contact: "6281589014",
        email: "ayilvarrajkumar@gmail.com",
        locality: "Patancheruvu",
        gender: "Male"
    },
    {
        name: "Dhana Lakshmi",
        contact: "6309621737",
        email: "samudraladhanalakshmi@gmail.com",
        locality: "abc",
        gender: "Female"
    },
    {
        name: "Maroju Uma Pravalika",
        contact: "8520061763",
        email: "marojuumapravalika@gmail.com",
        locality: "xyz",
        gender: "Female"
    },
];



let not_available_div = document.createElement("div");
let not_available_div_h1 = document.createElement("h1");
let not_available_div_p = document.createElement("p");
let not_available_div_button_div = document.createElement("div");
let not_available_div_button = document.createElement("button");
not_available_div_button.classList.add("button");
not_available_div_button.textContent = "Back";
not_available_div_button.onclick = "display('section0')";
not_available_div_button_div.appendChild(not_available_div_button);
not_available_div_h1.classList.add("h1");
not_available_div_p.classList.add("p2");
not_available_div_h1.textContent = "Hmmmm";
not_available_div_p.textContent = "The website is under construction, Meet u soon with exciting updates";
not_available_div.appendChild(not_available_div_h1);
not_available_div.appendChild(not_available_div_p);
not_available_parent_typing.appendChild(not_available_div);

function create() {
    if (titleblock.value === "") {
        titleerrorblock.textContent = "* This feild is mandatory";
    }
    if (descblock.value === "") {
        descerrorblock.textContent = "* This feild is mandatory";
    }
    if (feildblock.value === "") {
        feilderrorblock.textContent = "* This feild is mandatory";
    }
    if (costblock.value === "") {
        costerrorblock.textContent = "* This feild is mandatory";
    }
    if (requireblock.value === "") {
        requireerrorblock.textContent = "* This feild is mandatory";
    } else {
        let div = document.createElement("div");
        let title = document.createElement("h4");
        title.textContent = titleblock.value;
        div.appendChild(title);
        let description = document.createElement("p");
        description.textContent = descblock.value;
        div.appendChild(description);
        let cost = document.createElement("h1");
        cost.textContent = costblock.value;
        div.appendChild(cost);
        let requirements = document.createElement("p");
        requirements.textContent = requireblock.value;
        div.appendChild(requirements);
        typing_post_block.appendChild(div);
    }
}
