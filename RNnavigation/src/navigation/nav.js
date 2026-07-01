// Central navigation helper — like a navigation interface in Android.
// Import the function you need and call it with a destination from `Routes`,
// instead of writing <Link href="..."> on every screen.
//
// `router` is Expo Router's imperative API. Unlike useRouter() (a hook),
// this singleton works anywhere — inside onPress handlers, helpers, etc.
import { router } from 'expo-router';

// All route paths live here. A path maps to a file in src/app/:
//   '/'        -> src/app/index.js
//   '/about'   -> src/app/about.js
//   '/profile' -> src/app/profile.js
// Change a path once here and every screen stays in sync.
export const Routes = {
    HOME: '/',
    ABOUT: '/about',
    PROFILE: '/profile',
};

// 1) Plain navigation — just the destination.
//    navigate(Routes.ABOUT)
export function navigate(to) {
    router.navigate(to);
}

// 2) Navigation with values — pass data to the destination screen.
//    navigateWithParams(Routes.PROFILE, { id: 7, name: 'Mohit' })
//    Read them on the other side with: const params = useLocalSearchParams();
export function navigateWithParams(to, params) {
    router.navigate({ pathname: to, params });
}

// Go back to the previous screen (like finish() / popping the back stack).
export function goBack() {
    router.back();
}
