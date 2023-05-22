import carPage from "../POM/carPage";
describe("Car test ", () => {
  const CarPage = new carPage();

    let genData;
  
    before(() => {
      cy.fixture("genData.json").then((data) => {
        genData = data;
      });
    });
  
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it("Create car listing", () => {
        const amenities = ["Internet","Keyless Entry", "the jeep"]
        const categories = ["Speedometer","Classic"]
        const randNum = Math.floor(Math.random() * 1000000);
      // const randomNum = Math.floor(Math.random() * 1000); // generates a random number between 0 and 999999
        const randPlate =`1J4GZ79F4PC575${randNum}`
       // const randomVIN = `1B9W${randNum}D2UY403426`
     
      const user = { 
        lgnurl_01: 'https://checkin-dev.netlify.app/',
      };
      cy.visit(user.lgnurl_01);
      cy.login(genData.email, genData.Password); // define the cy.login() function
      //car link
      CarPage.getCarLink().click()
      CarPage.getNavlink().contains("Create listing")
      CarPage.getHostLink().click()
      //Location details 
      CarPage.getCarlocation().type("365 Broadway, New York, NY, USA")
      cy.wait(2000)
      CarPage.getLocationDropdonw().each(($el,index,$list)=>{
        if($el.text()==="365 Broadway, New York, NY, USA"){
          $el.trigger("click");
          return false
        }
      });
       
      CarPage.getCarVin().type("JM1FE173540138012");
      CarPage.getCarVinButton().click();
      cy.wait(2000);
      CarPage.getCarVinInfo().should("include.text","#VIN");
      CarPage.getCarVinLoc().click();
      
      //car info
      CarPage.getCarMiles().click();
      CarPage.selCarMiles().click();
      CarPage.getTransInner().click()
      CarPage.selTransInner().click()
      CarPage.getCarStyle().click()
      CarPage.selCarStyle().click()
      CarPage.getCarTrim().click()
      CarPage.selCarTrim().click()
      CarPage.selCarColor().type(genData.CarColor)
      CarPage.getCarSeat().click()
      CarPage.selCarSeat().click()
      CarPage.getCarDoor().click()
      CarPage.selCarDoor().click()
      CarPage.getCarVehicle().click()
      CarPage.selCarVehicle().click()
      CarPage.getCarDisclamer().click()
      CarPage.selCarDisclamer().click()
      CarPage.clickCarInfo()  .click();
      
       //Booking info
      cy.get('[data-test="advanceNoticeBeforePickupInner"]').click();
      cy.get('[data-test="advanceNoticeBeforePickupan hour before"]').click();
      cy.get('[data-test="bookingAvailabilityInMonthsInner"]').click();
      cy.get('[data-test="bookingAvailabilityInMonths2 months in advance"]').click();
      cy.get('[data-test="minimumTripDurationInDaysInner"]').click();
      cy.get('[data-test="minimumTripDurationInDays2 days"]').click();
      cy.get('[data-test="maximumTripDurationInDaysInner"]').click();
      cy.get('[data-test="maximumTripDurationInDays2 weeks"]').click();
      cy.get('[data-test="dailyLimitRangeInner"]').click();
      cy.get('[data-test="dailyLimitRange0 - 50,000Km/Day"]').click();
      cy.get('[data-test="requiresApprovalBeforeBookingConfirmation"]').click();
      cy.get('[data-test="Booking InformationCont1"]').click();
      //car feature
      /*cy.get(':nth-child(9) > .sc-Rbkqr > [data-test="amenity"]').click();
      cy.get(':nth-child(14) > .sc-Rbkqr > [data-test="amenity"]').click();
      cy.get(':nth-child(19) > .sc-Rbkqr > [data-test="amenity"]').click();
      */
      cy.get('div[data-test="amenity"]').each(($el,index,$list)=>{
        if(amenities.includes($el.text())){
            cy.get('div[data-test="amenity"]').eq(index).click();
        }
    })
      cy.get('[data-test="enterFeature"]').type("the jeep");
      cy.get('[data-test="enterFeatureAddon"]').click();
      cy.get('[data-test="Car FeaturesCont1"]').click();
      //car description
      cy.get('[data-test="carLicensePlateNumber"]').type(randPlate)
      cy.get('[data-test="carCategories"]').each(($el,index,$list)=>{
        if(categories.includes($el.text())){
            cy.get('[data-test="carCategories"]').eq(index).click();
        }
      })
      cy.get('[data-test="carDescription"]').type("this is a test automation");
      cy.get('[data-test="Car DescriptionCont1"]').click();
      //Car pricing
      cy.get('[data-test="basePrice"]').type(1000);
      cy.get('[data-test="discountInput"]').type(4);
      cy.get('[data-test="discountsTxt"]').type(6);
      cy.get('[data-test="addDiscountText"]').click();
      cy.get('[data-test="Car PricingCont1"]').click();
      //car upload
      
      const imageFile = "images/Hyundai.jpg";
      cy.get('[data-test="carPhotoTest"]').attachFile(imageFile);
      const videoFile ="videos/image.mp4"
      cy.get('[data-test="apartmentVideoTest"]').attachFile(videoFile);
      cy.get('[data-test="Photos and VideosCont1"]').click();
      //submit
      cy.get('[data-test="FlexibleTest"]').check();
      cy.get('[data-test="documentComplainceTest"]').click();
      cy.get('[data-test="termsOfServiceAgreementTest"]').click();
      cy.get('[data-test="SubmitCont1"]').click();

     });
  });