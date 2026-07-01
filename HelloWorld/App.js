import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
import Hello_Styling from "./components/StylingRN";
import { SafeAreaView } from "react-native-web";

export default function App() {

  const TextViews = (text1) => (
    <View>

      <Text>Text 1</Text>

    </View>

  )

  return (
    <View>
      <SafeAreaView>
        <View>
          <TextViews text1="text1" />
          <TextViews text1="text2" />
          <TextViews text1="text3" />
        </View>
      </SafeAreaView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});


{/*
  export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Click Modals"
        onPress={() => {
          setIsModalVisible(true);
        }}
        color="midnightblue"
        disabled={false}
      />
      <Modal visible={isModalVisible} animationType="slide" presentationStyle="pageSheet">

        <View style={styles.ModalContent} onRequestClose={() => setIsModalVisible(false)}>
          <Text>Model Content </Text>
          <Button title="Close" color="midnightblue"
            onPress={() => setIsModalVisible(false)}>

          </Button>

        </View>


      </Modal>

      <View>
        {/* <ScrollView>
         <Button
            title="Click Here"
            onPress={() => {
              alert("Button Clicked");
            }}
            color="midnightblue"
            disabled={false}
          />
          <Pressable
            onPress={() => {
              alert("Pressable Clicked");
            }}
            style={{ backgroundColor: "blue", padding: 10, margin: 10 }}
          >
            <Text style={{ color: "white" }}>Press Me</Text>
          </Pressable>
        <Image source={logoimage} style={{ width: 100, height: 100 }} />
        <Text style={styles.text}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since 1966 is
          reproduced below for those interested. Sections 1.10.32 and 1.10.33
          from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since 1966 is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham. Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since 1966 is
          reproduced below for those interested. Sections 1.10.32 and 1.10.33
          from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </Text>
        <Image source={logoimage} style={{ width: 100, height: 100 }} />
      </ScrollView> }
      </View>
    </View>
  );
}

*/}

{/* 

    const [isModalVisible, setIsModalVisible] = useState(false);

    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="cyan" barStyle="light-content" hidden={false} />
      <Button
        title="Press NOW "
        onPress={
          () => Alert.alert("Modal Open", "Are you sure you want to open the modal", [
            { text: "Yes", onPress: () => setIsModalVisible(true) },
            { text: "No", onPress: () => setIsModalVisible(false) }
          ])
        }
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => Alert.alert("Modal Open")}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
           <Text>Modal content</Text> 
          <Greet name='Mohit' />
           <ActivityIndicator size="large" color="midnightblue" animating={true} /> 


          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
  }
  */}
