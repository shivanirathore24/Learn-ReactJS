# FIREBASE

## Introduction to Firebase

### Why does data get lost after refresh?

Here, we are storing the blog's data inside of the state locally in the form of an array.
When you add a new blog, it gets added to the blogs array as well. But, when the
page is reloaded, the App gets rerendered, and this array gets re-initialized to the
empty array. So, This acts as temporary storage where data is not saved after
refresh.

```jsx
const [formData, setformData] = useState({ title: "", content: "" });
const [blogs, setBlogs] = useState([]);
```

### Using Databases

A database is an organized collection of data for easy access, management and
updating. To save stored data even after the refresh, you need to connect your React
App with some external database. Databases can be classified into two categories:

- SQL Databases or Relational Databases
- No SQL Databases

<img src="../images/sql_no-sql_database.png" alt="SQL vs NO-SQL Database" width="500" height="auto">

| Property                | SQL Databases                                                    | NoSQL Databases                                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data Storage Model**  | Tables with fixed rows and columns                               | Document: JSON documents<br>Key-value: key-value pairs,<br>Wide-column: tables with rows and dynamic columns,<br>Graph: nodes and edges                                                                                                  |
| **Development History** | Developed in the 1970s with a focus on reducing data duplication | Developed in the late 2000s focusing on scalability and rapid application changes driven by Agile and DevOps practices                                                                                                                   |
| **Primary Purpose**     | General purpose and best suited for structured data              | Best suitable for structured data. Document: general purpose,<br>Key-value: large data with simple lookups queries,<br>Wide-column: large data with predictable query patterns,<br>Graph: analyzing relationships between connected data |
| **Schemas**             | Rigid                                                            | Flexible                                                                                                                                                                                                                                 |
| **Scaling**             | Vertical (scale-up with a larger server)                         | Horizontal (scale-out across commodity servers)                                                                                                                                                                                          |
| **Examples**            | Oracle, MySQL, Microsoft SQL Server, PostgreSQL                  | Document: MongoDB, CouchDB<br>Key-value: Redis, DynamoDB<br>Wide-column: Cassandra, HBase<br>Graph: Neo4j, Amazon Neptune                                                                                                                |

### Realtime Database

The Realtime database helps our users collaborate. It ships with mobile and web
SDKs, allowing us to build our app without needing servers. When our users go
offline, the Real-time Database SDKs use a local cache on the device for serving
and storing changes. The local data is automatically synchronized when the device
comes online.

<img src="../images/realtime-database.png" alt="Realtime Database" width="500" height="auto">

## Firebase

The Firebase Realtime Database is a cloud-hosted database in which data is stored
as JSON. The data is synchronized in real-time to every connected client. Clients
share one Realtime Database instance and automatically receive updates with the
newest data when we build cross-platform applications with iOS and JavaScript
SDKs. Firebase offers two cloud-based, client-accessible database solutions that
support real-time data syncing:

- **Cloud Firestore** is Firebase's newest database for mobile app development.
  It builds on the successes of the Realtime Database with a new, more intuitive
  data model. Cloud Firestore also features richer, faster queries and scales
  further than the Realtime Database. Data is stored in document format.
- **Realtime Database** is Firebase's original database. It's an efficient,
  low-latency solution for mobile apps requiring real-time synced states across
  clients. Data is stored in JSON format.

## Cloud Firestore

In Cloud Firestore, the unit of storage is the document. A document is a lightweight
record containing fields that map to values. Each document is identified by a name.
Each document includes a set of key-value pairs. Cloud Firestore is optimized for
storing extensive collections of small documents. Documents live in collections,
which are simply containers for documents.
For example, you could have a users collection to contain your various users, each
represented by a document:

<img src="../images/cloud-firestore1.png" alt="Cloud Firestore" width="600" height="auto">

Data types that Cloud Firestore supports are Array, Boolean, Bytes, Date and time,
Floating-point number, Geographical point, Integer, Map, Null, Reference and a Text
string.

### Understanding the working

Cloud Firestore caches data that your app is actively using, so the app can write,
read, listen to, and query data even if the device is offline. When the device returns
online, Cloud Firestore synchronizes any local changes back to Cloud Firestore. To
keep data in your apps current without retrieving your entire database each time an
update happens, **real-time listeners** are added. Adding real-time listeners to your
app notifies you with a data snapshot whenever the data your client apps are
listening to changes, retrieving only the new changes.

For Example, Your firebase has a collection of blogs with blogs B1 and B2 as
documents. As soon as the client opens the app, a persistent connection will be
established between the firestore and the client via web socket. On the client side,
the listeners installed, which are nothing but a call-back function, listen to any
changes happening to the client. Similarly, there is a process inside cloud firestore,
which listens to any changes happening in the database. These listeners are used to
notify changes in the apps.

When we open the app for the first time, it is not directly updated to the UI. First, the
data gets stored inside the local cache of the device. Here B1 and B2 will be stored
already in the local cache. When a new document B3, is added, it will be added to
the local cache, and then the listener will be notified. The Listener will send all the
data from the local cache to the firebase, including the changes. Now, the Process
present in firebase gets notified. The Process will notify all the other devices about
the changes, and changes will get updated for all the devices. Only the new data or
changes get updated.

<img src="../images/cloud-firestore2.png" alt="Cloud Firestore" width="600" height="auto">

## Using Firestore in your Application

For more detailed steps, you can check this [link](https://firebase.google.com/docs/firestore/quickstart).

### Create a Cloud Firestore Database

1. In the [Firebase console](https://console.firebase.google.com/u/0/), click **Add project**, then follow the on-screen
   instructions to create a Firebase project. Enter a project name, then click
   Continue. Select your Firebase account from the dropdown or click Create a
   new account if you don't already have one. Click Continue once the process
   completes.
2. Next, click the Web icon (</>) towards the top-left of the following page to set
   up Firebase for the web. Enter a nickname for your app in the provided field.
   Then click the Register app.
3. Copy the generated code and keep it for the following step (discussed in the
   following section). Click Continue to the console.
4. Navigate to the **Cloud Firestore** section of the Firebase console. Now, Follow
   the database creation workflow. Select a starting mode for your Cloud
   Firestore Security Rules:

- **Test mode**
  - Good for getting started with the mobile and web client libraries, but
    allows anyone to read and overwrite your data.
- **Locked mode**
  - Denies all reads and writes from mobile and web clients. Your
    authenticated application servers (C#, Go, Java, Node.js, PHP, Python,
    or Ruby) can still access your database.

5. Select a location for your database.
6. Click Done.

### Initialize Firebase in Your React App

1. Install Firebase using npm:

```sh
npm install firebase
```

2. Create a firebaseinit.js file and paste the code generated earlier into this file.
   You can also find this code in Project Overview > Project Settings.
3. Replace the TODOs with your app's Firebase project configuration.
4. Export the firebase db object from the file and import this object into the files
   where it is needed.

## Connecting Firebase to the App

### firebaseInit.js

```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnZ_FA_zslYPwBFM9lz-ZKKHgpsixHAsI",
  authDomain: "blogging-app-6a6ef.firebaseapp.com",
  projectId: "blogging-app-6a6ef",
  storageBucket: "blogging-app-6a6ef.firebasestorage.app",
  messagingSenderId: "62739173448",
  appId: "1:62739173448:web:6e0fb1125aa58ffba1487d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

- Added **Firebase project configuration** to connect the React application with Firebase.
- Initialized the **Firebase app** using `initializeApp(firebaseConfig)`.
- Initialized **Firestore database** using `getFirestore` and exported it as `db` so it can be used in other components.

### Blog.js

```diff
+ import { db } from "./firebaseInit";
```

- Firestore database import was added to enable database operations.
- Purpose: Allows the Blog component to interact with the **Firestore database** using the exported db instance.

## Adding Data to Firebase

### Add a document

When you use set() to create a document, you must specify an ID for the document
to create. For example:

```jsx
import { doc, setDoc } from "firebase/firestore";
await setDoc(doc(db, "cities", "new-city-id"), data);
```

But sometimes there isn't a meaningful ID for the document, and it's more
convenient to let Cloud Firestore auto-generate an ID for you. You can do this by
calling the following language-specific add() methods:

```jsx
import { collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan",
});

console.log("Document written with ID: ", docRef.id);
```

### Blog.js

```diff
import { useState, useRef, useEffect, useReducer } from "react";
import { db } from "./firebaseInit";
+import { collection, addDoc } from "firebase/firestore";

...

export default function Blog() {

  const [formData, setFormData] = useState({ title: "", content: "" });
  const [blogs, dispatch] = useReducer(blogsReducer, []);
  const titleRef = useRef(null);

  ...

- function handleSubmit(e) {
+ async function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      blog: { title: formData.title, content: formData.content },
    });

+   const docRef = collection(db, "blogs");
+   await addDoc(docRef, {
+     title: formData.title,
+     content: formData.content,
+     createdOn: new Date(),
+   });

    setFormData({ title: "", content: "" });
    titleRef.current.focus();
    console.log(blogs);
  }

  ...
}
```

#### Changes Made

1. Firebase Firestore Integration Added
   - Imported Firestore functions to store blogs in the database.
   ```jsx
   import { collection, addDoc } from "firebase/firestore";
   ```
2. handleSubmit Converted to Async
   - The `handleSubmit` function was changed to `async` to allow asynchronous database operations.

3. Firestore Collection Reference Created
   - A reference to the blogs collection in Firestore is created before adding data.

   ```jsx
   const docRef = collection(db, "blogs");
   ```

4. Blog Data Stored in Firestore
   - When a blog is added, it is now saved to Firestore using addDoc.

   ```jsx
   await addDoc(docRef, {
     title: formData.title,
     content: formData.content,
     createdOn: new Date(),
   });
   ```

5. Timestamp Added
   - A `createdOn` field was added to store the blog creation date.

The updated code connects the blog form to Firebase Firestore, allowing newly created blogs to be stored in the database instead of existing only in the local React state.

#### 🖥️ What You See in Firebase:

<img src="../images/add-blogs.png" alt="Add Blogs" width="700" height="auto">

<img src="../images/firebase-add-blog1.png" alt="dd Blogs" width="700" height="auto">

<img src="../images/firebase-add-blog2.png" alt="dd Blogs" width="700" height="auto">

## addDoc vs setDoc

### Set a document

To create or overwrite a single document, use the following language-specific set()
methods:

```jsx
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
});
```

If the document does not exist, it will be created. If the document does exist, its
contents will be overwritten with the newly provided data unless you specify that the
data should be merged into the existing document, as follows:

```jsx
import { doc, setDoc } from "firebase/firestore";
const cityRef = doc(db, "cities", "BJ");
setDoc(cityRef, { capital: true }, { merge: true });
```

setDoc is useful where you are generating IDs by yourself or adding a new one.

### Blog.js

```diff
-import { collection, addDoc } from "firebase/firestore";
+import { collection, doc, setDoc } from "firebase/firestore";

...

export default function Blog() {

  ...

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      blog: { title: formData.title, content: formData.content },
    });

-   const docRef = collection(db, "blogs");
-   await addDoc(docRef, {
+   const docRef = doc(collection(db, "blogs"));
+   await setDoc(docRef, {
      title: formData.title,
      content: formData.content,
      createdOn: new Date(),
    });

    setFormData({ title: "", content: "" });
    titleRef.current.focus();
    console.log(blogs);
  }

}
```

#### Changes Made

1. Additional Firestore Functions Imported
   - Added doc and setDoc to create and write documents manually.

   ```jsx
   import { collection, doc, setDoc } from "firebase/firestore";
   ```

2. Changed Firestore Write Method
   - Earlier Code – `addDoc()`
     - `addDoc()` directly adds a new document to the collection.
     - Firestore **automatically generates the document ID**.
     - The developer **cannot control the document ID**.
     ```jsx
     await addDoc(collection(db, "blogs"), {
       title: formData.title,
       content: formData.content,
       createdOn: new Date(),
     });
     ```
   - Updated Code – `doc()` + `setDoc()`
     - `doc()` creates a document reference first.
     - `setDoc()` **writes data to that specific document reference**.
     - This approach **allows specifying or controlling the document ID if required**.

     ```jsx
     const docRef = doc(collection(db, "blogs"));

     await setDoc(docRef, {
       title: formData.title,
       content: formData.content,
       createdOn: new Date(),
     });
     ```

NOTE: `setDoc()` gives **more control over the document reference and ID**, while `addDoc()` simply **adds a document automatically**.
