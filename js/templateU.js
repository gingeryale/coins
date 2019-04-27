// $.getScript('js/templateF.js');


var boxer = "input[name='coins']:checked";

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

function arrayRunner(){
  $("#arrayResults").empty();
  $('#exampleModalCenter').modal('show');

  $("input[name='coins']:checked").each(function () {
    //console.log($(this).val());
    let arr = `<li>${$(this).val()}<button data-coin="${$(this).val()}" class="del">x</button></li>`
       $("#arrayResults").append(arr);
       console.log(arr);
});

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




          