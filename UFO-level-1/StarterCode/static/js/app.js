// from data.js
var tableData = data;

//Get a reference to the table body
var tbody = d3.select("tbody");

// Part 1: Load the table with data
function buildTable(data) {
    tbody.html("");
    data.forEach(function(ufoSighting) {
        // console.log(ufoSighting);
        var row = tbody.append("tr");

        Object.entries(ufoSighting).forEach(function([key,value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
};

buildTable(tableData);
// Part 2: Create event listener to allow users to search the date/time column

//Create the event handlers


// button.on("click", runEnter);
// form.on("submit", runEnter);

//Create search function for date/time
function runEnter() {

    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
  
    // console.log(inputValue);
    // console.log(tableData);
  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", runEnter);
d3.selectAll("#form").on("change", runEnter);