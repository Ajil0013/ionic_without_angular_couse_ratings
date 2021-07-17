const cname= document.querySelector("#cname");
const crating= document.querySelector("#crating");
const close= document.querySelector("#close");
const add= document.querySelector("#add");
const courselist= document.querySelector("#courselist");

function clear(){
    cname.value="";
    crating.value="";
}

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid Inputs';
    alert.message = 'Please enter valid course name and rating!';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    alert.present();
    const { role } = alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

add.addEventListener('click',()=>{
    const name=cname.value;
    const crate=crating.value;
    if(name.trim().length<=0 || crate.trim().length<=0 || crate<1 || crate>5){
        presentAlert();
        return;
    }
    const newitem=document.createElement("ion-item");
    const h4item=document.createElement("strong");
    h4item.textContent=name+" : ";
    const pitem=document.createElement("span");
    pitem.textContent=crate+"/5";
    newitem.appendChild(h4item);
    newitem.appendChild(pitem);
    courselist.appendChild(newitem);
    clear();
});

close.addEventListener('click',()=>{
    clear();
});