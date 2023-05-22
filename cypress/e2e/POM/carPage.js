class carPage{
    //car link
    getCarLink(){return cy.get("[data-test='navTextCreateListing']")}
    getNavlink(){return cy.get("[data-test='navTextCreateListing']")}
    getHostLink(){return cy.get('[data-test="hostCarLink"]') }
    //location details 
    getCarlocation(){return cy.get('[data-test="carLocation"]')}
    getLocationDropdonw(){return cy.get(".autocomplete-dropdown-container >")}
    getCarVin(){return cy.get('[data-test="carVIN"]') }
    getCarVinButton(){return cy.get('[data-test="carVINAddon"]')}  
    getCarVinInfo(){return cy.get("[data-test='carVINInfo']") }
    getCarVinLoc(){return cy.get('[data-test="Location DetailsCont1"]')}
    //car info
    getCarMiles(){return cy.get('[data-test="seleCarMilInner"]')}
    selCarMiles(){return cy.get('[data-test="seleCarMil5,001 - 30,000 miles"]')}
    getTransInner(){return cy.get('[data-test="carTransInner"]')}
    selTransInner(){return cy.get('[data-test="carTransAutomatic"]')}
    getCarStyle(){return cy.get('[data-test="seleStyleInner"]')}
    selCarStyle(){return cy.get('[data-test="seleStyleConvertible"]')}
    getCarTrim(){return cy.get('[data-test="seleTrimInner"]')}
    selCarTrim(){return cy.get('[data-test="seleTrimSE"]')}
    selCarColor(){return cy.get('[data-test="carColor"]')}
    getCarSeat(){return cy.get('[data-test="numbOfSeatsInner"]')}
    selCarSeat(){return cy.get('[data-test="numbOfSeats3"]')}
    getCarDoor(){return cy.get('[data-test="numbOfDoorsInner"]')}
    selCarDoor(){return cy.get('[data-test="numbOfDoors3"]')}
    getCarVehicle(){return cy.get('[data-test="greenVehiclesInner"]')}
    selCarVehicle(){return cy.get('[data-test="greenVehiclesHybrid"]')}
    getCarDisclamer(){return cy.get('[data-test="carDisclaimer0"]')}
    selCarDisclamer(){return cy.get('[data-test="carDisclaimer1"]')}
    clickCarInfo(){return cy.get('[data-test="Car InformationCont1"]')}
/*
      cy.get('[data-test="carColor"]').type("red");
      cy.get('[data-test="numbOfSeatsInner"]').click();
      cy.get('[data-test="numbOfSeats3"]').click();
      cy.get('[data-test="numbOfDoorsInner"]').click();
      cy.get('[data-test="numbOfDoors3"]').click();
      cy.get('[data-test="greenVehiclesInner"]').click();
      cy.get('[data-test="greenVehiclesHybrid"]').click();
      cy.get('[data-test="carDisclaimer0"]').click();
      cy.get('[data-test="carDisclaimer1"]').click();
      cy.get('[data-test="Car InformationCont1"]').click(); */
     



}
export default carPage