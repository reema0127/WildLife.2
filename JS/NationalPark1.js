const introdata = {}
const gallery ={}
const table ={}

fetch('NationalPark1.json')
    .then(response => response.json())
    .then(data => {
        introdata.introheading = data[0].introheading;
        introdata.intropara = data[0].intropara;
        introdata.siteheading = data[1].siteheading;
        introdata.site1 = data[1].site1;
        introdata.para1 = data[1].para1;
        introdata.para2 = data[1].para2;
        introdata.para3 = data[1].para3;
        gallery.galleryheading = data[2].galleryheading;
        table.tabletitle1 = data[3].tabletitle1;
        table.tabletitle2 = data[3].tabletitle2;
        table.tabletitle3 = data[3].tabletitle3;
        table.tabletitle4 = data[3].tabletitle4;
        table.animal1 = data[3].animal1;
        table.animal2 = data[3].animal2;
        table.animal3 = data[3].animal3;
        table.list = data[3].list;
        table.list2 = data[3].list2;
        table.smllist1 = data[3].smllist1;
        table.list3 = data[3].list3;
        table.list4 = data[3].list4;
        table.list5 = data[3].list5;
        table.list6 = data[3].list6;
        table.list7 = data[3].list7;
        table.smllist2 = data[3].smllist2;
        table.list8 = data[3].list8;
        table.list9 = data[3].list9;
        localStorage.setItem('Nationalpark1',JSON.stringify(data))
    })

//pop up edit
function openEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeading1").value = document.getElementById("title1").innerText;
    document.getElementById("editedpara1").value = document.getElementById("para1").innerText;
    document.getElementById("editedSubtitle1").value = document.getElementById("subtitle1").innerText;
    document.getElementById("editedtitle1").value = document.getElementById("site1").innerText;
    document.getElementById("editedpara2").value = document.getElementById("para2").innerText;
    document.getElementById("editedpara3").value = document.getElementById("para3").innerText;
    document.getElementById("editedpara4").value = document.getElementById("para4").innerText;
    document.getElementById("editedHeading2").value = document.getElementById("title2").innerText;
    document.getElementById("editedTabletitle1").value = document.getElementById("tabletitle1").innerText;
    document.getElementById("editedTabletitle2").value = document.getElementById("tabletitle2").innerText;
    document.getElementById("editedTabletitle3").value = document.getElementById("tabletitle3").innerText;
    document.getElementById("editedTabletitle4").value = document.getElementById("tabletitle4").innerText;
    document.getElementById("editedAnimal1").value = document.getElementById("animal1").innerText;
    var listContent1 = "";
    var list1 = document.querySelectorAll("#listOne li");
    list1.forEach(function(item) {
        listContent1 += item.textContent + "\n";
    });
    document.getElementById("editedListOne").value = listContent1;
      //second list
    var listContent2 = "";
    var list2 = document.querySelectorAll("#listTwo li");
    list2.forEach(function(item) {
        listContent2 += item.textContent + "\n";
    });
    document.getElementById("editedListTwo").value = listContent2;
    //third list
    var listContent3 = "";
    var list3 = document.querySelectorAll("#listThree li");
    list3.forEach(function(item) {
        listContent3 += item.textContent + "\n";
    });
    document.getElementById("editedListThree").value = listContent3;
    document.getElementById("editedAnimal2").value = document.getElementById("animal2").innerText;
     //fourth list
     var listContent4 = "";
     var list4 = document.querySelectorAll("#listFour li");
     list4.forEach(function(item) {
         listContent4 += item.textContent + "\n";
     });
     document.getElementById("editedListFour").value = listContent4;
    //list 5
    var listContent5 = "";
    var list5 = document.querySelectorAll("#listFive li");
    list5.forEach(function(item) {
        listContent5 += item.textContent + "\n";
    });
    document.getElementById("editedListFive").value = listContent5;
   //Sixth list
   var listContent6 = "";
   var list6 = document.querySelectorAll("#listSix li");
   list6.forEach(function(item) {
       listContent6 += item.textContent + "\n";
   document.getElementById("editedListSix").value = listContent6;
   //
   });
   document.getElementById("editedAnimal3").value = document.getElementById("animal3").innerText;
   //list 7
   var listContent7 = "";
     var list7 = document.querySelectorAll("#listSeven li");
     list7.forEach(function(item) {
         listContent7 += item.textContent + "\n";
     });
     document.getElementById("editedListSeven").value = listContent7;
     //list 8
     var listContent8 = "";
     var list8 = document.querySelectorAll("#listEight li");
     list8.forEach(function(item) {
         listContent8 += item.textContent + "\n";
     });
     document.getElementById("editedListEight").value = listContent8;
    //list 9
    var listContent9 = "";
    var list9 = document.querySelectorAll("#listNine li");
    list9.forEach(function(item) {
        listContent9 += item.textContent + "\n";
    });
    document.getElementById("editedListNine").value = listContent9;
    
}

function closeEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "none";
}

function saveChanges1() {
    var newHeading1 = document.getElementById("editedHeading1").value;
    var newPara1 = document.getElementById("editedpara1").value;
    var newSubtitle1 = document.getElementById("editedSubtitle1").value;
    var newSite1 = document.getElementById("editedtitle1").value;
    var newPara2 = document.getElementById("editedpara2").value;
    var newPara3 = document.getElementById("editedpara3").value;
    var newPara4 = document.getElementById("editedpara4").value;
    var newHeading2 = document.getElementById("editedHeading2").value;
    var newTabletitle1 = document.getElementById("editedTabletitle1").value;
    var newTabletitle2 = document.getElementById("editedTabletitle2").value;
    var newTabletitle3 = document.getElementById("editedTabletitle3").value;
    var newTabletitle4 = document.getElementById("editedTabletitle4").value;
    var newAnimal1 = document.getElementById("editedAnimal1").value;
    var newListOne = document.getElementById("editedListOne").value.trim();
    var newListTwo = document.getElementById("editedListTwo").value.trim();
    var newListThree = document.getElementById("editedListThree").value.trim();
    var newAnimal2 = document.getElementById("editedAnimal2").value;
    var newListFour = document.getElementById("editedListFour").value.trim();
    var newListFive = document.getElementById("editedListFive").value.trim();
    var newListSix = document.getElementById("editedListSix").value.trim();
    var newAnimal3 = document.getElementById("editedAnimal3").value;
    var newListSeven = document.getElementById("editedListSeven").value.trim();
    var newListEight = document.getElementById("editedListEight").value.trim();
    var newListNine = document.getElementById("editedListNine").value.trim();

    document.getElementById("title1").innerText = newHeading1;
    document.getElementById("para1").innerText = newPara1;
    document.getElementById("subtitle1").innerText = newSubtitle1;
    document.getElementById("site1").innerText = newSite1;
    document.getElementById("para2").innerText = newPara2;
    document.getElementById("para3").innerText = newPara3;
    document.getElementById("para4").innerText = newPara4;
    document.getElementById("title2").innerText = newHeading2;
    document.getElementById("tabletitle1").innerText = newTabletitle1;
    document.getElementById("tabletitle2").innerText = newTabletitle2;
    document.getElementById("tabletitle3").innerText = newTabletitle3;
    document.getElementById("tabletitle4").innerText = newTabletitle4;
    document.getElementById("animal1").innerText = newAnimal1;
     //list 1
    var list1 = newListOne.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listOne").innerHTML = list1;
    closeEditor1()
      //list 2
      var list2 = newListTwo.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listTwo").innerHTML = list2;
    //list 3
    var list3 = newListThree.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listThree").innerHTML = list3;
    document.getElementById("animal2").innerText = newAnimal2;
    //list 4
    var list4 = newListFour.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listFour").innerHTML = list4;
    //list 5
    var list5 = newListFive.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listFive").innerHTML = list5;
    //list 6
    var list6 = newListSix.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listSix").innerHTML = list6;
    document.getElementById("animal3").innerText = newAnimal3;
     //list 7
    var list7 = newListSeven.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listSeven").innerHTML = list7;
     //list 8
     var list8 = newListEight.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listEight").innerHTML = list8;
     //list 7
    var list9 = newListNine.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listNine").innerHTML = list9;

}