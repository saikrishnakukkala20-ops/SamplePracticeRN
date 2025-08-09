import { useContext } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { AppContext } from "../../context/AppContextProvider"

export const UserUpdateData =()=> {

    const {user,setUserData} =useContext(AppContext)

    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <TouchableOpacity onPress={ () => setUserData("sai")}>
<Text>updateUser</Text>
    </TouchableOpacity>

    </View>
}