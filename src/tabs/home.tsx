import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import useSWR from "swr";
import { HomeScreenApi } from "../api";

const HomeTab = memo(() => {
  const { data } = useSWR(`swr.homescreen`, async () => {
    const res = await HomeScreenApi.getHome({ page: 1 });
    console.log(res);
  });
  return (
    <View>
      <Text>HomeTab</Text>
    </View>
  );
});

HomeTab.displayName = "HomeTab";

export { HomeTab };

const styles = StyleSheet.create({});
