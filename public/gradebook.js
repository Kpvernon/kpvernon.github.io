//TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    //This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
   let xhr = new XMLHttpRequest();
   let apiRoute = "/api/grades";
   xhr.onreadystatechange = function(){
        let results;
        if(xhr.readyState === xhr.DONE){
                if(xhr.status !==200){
                        console.error(`Could not get grades.
                            Status: ${xhr.status}`);
                }
                populateGradebook(JSON.parse(xhr.responseText));
                }
   } .bind(this);
   console.log(`${xhr.status}`);
   xhr.open ("get", apiRoute, true);
   xhr.send();
}

//TODO Populate the table with grade data
function populateGradebook (data) {
    //This function will take the fetched grade data and popluate the table
    console.log (data ,"here");
    let tableElm = document.getElementById("gradebook");
        ;data.forEach(function(assignment){
            console.log(assignment);
            let row = document.createElement("tr");
            let columns = [];
            columns.name = document.createElement('td');
            columns.name.append(
               assignment.first_name.toString()
            );
            columns.grade = document.createElement('td');
            columns.grade.append(
               assignment.total_grade.toString()
            );
            row.append(columns.name);
            row.append(columns.grade);
            tableElm.append(row)
        });
}

fetchGradeData();

//TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
// const gradeData= fetchGradeData();
// populateGradebook(gradeData);
// END REMOVE
