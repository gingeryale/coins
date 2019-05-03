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

// Modal display
function arrayRunner(){
  $("#arrayResults").empty();
  $('#exampleModalCenter').modal('show');
// Display coins of checkboxes on page
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

    console.log("user removed the following coin:");
    console.log(userSelectedCoin);
   // remove from Modal UI
    $(this).closest('li').remove();
    removeFromSelection(userSelectedCoin, selection);

    // set checkbox to unchecked 
    //document.getElementById(`[data-target='${userSelectedCoin}']`).checked = false;
    $(`[data-target='${userSelectedCoin}']`).prop("checked", false);

    // remove from selection array

    // add all existing values to the selection array
    let articles = document.querySelectorAll('.del');
    const nodelistToArray = Array.apply(null, articles);
    nodelistToArray.forEach(delBtns => {
      selection.push(delBtns.dataset.coin);
    });
    
    // reduce Array
    // var rawArr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
    var reducedArray = selection.reduce(function (accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator
    }, []);
    console.log("here is CLEAN ARRAY");
    console.log(reducedArray);
  });
}




// rebuild reports array and remove deleted item from DOM

function removeFromSelection(userSelectedCoin, selection){
  console.log("here is current array of selections:");
  console.log(selection);
  // is found to exist
    //if($.inArray(userSelectedCoin, selection) !== -1){



      // if(selection.includes(userSelectedCoin.toString())){
      // selection.splice(selection.indexOf(userSelectedCoin), 1);
      // console.log(selection);



      //  rebuild the actual array 
      
      //  turn nodeList into Array
      
          //$(".del").each(function(){
            //LOOP OVER REMIANING DELETE BTNS THE USER DIDN'T DELETE AND WANTS TO KEEP//
            // REBUILD ARRAY FROM START WITH EMPTY ARRAY
           

            // UI indication of removed element
            let userDelCoin = document.querySelector(`[data-target='${userSelectedCoin}']`);
            // UI if user adds back to list
              userDelCoin.parentNode.classList.add('goneGirl');
              $('.goneGirl').click(function(){
                $(this).removeClass('goneGirl');
              });
           
      

       console.log(userDelCoin);
      //});
      console.log("again");
      console.log(selection);


      



      sessionStorage.setItem('selection', selection);
      // take whatever's left in modal
      $('.userSelection_array').text(selection);
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