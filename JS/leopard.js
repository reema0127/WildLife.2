const leoparddata ={

}


fetch('leopard.json')
    .then(response => response.json())
    .then(data => {
        leoparddata.title1 = data[0].title1;
        leoparddata.para1 = data[0].para1;
        leoparddata.title2 = data[1].title2;
        leoparddata.sh1 = data[1].sh1;
        leoparddata.para2 = data[1].para2;
        leoparddata.sh2 = data[1].sh2;
        leoparddata.para3 = data[1].para3;
        leoparddata.sh3 = data[1].sh3;
        leoparddata.para4 = data[1].para4;
        leoparddata.title3 = data[2].title3;
        leoparddata.para5 = data[2].para5;
        leoparddata.sh4 = data[2].sh4;
        leoparddata.para6 = data[2].para6;
        leoparddata.sh5 = data[2].sh5;
        leoparddata.list = data[2].list;
        leoparddata.sh6 = data[2].sh6;
        leoparddata.list1 = data[2].list1;
        leoparddata.sh7 = data[2].sh7;
        leoparddata.para7 = data[2].para7;
        leoparddata.list2 = data[2].list2;
        leoparddata.sh8 = data[2].sh8;
        leoparddata.sh9 = data[2].sh9;
        leoparddata.list3 = data[2].list3;
        leoparddata.sh10 = data[2].sh10;
        leoparddata.para8 = data[2].para8;
        leoparddata.sh11 = data[2].sh11;
        leoparddata.list4 = data[2].list4;
        leoparddata.sh12 = data[2].sh12;
        leoparddata.list5 = data[2].list5;
        localStorage.setItem('leoparddata',JSON.stringify(data))
    })



//pop up edit
function openEditor1() {
    var modal = document.getElementById("editModal1");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeading1").value = document.getElementById("title1").innerText;
    document.getElementById("editedpara1").value = document.getElementById("para1").innerText;
    document.getElementById("editedHeading2").value = document.getElementById("title2").innerText;
    document.getElementById("editedsubtitle1").value = document.getElementById("venuetitle1").innerText;
    document.getElementById("editedsubtitle2").value = document.getElementById("venuetitle2").innerText;
    document.getElementById("editedsubtitle3").value = document.getElementById("venuetitle1").innerText;
    document.getElementById("editedpara2").value = document.getElementById("para2").innerText;
    document.getElementById("editedpara3").value = document.getElementById("para3").innerText;
    document.getElementById("editedpara4").value = document.getElementById("para4").innerText;
    document.getElementById("editedHeading3").value = document.getElementById("title3").innerText;
    document.getElementById("editedpara5").value = document.getElementById("para5").innerText;
    document.getElementById("editedsubtitle4").value = document.getElementById("threattitle1").innerText;
    document.getElementById("editedsubtitle5").value = document.getElementById("threattitle2").innerText;
    document.getElementById("editedsubtitle6").value = document.getElementById("threattitle3").innerText;
    document.getElementById("editedpara6").value = document.getElementById("para6").innerText;
    document.getElementById("editedpara7").value = document.getElementById("para7").innerText;
    document.getElementById("editedpara8").value = document.getElementById("para8").innerText;
    document.getElementById("editedsubtitle7").value = document.getElementById("subtitle1").innerText;
    document.getElementById("editedsubtitle8").value = document.getElementById("subtitle2").innerText;
    document.getElementById("editedsubtitle9").value = document.getElementById("subtitle3").innerText;
     //first list
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
    //
    document.getElementById("editedsubtitle10").value = document.getElementById("subtitle4").innerText;
    document.getElementById("editedsubtitle11").value = document.getElementById("subtitle5").innerText;
    document.getElementById("editedsubtitle12").value = document.getElementById("subtitle6").innerText;
    //fourth list
    var listContent4 = "";
    var list4 = document.querySelectorAll("#listFour li");
    list4.forEach(function(item) {
        listContent4 += item.textContent + "\n";
    });
    document.getElementById("editedListFour").value = listContent4;
    //fifth list
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
}

function closeEditor1() {
  var modal = document.getElementById("editModal1");
  modal.style.display = "none";
}

function saveChanges1(){
    var newHeading1 = document.getElementById("editedHeading1").value;
    var newpara1 = document.getElementById("editedpara1").value;
    var newHeading2 = document.getElementById("editedHeading2").value;
    var newSubtitle1 = document.getElementById("editedsubtitle1").value;
    var newSubtitle2 = document.getElementById("editedsubtitle2").value;
    var newSubtitle3 = document.getElementById("editedsubtitle3").value;
    var newpara2 = document.getElementById("editedpara2").value;
    var newpara3 = document.getElementById("editedpara3").value;
    var newpara4 = document.getElementById("editedpara4").value;
    var newHeading3 = document.getElementById("editedHeading3").value;
    var newpara5 = document.getElementById("editedpara5").value;
    var newSubtitle4 = document.getElementById("editedsubtitle4").value;
    var newSubtitle5 = document.getElementById("editedsubtitle5").value;
    var newSubtitle6 = document.getElementById("editedsubtitle6").value;
    var newpara6 = document.getElementById("editedpara6").value;
    var newpara7 = document.getElementById("editedpara7").value;
    var newpara8 = document.getElementById("editedpara8").value;
    var newSubtitle7 = document.getElementById("editedsubtitle7").value;
    var newSubtitle8 = document.getElementById("editedsubtitle8").value;
    var newSubtitle9 = document.getElementById("editedsubtitle9").value;
    var newListOne = document.getElementById("editedListOne").value.trim();
    var newListTwo = document.getElementById("editedListTwo").value.trim();
    var newListThree = document.getElementById("editedListThree").value.trim();
    var newSubtitle10 = document.getElementById("editedsubtitle10").value;
    var newSubtitle11 = document.getElementById("editedsubtitle11").value;
    var newSubtitle12 = document.getElementById("editedsubtitle12").value;
    var newListFour = document.getElementById("editedListFour").value.trim();
    var newListFive = document.getElementById("editedListFive").value.trim();
    var newListSix = document.getElementById("editedListSix").value.trim();

    document.getElementById("title1").innerText = newHeading1;
    document.getElementById("para1").innerText = newpara1;
    document.getElementById("title2").innerText = newHeading2;
    document.getElementById("venuetitle1").innerText = newSubtitle1;
    document.getElementById("venuetitle2").innerText = newSubtitle2;
    document.getElementById("venuetitle3").innerText = newSubtitle3;
    document.getElementById("para2").innerText = newpara2;
    document.getElementById("para3").innerText = newpara3;
    document.getElementById("para4").innerText = newpara4;
    document.getElementById("title3").innerText = newHeading3;
    document.getElementById("para4").innerText = newpara5;
    document.getElementById("threattitle1").innerText = newSubtitle4;
    document.getElementById("threattitle2").innerText = newSubtitle5;
    document.getElementById("threattitle3").innerText = newSubtitle6;
    document.getElementById("para6").innerText = newpara6;
    document.getElementById("para7").innerText = newpara7;
    document.getElementById("para8").innerText = newpara8;
    document.getElementById("subtitle1").innerText = newSubtitle7;
    document.getElementById("subtitle2").innerText = newSubtitle8;
    document.getElementById("subtitle3").innerText = newSubtitle9;
    //list 1
    var list1 = newListOne.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listOne").innerHTML = list1;
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
    //
    document.getElementById("subtitle4").innerText = newSubtitle10;
    document.getElementById("subtitle5").innerText = newSubtitle11;
    document.getElementById("subtitle6").innerText = newSubtitle12;
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
    //
    closeEditor1();
}