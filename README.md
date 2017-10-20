# Album List Viewer Sample

Its a simple fully-responsive album list view sample created using MEAN stack.

## Running

Lets first start the api server -
```
// NodeJS required
cd dataserver
npm install
npm start # Starts api server on port 9000
```
then, we will start the http server -
```
npm i -g http-server
cd ../frontend
bower install
http-server -p 4000 # Starts http server on port 4000
```

## Details

#### HTTP SERVER

The front end of this project is written in AngularJS. 

It makes a request to the data server to fetch pages by pagenumber Once, 
data is received, it renders the data into the view. When user scrolls 
down, it makes another request to fetch more data which is added into 
the DOM.

Missing image file shows a default image and long name of albums are shown responsively.

#### SERVER API
API server written in NodeJS/ExpressJS

### `GET /api/page/:pageNum`

Gets albums by page number.

#### Query Parameters
| Name            | Type            | Description                                    |
|:----------------|:----------------|:-----------------------------------------------|

| `pageNum`       | `String`        | Page Number                                    |

```