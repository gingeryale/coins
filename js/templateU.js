// $.getScript('js/templateF.js');


// build interim array
function addCoin(){
  var boxer = "input[name='coins']:checked";

    // start with empty array
    var selection = [];
    $('#table').find(boxer).each(function () {
      if(selection.length < 5){
        selection.push(this.id);
        let storeChecked = this.id;
        //sessionStorage.setItem('checkboxes', selection);
        sessionStorage.setItem(storeChecked, true);
      }else{
        sessionStorage.clear();
        arrayRunner();
      }  
    });
    /*prints after list is populated*/
    console.log("Initial selecter array:");
    console.log(selection);
    
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
    let arr = `<li>
      <span class="selectListDel">${$(this).val()}</span>
      <button data-coin="${$(this).val()}" class="del btn btn-secondary">Remove</button>
    </li>`
       $("#arrayResults").append(arr);
       console.log(arr);
});
      deletefromModal(selection);
}

// let user remove from the list of selected coins
function deletefromModal(selection){
  $(".del").attr("data-name","coin").click(function(){
    let userSelectedCoin = $(this).data('coin');

    console.log("user removed the following coin:");
    console.log(userSelectedCoin);

   // delete coin in UI Modal
    $(this).closest('li').remove();
    
    // delete from selection array

    // set DOM checkbox status to unchecked 
    $(`[data-target='${userSelectedCoin}']`).prop("checked", false);

    // delete from session storage
    sessionStorage.removeItem(userSelectedCoin, true);


    // delete from selection array
    if(selection.includes(userSelectedCoin.toString()))
    { 
      selection.splice(selection.indexOf(userSelectedCoin), 1);
      console.log("after splice");
      console.log(selection);
    }

    // add all existing values to the selection array
    let articles = document.querySelectorAll('.del');
    const nodelistToArray = Array.apply(null, articles);
    nodelistToArray.forEach(x => {
      selection.push(x.dataset.coin);
    });
    
    // reduce Array
    // var rawArr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
    var reducedArray = selection.reduce(function (accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
    console.log("after REDUCE:");
    console.log(reducedArray);

    sessionStorage.setItem('selection', reducedArray);
      // take whatever's left in modal
      $('.userSelection_array').text(reducedArray);
  
      // make UI changes function
      removeFromSelection(userSelectedCoin);
});




// UI remove CSS
function removeFromSelection(userSelectedCoin){
        let userDeltedCoin = document.querySelector(`[data-target='${userSelectedCoin}']`);
            // UI allow user to add back
            userDeltedCoin.parentNode.classList.add('goneGirl');
              $('.goneGirl').click(function(){
                $(this).removeClass('goneGirl');
              });
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
  sessionStorage.setItem('selection', reducedArray);
});