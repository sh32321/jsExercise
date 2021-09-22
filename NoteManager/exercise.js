// //solution goes here....
// const addItemInput = document.getElementById('add')
// const itemUL = document.getElementById('list')
// // console.log("This is a test", textItem);

// // itemUL.appendChild(newItem)
// console.log(itemUL.innerHTML)





// const testItem = document.getElementById('add-input')
// testItem.addEventListener('keyup',function(){
//     console.log(this.value);
// })

// addItemInput.addEventListener('click', function(e){
    
//     console.log("This is a string" , this.firstElementChild.value);

    

//     // const newItem = document.createElement('li')
//     // newItem.appendChild(newItem);
     

    
//         // const newItemText = this.value
//         const newItem = document.createElement('li')
//         // const testItem = document.getElementById('add-input').value
//         // newItem.innerHTML = document.getElementById('add-input').innerHTML
//         // console.log("This is a test", this.find("add-input"));
//         // const textItem = document.getElementById('add-input').value

        
//         itemUL.appendChild(testItem.Nodevalue)


        
//         // this.value = ''
    
// })




//     // const newTestItem = document.getElementById('add-input').value
//     // alert(newTestItem)

// // console.log(itemUL.innerHTML)
const addInput = document.querySelector('#add-input')
const addBtn = document.querySelector('#add-btn')
const divList = document.querySelector('.note-list')
console.log('This is a string',addBtn);
addBtn.addEventListener('click', function(e){
    // alert('this is ul', this);
    const ul= divList.querySelector('ul')
    const li =document.createElement('li')
    li.innerHTML=addInput.value;
    ul.appendChild(li);
    addInput.value=''
    e.preventDefault()
})

