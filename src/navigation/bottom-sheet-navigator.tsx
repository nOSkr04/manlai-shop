import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import { BottomSheetParamList, NavigationRoutes } from "./types";
import React from "react";
import { SelectCategorySheet } from "../sheets/select-category";
import { SheetBackdrop } from "../components/sheet/back-drop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigator } from "./root-stack-navigator";

import { SelectFilterSheet } from "../sheets/select-filter";
import { LocationHistoryEditSheet } from "../sheets/location-edit";
import { DeleteBasketSheet } from "../sheets/delete-basket";
import { ReelCommentSheet } from "../sheets/reel-comment";
import { LoginCheckSheet } from "../sheets/login-check";
import { ShareSheets } from "../sheets/share";
import { CouponSheet } from "../sheets/coupon";
import { BankLinkSheet } from "../sheets/bank-link";
import { ShippingDetailSheet } from "../sheets/shipping-detail";
import { RefundSheet } from "../sheets/refund";
import { RefundRequestSheet } from "../sheets/refund-request";
import { PaymentSuccessSheet } from "../sheets/payment-success";
import {  WareHouseLocationSheet } from "../sheets/warehouse-location";
import { SelledShippingDetailSheet } from "../sheets/selled-shipping-detail";
import { OrderDeliverySheet } from "../sheets/order-delivery";
const BottomSheet = createBottomSheetNavigator<BottomSheetParamList>();

const { Navigator, Screen, } = BottomSheet;

const BottomSheetNavigator = () => {
    const insets = useSafeAreaInsets();
  return (
    <Navigator>
      <Screen component={RootStackNavigator} name={NavigationRoutes.RootStackParamList}   />
      <Screen component={SelectCategorySheet} name={NavigationRoutes.SelectCategorySheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : ["90%"],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={SelectFilterSheet} name={NavigationRoutes.SelectFilterSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : ["90%"],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={LocationHistoryEditSheet} name={NavigationRoutes.LocationHistoryEditSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [550],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={DeleteBasketSheet} name={NavigationRoutes.DeleteBasketSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [550],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={ReelCommentSheet} name={NavigationRoutes.ReelCommentSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [550, "90%"],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={LoginCheckSheet} name={NavigationRoutes.LoginCheckSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [480],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={ShareSheets} name={NavigationRoutes.ShareSheets} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [180],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={BankLinkSheet} name={NavigationRoutes.BankLinkSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [450],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={CouponSheet} name={NavigationRoutes.CouponSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : ["90%"],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={ShippingDetailSheet} name={NavigationRoutes.ShippingDetailSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [350],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={SelledShippingDetailSheet} name={NavigationRoutes.SelledShippingDetailSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [400],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={RefundSheet} name={NavigationRoutes.RefundSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [600],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={RefundRequestSheet} name={NavigationRoutes.RefundRequestSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [500],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={PaymentSuccessSheet} name={NavigationRoutes.PaymentSuccessSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : [500],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={WareHouseLocationSheet} name={NavigationRoutes.WareHouseLocationSheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : ["95%"],
            index            : 1,
            topInset         : insets.top,
        }}
      />
      <Screen component={OrderDeliverySheet} name={NavigationRoutes.OrderDeliverySheet} 
        options={{
            backdropComponent: SheetBackdrop,
            snapPoints       : ["95%"],
            index            : 1,
            topInset         : insets.top,
        }}
      />
    </Navigator>
  );
};

export { BottomSheetNavigator };
