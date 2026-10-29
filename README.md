# Welcome to StudentHub app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

Created the Expo Project

First, I created a new Expo application named StudentHub. I used Expo because it provides the tools needed to develop and test React Native mobile applications.

I also installed the Expo vector icons library to support the use of icons in the application.

Created the Project Structure

I organized the application screens using folders and files inside the app directory.

The project uses Expo Router, which supports file-based navigation. This means that the files created inside the app directory are used to define the application's routes.

I created the (home) route group to organize the Home Dashboard and Details screens under a shared layout.

Implemented Bottom Tab Navigation

I used app/_layout.tsx to configure the bottom tab navigation.

The bottom tabs allow users to switch between the Home section and the Clock screen. The tabs remain available while navigating between the main sections of the application.

This makes navigation easier because users do not need to return to the home screen every time they want to access another main section.

Implemented Stack Navigation

I used app/(home)/_layout.tsx to configure stack navigation for the Home and Details screens.

The Home Dashboard is the starting screen of this navigation stack. When the user selects the button to view the student details, the application navigates to the Details screen.

The user can then return to the previous screen using the navigation back button.

Developed the Home Dashboard

I created app/(home)/index.tsx for the main dashboard.

In this screen, I used the ScrollView component to allow users to scroll through the content when it does not fit on the screen.

I also used the Pressable component to create an interactive button. It provides visual feedback when the user presses it, making the interface more user-friendly.

The button is used to navigate to the student details screen.

Created the Student ID Card Details Screen

I created app/(home)/details.tsx to display the student ID card details.

I added a local image named user.png inside the assets/images directory. The application can load this image directly from the project instead of depending on an external image URL.

This screen demonstrates how to display student information and images in a mobile application.

Implemented the Live Clock

I created app/clock.tsx to demonstrate automatic updates using React's useEffect hook and JavaScript's setInterval function.

The clock updates at regular intervals without requiring the user to press a button to refresh the screen.

The useEffect hook is used to start the timer when the screen component is mounted. The timer updates the time value, causing React to display the latest value.

The interval is cleared when the component is unmounted, preventing the timer from continuing unnecessarily.

This demonstrates a timer-based task, rather than a true background service that continues running when the application is closed or suspended.