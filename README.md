# Online Learning Platform API


# A. Technology

- Node js v16.18.0
- Npm 9.4.1
- Postman
- MongoDB atlas
- Visual studio code
- Express 4.18.2
- bcrypt 5.1.0
- cloudinary 1.33.0
- cors 2.8.5
- dotenv 16.0.3
- googleapis 110.0.0
- jsonwebtoken 9.0.0
- mongoose 6.9.1 
- multer 1.4.5-lts.1

# B. Story

This project is created for authentication and authorization that distinguishes the API that can be used by Users and Admins in an online course website.

# C. Table Design

<img width="500" alt="Screen Shot 2023-02-08 at 13 42 26" src="https://user-images.githubusercontent.com/106460262/217457744-64884e31-c0d1-4ac5-a83c-e55be9fb2d76.png">


# D. API

<img width="250" alt="Screen Shot 2023-02-08 at 15 22 55" src="https://user-images.githubusercontent.com/106460262/217474267-c5d4f4b7-9a1c-4ad5-89df-76151d569c74.png">


# E. Databases

For database I use mongoDB atlas:

<img width="200" alt="Screen Shot 2023-02-08 at 14 06 20" src="https://user-images.githubusercontent.com/106460262/217458640-98484884-c0d8-41ed-9d6e-e3638c67d597.png">

1. User document

<img width="350" alt="Screen Shot 2023-02-08 at 14 07 40" src="https://user-images.githubusercontent.com/106460262/217458778-468a38fa-8c34-48d3-b5c6-d0159f832974.png">

2. Course document

<img width="350" alt="Screen Shot 2023-02-08 at 14 06 47" src="https://user-images.githubusercontent.com/106460262/217458870-bdb43d00-b6c5-4de2-a11f-87ba2f0eced6.png">


# F. API register & login

To test this API I used Postman. To test the API sometimes we need several requests from the body, we usually take the request body from the input form from the frontend, because we don't have an input form, so we use the request body in postman.


1. API register

- This API is use to add a new user with the role User / Admin
- API add new User with role "http://localhost:8000/api/auth/register"
- I use HTTP method "POST"
- The API response will be displayed as show below :
<img width="400" alt="Screen Shot 2023-02-08 at 14 13 09" src="https://user-images.githubusercontent.com/106460262/217459941-8bac303a-1da7-4a67-a839-37bac0e64c94.png">


- and in the database we will see the data as shown below :
<img width="350" alt="Screen Shot 2023-02-08 at 14 14 58" src="https://user-images.githubusercontent.com/106460262/217460128-9aeb3481-d07d-49f6-b50c-6e7d07bee5c1.png">


2. API login

- This API is use for authentication and authorization by obtaining an access token.
- API login "http://localhost:8000/api/auth/login"
- I use HTTP method "POST"
- The API response will be displayed as show below :
<img width="400" alt="Screen Shot 2023-02-08 at 14 18 32" src="https://user-images.githubusercontent.com/106460262/217460947-ac4ea505-1967-402b-8d15-20ac5bcb8264.png">


# G. API User 

- Note : You must put the token into the header for authorization & authentication
- if you do not put the token into the header you will get the response as below :
<img width="250" alt="Screen Shot 2023-02-08 at 14 31 11" src="https://user-images.githubusercontent.com/106460262/217463444-94e7c6d6-8073-4224-a63c-b3bb273df1d3.png">


1. API get all courses 

- API use to get all course data with a total of all courses.
- API get all course "http://localhost:8000/api/course/user/getAllCourse"
- I use HTTP method "GET"
- The API response will be displayed as show below : 
<img width="400" alt="Screen Shot 2023-02-08 at 14 35 51" src="https://user-images.githubusercontent.com/106460262/217464758-d1a548fb-6c77-4578-988e-bda6dad9bb41.png">


2. API get detail course

- API is used to get course details
- API get detail course "http://localhost:8000/api/course/user/getDetailCourse/{id}"
- by adding parameters "id" from _id course
- i use HTTP method "GET"
- The API response will be displayed as show below :
<img width="400" alt="Screen Shot 2023-02-08 at 14 46 18" src="https://user-images.githubusercontent.com/106460262/217466484-db4a870d-b4c6-42c9-a705-899fb09d9bf3.png">

3. API get category course

- API is use to get course details
- API get detail course "http://localhost:8000/api/course/user/getCategoryCourse/{category}"
- by adding parameters "category" from course category
- i use HTTP method "GET"
- The API response will be displayed as show below :
<img width="400" alt="Screen Shot 2023-02-08 at 14 49 26" src="https://user-images.githubusercontent.com/106460262/217467214-d56a5d63-c9b3-41c4-b7ee-8e3c8ac4cc08.png">


4. API sorting smallest to largest price and free price

- API is use to get sorting smallest to largest price and free price
- API sorting smallest to largest price and free price "http://localhost:8000/api/course/user/seacrhCourse"
- i use HTTP method "GET"
- The API response will be displayed as show below :
<img width="400" alt="Screen Shot 2023-02-08 at 14 55 07" src="https://user-images.githubusercontent.com/106460262/217468294-a1c05f56-5d07-46f7-8de4-c330986e8373.png">


# H. API Admin
- Note : You must put the token into the header for authorization & authentication
- if you do not put the token into the header you will get the response as below :
<img width="250" alt="Screen Shot 2023-02-08 at 14 31 11" src="https://user-images.githubusercontent.com/106460262/217463444-94e7c6d6-8073-4224-a63c-b3bb273df1d3.png">

- and if you not admin, you will get the rsponse as below :
<img width="250" alt="Screen Shot 2023-02-08 at 14 59 04" src="https://user-images.githubusercontent.com/106460262/217469181-087d9c37-0912-423b-adcd-aafd67e8dcd4.png">


1. API get all users and courses totals

- API use to get total users and courses
- API get all users and courses totals "http://localhost:8000/api/admin/getAllUserAndCourse"
- i use HTTP method "GET"
- The API response will be displayed as show below : 
- <img width="400" alt="Screen Shot 2023-02-08 at 15 07 23" src="https://user-images.githubusercontent.com/106460262/217470980-05802e99-5acd-400e-9f17-d4948c4a55ac.png">

2. API add new course

- Thi API use to add new course
- API add new course "http://localhost:8000/api/admin/course/add"
- i use HTTP method "POST"
- The API response will be displayed as show below : 
<img width="450" alt="Screen Shot 2023-02-08 at 15 11 34" src="https://user-images.githubusercontent.com/106460262/217472329-0a92072e-89b8-42c2-9326-301400db8dc8.png">


- and in the database we will see the data as shown below :
<img width="350" alt="Screen Shot 2023-02-08 at 15 14 32" src="https://user-images.githubusercontent.com/106460262/217472611-6a448691-b5fc-4cea-acdf-8dcd71c5cce9.png">



3. API upload photo course

- This API use to ulpload photo course to cloudinary 
- API upload photo course "http://localhost:8000/api/admin/upload"
- i use HTTP method "POST"
- The API response will be displayed as show below : 
<img width="500" alt="Screen Shot 2023-02-08 at 15 18 36" src="https://user-images.githubusercontent.com/106460262/217473426-d17613ab-3912-4cc0-812f-8b51af2a9bd6.png">

- and in the cloudinary we will see the photo as shown below :
<img width="600" alt="Screen Shot 2023-02-08 at 15 20 39" src="https://user-images.githubusercontent.com/106460262/217473825-7d39b698-b97a-4521-832c-7afe21965576.png">

4. API soft delete user

- This APi is used to softly delete a user
- API delete soft user "http://localhost:8000/api/admin/deleteSoft/user/{id}"
- with add parameter "id" from _id user
- i use HTTP method "POST"
- and the "isDelete" property to true
- The API response will be displayed as show below :
<img width="450" alt="Screen Shot 2023-02-08 at 15 25 47" src="https://user-images.githubusercontent.com/106460262/217475353-6f244fe8-d5b2-4a03-a32f-f771ee79a514.png">


- and in the database we will see the data as shown below 
<img width="350" alt="Screen Shot 2023-02-08 at 15 29 39" src="https://user-images.githubusercontent.com/106460262/217475862-f27cd3b2-0427-4eff-a08f-395ea56a29e1.png">


5. API soft delete course

- This APi is used to softly delete a course
- API delete soft course "http://localhost:8000/api/admin/deleteSoft/course/{id}"
- with add parameter "id" from _id course
- i use HTTP method "POST"
- and "isDelete" property to true
- The API response will be displayed as show below :
<img width="450" alt="Screen Shot 2023-02-08 at 15 32 03" src="https://user-images.githubusercontent.com/106460262/217477096-bd386bac-5efb-4d70-905b-40acfcc785b3.png">


- and in the database we will see the data as shown below :
<img width="300" alt="Screen Shot 2023-02-08 at 15 32 12" src="https://user-images.githubusercontent.com/106460262/217477225-75427fe8-b20f-47a7-ae02-a22485e64ec4.png">


6. API update course

- This API use to update course
- API update course "http://localhost:8000/api/admin/course/update/{id}"
- with add parameter "_id" from _id course
- and "updateAt" property will be current date
- The API response will be displayed as show below :
- <img width="450" alt="Screen Shot 2023-02-08 at 15 40 49" src="https://user-images.githubusercontent.com/106460262/217479398-5b02660c-8f6b-4728-9668-773929545431.png">


- and in the database we will see the data as shown below :
<img width="350" alt="Screen Shot 2023-02-08 at 15 42 03" src="https://user-images.githubusercontent.com/106460262/217479516-7aa3e543-6538-476d-918b-ef76602f4a6a.png">









