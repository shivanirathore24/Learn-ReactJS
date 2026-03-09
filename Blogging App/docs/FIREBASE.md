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
