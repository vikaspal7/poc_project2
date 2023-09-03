
$(document).ready(
  function(){
    getData()
  }
)

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

      const x2js = new X2JS(); 
      const jsonData = x2js.xml2json(response.data);
      console.log(jsonData.contactss.contacts.slice(0,20));
      
      const tableBody = document.getElementById('table-body');
      console.log(tableBody)
  
      new DataTable('#contacts-table', {
        columns: [
            { data: 'id',title:'id' },
            { data: 'name',title:'name'  },
            { data: 'email',title:'email' },
            { data: 'phone',title:'phone' },
            { data: 'country',title:'country' },
            { data: 'city',title:'city' },
            { data: 'gender',title:'gender' }
        ],
        data: jsonData.contactss.contacts
    });
  })
    .catch((err) => {
      console.log(err);
    })
    .finally((data) => {
      console.log(data);
    });
}


