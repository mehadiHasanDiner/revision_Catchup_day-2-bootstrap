
  // handle seat button event
  const seatContainer = document.getElementById('seat-container');
  seatContainer.addEventListener('click', function(event){
    const seat = event.target.innerText;
    const seat1 = event.target.value;
    console.log(seat)
    console.log(seat1)

    const seatShow = document.getElementById('selected-seat');
    // console.log(seatShow)
    seatShow.value = seatShow.value+seat+', ';
    const ticketRate = document.getElementById('ticket-rate');
    ticketRate.innerText =seat1*1;

  }) 


