import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  BottomTabParamList,
  NavigationRoutes,
  RootStackParamList,
} from "../navigation/types";

const LoginCheckSheet = memo(() => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList & BottomTabParamList>
    >();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeContainer}
      >
        <Text>GG</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>GG</Text>
      </View>
      <Text style={styles.title}>Та эхлээд нэвтрэх эсвэл бүртгүүлэнэ үү</Text>
      <View style={styles.rowButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.AuthTab)}
          style={styles.delete}
        >
          <Text style={styles.deleteTitle}>Нэвтрэх</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Text style={styles.backTitle}>Буцах</Text>
        </TouchableOpacity>
      </View>
    </>
  );
});

LoginCheckSheet.displayName = "LoginCheckSheet";

export { LoginCheckSheet };

const styles = StyleSheet.create({
  closeContainer: {
    padding: 10,
    right: 20,
    position: "absolute",
    zIndex: 2,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Monrope400",
    fontSize: 15,
    lineHeight: 20.5,
    color: Colors.dark,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: "center",
  },
  rowButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 40,
    gap: 5,
  },
  delete: {
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "49%",
  },
  back: {
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    width: "49%",
  },
  deleteTitle: {
    fontFamily: "Monrope700",
    fontSize: 13,
    lineHeight: 17.8,
    color: Colors.white,
  },
  backTitle: {
    fontFamily: "Monrope700",
    fontSize: 13,
    lineHeight: 17.8,
    color: Colors.dark50,
  },
});
