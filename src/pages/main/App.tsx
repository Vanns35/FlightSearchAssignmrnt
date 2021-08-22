import React from "react";
import "./App.css";

//external packages
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FlightCard, Slider } from "../../components";
import {flights} from '../../data/Flight';


function App() {
  const [tab, selectTab] = React.useState(0);
  const [origin_city, selectOriginCity] = React.useState("");
  const [destination_city, selectDestinationCity] = React.useState("");
  const [departDate, setDepartDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [passengers, setPassengers] = React.useState("");
  const [items, setItems] = React.useState(flights);
  const [sliderRangeObj, setsliderRangeObj] = React.useState(Object);

  const handleChangeSlider = (obj: any) => {
    setsliderRangeObj(obj);

    const objToMatch = {
      origin_city: origin_city,
      destination_city: destination_city,
    };

    let filteredData = findByMatchingProperties(items, objToMatch);
    filteredData = filteredData.filter(filterByPrice);
    if (filteredData.length !== 0) {
      setItems(filteredData);
    }
  };

  const filterByPrice = (item: any) => {
    return (
      item.price >= sliderRangeObj.lowerBound &&
      item.price <= sliderRangeObj.upperBound
    );
  };

  const handleChangeOriginCity = (event: any) => {
    const objToMatch = {
      origin_city: event.target.value,
    };

    const filteredData = findByMatchingProperties(items, objToMatch);
    if (filteredData.length !== 0) {
      selectOriginCity(event.target.value);
      setItems(filteredData);
    }
  };

  const handleChangeDestCity = (event: any) => {
    const destination_city = event.target.value ? event.target.value : "";
    const objToMatch = {
      origin_city: origin_city,
      destination_city: destination_city,
    };

    const filteredData = findByMatchingProperties(items, objToMatch);

    if (filteredData.length !== 0) {
      selectDestinationCity(event.target.value);
      setItems(filteredData);
    }
  };

  const handleSubmit = (event: any) => {
    alert("Results filtered");
    event.preventDefault();
  };

  const handleSelect = (tab: number) => {
    selectTab(tab);
  };

  const handlePassengerCountChange = (event: any) => {
    setPassengers(event.target.value);
  };

  const handleStartDateChange = (date: any) => {
    setDepartDate(date);
  };

  const findByMatchingProperties = (arrObj: any, matchingObj: any) => {
    return arrObj.filter(function (entry: any) {
      return Object.keys(matchingObj).every(function (key) {
        return (
          entry[key].toUpperCase().indexOf(matchingObj[key].toUpperCase()) === 0
        );
      });
    });
  };

  const handleEndDateChange = (date: any) => {
    setReturnDate(date);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Flight Search Engine</h2>
      </header>
      <div className="container">
        <div className="one-third column">
          <Tabs onSelect={handleSelect}>
            <TabList>
              <Tab>One Way</Tab>
              <Tab>Return</Tab>
            </TabList>

            <TabPanel>
              <div className="Item">
                <form onSubmit={handleSubmit}>
                  <input
                    className="row"
                    type="text"
                    value={origin_city}
                    onChange={handleChangeOriginCity}
                    placeholder="Enter Origin City"
                  />
                  <input
                    className="row"
                    type="text"
                    value={destination_city}
                    onChange={handleChangeDestCity}
                    placeholder="Enter Destination City"
                  />
                  {/* 
                        //@ts-ignore */}
                  <DatePicker
                    selected={departDate}
                    onChange={handleStartDateChange}
                    minDate={moment()}
                    maxDate={moment().add(90, "days")}
                    placeholderText="Departure Date"
                  />
                  <input
                    className="row"
                    type="text"
                    value={passengers}
                    onChange={handlePassengerCountChange}
                    placeholder="Passengers"
                  />
                  <input type="submit" value="Search" />
                </form>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="Item">
                <form onSubmit={handleSubmit}>
                  <input
                    className="row"
                    type="text"
                    value={origin_city}
                    onChange={handleChangeOriginCity}
                    placeholder="Enter Origin City"
                  />
                  <input
                    className="row"
                    type="text"
                    value={destination_city}
                    onChange={handleChangeDestCity}
                    placeholder="Enter Destination City"
                  />

                  {/* 
                        //@ts-ignore */}
                  <DatePicker
                    selected={departDate}
                    onChange={handleStartDateChange}
                    minDate={moment()}
                    maxDate={moment().add(90, "days")}
                    placeholderText="Departure Date"
                  />
                  {/* 
                        //@ts-ignore */}
                  <DatePicker
                    selected={returnDate}
                    onChange={handleEndDateChange}
                    minDate={moment()}
                    maxDate={moment().add(90, "days")}
                    placeholderText="Return Date"
                  />
                  <input
                    className="row"
                    type="text"
                    value={passengers}
                    onChange={handlePassengerCountChange}
                  />
                  <input className="row" type="submit" value="Search" />
                </form>
              </div>
            </TabPanel>
          </Tabs>
          <div>
            <div className="label">
              <label>
                <h5>Refine Flight Search</h5>
              </label>
              {/* 
              //@ts-ignore */}
              <Slider onChange={handleChangeSlider} />
            </div>
          </div>
        </div>
        <div className="two-thirds column">
          <div className="header">
            <div className="Item-left">
              <div>
                <h5>
                  {" "}
                  {origin_city} , {destination_city}{" "}
                </h5>
              </div>
            </div>
            <div className="Item-right">departDate</div>
          </div>
          <main>
            <FlightCard
              items={items}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
