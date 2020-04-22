// document.getElementById('theForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let url = '../formsubmissions.json';

//     let name = document.getElementById('input1').value;
//     let email = document.getElementById('input2').value;
//     let inputs = {
//         name: `${name}`,
//         email: `${email}`
//     };
    
//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(inputs),
        
  
//         })
//     }).then((res) => {
//         console.log(res.status);
//     }).catch((err) => {
//         console.log(err);
//     });