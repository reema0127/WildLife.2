const wilpattudata = {}
fetch('wilpattu.json')
    .then(response => response.json())
    .then(data => {
        wilpattudata.mh = data[0].mh;
        wilpattudata.sh1 = data[1].sh1;
        wilpattudata.para1 = data[1].para1;
        wilpattudata.para2 = data[1].para2;
        wilpattudata.sh2 = data[2].sh2;
        wilpattudata.sh3 = data[3].sh3;
        wilpattudata.event1 = data[3].event1;
        wilpattudata.para4 = data[3].para4;
        wilpattudata.event2 = data[3].event2;
        wilpattudata.para5 = data[3].para5;
        wilpattudata.event3 = data[3].event3;
        wilpattudata.para6 = data[3].para6;
        localStorage.setItem('Wilpattu',JSON.stringify(data))
    })



//pop up edit
function openEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeading").value = document.getElementById("title1").innerText;
    document.getElementById("editedHeading2").value = document.getElementById("title2").innerText;
    document.getElementById("editedParagraph").value = document.getElementById("para1").innerText;
    document.getElementById("editedpara1").value = document.getElementById("para2").innerText;
    document.getElementById("editedHeading3").value = document.getElementById("title3").innerText;
    document.getElementById("editedSubtitle1").value = document.getElementById("subtitle1").innerText;
    document.getElementById("editedpara2").value = document.getElementById("para3").innerText;
    document.getElementById("editedSubtitle2").value = document.getElementById("subtitle2").innerText;
    document.getElementById("editedpara3").value = document.getElementById("para4").innerText;
    document.getElementById("editedSubtitle3").value = document.getElementById("subtitle3").innerText;
    document.getElementById("editedpara4").value = document.getElementById("para5").innerText;

  }
  
  function closeEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "none";
  }
  
  function saveChanges1() {
    var newHeading = document.getElementById("editedHeading").value;
    var newParagraph1 = document.getElementById("editedParagraph").value;
    var newHeading1 = document.getElementById("editedHeading2").value;
    var newpara1 = document.getElementById("editedpara1").value;
    var newHeading2 = document.getElementById("editedHeading3").value;
    var newsubtitle1 = document.getElementById("editedSubtitle1").value;
    var newpara2 = document.getElementById("editedpara2").value;
    var newsubtitle2 = document.getElementById("editedSubtitle2").value;
    var newpara3 = document.getElementById("editedpara3").value;
    var newsubtitle3 = document.getElementById("editedSubtitle3").value;
    var newpara4 = document.getElementById("editedpara4").value;

    document.getElementById("title1").innerText = newHeading;
    document.getElementById("title2").innerText = newHeading1;
    document.getElementById("para1").innerText = newParagraph1;
    document.getElementById("para2").innerText = newpara1;
    document.getElementById("title3").innerText = newHeading2;
    document.getElementById("subtitle1").innerText = newsubtitle1;
    document.getElementById("para3").innerText = newpara2;
    document.getElementById("subtitle2").innerText = newsubtitle2;
    document.getElementById("para4").innerText = newpara3;
    document.getElementById("subtitle3").innerText = newsubtitle3;
    document.getElementById("para5").innerText = newpara4;
    closeEditor1();
  
  }
  
 
  