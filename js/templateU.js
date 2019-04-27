// $.getScript('js/templateF.js');


// $(".checkboxer").on('click', function(){
//  var maxAllowed = 2;
//  var count = $("checkboxer + .active").length;
//   if(count > maxAllowed){
//     // $(this).prop("checked", "");
//       alert("reached max "+ maxAllowed);
//     }
//});



var boxer = "input[name='coins']:checked";

// $("input:checkbox[name=type]:checked").each(function(){
//   selection.push($(this).val());
// });
function addCoin(){
    // start with empty array
    var selection = [];
    $('#table').find(boxer).each(function () {
      if(selection.length < 2){
        selection.push(this.id);
      }else{
        
        arrayRunner();
      }  
    });
    /*prints after list is populated*/
    console.log(selection);
    // $('#show').html(selection);
    
}
// /*binds run function to click of submit*/
// $('#submit').click(run);
// console.log(selection);
function arrayRunner(){
  $("#arrayResults").empty();
  $('#exampleModalCenter').modal('show');
  // for(let i = 0; i < selection.length; i++){
  //     let arr = `<li>${selection[i]}<button class="del">x</button></li>`
  //     $("#arrayResults").append(arr);
  // }

  // $('#table').find(boxer).each(function (el) {
  //   let arr = `<li>${el.value}<button class="del">x</button></li>`
  //     $("#arrayResults").append(arr);
  // });

  $("input[name='coins']:checked").each(function () {
    //console.log($(this).val());
    let arr = `<li>${$(this).val()}<button data-coin="${$(this).val()}" class="del">x</button></li>`
       $("#arrayResults").append(arr);
       console.log(arr);
});
// delete from checked selection
  // $('.del').click(function(){
  //   console.log(this);
  //   console.log($(this));
  // });
  deleteOnefromModal();
}

// let user remove from the list of 5 selected coins
function deleteOnefromModal(){
  $(".del").attr("data-name","coin").click(function(){
    let userSelectedCoin = $(this).data('coin')
    $(this).closest('li').remove();
    removeFromSelectionArray(userSelectedCoin);
  });
}

function removeFromSelectionArray(userSelectedCoin){
 console.log(self);
 if($.inArray("self", selection) !== -1){
  selection.splice(i, 1);
  console.log(selection);
 }
 
}



          //   function buildArr(id) {
          //     let allBoxes = document.getElementsByClassName('input[type="checkbox"]');
          //     console.log("here are all " +allBoxes);
          //     for (var i = 0; i < allBoxes.length; i++) {
          //         if (allBoxes[i].checked) {
          //             sessionStorage.setItem(id + i, allBoxes[i].value);
          //             console.log("all of them " +allBoxes[i].checked);
          //         }
          //     }
  
          //     //location = "c.html";
             
          // }
          
          



          