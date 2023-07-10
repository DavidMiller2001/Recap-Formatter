import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableHighlight,
} from 'react-native';
import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  let salesNumbers = [];
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  const printSales = (sales) => {
    const numSales = sales.map((sale) => parseFloat(sale).toFixed(2));
    const formattedSales = numSales.map((sale) => {
      if (sale < 10) return '00' + sale;
      if (sale < 100) return '0' + sale;
      return sale;
    });

    setOutput(
      `11 - $${formattedSales[0]}
12 - $${formattedSales[1]}
   1 - $${formattedSales[2]}
   2 - $${formattedSales[3]}
   3 - $${formattedSales[4]}
   4 - $${formattedSales[5]}
   5 - $${formattedSales[6]}
   6 - $${formattedSales[7]}
   7 - $${formattedSales[8]}
   8 - $${formattedSales[9]}`
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recap Formatter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter today's sales"
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <Button
        title='Submit'
        onPress={() => {
          salesNumbers = text.split(' ');
          printSales(salesNumbers);
        }}
      ></Button>

      <TouchableHighlight
        style={{}}
        underlayColor={'#ddd'}
        onPress={async () => {
          await Clipboard.setStringAsync(output);
        }}
      >
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              marginBottom: 10,
            }}
          >
            Sales
          </Text>

          <Text style={styles.output}>{output}</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style={styles.auto}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 30,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 5,
  },

  output: {
    textAlign: 'right',
    padding: 0,
    fontSize: 16,
    alignSelf: 'center',
    right: 15,
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
  },
});
