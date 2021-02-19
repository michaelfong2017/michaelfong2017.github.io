Temporary notes
================

## Single quotes vs double quotes
In json, only double quotes are allowed.
Single quotes are more popular.

## React Recoil
After using useRecoilValue, the component subscribes to the state and re-render is triggered whenever the state changes.

Selector is not a state itself. It is a read-only computation.

### atom vs context (useContext)
If using only 1 context, it triggers re-render to all components that subcribed to it even though they are not actually affected.
If using 10 contexts, 10 contexts and 10 providers are a nightmare.

## React Bootstrap
```yarn add react-bootstrap bootstrap```
For react-bootstrap styles to appear,
I need to include ```@import "bootstrap/dist/css/bootstrap.css"``` in app.scss.

## css mobile option
Variant depending on screen size:
```
@media (max-width: 900px) {
    .mobile-option {
        display: none;
    }
    // ......
}
```
Then, components with className mobile-option will have the above styles conditionally.

Suppose Navbar already has className "navbar". 
```
.navbar {
    background-color: #26004d
}
```
can directly add styles on top of the original "navbar" css styles.

```<img width="100%" src=......>``` fills parent exactly.

## react-bootstrap navbar
Seems the same:
```<NavBar.Toggle aria-controls="basic-navbar-nav" />```
```<NavBar.Toggle aria-controls="responsive-navbar-nav" />```

```<NavBar.Collapse id="basic-navbar-nav" />```
```<NavBar.Collapse id="responsive-navbar-nav" />```

```<NavDropdown title="Dropdown" id="collasible-nav-dropdown">```

## Publish npm package (also yarn)
https://jasonwatmore.com/post/2018/04/14/react-npm-how-to-publish-a-react-component-to-npm
1. In webpack.config.prod.js,
```
output: {
        // ......
        libraryTarget: 'commonjs2'
    },
```

2. Create an .npmignore file
```
src
.babelrc
webpack.config.dev.js
webpack.config.prod.js
localhost.key
localhost.crt
```

3. ```npm run build```
4. ```npm login```
5. ```npm publish --access=public``` or ```npm publish``` (for private, requires payment)

Note: 
```
npm ERR! code EPRIVATE
npm ERR! This package has been marked as private
npm ERR! Remove the 'private' field from the package.json to publish it.
```
** Package name must match with username, e.g. ```@michaelfong2017/test```

## Better publish npm package
https://medium.com/groftware/how-to-publish-your-react-component-on-npm-9cf48d91944d

## web server (e.g. nginx) and application server concept
https://www.nginx.com/resources/glossary/application-server-vs-web-server/
A web server‘s fundamental job is to accept and fulfill requests from clients for static content from a website (HTML pages, files, images, video, and so on). The client is almost always a browser or mobile application and the request takes the form of a Hypertext Transfer Protocol (HTTP) message, as does the web server’s response.

An application server’s fundamental job is to provide its clients with access to what is commonly called business logic, which generates dynamic content.

** In a typical deployment, a website that provides both static and dynamically generated content runs web servers for the static content and application servers to generate content dynamically.

## reverse proxy server
A reverse proxy and load balancer sit in front of one or more web servers and one or more web application servers to route traffic to the appropriate server.

A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server.

A very common scenario for developers, is to run their REST APIs behind a reverse proxy. There are many reasons why you would want to do this but one of the main reasons is to run your API server on a different network or IP then your front-end application is on. You can then secure this network and only allow traffic from the reverse proxy server.

Also see: https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/.

## nginx conf
https://nginx.org/en/docs/beginners_guide.html

### Example 1
```
http {
    server {
        location / {
            root /data/www;
        }

        location /images/ {
            root /data;
        }
    }
}
```
This is already a working configuration of a server that listens on the standard port 80 and is accessible on the local machine at http://localhost/. In response to requests with URIs starting with /images/, the server will send files from the /data/images directory. For example, in response to the http://localhost/images/example.png request nginx will send the /data/images/example.png file. If such file does not exist, nginx will send a response indicating the 404 error. Requests with URIs not starting with /images/ will be mapped onto the /data/www directory. For example, in response to the http://localhost/some/example.html request nginx will send the /data/www/some/example.html file.

### Example 2
```
http {
    server {
        listen 8080;
        root /data/up1;

        location / {
        }
    }

    server {
        location / {
            proxy_pass http://localhost:8080/;
        }

        location ~ \.(gif|jpg|png)$ {
            root /data/images;
        }
    }
}
```
The parameter is a regular expression matching all URIs ending with .gif, .jpg, or .png. A regular expression should be preceded with ~. The corresponding requests will be mapped to the /data/images directory.

When nginx selects a location block to serve a request it first checks location directives that specify prefixes, remembering location with the longest prefix, and then checks regular expressions. If there is a match with a regular expression, nginx picks this location or, otherwise, it picks the one remembered earlier.

This server will filter requests ending with .gif, .jpg, or .png and map them to the /data/images directory (by adding URI to the root directive’s parameter) and pass all other requests to the proxied server configured above.

## Android sign apk
Build -> Generate Signed Bundle or APK.
Choose APK.
Key store path: choose file ```robocore_ks1.jks```.
Key store password, Key alias and Key password are recorded inside ```robocore_ks1.txt```.
Choose release. Check both V1 and V2.

## Connect to shared folder in Network
### Windows
File explorer -> Computer -> Map network drive.
Folder: ```\\tsushima\\shared```
User: ```user```
Password: ```user```

## React responsive UI react-bootstrap
```import {Container, Row, Col} from "react-bootstrap"```
```
<Container fluid>
    <Row>
        <Col>
        </Col>
        <Col>
        </Col>
    </Row>
</Container>
```
fluid is needed for width to be 100% across all viewport and device sizes.
Row is needed so that one element is on the left and one element is on the right.

## When to React to use useRef
In plain JavaScript you had to use getElementById or querySelector to select a DOM node.

But this is not an ideal solution in React.

In React you want to use the useRef hook or if you’re in a React class component, you want to use createRef.

The reason you don’t want to use getElementById or querySelector is because you may be designing your React app to output multiple of the same ID’s, which is a no no.

Another reason to use useRef is because it helps with the unidirectional (single direction) data flow.

You can define a node reference in a parent component and toss them down to child components.

Hence the single direction data flow.