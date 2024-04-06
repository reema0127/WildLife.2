const animaldata = {

}

fetch('Animals in SriLanka.json')
    .then(response => response.json())
    .then(data => {
        animaldata.title = data[0].title;
        animaldata.para1 = data[0].para1;
        animaldata.para2= data[0].para2;
        animaldata.para3 = data[0].para3;
        animaldata.para4 = data[0].para4;
        animaldata.title1 = data[1].title1;
        animaldata.ct1 = data[1].ct1;
        animaldata.para5 = data[1].para5;
        animaldata.ct2 = data[1].ct2; 
        animaldata.para6 = data[1].para6;
        animaldata.ct3 = data[1].ct3;
        animaldata.para7 = data[1].para7;
        animaldata.ct4 = data[1].ct4;
        animaldata.para8 = data[1].para8;
        localStorage.setItem('animals',JSON.stringify(data))
    })


//pop up edit
function openEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeading1").value = document.getElementById("title1").innerText;
    document.getElementById("editedParagraph1").value = document.getElementById("para1").innerText;
    document.getElementById("editedParagraph2").value = document.getElementById("para2").innerText;
    document.getElementById("editedParagraph3").value = document.getElementById("para3").innerText;
    document.getElementById("editedParagraph4").value = document.getElementById("para4").innerText;
    document.getElementById("editedCardTitle1").value = document.getElementById("cardtitle1").innerText;
    document.getElementById("editedCardTitle2").value = document.getElementById("cardtitle2").innerText;
    document.getElementById("editedCardTitle3").value = document.getElementById("cardtitle3").innerText;
    document.getElementById("editedCardTitle4").value = document.getElementById("cardtitle4").innerText;
    document.getElementById("editedParagraph5").value = document.getElementById("para5").innerText;
    document.getElementById("editedParagraph6").value = document.getElementById("para6").innerText;
    document.getElementById("editedParagraph7").value = document.getElementById("para7").innerText;
    document.getElementById("editedParagraph8").value = document.getElementById("para8").innerText;
}

function closeEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "none";
  }


function saveChanges1() {
    var newHeading1 = document.getElementById("editedHeading1").value;
    var newpara1 = document.getElementById("editedParagraph1").value;
    var newpara2 = document.getElementById("editedParagraph2").value;
    var newpara3 = document.getElementById("editedParagraph3").value;
    var newpara4 = document.getElementById("editedParagraph4").value;
    var newcardtitle1 = document.getElementById("editedCardTitle1").value;
    var newcardtitle2 = document.getElementById("editedCardTitle2").value;
    var newcardtitle3 = document.getElementById("editedCardTitle3").value;
    var newcardtitle4 = document.getElementById("editedCardTitle4").value;
    var newpara5 = document.getElementById("editedParagraph5").value;
    var newpara6 = document.getElementById("editedParagraph6").value;
    var newpara7 = document.getElementById("editedParagraph7").value;
    var newpara8 = document.getElementById("editedParagraph8").value;
    document.getElementById("title1").innerText = newHeading1;
    document.getElementById("para1").innerText = newpara1;
    document.getElementById("para2").innerText = newpara2;
    document.getElementById("para3").innerText = newpara3;
    document.getElementById("para4").innerText = newpara4;
    document.getElementById("cardtitle1").innerText = newcardtitle1;
    document.getElementById("cardtitle2").innerText = newcardtitle2;
    document.getElementById("cardtitle3").innerText = newcardtitle3;
    document.getElementById("cardtitle4").innerText = newcardtitle4;
    document.getElementById("para5").innerText = newpara5;
    document.getElementById("para6").innerText = newpara6;
    document.getElementById("para7").innerText = newpara7;
    document.getElementById("para8").innerText = newpara8;
    closeEditor1();

}