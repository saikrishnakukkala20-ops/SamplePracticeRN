import { useContext } from "react"
import { Text, View } from "react-native"
import { AppContext } from "../../context/AppContextProvider"

export const UserDisplayData =()=> {

    const {user} =useContext(AppContext)

    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>{user}</Text>
    </View>
}