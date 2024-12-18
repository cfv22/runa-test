# RUNA Technical Assessment - Test Plan

This test plan will set QA strategy for test automation API tests of a Weather service. Since this is a test for a position selection process, I will  define a scope: this will only focus on  **Current** endpoint and functional scenarios, however to provide an idea of what I would include as documentation some content will be only have titles. 

# Test Cases 


### **Functional Test Cases**

-  **Verify Required Parameters**:
    
    -   Given valid `lat`, `lon`, and `appid`, when I send a get request, then I should get a `200 OK` status with valid json response.
    -   Given an invalid  `appid`, when I send a request, then I should get a `401 Unauthorized` error.
    -   Given the `appid` is missing, when I send a request, then I should get a `401 Unauthorized` error.
    -   Given a missing `lat` or `lon` and no `q` was specified, when I send a request, then I should get a `400 Bad Request` error.
- **Verify Response Validation**:
    -   Given valid coordinates, when I request weather data, then I should get a JSON response containing all expected keys like `coord`, `weather`, `main`, and `wind`.
    -   Given I only specify the city in `q` with no `lat` and `lon`, when I request weather data  then I get valid weather response.
    > Based on last test, I would add more tests here using some AI tool, where my input will be the response structure in json and xml and I expect some iterations that cover fields on response combined in the less possible tests cases, in automation I would use this as a data input for looping and verifying expected response validations.
3.  **Boundary Testing**

> These tests are important for identifing unexpected behaviors when inputs are set to its limits.

4.  **Optional Parameters**

> Optional parameters can alter the response format or data. It's important to validate these to ensure the API handles defaults correctly. 



### **Negative Test Cases**

   - Given invalid data types for `lat` or `lon`, when I send a request, then I should get a `400 Bad Request` error.
   
   - Given an unsupported `units` value, when I send a request, then I should get a `400 Bad Request` error.

#### **Performance Test Cases**

>  It's important to add performance test for APIs and consider data of real usage or expected usage to set limits and stress conditions. 
#### **Security Test Cases**

>  The Service offers paid plans and for sure may incur in costs even for free trials and open APIs, to have control over that, it requires an ID so implementing some security tests to make sure that is enough to keep system stable and avoid security breaches should be covered. 

#### **Data Validation Test Cases**

>  The response changes based on some parameters and its correctness, some data validation tests should be added to validate the behavior of the endpoint for good and bad data, also I would add test cases for when no data is available with valid inputs. 

#### **Integration Test Cases**

>  I would add tests that validate the api integration with other services and compatibility, like positioning services, other similar services, services that provide data as input or that consume service response


# **Automation Framework and Design pattern**

I generally would do an assessment of different tools and find the best one that suites to current app achitechture and tech stack as well as business needs, for this one I choosed the tool I have more experience with. 
### **Tool Assessment**

**Chosen Tool**: **Cypress**

-   **Pros**:
    -   Most experienced framework, so it uses my expertise to complete the challenge.
    -   Supports API testing with easy integration for assertions.
    -   Unified framework for API and UI testing for scalability.
-   **Cons**:
    -   Not specialized for heavy performance testing (can integrate with JMeter or Locust if needed).

**Alternatives**:

-   **Postman/Newman**: Great for exploratory and functional API testing.
- **SuperTest:** Js HTTP api framework. 

### **Design Pattern**:  
Service Object Model (SOM)** The objective of set a pattern is to make an scalable framework easy to maintain, SOM is the api equivalent for UI's page object model(POM).  

**Service Object for Weather API**: For this Technical Assessment I will set **Current** service as the only SO. 



## Ci/ CD
I would integrate this test plan into the CI/CD pipeline by running the tests as part of the build process. By adding a stage for it, then tests triggers automatically on every code push or pull request depending on team decision. 