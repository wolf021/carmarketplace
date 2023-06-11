import React from 'react'
import './_tradersPage.scss'
import TradersCard from '../../Components/TradersCard/TradersCard'
import Traders from '../../Assets/logos//fordlogo.png'
import Traders2 from '../../Assets/logos//traders-logo.png'
import Traders3 from '../../Assets/logos//varified.png'
import Traders4 from '../../Assets/Logo-1.png'


const TradersPage = () => {
  return (
    <div className='traders-page' >
      <div>
        <h3>Car Traders In Uk </h3>
        <p>Browse the widest choice of car traders in the UK </p>
      </div>
      <div className='traders-page-card-container' >
        <TradersCard TradersImg={Traders} TradersName="Ford Harrow" TradersInventory={29} TradersLocation="London" TradersNumber="07985002985" TradersRating={4} TradersReviews={10} Trader="Indivisual" />
        <TradersCard TradersImg={Traders2} TradersName="Bretling " TradersInventory={50} TradersLocation="London" TradersNumber="07985002985" TradersRating={2} TradersReviews={1} Trader="Dealer" />
        <TradersCard TradersImg={Traders} TradersName="Essex Cars" TradersInventory={100} TradersLocation="Leeds" TradersNumber="07985002985" TradersRating={5} TradersReviews={200} Trader="Indivisual" />
        <TradersCard TradersImg={Traders3} TradersName="Grill Hot" TradersInventory={50} TradersLocation="Birmighm" TradersNumber="07985002985" TradersRating={4} TradersReviews={4} Trader="Dealer" />
        <TradersCard TradersImg={Traders} TradersName="John Garage" TradersInventory={29} TradersLocation="London" TradersNumber="07985002985" TradersRating={3} TradersReviews={1} Trader="Indivisual" />
        <TradersCard TradersImg={Traders4} TradersName="Carl Johnson" TradersInventory={50} TradersLocation="London" TradersNumber="07985002985" TradersRating={4} TradersReviews={10} Trader="Garage" />
        <TradersCard TradersImg={Traders} TradersName="Yando Gene" TradersInventory={29} TradersLocation="London" TradersNumber="07985002985" TradersRating={4} TradersReviews={500} Trader="Dealer" />
        <TradersCard TradersImg={Traders2} TradersName="Uk Cars" TradersInventory={150} TradersLocation="London" TradersNumber="07985002985" TradersRating={5} TradersReviews={200} Trader="Indivisual" />
     
      </div>
    </div>
  )
}

export default TradersPage