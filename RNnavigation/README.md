# RNnavigation

A small [Expo Router](https://docs.expo.dev/router/introduction) app for learning
file-based navigation the way a production app is structured.

## Run

```bash
npm install
npx expo start
```

## Structure

```
src/
  app/                 # Routes (file-based). A file here = a screen URL.
    _layout.js         #   Root navigator (Stack) + global setup
    index.js           #   "/"        -> renders <HomeScreen/>
    about.js           #   "/about"   -> renders <AboutScreen/>
    profile.js         #   "/profile" -> renders <ProfileScreen/>
  navigation/
    nav.js             # Routes constants + navigate()/navigateWithParams()/goBack()
screens/               # The actual screen UI (kept separate from routes)
  homeScreen.js
  aboutScreen.js
  profileScreen.js
```

## How navigation flows

```
expo-router/entry -> src/app/_layout.js (Stack) -> src/app/<route>.js -> screens/<Screen>
```

- **Navigate by function:** `navigate(Routes.ABOUT)` instead of `<Link href="/about">`.
- **Pass data:** `navigateWithParams(Routes.PROFILE, { id: 7, name: 'Mohit' })`,
  then read it on the destination with `useLocalSearchParams()` (values come back as strings).
- **Go back:** `goBack()`.

Add a screen by creating `src/app/<name>.js`, its UI in `screens/`, and a path in `Routes`.
