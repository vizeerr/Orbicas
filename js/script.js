const mdtb = document.querySelectorAll('.mdtb');
const mdbdy = document.querySelector('.mdbdy');
mdtb.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        switch (i) {
            case 0:
                mdbdy.innerHTML=`<h6 class="w-100 text-center  fw-bolder ">Scan with Rainbow</h6>
        <div class="p-3 rounded-3 my-3 border border-1 ">
          <img class="w-100" src="/images/rainbowbar.png" alt="">
        </div>`
                break;
            
            case 1:
                    mdbdy.innerHTML=`<h6 class="w-100 text-center  fw-bolder ">Scan with Coinbase</h6>
            <div class="p-3 rounded-3 my-3 border border-1 ">
              <img class="w-100" src="/images/coinbar.png" alt="">
            </div>`
                break;
            case 2:
                    mdbdy.innerHTML=`<h6 class="w-100 text-center  fw-bolder ">Scan with MetaMask</h6>
            <div class="p-3 rounded-3 my-3 border border-1 ">
              <img class="w-100" src="/images/metabar.png" alt="">
            </div>`
                break;
            
             case 3:
                        mdbdy.innerHTML=`<h6 class="w-100 text-center  fw-bolder ">Scan with your phone</h6>
                <div class="p-3 rounded-3 my-3 border border-1 ">
                  <img class="w-100" src="/images/wccoin.png" alt="">
                </div>`
                break;
                
            
        
            default:
                break;
        }
        
    })
})