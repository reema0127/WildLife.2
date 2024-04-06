//pop up edit
function openEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedTabletitle1").value = document.getElementById("tabletitle1").innerText;
    document.getElementById("editedTabletitle2").value = document.getElementById("tabletitle2").innerText;
    document.getElementById("editedTabletitle3").value = document.getElementById("tabletitle3").innerText;
    document.getElementById("editedTabletitle4").value = document.getElementById("tabletitle4").innerText;
    document.getElementById("editedAnimal1").value = document.getElementById("animal1").innerText;
    document.getElementById("editeddata1").value = document.getElementById("data1").innerText;
    document.getElementById("editeddata2").value = document.getElementById("data2").innerText;
    document.getElementById("editeddata3").value = document.getElementById("data3").innerText;
    
}

function closeEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "none";
}

function saveChanges1() {
    var newTabletitle1 = document.getElementById("editedTabletitle1").value;
    var newTabletitle2 = document.getElementById("editedTabletitle2").value;
    var newTabletitle3 = document.getElementById("editedTabletitle3").value;
    var newTabletitle4 = document.getElementById("editedTabletitle4").value;
    var newAnimal1 = document.getElementById("editedAnimal1").value;
    var newdata1 = document.getElementById("editeddata1").value;
    var newdata2 = document.getElementById("editeddata2").value;
    var newdata3 = document.getElementById("editeddata3").value;
 
    document.getElementById("tabletitle1").innerText = newTabletitle1;
    document.getElementById("tabletitle2").innerText = newTabletitle2;
    document.getElementById("tabletitle3").innerText = newTabletitle3;
    document.getElementById("tabletitle4").innerText = newTabletitle4;
    document.getElementById("animal1").innerText = newAnimal1;
    document.getElementById("data1").innerText = newdata1;
    document.getElementById("data2").innerText = newdata2;
    document.getElementById("data3").innerText = newdata3;
    closeEditor1()

}