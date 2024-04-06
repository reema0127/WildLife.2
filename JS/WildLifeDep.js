


const wildlifedep ={
    title : '',
    para1 : '',
    para2 :'',
    title2 :'',
    para3 : '',
    para4 :'',
    para5 : '',
    title3 : '',
    sh1 :'',
    sh2 : ''
}

fetch ('WildLifeDep.json')
    .then(response => response.json())
    .then(data => {
        wildlifedep.title = data[0].title;
        wildlifedep.para1 = data[0].para1;
        wildlifedep.para2 = data[0].para2;
        wildlifedep.title2 = data[0].title2;
        wildlifedep.para3 = data[1].para3;
        wildlifedep.para4 = data[1].para4;
        wildlifedep.para5 =data[1].para5;
        wildlifedep.title3 = data[2].title3;
        wildlifedep.sh1 = data[2].sh1;
        wildlifedep.sh2 = data[2].sh2;
        wildlifedep.sh3 = data[2].sh3;
        wildlifedep.para6 = data[2].para6;
        wildlifedep.para7 = data[2].para7;
        wildlifedep.para8 = data[2].para8;
        wildlifedep.galtitle = data[3].galtitle;
        localStorage.setItem('Wildlifedep',JSON.stringify(data))
    })


//pop up edit
function openEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeading1").value = document.getElementById("title1").innerText;
    document.getElementById("editedpara1").value = document.getElementById("para1").innerText;
    document.getElementById("editedpara2").value = document.getElementById("para2").innerText;
    document.getElementById("editedHeading2").value = document.getElementById("title2").innerText;
    document.getElementById("editedpara3").value = document.getElementById("para3").innerText;
    document.getElementById("editedpara4").value = document.getElementById("para4").innerText;
    document.getElementById("editedpara5").value = document.getElementById("para5").innerText;
    document.getElementById("editedHeading3").value = document.getElementById("title3").innerText;
    document.getElementById("editedSubtitle1").value = document.getElementById("subtitle1").innerText;
    document.getElementById("editedSubtitle2").value = document.getElementById("subtitle2").innerText;
    document.getElementById("editedSubtitle3").value = document.getElementById("subtitle3").innerText;
    document.getElementById("editedpara6").value = document.getElementById("para6").innerText;
    document.getElementById("editedpara7").value = document.getElementById("para7").innerText;
    document.getElementById("editedpara8").value = document.getElementById("para8").innerText;
    document.getElementById("editedHeading4").value = document.getElementById("title4").innerText;
}

function closeEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "none";
  }

  function saveChanges1() {
    var newHeading1 = document.getElementById("editedHeading1").value;
    var newpara1 = document.getElementById("editedpara1").value;
    var newpara2 = document.getElementById("editedpara2").value;
    var newHeading2 = document.getElementById("editedHeading2").value;
    var newpara3 = document.getElementById("editedpara3").value;
    var newpara4 = document.getElementById("editedpara4").value;
    var newpara5 = document.getElementById("editedpara5").value;
    var newHeading3 = document.getElementById("editedHeading3").value;
    var newsubtitle1 = document.getElementById("editedSubtitle1").value;
    var newsubtitle2 = document.getElementById("editedSubtitle2").value;
    var newsubtitle3 = document.getElementById("editedSubtitle3").value;
    var newpara6 = document.getElementById("editedpara6").value;
    var newpara7 = document.getElementById("editedpara7").value;
    var newpara8 = document.getElementById("editedpara8").value;
    var newHeading4 = document.getElementById("editedHeading4").value;
    document.getElementById("title1").innerText = newHeading1;
    document.getElementById("para1").innerText = newpara1;
    document.getElementById("para2").innerText = newpara2;
    document.getElementById("title2").innerText = newHeading2;
    document.getElementById("para3").innerText = newpara3;
    document.getElementById("para4").innerText = newpara4;
    document.getElementById("para5").innerText = newpara5;
    document.getElementById("title3").innerText = newHeading3;
    document.getElementById("subtitle1").innerText = newsubtitle1;
    document.getElementById("subtitle2").innerText = newsubtitle2;
    document.getElementById("subtitle3").innerText = newsubtitle3;
    document.getElementById("para6").innerText = newpara6;
    document.getElementById("para7").innerText = newpara7;
    document.getElementById("para8").innerText = newpara8;
    document.getElementById("title4").innerText = newHeading4;
    closeEditor1()
  }

//   function saveChanges1() {
//     var newHeading1 = document.getElementById("editedHeading1").value;
//     var newpara1 = document.getElementById("editedpara1").value;
//     var newpara2 = document.getElementById("editedpara2").value;
//     var newHeading2 = document.getElementById("editedHeading2").value;
//     var newpara3 = document.getElementById("editedpara3").value;
//     var newpara4 = document.getElementById("editedpara4").value;
//     var newpara5 = document.getElementById("editedpara5").value;
//     var newHeading3 = document.getElementById("editedHeading3").value;
//     var newsubtitle1 = document.getElementById("editedSubtitle1").value;
//     var newsubtitle2 = document.getElementById("editedSubtitle2").value;
//     var newsubtitle3 = document.getElementById("editedSubtitle3").value;
//     var newpara6 = document.getElementById("editedpara6").value;
//     var newpara7 = document.getElementById("editedpara7").value;
//     var newpara8 = document.getElementById("editedpara8").value;
//     var newHeading4 = document.getElementById("editedHeading4").value;

//     // Update the displayed content with the new values
//     document.getElementById("title1").innerText = newHeading1;
//     document.getElementById("para1").innerText = newpara1;
//     document.getElementById("para2").innerText = newpara2;
//     document.getElementById("title2").innerText = newHeading2;
//     document.getElementById("para3").innerText = newpara3;
//     document.getElementById("para4").innerText = newpara4;
//     document.getElementById("para5").innerText = newpara5;
//     document.getElementById("title3").innerText = newHeading3;
//     document.getElementById("subtitle1").innerText = newsubtitle1;
//     document.getElementById("subtitle2").innerText = newsubtitle2;
//     document.getElementById("subtitle3").innerText = newsubtitle3;
//     document.getElementById("para6").innerText = newpara6;
//     document.getElementById("para7").innerText = newpara7;
//     document.getElementById("para8").innerText = newpara8;
//     document.getElementById("title4").innerText = newHeading4;

//     // Store the updated values in local storage
//     localStorage.setItem("editedHeading1", newHeading1);
//     localStorage.setItem("editedpara1", newpara1);
//     localStorage.setItem("editedpara2", newpara2);
//     localStorage.setItem("editedHeading2", newHeading2);
//     localStorage.setItem("editedpara3", newpara3);
//     localStorage.setItem("editedpara4", newpara4);
//     localStorage.setItem("editedpara5", newpara5);
//     localStorage.setItem("editedHeading3", newHeading3);
//     localStorage.setItem("editedSubtitle1", newsubtitle1);
//     localStorage.setItem("editedSubtitle2", newsubtitle2);
//     localStorage.setItem("editedSubtitle3", newsubtitle3);
//     localStorage.setItem("editedpara6", newpara6);
//     localStorage.setItem("editedpara7", newpara7);
//     localStorage.setItem("editedpara8", newpara8);
//     localStorage.setItem("editedHeading4", newHeading4);

//     // Close the editor modal
//     closeEditor1();
// }
