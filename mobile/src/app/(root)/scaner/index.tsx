import { View } from "react-native";
import { stylesheet } from "./styles";
import { useCameraPermissions, CameraType, CameraView } from "expo-camera";
import { ActionButton, Title3 } from "@/src/components";
import { useState } from "react";

export default function ScanerScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={stylesheet.requestPermissionContainer}>
        <Title3>We need your permission to show the camera</Title3>
        <ActionButton onPress={requestPermission} label="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={stylesheet.container}>
      <CameraView 
        style={stylesheet.camera} 
        facing={facing} 
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      />
      <View style={stylesheet.buttonContainer}>
        <ActionButton
          onPress={toggleCameraFacing}
          label="Flip Camera"
        />
      </View>
    </View>
  );
}