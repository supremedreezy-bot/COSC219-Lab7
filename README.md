
# COSC 219 - Lab 7

## Trail Tracker

This application allows users to add, close, reopen, and delete trails.

Trails are saved using localStorage so they remain after refreshing the page.

## Event Delegation

The click listener is attached to the trail list rather than individual buttons because the buttons are recreated whenever the list is rendered.

## Storage

The loadTrails function handles missing, invalid, or corrupted storage data and returns an empty array to prevent the application from crashing.

## AI Use Declaration

I used ChatGPT to help generate and explain JavaScript code for this lab. I reviewed the code and tested the application using the provided self-check tool.
