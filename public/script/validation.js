
alert ("hello");
// document.getElementById('post-form').onsubmit = () => 
//     {
//     clearerrors()
//     let isValid = true;
//     let name = document.getElementById('name').valuetrim();
//     let title = document.getElementById('title').valuetrim();
//     let content = document.getElementById('content').valuetrim();
//     if(name === "")
//         {
//             document.getElementById('err-name').style.display = "block";
//             isValid = false;
//         }
//         if(title === "")
//             {
//                 document.getElementById('err-title').style.display = "block";
//                 isValid = false;
//             }
//             if(content === "")
//                 {
//                     document.getElementById('err-content').style.display = "block";
//                     isValid = false;
//                 }
//                 return isValid;
// }
//     function clearerrors()
//     {
//         let errors = document.getElementsByClassName("err");
//         for(let i =0; i<errors.length; i++)
//             {
//             errors[i].styles.display = "none";
//             }
//     }

    document.getElementById('post-form').onsubmit = () => {
        clearerrors();
        let isValid = true;
        let name = document.getElementById('name').value.trim();
        let title = document.getElementById('title').value.trim();
        let content = document.getElementById('content').value.trim();
        if (name === "") {
            document.getElementById('err-name').style.display = "block";
            isValid = false;
        }
        if (title === "") {
            document.getElementById('err-title').style.display = "block";
            isValid = false;
        }
        if (content === "") {
            document.getElementById('err-content').style.display = "block";
            isValid = false
        }
        return isValid;
    }
    function clearerrors() {
        let errors = document.getElementsByClassName("err");
        for (let i=0; i<errors.length; i++) {
            errors[i].style.display = "none";
        }
    }

    
    
    
    
    