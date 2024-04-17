
              
              var acc = document.getElementsByClassName("accordion");
              var i;
              
              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                    panel.style.display = "none";
                  } else {
                    panel.style.display = "block";
                  }
                });
              }
              
              rangeprice.addEventListener("input", function() {
                  shippingprice.innerHTML = rangeprice.value + " CA (" + rangeprice.value*5 + " RMB)";
                  numprice.value= rangeprice.value;
              })
              numprice.addEventListener('change', function() {
                  shippingprice.innerHTML = numprice.value + " CA (" + numprice.value*5 + " RMB)";
                  rangeprice.value= numprice.value;
              })
             etc.addEventListener("click", function() {
              if (etcname.hasAttribute("disabled")) {
                  etcname.removeAttribute("disabled");
              } else {
                  etcname.setAttribute("disabled","disabled");
              }
             })
        
            