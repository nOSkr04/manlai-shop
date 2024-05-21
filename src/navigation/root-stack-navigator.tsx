import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationRoutes, RootStackParamList } from "./types";
import { BottomTabsNavigator } from "./bottom-tab-navigator";
import { UserCommentScreen } from "../screens/home/user-comment";
import { ProductDetailScreen } from "../screens/product/detail";
import { ProductCommentDetail } from "../screens/product/comment-detail";
import { ReelDetail } from "../screens/reels/detail";
import { LocationHistoryScreen } from "../screens/profile/location-history";
import { TermsOfServiceScreen } from "../screens/profile/terms-of-service";
import { LocationHistoryAdd } from "../screens/profile/location-add";
// import { LocationHistoryEdit } from "../screens/profile/location-edit";
import { ChatDetailScreen } from "../screens/chat/detail";
import { PrivacyPolicyScreen } from "../screens/profile/privacy-policy";
import { AboutUsScreen } from "../screens/profile/about-us";
import { CouponScreen } from "../screens/profile/coupon";
import { MyOrderScreen } from "../screens/profile/my-order";
import { StoreScreen } from "../screens/profile/store";
import { CreateOrderScreen } from "../screens/basket/create-order";
import { ConfirmOrderScreen } from "../screens/basket/confirm-order";
import { SavedListScreen } from "../screens/profile/saved-list";
import { ProductListsScreen } from "../screens/home/product-lists";
import { NotificationScreen } from "../screens/home/notification";
import { PaymentDetailScreen } from "../screens/profile/payment-detail";
import { SimilarProductListsScreen } from "../screens/product/similar-product-lists";
import { LightBoxScreen } from "../screens/lightbox";
import { ProductSuggestScreen } from "../screens/product/product-suggest";
import { NotificationListener } from "../components/common/notification-listener";
import { DeepLinkHandler } from "./deep-link-handler";
import { OtpScreen } from "../screens/auth/otp";
import { AuctionProductScreen } from "../screens/profile/auction-product";
import { AuctionConfirmProductScreen } from "../screens/product/auction-confirmed-product";
import { SearchScreen } from "../screens/home/search-screen";
import { ShopFilterProductsScreen } from "../screens/profile/shop-filter-products";
import { ProductSelectionScreen } from "../screens/product/product-selection";
import { ProfileEditScreen } from "../screens/profile/profile-edit";
import { CargoPaymentScreen } from "../screens/profile/cargo-payment";
import { MyPaymentsScreen } from "../screens/profile/my-payments";
import { OrderDetailScreen } from "../screens/profile/order-detail";
const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const RootStackNavigator = () => {
  const navigationOptions = () => {
    return { headerShown: false };
  };

  NotificationListener();

  return (
    <>
      <DeepLinkHandler />
      <Navigator
        initialRouteName={NavigationRoutes.Root}
        screenOptions={navigationOptions}
      >
        <Screen component={BottomTabsNavigator} name={NavigationRoutes.Root} />
        <Screen
          component={UserCommentScreen}
          name={NavigationRoutes.UserCommentScreen}
        />
        
        <Screen
          component={ProductDetailScreen}
          name={NavigationRoutes.ProductDetailScreen}
        />
        <Screen
          component={ProductCommentDetail}
          name={NavigationRoutes.ProductCommentDetail}
        />
        <Screen component={ReelDetail} name={NavigationRoutes.ReelDetail} />
        <Screen
          component={LocationHistoryScreen}
          name={NavigationRoutes.LocationHistoryScreen}
        />
        <Screen
          component={LocationHistoryAdd}
          name={NavigationRoutes.LocationHistoryAdd}
        />
        {/* <Screen component={LocationHistoryEdit} name={NavigationRoutes.LocationHistoryEdit} /> */}
        <Screen
          component={TermsOfServiceScreen}
          name={NavigationRoutes.TermsOfServiceScreen}
        />
        <Screen
          component={PrivacyPolicyScreen}
          name={NavigationRoutes.PrivacyPolicyScreen}
        />
        <Screen
          component={AboutUsScreen}
          name={NavigationRoutes.AboutUsScreen}
        />
        <Screen
          component={ChatDetailScreen}
          name={NavigationRoutes.ChatDetailScreen}
        />
        <Screen component={CouponScreen} name={NavigationRoutes.CouponScreen} />
        <Screen
          component={MyOrderScreen}
          name={NavigationRoutes.MyOrderScreen}
        />
        <Screen component={StoreScreen} name={NavigationRoutes.StoreScreen} />
        <Screen
          component={CreateOrderScreen}
          name={NavigationRoutes.CreateOrderScreen}
        />
        <Screen
          component={ConfirmOrderScreen}
          name={NavigationRoutes.ConfirmOrderScreen}
        />
        <Screen
          component={SavedListScreen}
          name={NavigationRoutes.SavedListScreen}
        />
        <Screen
          component={ProductListsScreen}
          name={NavigationRoutes.ProductListsScreen}
        />
        <Screen
          component={NotificationScreen}
          name={NavigationRoutes.NotificationScreen}
        />
        <Screen
          component={PaymentDetailScreen}
          name={NavigationRoutes.PaymentDetailScreen}
        />
        <Screen
          component={OrderDetailScreen}
          name={NavigationRoutes.OrderDetailScreen}
        />
        <Screen
          component={SimilarProductListsScreen}
          name={NavigationRoutes.SimilarProductListsScreen}
        />
        <Screen
          component={ShopFilterProductsScreen}
          name={NavigationRoutes.ShopFilterProductsScreen}
        />
        <Screen
          component={ProductSuggestScreen}
          name={NavigationRoutes.ProductSuggestScreen}
        />
        <Screen
          component={OtpScreen}
          name={NavigationRoutes.OtpScreen}
        />
        <Screen
          component={AuctionProductScreen}
          name={NavigationRoutes.AuctionProductScreen}
        />
        <Screen
          component={AuctionConfirmProductScreen}
          name={NavigationRoutes.AuctionConfirmProductScreen}
        />
        <Screen
          component={ProfileEditScreen}
          name={NavigationRoutes.ProfileEditScreen}
        />
        <Screen
          component={CargoPaymentScreen}
          name={NavigationRoutes.CargoPaymentScreen}
        />
        <Screen
          component={MyPaymentsScreen}
          name={NavigationRoutes.MyPaymentsScreen}
        />
        <Screen
          component={LightBoxScreen}
          name={NavigationRoutes.LightBoxScreen}
          options={{
            headerShown   : false,
            animation     : "fade",
            gestureEnabled: true,
            presentation  : "containedTransparentModal",
          }}
        />
        <Screen
          component={ProductSelectionScreen}
          name={NavigationRoutes.ProductSelectionScreen}
          options={{
            headerShown             : false,
            animation               : "slide_from_bottom",
            gestureEnabled          : true,
            gestureDirection        : "vertical",
            fullScreenGestureEnabled: true,
            presentation            : "transparentModal",
            
          }}
        />
        <Screen
          component={SearchScreen}
          name={NavigationRoutes.SearchScreen}
          options={{
            headerShown   : false,
            animation     : "slide_from_bottom",
            gestureEnabled: true,
          }}
        />
      </Navigator>
    </>
  );
};

export { RootStackNavigator };
