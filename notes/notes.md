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

## Docker-compose
When you ran the container with ```docker run```, the named volume was created automatically. However, that does not happen when running with Compose. You need to define the volume in the top-level volumes: section then specify the mountpoint in the service config. By simply providing only the volume name, the default options are used.
Example:
```
version: "3.9"
services:
	db:
		volumes:
				- db-data:/var/lib/postgresql/data
volumes:
	db-data:
```	

## socket.io
Must use namespace.
Don’t just connect to root namespace.
The root namespace doesn’t receive any “emit” events.

## Send message from Android app to Unity game
http://jeanmeyblum.weebly.com/scripts--tutorials/communication-between-an-android-app-and-unity

1. On my side, I write an android broadcast sender and an android broadcast receiver using java. I compile the Receiver.java to Receiver.jar and send it to you.

2. On your side, you move the .jar file to Assets/Plugins/Android/

3. Create an AndroidManifest.xml and put it in Assets/Plugins/Android/
This file lets Android knows that the Receiver class exists in your game and knows what intent your game is listening at (in this case you listen at the “send broadcast” event).
Suppose this AndroidManifest.xml will be automatically merged into your default manifest and there should be no conflicts.

4. When my broadcast sender emits “send broadcast” event. Your Receiver class receives this event since you already registered to receive this broadcast in your AndroidManifest.xml.

5. The method that your Receiver class plugin transfers the broadcast message to your .cs classes is that Receiver class’s associated static variable “text” will be updated upon receiving broadcast.
Your .cs classes fetch the static variable Receiver.text to get the message.

## Key idea of polymorphism
Use ArrayList<Superclass> to store an array of objects of different subclasses.
Pointer of superclass type to point to object of subclass type.

## Concept of "Class" and "Object"
Class is the fundamental unit of Java program.
All Java programs are classes.
A class is a template or blueprint for objects.

An object is an instance of a class.
Unique address in memory is an object's identity.

An object is a chunk of memory: 
	- holds field values
	- holds an associated object type
All objects of the same type share code
	- they all have same object type, but can have different field values.
	
## React Native
Basically, you write Javascript. The Javascript communicates with native components (Java on Android, Objective C on iOS, C# on Windows).

The communication occurs through the so-called "bridge". If at any time you feel that this communication slows things down too much, you can choose to implement the Javascript functionality in Java, Objective C, or C# respectively in order to run purely native. In this case, you are writing directly in native code, so there's no Javascript to native compilation.

## Flutter
Using the Dart language allows Flutter to compile the source code ahead-of-time to native code. 
Fast startup and execution of an app are the benefits of compilation to native code.

## Java garbage collection
Heap memory is called garbage collectable heap.
If object is not referenced by any variable.
Objective-C/C++ needs to release the memory.

## Cantonese tokenization
Pycantonese uses the 150,000-word Hong Kong Cantonese Corpus (HKCanCor) by Kang Kwong Luke as the dictionary.
songotsti uses:
Cantonese dictionary generated using Cantonese data from Facebook
Cantonese dictionary generated using Cantonese data from Telegram
Word list of 粵典
Words from Hong Kong Cantonese Corpus (HKCanCor)

songotsti is based on jiebaR and just adds the above dictionaries.
Jieba3k is for python3, jieba does not support python3.

## LDA (Latent Dirichlet Allocation)
Parameters of LDA
Alpha parameter is Dirichlet prior concentration parameter that represents document-topic density — with a higher alpha, documents are assumed to be made up of more topics and result in more specific topic distribution per document.
Beta parameter is the same prior concentration parameter that represents topic-word density — with high beta, topics are assumed to made of up most of the words and result in a more specific word distribution per topic.

## Chinese stopwords
https://github.com/fxsjy/jieba/blob/master/extra_dict/stop_words.txt
Another 4 from https://github.com/goto456/stopwords
Many from https://github.com/stopwords-iso/stopwords-iso/blob/master/CREDITS.md
https://raw.githubusercontent.com/nltk/nltk_data/gh-pages/packages/corpora/stopwords.zip

Translate myself to include both simplified Chinese and traditional Chinese.
Then remove any duplicates myself. 
Include roman numerals as stopword.
3594 stopwords of Chinese, English and symbols.

## Stopwords
Remove stopwords after tokenization.

## Vocabulary
Cantonese vocabulary comes from songotsti (jieba custom dictionary)
English vocabulary:
1. NLTK
```
import nltk
nltk.download('all-corpora')
```
2. Spacy
When I use ```conda install -c conda-forge spacy-model-en_core_web_lg```,
```
import en_core_web_lg
nlp = en_core_web_lg.load()
with open(os.path.join(FILE_DIR, "data/vocabulary/spacy_en_core_web_lg.txt"), "w") as f:
    f.write('\n'.join([line for line in list(nlp.vocab.strings)]))
```
3. 30 from https://github.com/chrisjmccormick/inspect_word2vec/tree/master/vocabulary

## Docker volume
Don't use something like ```C:\Data\pgdata:/var/lib/postgresql/data```.
Use ```pgdata:/var/lib/postgresql/data``` since docker will manage itself (have to google to find the location of the volumes).

On the first invocation of docker-compose up the volume will be created. The same volume will be reused on following invocations.

## Django csrf_exempt
Permit individual function with an annotation.
```from django.views.decorators.csrf import csrf_exempt```
```
@csrf_exempt
def post_credential(request):
	## ......
```

## Docker compose make migrations
docker-compose.yml
command: bash -c "python manage.py makemigrations temi_api && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"

Remember to make migrations for the apps and for the whole.
```python manage.py makemigrations temi_api``` has to be before
```python manage.py migrate```.
