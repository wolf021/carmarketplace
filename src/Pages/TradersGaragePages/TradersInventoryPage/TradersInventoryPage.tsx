import React, { useState } from "react"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound"
import KeyIcon from "@mui/icons-material/Key"
import AvTimerIcon from "@mui/icons-material/AvTimer"
import AlarmIcon from "@mui/icons-material/Alarm"
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"
import TuneIcon from "@mui/icons-material/Tune"
import RestartAltIcon from "@mui/icons-material/RestartAlt"
import Card from "../../../Components/Card/Card"
import CardImg from "../../../Assets/X70.png"
import AdBanner from "../../../Assets/ad-banner.png"
import AdBanner1 from "../../Assets/ad-banner-landscape.png"
import CancelIcon from "@mui/icons-material/Cancel"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { Box, Modal } from "@mui/material"
import Buttons from "../../../Components/Button/Button"
import { Cars } from "../../../Data/data"

const TradersInventoryPage = () => {

    const [isActiveModel, setisActiveModel] = useState(false)
    return (
      <div className="search-page">
        
        <div className="filter-header-mobile">
          <Buttons
            name="filter Options"
            icon={<TuneIcon />}
            onClick={() => setisActiveModel(true)}
            className="filter-header-mobile-button"
          />
          <select
            className="filter-option-relavence-select"
            name="Distance"
            id=""
          >
            <option value="Relevance">RELEVENCE</option>
            <option value="Lowest Price">Lowest price</option>
            <option value="Heighest price">Highest price</option>
          </select>
        </div>
        <Modal
          style={{ overflow: "scroll" }}
          open={isActiveModel}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={{ backgroundColor: "blacks", width: "100%" }}>
            <section className="search-panel-mobile">
              <div>
                <Buttons
                  name="Close"
                  icon={<CancelIcon fontSize="inherit" />}
                  className="model-filter-button"
                  onClick={() => setisActiveModel(false)}
                />
              </div>
  
              <div className="searh-form-heading">
               
                <TuneIcon />
                <h4>Filter Options</h4>
              </div>
              <div className="search-reset">
                <RestartAltIcon />
                <h4>Reset All</h4>
              </div>
              <div className="search-radius">
                <div className="search-form-sub-heading">
                  <LocationOnIcon />
                  <h4>Search Radius</h4>
                </div>
                <div className="search-radius-flex">
                  <input
                    className="search-radius-input"
                    type="text"
                    placeholder="PostCode"
                  />
                  <select
                    className="search-radius-input-select"
                    name="Distance"
                    id=""
                  >
                    <option value="Distance">Distance</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                </div>
              </div>
              <div className="search-form">
                <div className="search-form-sub-heading">
                  <KeyIcon />
                  <h4>Make & Model</h4>
                </div>
                <div className="search-form-flex">
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Make">Make</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                  <select
                    className="search-form-input"
                    name="Distance"
                    disabled
                    id=""
                  >
                    <option value="Model">Model</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                </div>
              </div>
              <div className="search-form">
                <div className="search-form-sub-heading">
                  <CurrencyPoundIcon />
                  <h4>Budget</h4>
                </div>
                <div className="search-form-flex">
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Min price (any)">Min price (any)</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Max price (any)">Max price (any)</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                </div>
              </div>
              <div className="search-form">
                <div className="search-form-sub-heading">
                  <AlarmIcon />
                  <h4>Age Or Year</h4>
                </div>
                <div className="search-form-flex">
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Min age (any)</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Max age (any)</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                </div>
              </div>
              <div className="search-form">
                <div className="search-form-sub-heading">
                  <AvTimerIcon />
                  <h4>Mileage</h4>
                </div>
                <div className="search-form-flex">
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Min mileage (any)</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Max mileage (any)</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                </div>
              </div>
              <div className="search-form">
                <div className="search-form-sub-heading">
                  <LocalGasStationIcon />
                  <h4>Vehicle Atributes</h4>
                </div>
                <div className="search-form-flex">
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Fuel type</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Transmission</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Color</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                  <select className="search-form-input" name="Distance" id="">
                    <option value="Distance">Doors</option>
                    <option value="Distance">1 Mile</option>
                    <option value="Distance">10 Mile</option>
                    <option value="Distance">20 Mile</option>
                    <option value="Distance">30 Mile</option>
                  </select>
                </div>
              </div>
              <div className="search-filter-ads">
                <img src={AdBanner} alt="ad-banner" height="100%" width="100%" />
              </div>
            </section>
          </Box>
        </Modal>
        <div className="search-page-wrapper">
          <section className="search-panel">
            <div className="searh-form-heading">
              <TuneIcon />
              <h4>Filter Oprions</h4>
            </div>
            <div className="search-reset">
              <RestartAltIcon />
              <h4>Reset All</h4>
            </div>
            <div className="search-radius">
              <div className="search-form-sub-heading">
                <LocationOnIcon />
                <h4>Search Radius</h4>
              </div>
              <div className="search-radius-flex">
                <input
                  className="search-radius-input"
                  type="text"
                  placeholder="PostCode"
                />
                <select
                  className="search-radius-input-select"
                  name="Distance"
                  id=""
                >
                  <option value="Distance">Distance</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
              </div>
            </div>
            <div className="search-form">
              <div className="search-form-sub-heading">
                <KeyIcon />
                <h4>Make & Model</h4>
              </div>
              <div className="search-form-flex">
                <select className="search-form-input" name="Distance" id="">
                  <option value="Make">Make</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
                <select className="search-form-input" name="Distance" id="">
                  <option value="Model">Model</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
              </div>
            </div>
            <div className="search-form">
              <div className="search-form-sub-heading">
                <CurrencyPoundIcon />
                <h4>Budget</h4>
              </div>
              <div className="search-form-flex">
                <select className="search-form-input" name="Distance" id="">
                  <option value="Min price (any)">Min price (any)</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
                <select className="search-form-input" name="Distance" id="">
                  <option value="Max price (any)">Max price (any)</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
              </div>
            </div>
            <div className="search-form">
              <div className="search-form-sub-heading">
                <AlarmIcon />
                <h4>Age Or Year</h4>
              </div>
              <div className="search-form-flex">
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Min age (any)</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Max age (any)</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
              </div>
            </div>
            <div className="search-form">
              <div className="search-form-sub-heading">
                <AvTimerIcon />
                <h4>Mileage</h4>
              </div>
              <div className="search-form-flex">
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Min mileage (any)</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Max mileage (any)</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
              </div>
            </div>
            <div className="search-form">
              <div className="search-form-sub-heading">
                <LocalGasStationIcon />
                <h4>Vehicle Atributes</h4>
              </div>
              <div className="search-form-flex">
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Fuel type</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Transmission</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Color</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
                <select className="search-form-input" name="Distance" id="">
                  <option value="Distance">Doors</option>
                  <option value="Distance">1 Mile</option>
                  <option value="Distance">10 Mile</option>
                  <option value="Distance">20 Mile</option>
                  <option value="Distance">30 Mile</option>
                </select>
              </div>
            </div>
            <div className="search-filter-ads">
              <img src={AdBanner} alt="ad-banner" height="100%" width="100%" />
            </div>
          </section>
          <section className="search-results">
         
            <div className="searc-results-header">
              <h3 style={{ fontSize: "1rem" }}>8 results</h3>
              <select className="search-radius-input-select" name="sort" id="">
                <option value="sort by distance">Sort by distance</option>
              </select>
            </div>
            <div className="search-results-flex">
              {Cars.map((car) => (
                <Card
                  make={car.make}
                  model={car.model}
                  price={car.price}
                  miles={car.miles}
                  year={car.year}
                  link="/"
                  cardImg={car.images}
                  days={car.days}
                  sponsored={true}
                />
              ))}
            </div>
            <div className="pagination">
              <Stack spacing={2}>
                <Pagination
                  count={10}
                  className="page-number"
                  color={"standard"}
                  size="large"
                />
              </Stack>
            </div>
  
            <div className="search-results-direct-cars">
              <div className="search-result-direct-info">
                <h4>Cars direct for You</h4>
                <p>Gets your desired car today</p>
              </div>
              <div className="search-results-direct-cars-flex">
                <Card
                  make="Proton X70"
                  price={5000}
                  miles={17000}
                  link="/"
                  cardImg={CardImg}
                  days={2}
                  sponsored={true}
                  hot={true}
                />
                <Card
                  make="Proton X70"
                  price={5000}
                  miles={17000}
                  link="/"
                  cardImg={CardImg}
                  days={1}
                  sponsored={true}
                />
                <Card
                  make="Proton X70"
                  price={5000}
                  miles={17000}
                  link="/"
                  cardImg={CardImg}
                  days={1}
                  sponsored={true}
                />
                <Card
                  make="Proton X70"
                  price={5000}
                  miles={17000}
                  link="/"
                  cardImg={CardImg}
                  days={2}
                  sponsored={true}
                  hot={true}
                />
              </div>
            </div>
            
          </section>
        </div>
      </div>
  )
}

export default TradersInventoryPage