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
      if(selection.length < 5){
        selection.push(this.id);
      }else{
        
        arrayRunner(selection);
      }  
    });
    /*prints after list is populated*/
    console.log(selection);
    // $('#show').html(selection);
    
}
// /*binds run function to click of submit*/
// $('#submit').click(run);
// console.log(selection);
function arrayRunner(selection){
  $("#arrayResults").empty();
  $('#exampleModalCenter').modal('show');
  for(let i = 0; i < selection.length; i++){
      let arr = `<li>${selection[i]}<button class="del">x</button></li>`
      $("#arrayResults").append(arr);
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
          
          



          var cbobject= document.getElementsByTagName("input[name='coins']:checked");
for (var i=0, len=cbobject.length; i<len; i++) {
        if ( cbobject[i].type === 'checkbox' ) {
            cbobject[i].onclick = show_alert;
        }
    }
function show_alert(e){
    alert("checkbox!!!")
}
