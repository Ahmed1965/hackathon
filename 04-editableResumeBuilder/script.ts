const form = document.getElementById('resumeBuilder') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('tel') as HTMLInputElement).value;
    const qualification = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    const resumeHTML = `
    <h2><b>Editable Resume: </b></h2>
    <h3><b>Name:</b></h3>
    <p><span contenteditable>${name}</span></p>

    <h3><b>Email:</b></h3>
    <p><span contenteditable></span> ${email}</p>
    
    <h3><b>Phone:</b></h3>
    <p><span contenteditable>${phone}</span></p>
    
    <h3><b>Qualification:</b></h3>
    <p><span contenteditable>${qualification}</span></p>
    
    <h3><b>Skills:</b></h3>
    <p><span contenteditable>${skills}</span></p>

    <h3><b>Experience:</b></h3>
    <p><span contenteditable> ${experience}</span></p>`

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        alert('Please fill in all fields');
        
    };
    })
    
    
    
    
    
    

    
    