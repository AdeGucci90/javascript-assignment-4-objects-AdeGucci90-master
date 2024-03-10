#!/bin/bash

case $1 in
    "objectProps.js")
        ./__tests__/__automate__.sh $1 "npm test -- objectProps.test.js" objectProps
    ;;
    "objectMethods.js")
        ./__tests__/__automate__.sh $1 "npm test -- objectMethods.test.js" person
    ;;
    "nestedObjects.js")
        ./__tests__/__automate__.sh $1 "npm test -- nestedObjects.test.js" nestedObjects
    ;;
    "spreadSyntax.js")
        ./__tests__/__automate__.sh $1 "npm test -- spreadSyntax.test.js" spreadSyntax
    ;;
    "destructuring.js")
        ./__tests__/__automate__.sh $1 "npm test -- destructuring.test.js" destructuring
    ;;
    "histogram.js")
        ./__tests__/__automate__.sh $1 "npm test -- histogram.test.js" histogram
    ;;
    *)
        echo "Usage: $0 file-name"
        exit 1
esac


# Path: tests.sh