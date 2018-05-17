# React Widgets 

Structure to create React Based Widgets.
To create a new widget you need to add a new entry point in "webpack.common.js".
By default this application generate a separate file with react dependencies "vendor".
You could change this configutation to include vendor files inside every widget.

# Develop
To work in local just type the following command:

```sh
$ yarn start
```

# Production
To generate the build for production just launch the following command:

```sh
$ yarn prod
```