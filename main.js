const officers =[{name:'Maruthi', Department:'UI Developement'},
{name:'Manjappa', Department:'Java Developement'},
{name:'SanthosMeti', Department:'DATA Analysis Developement'}]

const officerlist = document.querySelector('#mainlist');
// create Officers
const officername = document.querySelector("#Name");
const officerdept = document.querySelector("#dpt");
const creatbtn = document.querySelector("button#createofficers");

// Update officers
const Updatename = document.querySelector("#updatename");
const Updatedept = document.querySelector("#updatedpt");
const updateformbtn = document.querySelector("button#updateofficers");


const renderOfficers = ()=>{
    officerlist.innerHTML = '';

    officers.forEach((Dev, index)=> {
        const  Dev1 = document.createElement('li');
        const  btnContainer =  document.createElement('aside');
        // Delete operation
        const delbtn = document.createElement('button');
        delbtn.id = index;
        delbtn.innerHTML = 'delete';
        delbtn.addEventListener('click', (event) => {
            officers.splice(index, 1);
            renderOfficers();
        })
        btnContainer.appendChild(delbtn);

        // Update operation
        const updatebtn = document.createElement('button');
        updatebtn.id = index;
        updatebtn.innerHTML = 'Update';
        updatebtn.addEventListener('click', event=>{
            Updatename.value = Dev.name;
            Updatedept.value = Dev.Department;
            updateformbtn.setAttribute("toupdate", index)
        })
        btnContainer.appendChild(updatebtn);

        Dev1.innerText = `${Dev.name} is ${Dev.Department} Officer`;
        officerlist.appendChild(Dev1);
        officerlist.appendChild(btnContainer);

    })
 }


const createOfficers = () => {
  const name = officername.value;
  const Department = officerdept.value;
  const officerobj = {name, Department};
  officers.push(officerobj);
  renderOfficers();
}

const updateOfficers = (event) => {
    const index = event.target.getAttribute('toupdate');
    const name = Updatename.value;
    const Department = Updatedept.value;
    officers[index]= {name, Department};
    console.log(officers);
    renderOfficers();
}

renderOfficers();
creatbtn.addEventListener('click', createOfficers);
updateformbtn.addEventListener('click', updateOfficers);