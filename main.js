$(document).ready(() => {
  
    const $cartButton = $('#cart');
    const $cartMenu = $('#cartMenu');
    const $accountButton = $('#account');
    const $accountMenu = $('#accountMenu');
    const $helpButton = $('#help');
    const $helpMenu = $('#helpMenu');


    $cartButton.on('mouseover', () => {
        $cartMenu.show();
      })

    $cartButton.on('mouseleave', () => {
        $cartMenu.hide();
      })

    $accountButton.on('mouseover', () => {
        $accountMenu.show();
      })

    $accountButton.on('mouseleave', () => {
        $accountMenu.hide();

})
    $helpButton.on('mouseover', () => {
        $helpMenu.show();
      })
    
      $helpButton.on('mouseleave', () =>{
          $helpMenu.hide();
      })


  })
  