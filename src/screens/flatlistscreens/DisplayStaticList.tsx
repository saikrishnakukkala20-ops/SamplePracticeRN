import { FlatList, Platform, SafeAreaView, StatusBar, Text, View } from "react-native"

export const DisplayStaticList : React.FC =()=> {

    const topPadding = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

    let namesList : string[] = ["sai", "krishna", "shiva", "arun", "kiran"]
    
    return <SafeAreaView style ={{backgroundColor:'green',
        paddingHorizontal:25,
        paddingTop: topPadding,
    }}>
         <Text>FlatList Display Array Items </Text>
         <FlatList
          data={namesList}
          renderItem={({item}) => <View><Text>{item}</Text></View>}
          keyExtractor={(item,index)=> index.toString()}
         />
    </SafeAreaView>
}
   