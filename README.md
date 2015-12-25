An example usage of AlloyEditor on the server and in the browser.
=============

In this repository you can see an example of using AlloyEditor as a React component with server-side rendering of the content, which will be edited and creating an instance of AlloyEditor in the browser.

Installation
-------------

1) Clone the repository, then execute:
`npm install`

This will install all the needed packages

2) In order to create the dist files, execute:

`npm run build` or `npm run release`

`npm run build` will create development version of the bundle.
`npm run release` will create an optimized (minimized) version of the bundle.

Running
-------------
Open `index.html` page in some browser. You will be able to see a rendered on the server page and created in the browser instance of AlloyEditor.

How it works
-------------
There is a React component of AlloyEditor. This component is used on both server and in the browser. On the server it is used to render the editable content inside `index.html`. When `index.html` is served, an instance of AlloyEditor is being created.

Separation between application files and AlloyEditor's files
-------------
This project separates AlloyEditor's scripts from application's files. In this case, you will be able to leverage browser's cache.
If you still want to have just one bundle file, remove the optimization part in Webpack's configuration object.

Running in production
-------------
To run the project in production, execute `npm run release`. The files will be minimized and ready for production.

And, Happy Christmas!