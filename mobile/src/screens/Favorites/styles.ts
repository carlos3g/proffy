import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const Scroll = styled.ScrollView.attrs({
  paddingHorizontal: 15,
  paddingBottom: 24,
})`
  margin-top: -40px;
`;
