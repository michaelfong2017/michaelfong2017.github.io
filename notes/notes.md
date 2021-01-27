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

## How to start mysql server on Windows
Open ```C:\Program Files (x86)\MySQL\MySQL Installer for Windows\MySQLInstaller.exe```

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
npm install -g yarn

## react hook + d3 tutorial
https://medium.com/@compatt84/a-simple-dashboard-using-react-hooks-and-d3-1eca02ea0d18

## python list initialization
Average time taken by for loop: 0.012432687282562256
Average time taken by while loop: 0.017907898426055908
Average time taken by list comprehensions: 0.0034629487991333007
Average time taken by * operator: 0.0001951146125793457
a[0]*10000] is fastest and a = [0 for i in range(10000)] is useful for 2d list.

## Send audio/video
UDP for audio, TCP for video and image
For video and image, trim each frame into byte arrays. First, send the total byte length first. Then, trim. Then, send one by one.

## React Hooks Lifecycle
https://medium.com/@guptagaruda/react-hooks-understanding-component-re-renders-9708ddee9928
Child useEffect before parent.
Parent render before child.
Parent re-render causes children to re-render irrespective of whether they consume the props or not.
setState (e.g. setData) causes re-render (not useEffect).
states inside useEffect do not update immediately. They are updated after next render. Therefore, console.log() gives the previous values.

When setState handler is called multiple times, React batches these calls and triggers re-render only once when the calling code is inside React based event handlers. If these calls are made from non-React based handlers like setTimeout, each call will trigger a re-render.

### useEffect
useEffect cleanup handler does not run the first time.
Cleanup handler returned from the previous useEffect call ran now (using previous component state).
After re-render, useEffect cleanup handler -> useEffect handler.
When the component is un-mounted, React makes sure to run the cleanup handler related to the last effect.
useEffect: state change -> browser paints long quote -> useEffect handler -> browser paints short quote.
Therefore, there is a blink due to time delay between 2 paints.
useLayoutEffect: will be flushed synchronously, before the browser has a chance to paint.

### useCallback
We don’t want a new function reference with every re-render. useCallback hook is what we are looking for. It takes a function and returns a memoized function whose reference won’t change between re-renders unless one of its dependencies change. 

### useMemo
This code-snippet shows the memoized TickerComponent leveraging the useMemo hook. React skips re-rendering the component and returns the previously cached result unless one of the listed dependencies change (ticker, onRemove handler).

On top of that React also stores previous values given the inputs and will return the previous value given the same previous inputs. That's memoization at work.

### Dependency list
If variables are (non-primitive) objects/arrays/functions/etc, they will change every time and useEffect will be called every time.

## Filelist can be casted by "Array.from" in order to use .map

## Read multiple files
arr.map() is synchronous and FileReader works asynchronously, use Promise.all on the array returned by map.
```
handleFileChosen = async (file) => {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(file);
  });
}


readAllFiles = async (AllFiles) => {
  const results = await Promise.all(AllFiles.map(async (file) => {
    const fileContents = await handleFileChosen(file);
    return fileContents;
  }));
  console.log(results);
  return results;
}
```


