import React from 'react'
import { RNCamera } from 'react-native-camera';
import { View , Text, Image, TouchableOpacity} from 'react-native'
import styles  from './styles'
import logo from '../../assets/myringlightlogo.png'


export default function Feed() {

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      alert(data.uri);
    }
  }

  dephtMode = () => {
    
  }

  return (
    
    <View style={styles.container}>

      <Image style={styles.logoImage} source={logo} />

      <View style={styles.CircleShapeView}>
            <RNCamera
                  ref={camera => { this.camera = camera }}
                  style = {styles.preview}
                  type={RNCamera.Constants.Type.front}
                  autoFocus={RNCamera.Constants.AutoFocus.on}
                  flashMode={RNCamera.Constants.FlashMode.off}
                  permissionDialogTitle={'Permission to use camera'}
                  permissionDialogMessage={'We need your permission to use your camera phone'}
                />
      </View>
   
        <TouchableOpacity onPress={this.dephtMode}>
          <Text style={styles.BtnText}>Depht</Text>
        </TouchableOpacity>
       
        <View style={styles.BtnFix}>
        <TouchableOpacity onPress={this.takePicture}>
           <View style={styles.Btncapture}></View>
        </TouchableOpacity>
        </View>
      
    </View>

)
}
