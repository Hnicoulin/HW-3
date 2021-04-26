function formSubmitEvent() {
    let name = document.getElementById("custname").value;
 
    let city = document.getElementById("city").value;

    let pay = document.getElementById("payment").value;


        let ul = document.createElement('ul');
        ul.innerHTML = "";

        custinfo = [name+" "+" "+city+" "+pay];

        document.getElementById('renderList').appendChild(ul);
        custinfo.forEach(renderCustList);

        function renderCustList(element, index, arr) {
            let li = document.createElement('li');
           

            ul.appendChild(li);
            
            li.innerHTML=li.innerHTML + element;
            
        }
    }