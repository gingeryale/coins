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
    console.log("first selecter array:");
    console.log(selection);
    // too early to be showing user selection
    //$('.userSelection_array').text(selection);
    // $('#show').html(selection);
    countChecked();
    $('.userSelection_array').text(selection);
}

// display all checkboxes selected in modal
function arrayRunner(){
  $("#arrayResults").empty();
  $('#exampleModalCenter').modal('show');

  $("input[name='coins']:checked").each(function () {
    //console.log($(this).val());
    let arr = `<li><span class="selectListDel">${$(this).val()}</span><button data-coin="${$(this).val()}" class="del btn btn-secondary">Remove</button></li>`
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
  });
}




// rebuild reports array and remove deleted item from DOM

function removeFromSelection(userSelectedCoin, selection){
  console.log("here is current array of selections:");
  console.log(selection);
  // is found to exist
    //if($.inArray(userSelectedCoin, selection) !== -1){
      if(selection.includes(userSelectedCoin.toString())){
      selection.splice(selection.indexOf(userSelectedCoin), 1);
      console.log(selection);

      //  rebuild the actual array 
      let articles = document.querySelectorAll('.del');
      //  turn nodeList into Array
      const nodelistToArray = Array.apply(null, articles);
          //$(".del").each(function(){
            //LOOP OVER REMIANING DELETE BTNS THE USER DIDN'T DELETE AND WANTS TO KEEP//
            // REBUILD ARRAY FROM START WITH EMPTY ARRAY
            selection=[];
            nodelistToArray.forEach(delBtns => {
              selection.push(delBtns.dataset.coin);
            });
            let userDelCoin = document.querySelector(`[data-target='${userSelectedCoin}']`);
              userDelCoin.parentNode.classList.add('goneGirl');
              $('.goneGirl').click(function(){
                $(this).removeClass('goneGirl');
              });
           
      

       console.log(userDelCoin);
      //});
      console.log("again");
      console.log(selection);
      sessionStorage.setItem('selection', selection);
      // hit the save button and have appear
      $('.userSelection_array').text(selection);
    } 
}


// disable checkboxes that go beyond 5 selections
function countChecked() {                             
  var n = $("input:checked").length;                       
  if (n > 5)                                              
  {  $(':checkbox:not(:checked)').prop('disabled', true);  }                                                        
  else                                                     
  { $(':checkbox:not(:checked)').prop('disabled', false); }                                                        
}                                                                                              
$(":checkbox").click(countChecked);                        




$('.liveReports').on('click', function(){
  sessionStorage.setItem('selection', selection);
});