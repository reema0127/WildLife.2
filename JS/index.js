// Creating the structure of the data objects
const introdata = {
    introtitle: '',
    intropara: '',
};

const subsection1 = {
    subtitle1: '',
    list1: [],
};

const responsibility = {
    
}

const newsdata = {
    newsheading : '',
    newssubheading1 : '',
    newssubheading2 : '',
    newssubheading3 : '',
    newssubheading4 : ''
}

fetch('index.json')
    .then(response => response.json())
    .then(data => {
        introdata.introtitle = data[0].introtitle;
        introdata.intropara = data[0].intropara;
        subsection1.subtitle1 = data[1].subtitle1;
        subsection1.para1 = data[1].para1;
        responsibility.restitle = data[2].restitle;
        responsibility.restitle1 = data[2].restitle1;
        responsibility.restitle2 = data[2].restitle2;
        responsibility.restitle3 = data[2].restitle3;
        responsibility.restitle4 = data[2].restitle4;
        responsibility.restitle5 = data[2].restitle5;
        responsibility.restitle6 = data[2].restitle6;
        responsibility.restitle7 = data[2].restitle7;
        responsibility.restitle8 = data[2].restitle8;
        responsibility.ressubtitle1 = data[2].ressubtitle1;
        responsibility.ressubtitle2 = data[2].ressubtitle2;
        responsibility.ressubtitle3 = data[2].ressubtitle3;
        responsibility.ressubtitle4 = data[2].ressubtitle4;
        responsibility.ressubtitle5 = data[2].ressubtitle5;
        responsibility.ressubtitle6 = data[2].ressubtitle6;
        responsibility.ressubtitle7 = data[2].ressubtitle7;
        responsibility.ressubtitle8 = data[2].ressubtitle8;
        responsibility.respara1 = data[2].respara1;
        responsibility.respara2 = data[2].respara2;
        responsibility.respara3 = data[2].respara3;
        responsibility.respara4 = data[2].respara4;
        responsibility.respara5 = data[2].respara5;
        responsibility.respara6 = data[2].respara6;
        responsibility.respara7 = data[2].respara7;
        responsibility.respara8 = data[2].respara8;
        newsdata.newsheading = data[3].newsheading;
        newsdata.newssubheading1 = data[3].newssubheading1;
        newsdata.newspara1 = data[3].newspara1;
        newsdata.newssubheading2 = data[3].newssubheading2;
        newsdata.newspara2 = data[3].newspara2;
        newsdata.newssubheading3 = data[3].newssubheading3;
        newsdata.newspara3 = data[3].newspara3;
        newsdata.newssubheading4 = data[3].newssubheading4;
        newsdata.newspara4 = data[3].newspara4;
        newsdata.news1 = data[3].news1;
    })
    .catch(error => console.error('Error fetching data:', error));





//pop up edit
function openEditor1() {
  var modal = document.getElementById("editModal1");
  modal.style.display = "block";
  // Populate text areas with current content
  document.getElementById("editedHeading").value = document.getElementById("title1").innerText;
  document.getElementById("editedParagraph").value = document.getElementById("para1").innerText;
  document.getElementById("editedHeading2").value = document.getElementById("title2").innerText;
  document.getElementById("editedSubtitle1").value = document.getElementById("subtitle1").innerText;
  document.getElementById("editedSubtitle2").value = document.getElementById("subtitle2").innerText;
  document.getElementById("editedSubtitle3").value = document.getElementById("subtitle3").innerText;
  document.getElementById("editedSubtitle4").value = document.getElementById("subtitle4").innerText;
  document.getElementById("editedSubtitle5").value = document.getElementById("subtitle5").innerText;
  document.getElementById("editedSubtitle6").value = document.getElementById("subtitle6").innerText;
  document.getElementById("editedSubtitle7").value = document.getElementById("subtitle7").innerText;
  document.getElementById("editedSubtitle8").value = document.getElementById("subtitle8").innerText;
  document.getElementById("editedpara1").value = document.getElementById("para2").innerText;
  document.getElementById("editedpara2").value = document.getElementById("para3").innerText;
  document.getElementById("editedpara3").value = document.getElementById("para4").innerText;
  document.getElementById("editedpara4").value = document.getElementById("para5").innerText;
  document.getElementById("editedpara5").value = document.getElementById("para6").innerText;
  document.getElementById("editedpara6").value = document.getElementById("para7").innerText;
  document.getElementById("editedpara7").value = document.getElementById("para8").innerText;
  document.getElementById("editedpara8").value = document.getElementById("para9").innerText;
  document.getElementById("editedHeading3").value = document.getElementById("title3").innerText;
  document.getElementById("editedSubtitle9").value = document.getElementById("subtitle9").innerText;
  document.getElementById("editedSubtitle10").value = document.getElementById("subtitle10").innerText;
  document.getElementById("editedSubtitle11").value = document.getElementById("subtitle11").innerText;
  document.getElementById("editedSubtitle12").value = document.getElementById("subtitle12").innerText;
  document.getElementById("editedpara9").value = document.getElementById("para10").innerText;
  document.getElementById("editedpara10").value = document.getElementById("para11").innerText;
  document.getElementById("editedpara11").value = document.getElementById("para12").innerText;
  document.getElementById("editedpara12").value = document.getElementById("para13").innerText;

}

function closeEditor1() {
  var modal = document.getElementById("editModal1");
  modal.style.display = "none";
}

function saveChanges1() {
  var newHeading = document.getElementById("editedHeading").value;
  var newParagraph = document.getElementById("editedParagraph").value;
  var newHeading1 = document.getElementById("editedHeading2").value;
  var newsubtitle1 = document.getElementById("editedSubtitle1").value;
  var newsubtitle2 = document.getElementById("editedSubtitle2").value;
  var newsubtitle3 = document.getElementById("editedSubtitle3").value;
  var newsubtitle4 = document.getElementById("editedSubtitle4").value;
  var newsubtitle5 = document.getElementById("editedSubtitle5").value;
  var newsubtitle6 = document.getElementById("editedSubtitle6").value;
  var newsubtitle7 = document.getElementById("editedSubtitle7").value;
  var newsubtitle8 = document.getElementById("editedSubtitle8").value;
  var newpara1 = document.getElementById("editedpara1").value;
  var newpara2 = document.getElementById("editedpara2").value;
  var newpara3 = document.getElementById("editedpara3").value;
  var newpara4 = document.getElementById("editedpara4").value;
  var newpara5 = document.getElementById("editedpara5").value;
  var newpara6 = document.getElementById("editedpara6").value;
  var newpara7 = document.getElementById("editedpara7").value;
  var newpara8 = document.getElementById("editedpara8").value;
  var newHeading2 = document.getElementById("editedHeading3").value;
  var newsubtitle9 = document.getElementById("editedSubtitle9").value;
  var newsubtitle10 = document.getElementById("editedSubtitle10").value;
  var newsubtitle11= document.getElementById("editedSubtitle11").value;
  var newsubtitle12= document.getElementById("editedSubtitle12").value;
  var newpara9 = document.getElementById("editedpara9").value;
  var newpara10 = document.getElementById("editedpara10").value;
  var newpara11 = document.getElementById("editedpara11").value;
  var newpara12 = document.getElementById("editedpara12").value;
  document.getElementById("title1").innerText = newHeading;
  document.getElementById("para1").innerText = newParagraph;
  document.getElementById("title2").innerText = newHeading1;
  document.getElementById("subtitle1").innerText = newsubtitle1;
  document.getElementById("subtitle2").innerText = newsubtitle2;
  document.getElementById("subtitle3").innerText = newsubtitle3;
  document.getElementById("subtitle4").innerText = newsubtitle4;
  document.getElementById("subtitle5").innerText = newsubtitle5;
  document.getElementById("subtitle6").innerText = newsubtitle6;
  document.getElementById("subtitle7").innerText = newsubtitle7;
  document.getElementById("subtitle8").innerText = newsubtitle8;
  document.getElementById("para2").innerText = newpara1;
  document.getElementById("para3").innerText = newpara2;
  document.getElementById("para4").innerText = newpara3;
  document.getElementById("para5").innerText = newpara4;
  document.getElementById("para6").innerText = newpara5;
  document.getElementById("para7").innerText = newpara6;
  document.getElementById("para8").innerText = newpara7;
  document.getElementById("para9").innerText = newpara8;
  document.getElementById("title3").innerText = newHeading2;
  document.getElementById("subtitle9").innerText = newsubtitle9;
  document.getElementById("subtitle10").innerText = newsubtitle10;
  document.getElementById("subtitle11").innerText = newsubtitle11;
  document.getElementById("subtitle12").innerText = newsubtitle12;
  document.getElementById("para10").innerText = newpara9;
  document.getElementById("para11").innerText = newpara10;
  document.getElementById("para12").innerText = newpara11;
  document.getElementById("para13").innerText = newpara12;
  closeEditor1();

}


