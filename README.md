This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

<h1>CarSnap</h1>

***App Name Subject to Change***

Project for a mobile app for car enthusiasts that allows a user to upload or take a picture of a vehicle and identify its make, model, year, etc. This will then update a users catalog of vehicles that they have spotted on the road. These details can be logged with positional data (if provided/allowed by the user) and can be shared with friends.

<!-- Cross-platform improvement on [CarSpotter](https://apps.apple.com/us/app/carspotter/id6742119749) [GitHub?](https://github.com/matthewlow04/AutoSpotter) -->

Todo: clean up this readme

# Getting Started (Our Notes)

We plan to construce this app using [React Native](https://reactnative.dev/) for its ease of cross-platform development.

## App Setup

### General Development

Install [`react-devtools`](https://react.dev/learn/react-developer-tools)

### For Andriod Development

Whether you are developing on a Mac or a Windows computer, you will be able to install [Andriod Studio](https://developer.android.com/studio). This will allow you to build, test, and run code for Andriod users using the andriod emulator in Andriod Studio.

### For iOS Development

For Mac developers, this is relatively straight forward, you only need to download XCode, and use that for running and testing the code on an emulator.

For Windows developers (like me), this is a bit trickier. The options are either to buy a Mac PC (not recommended unless you have extra $$ lying around), or you need to install a MacOS virtual Machine. This [YouTube video](https://www.youtube.com/watch?v=UkdBarxP4nw) (more useful links in video description) is super helpful for the process. We will put further instructions more or less custom to this project here if needed at a later date.

If you want to SSH into the VM, open its settings and under the NAT network adapter click on port forwarding and and add a port (name it what ever you'd like, I'd go with "SSH"). Add Host Port as 3022 and Guest Port as 22. Then to ssh into the VM run and sign into the VM. Then in terminal (or VSCode) run `ssh -p 3022 <account name within VM>:127.0.0.1`. You will then need to enter your VM account password to complete the process.


## Vehicle Identification Setup

We plan to use an AI based approach to the actual vehichle identification process.

The details are still very much in the works but this will be updated when ideas have been confirmed.


## Other Helpful Resources
- [Vehicle OSINT Tool Collection](https://github.com/TheBurnsy/Vehicle-OSINT-Collection)


# Getting Started (Official React Native Notes)

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
