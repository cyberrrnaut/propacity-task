
# Landing Page Integration with Google Sheets and API

Project Documentation: Landing Page with Form Submission Integration
Project Overview

Project Description:
The project involves developing a landing page with a contact form that collects user data. Two main functionalities are implemented upon every contact form submission:

Send data to Google Sheets
Send data to a specific API using a POST request
The user interface is designed based on the specifications provided in the Figma design, ensuring accurate replication of design elements, layout, and responsiveness. The landing page is hosted on a specified domain.

Project Tasks:
Task 1: Functionalities Implementation
1.1 Send Data to Google Sheets
Upon form submission, the collected data is sent to Google Sheets for storage and further analysis.

1.2 Send Data to API
Data is also sent to a specific API using a POST request. The API endpoint is specified as follows:

API URL: https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-9834102082/insertLead
HTTP Method: POST
Payload:
{
    "name": "name here",
    "email": "email here",
    "mobile": "mobile here",
    "meta": "meta data here"
}




## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API KEY mentioned in the api |

#### Get item

```https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-9834102082/inser tLead 

  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


![Logo](https://images.yourstory.com/cs/images/companies/ca719727ad28-PropacityLogo-1628244913456.jpg)

