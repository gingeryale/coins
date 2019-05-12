
function addCoin(){
  $('.userSelection_section').show();
  var boxer = "input[name='coins']:checked";
  var selection = [];

    // start with empty array
    $('.wrapper').find(boxer).each(function () {
      if(selection.length < 5){
        selection.push(this.id);
        let storeChecked = this.id;

        //sessionStorage.setItem('checkboxes', selection); if I want array
        sessionStorage.setItem(storeChecked, true);
        sessionStorage.setItem('selection', selection);
      }else{
        sessionStorage.clear();
        arrayRunner();
      }  
    });

    // prints after list is populated
    console.log("Initial selecter array:");
    console.log(selection);
    
    // keep count and disable checkboxes
    countChecked();
    // display selections to users
    $('.userSelection_array').text(selection);
}

// Modal display
function arrayRunner(){
  // empty div and show bootstrap modal
  $("#arrayResults").empty();
  $('#exampleModalCenter').modal('show');

// display checkboxes coins on page
  $("input[name='coins']:checked").each(function () {
    //console.log($(this).val());
    let arr = `<li>
      <span class="selectListDel">${$(this).val()}</span>
      <button data-coin="${$(this).val()}" class="del btn btn-secondary">Remove</button>
    </li>`
       $("#arrayResults").append(arr);
       console.log(arr);
});
$( "li.selectListDel" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );

  selection.push(this).val();
});
      deletefromModal(selection);
}

// let user remove from the list of selected coins
function deletefromModal(selection){
  $(".del").attr("data-name","coin").click(function(){
    var selection = [];
    // value of coin
    let userSelectedCoin = $(this).data('coin');
    
    console.log(selection);

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




// count and disable checkboxes after 5
function countChecked() {                             
  var n = $("input:checked").length;                       
  if (n > 5)                                              
  {  $(':checkbox:not(:checked)').prop('disabled', true);  }                                                        
  else                                                     
  { $(':checkbox:not(:checked)').prop('disabled', false); }                                                        
}                                                                                              
$(":checkbox").click(countChecked);                        





