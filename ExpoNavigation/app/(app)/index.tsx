import { Text, View, StyleSheet, Pressable, Button } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Home() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>Home Page</Text>
      <Link href="./about" style={styles.link}> About</Link>
      <Link href="./profile" style={styles.link}> profile</Link>
      <Link href="./products" style={styles.link}> products</Link>
      <Link href="./whatifproductnotfound">what if page is not found</Link>
      <Link href="./profile/mohit" style={styles.link}> Profile Not found page</Link>

      <Link href="/login" asChild>
        <Pressable style={styles.button}>
          <Text >Login</Text>
        </Pressable>
      </Link>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6eb0f6ff',
    margin: 10,
  },
  button: {

    padding: 10,
    borderRadius: 10,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: "#6eb0f6ff",
  }

})

// <Link href="/register" style={styles.link}> Register</Link>
// <Link href="/forgotpassword" style={styles.link}> Forgot Password</Link>