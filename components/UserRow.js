import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;
const Username = styled.Text`
  font-weight: 600;
  color: white;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;
const FollowBtn = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 15px 10px;
  border-radius: 3px;
`;
const FollowBtnText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

export default function UserRow({ avatar, username, isFollowing, isMe }) {
  return (
    <Wrapper>
      <Column>
        <Avatar source={{ uri: avatar }} />
        <Username>{username}</Username>
      </Column>
      {isMe ? (
        <FollowBtn>
          <FollowBtnText>{isFollowing ? "Unfollow" : "Follow"}</FollowBtnText>
        </FollowBtn>
      ) : null}
    </Wrapper>
  );
}
