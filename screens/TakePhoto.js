import { Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Action = styled.View`
  flex: 0.35;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
`;

export default function TakePhoto() {
  const [ok, setOk] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const getPermissions = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  return (
    <Container>
      <Camera type={cameraType} style={{ flex: 1 }} />
      <Action>
        <TakePhotoBtn></TakePhotoBtn>
        <TouchableOpacity></TouchableOpacity>
      </Action>
    </Container>
  );
}
