
# Image and File Upload Server

This project provides a simple server where users can upload images and files. Users can send files to the server either via HTML forms or through JavaScript using Axios. The server processes the uploaded files and stores them for later access.

## Features

- Upload images and files via HTML forms or JavaScript.
- Store uploaded files on the server.
- Allows retrieval of uploaded files and images.

## Prerequisites

- Node.js installed on your machine.
- `axios` and `form-data` for making HTTP requests and handling `multipart/form-data`.
- A running server that can handle the file uploads.

## Setup

### 1. Server Setup (Backend)

To set up your server, make sure it is running on `localhost:4000` and can handle `POST` requests for both image and file uploads.

Install the necessary dependencies:

```bash
npm install express form-data multer
```

### 2. Frontend Setup (Client)

You can upload files in two ways: using HTML forms or programmatically using JavaScript.

#### **HTML Form for Uploading Files**

You can upload files via HTML forms. Below is an example of how to set up the form to upload images and files.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Files</title>
</head>

<body>
    <form action="http://localhost:4000/images" method="post" enctype="multipart/form-data">
        <label>
            <!-- The name should be "image" for the image upload -->
            Image: <input type="file" name="image" />
        </label>
        <input type="submit" value="Submit" />
    </form>
    
    <form action="http://localhost:4000/files" method="post" enctype="multipart/form-data">
        <label>
            <!-- The name should be "file" for the file upload -->
            File: <input type="file" name="file" />
        </label>
        <input type="submit" value="Submit" />
    </form>
</body>

</html>
```

In the above HTML code:
- The first form is for uploading images. The input field's `name` attribute is set to `image`.
- The second form is for uploading general files. The input field's `name` attribute is set to `file`.

#### **Using JavaScript (Axios) for Uploading Files**

You can also upload files programmatically using JavaScript and Axios. Below is an example of how to upload both images and files using JavaScript.

```javascript
import FormData from 'form-data';
import axios from 'axios';
import fs from 'fs';

// Uploading an Image
const data1 = new FormData();
const imagepath = './images/google_logo.jpg'; // Path to the image file
data1.append('image', fs.createReadStream(imagepath), 'googleLogo');

// Sending the POST request to upload the image
axios.post('http://localhost:4000/images', data1, {
    headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data1.boundary}`,
    }
}).then(res => console.log("Image Upload Success"))
    .catch(err => console.log("Error: " + err));

// Uploading a File
const data2 = new FormData();
const filepath = './images/google_logo.jpg'; // Path to the file
data2.append('file', fs.createReadStream(filepath), 'googleLogo');

// Sending the POST request to upload the file
axios.post('http://localhost:4000/files', data2, {
    headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data2.boundary}`,
    }
}).then(res => console.log("File Upload Success"))
    .catch(err => console.log("Error: " + err));
```

In the above JavaScript code:
- We create a `FormData` object for both image and file uploads.
- We use `fs.createReadStream()` to read the image and file from the local filesystem.
- Axios is used to send the files to the server.

## How It Works

### Server Side
- The server should have two endpoints to handle the uploads:
  - `POST /images`: Accepts image files.
  - `POST /files`: Accepts general files.
  
Once a file is uploaded, it will be stored on the server and can be accessed via the appropriate endpoint.

### Client Side
You can use either HTML forms or JavaScript to send the files to the server.

- **Using HTML Forms**: 
  - The form will send the file as part of a `POST` request to the server.
  - The server will handle the file and store it.

- **Using JavaScript (Axios)**:
  - JavaScript handles the file upload programmatically using `FormData` and sends it via an Axios POST request to the server.

## Example Request (JavaScript)

Here are example requests to upload images and files using Axios.

- **Image Upload (using JavaScript)**:

  ```javascript
  axios.post('http://localhost:4000/images', data1, { headers: { ... } });
  ```

- **File Upload (using JavaScript)**:

  ```javascript
  axios.post('http://localhost:4000/files', data2, { headers: { ... } });
  ```

## Running the Server

1. Make sure your server is running on `http://localhost:4000`.
2. Use either the HTML form or the JavaScript client to upload files to the server.

```bash
# Start your server
node server.js
```

## Conclusion

This project provides a simple file upload system where you can upload and store images and other files. It offers flexibility for both client-side and server-side file handling.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
