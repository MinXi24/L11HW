import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://f43b2ff89cb44ee99e4eaf6f01d35a1d.api.mockbin.io/")
            .then((response) =>
            { return response.json();
            })
            .then((myJson) => {
                    setMyData(myJson);
            })
    }, []);


    const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.number}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button title='Sign Up' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData || [])})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
