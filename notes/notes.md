Temporary notes
================

## ffmpeg
ffmpeg -i input.png -q:v 10 -vf scale=1152:720 output.jpg

-q:v accepts 1-31. 1 already compresses the photo, 31 compresses the most.
output can be .jpg and must not be png for compression to work.
-vf scale accepts any ratio regardless of the original photo.

Email does not compress images regardless of representation on screen.
Signal compresses images a bit.
Whatsapp compresses images very much.

## PathExt
When running a command line that does not contain an extension, the system uses the value of this environment variable to determine which extensions to look for and in what order.

After setting Path and PathExt environment variables, Windows system can search for the conda programs in folders specified in Path. ```where conda``` gives the found files.

## Try catch
In case of checking None,
python try except often performs better than checking None everytime.
Pythonistas typically suggest that EAFP (easier to ask forgiveness than permission) is better than LBYL (look before you leap).

## Spyder IDE installation
Install in Anaconda-Navigator instead of command line to ensure that the version is correct.

## mysqlclient installation
ModuleNotFoundError: No module named 'MySQLdb'
Mac:
conda install -c bioconda mysqlclient
OR
conda install -c conda-forge mysqlclient==2.0.3

## How to use mysql and start mysql server on Mac
```open -a TextEdit .bash_profile```
Append the following:
```export PATH="/usr/local/mysql/bin:$PATH"```
```export PATH="/usr/local/mysql/support-files:$PATH"```

sudo mysql.server start
sudo mysql.server stop

## react.js lazy loading
```
import React, { lazy, Suspense, useState } from "react";
import "../styles/app.scss";

function App() {
  const [state, setState] = useState("CLICK ME");

  const HelloWorld = lazy(() => import("./HelloWorld"));
  const Example = lazy(() => import("./d3Example"));
  const Example2 = lazy(() => import("./d3Example2"));

  function MyComponent() {
    if (state == "CLICKED") {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <HelloWorld />
            <Example />
            <Example2 />
          </Suspense>
        </div>
      );
    }
    else {
        return <div>Not clicked...</div>
    }
  }

  return (
    <div>
      <MyComponent />
      <button
        onClick={() => {
          setState("CLICKED");

          import("./math").then((math) => {
            console.log(math.add(16, 26));
          });
        }}
      >
        {state}
      </button>
    </div>
  );
}
export default App;
```

## react package.json devDependencies vs dependencies
It is possible to put all dependencies in 'dependencies' but devDependencies are dependencies that are only used in development.
Example:
```
"devDependencies": {
        "@babel/core": "^7.12.10",
        "@babel/preset-env": "^7.12.11",
        "@babel/preset-react": "^7.12.10",
        "autoprefixer": "^10.1.0",
        "babel-loader": "^8.2.2",
        "css-loader": "^5.0.1",
        "html-webpack-plugin": "^4.5.0",
        "node-sass": "^5.0.0",
        "postcss-loader": "^4.1.0",
        "sass-loader": "^10.1.0",
        "style-loader": "^2.0.0",
        "webpack": "^5.11.0",
        "webpack-cli": "^4.2.0",
        "webpack-dev-server": "^3.11.0"
    },
    "dependencies": {
        "d3": "4.2.2",
        "react": "^17.0.1",
        "react-dom": "^17.0.1"
    }
```

## Lazy load tip
Importing the same module in two different scripts will not cause repetitive import.
Works during lazy loading too.

## yarn vs npm
yarn is much faster.

## react hook + d3 tutorial
https://medium.com/@compatt84/a-simple-dashboard-using-react-hooks-and-d3-1eca02ea0d18


