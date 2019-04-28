// $.getScript('js/templateF.js');


var boxer = "input[name='coins']:checked";
// build interim array
function addCoin(){
    // start with empty array
    var selection = [];
    $('#table').find(boxer).each(function () {
      if(selection.length < 5){
        selection.push(this.id);
      }else{
        arrayRunner();
        deleteOnefromModal(selection);
      }  
    });
    /*prints after list is populated*/
    console.log(selection);
    $('.userSelection_array').text(selection);
    // $('#show').html(selection);
    countChecked();
}

// display all checkboxes selected in modal
function arrayRunner(){
  $("#arrayResults").empty();
  $('#exampleModalCenter').modal('show');

  $("input[name='coins']:checked").each(function () {
    //console.log($(this).val());
    let arr = `<li>${$(this).val()}<button data-coin="${$(this).val()}" class="del">x</button></li>`
       $("#arrayResults").append(arr);
       console.log(arr);
});
}

// let user remove from the list of selected coins
function deleteOnefromModal(selection){
  $(".del").attr("data-name","coin").click(function(){
    let userSelectedCoin = $(this).data('coin');
    console.log(userSelectedCoin);
   
    $(this).closest('li').remove();
    removeFromSelection(userSelectedCoin, selection);
    //$('input:checkbox[id=userSelectedCoin]').attr('checked', false);
    // if user chose a coin included in first 5 selected - loop over all that are checked for new Array

    //$("input[data-name=userSelectedCoin]").attr('checked', false);
  });
  //document.getElementById("checkbox").checked = false;
  //$("input[value=userSelectedCoin]").checked = false;

 //reverseSelected(userSelectedCoin, selection);

}


function reverseSelected(userSelectedCoin, selection){
  console.log("rs");
  //$(":checkbox[value=userSelectedCoin]").attr("checked","true")?$(":checkbox[value=userSelectedCoin]").attr("checked","false"): "";
 // ($('input:checkbox[id=userSelectedCoin]').prop("checked") == true) ? ($('input:checkbox[id=userSelectedCoin]').prop("checked") == false) : "huh?";
  console.log(selection);

}



// rebuild reports array
function removeFromSelection(userSelectedCoin, selection){
  console.log("here is selection:");
  console.log(selection);
  // is found to exist
    //if($.inArray(userSelectedCoin, selection) !== -1){
      if(selection.includes(userSelectedCoin)){
        let gone = selection.indexOf(userSelectedCoin);
      selection.splice(gone, 1);
      console.log(selection);

      //  rebuild the real array
      selection = [];
      // $(".del").attr("data-name","coin").each(function(){
      //     selection.push($(this).data('coin'));


          $(".del").each(function(){
            selection.push($(this).data('coin'));
        // DISABLE CHECKBOX STATUS
        //let userDeletedCoin = document.querySelector(`[data-target=${userSelectedCoin}]`);
       //let userDeletedCoin = document.querySelector(`[data-target=${userSelectedCoin}]`).setAttribute('disabled', true);
       let userDelCoin = document.querySelector(`[data-target='${userSelectedCoin}']`);
       userDelCoin.parentNode.classList.add('goneGirl');
       $('.goneGirl').click(function(){
         $(this).removeClass('goneGirl');
       })

       console.log(userDelCoin);
        // $(`[data-target=${userSelectedCoin}]`).click(function(){
        //     $(this).setAttribute('disabled', true);
        // });
      });
      console.log("again");
      console.log(selection);
      // hit the save button and have appear
      // LOOP
      $('.userSelection_array').text(selection);
    } 
    
      
 
}


// disable checkboxes that go beyond 5 selections
function countChecked() {                             
  var n = $("input:checked").length;                       
  if (n > 5)                                              
  {                                                        
     $(':checkbox:not(:checked)').prop('disabled', true);  
  }                                                        
  else                                                     
  {                                                        
     $(':checkbox:not(:checked)').prop('disabled', false); 
  }                                                        
}                                                                                              
$(":checkbox").click(countChecked);                        