import { useState } from "react";
import { View , Text,Button} from "react-native";
import { TextInput } from "react-native";

const LoginComp=(props)=>{
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   
    const doLogin = () => {
        if (username.length == 0) {
          // Kiểm tra dữ liệu gồm username và password
          alert('Username is required');
            return;
        }

        if (password.length == 0) {
            alert('Password is required');
            return;
        }
        
    };
    const navigateToHome = () => {
        props.navigation.navigate('HomeComp');
    };
    
      return(
        <View>
            <Text>Man hinh dang nhap</Text>
            <TextInput placeholder="Username" onChange={(txt)=>{setUsername(txt)}}/>
            <TextInput placeholder="Password" onChange={(txt)=>{setPassword(txt)}} textContentType="password" secureTextEntry={true}/>
            <Button title="Login" onPress={doLogin}/>
            <Button title="Home" onPress={navigateToHome}/>
        </View>
      )
}
export default LoginComp;

