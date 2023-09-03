const getBtn = document.getElementById('get-btn');
const postbtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const deletebtn = document.getElementById('delete-btn');


 const getData = function () {
    axios.get("http://localhost:8080/mavenproject1/webresources/contacts",{
            params: {
                format:'xml',
            },
            responseType:"document",
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((data) => {
        console.log(data);
      });
}

const postData = (xmlData) => {
    
    axios.post('http://localhost:8080/mavenproject1/webresources/contacts',xmlData, {
        headers:{
            'Content-Type': 'application/xml'
        }
    
    }).then((response) => {
        alert("your data has been created successfully")
        console.log(response.data);
    }).catch((err) => {
        console.log(err);
    });
}

const putData = () => {
    const xmlData = `<contacts>
    <city>Washington</city>
    <country>USA</country>
    <email>sik@sina.com.cn</email>
    <gender>Male</gender>
    <id>1006</id>
    <name>Sid</name>
    <phone>+91 151 325 1474</phone>
    </contacts>`
    axios.put('http://localhost:8080/mavenproject1/webresources/contacts/1007',xmlData, {
        headers:{
            'Content-Type': 'application/xml'
        }
    }).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
}

const deleteData = () => {
    axios.delete('http://localhost:8080/mavenproject1/webresources/contacts/1002')
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
}

function submitData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;

    const xmlString = `<contacts>
    <city>${city}</city>
    <country>${country}</country>
    <email>${email}</email>
    <gender>${gender}</gender>
    <name>${name}</name>
    <phone>${phone}</phone>
    </contacts>`;

    postData(xmlString);
}
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitData();
})
getBtn.addEventListener('click', getData);
postbtn.addEventListener('click', postData);
putBtn.addEventListener('click', putData);
deletebtn.addEventListener('click', deleteData);
