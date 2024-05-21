/* eslint-disable no-unused-vars */
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ILocationHistory } from "../interfaces/location-history";

import { IOrder } from "../components/basket/basket-shop-card";
import { Dispatch, SetStateAction } from "react";
import { IImage } from "../interfaces/image";
import { IReel } from "../interfaces/reel";
import { IProduct } from "../interfaces/product";
import { IVariant } from "../interfaces/variant";
import { IOrder as ORDER } from "../interfaces/order";
export enum NavigationRoutes {
  RootStackParamList = "RootStackParamList",
  Root = "Root",

  // Tabs
  HomeTab = "HomeTab",
  AuthTab = "AuthTab",
  BasketTab = "BasketTab",
  ChatTab = "ChatTab",
  ReelTab = "ReelTab",
  OtpTab = "OtpTab",
  ProfileTab = "ProfileTab",
  OrderProductTab = "OrderProductTab",

  //   Sheets
  TestSheet = "TestSheet",
  BankLinkSheet = "BankLinkSheet",
  ShippingDetailSheet = "ShippingDetailSheet",
  // Screen
  UserCommentScreen = "UserCommentScreen",
  ProductDetailScreen = "ProductDetailScreen",
  ProductCommentDetail = "ProductCommentDetail",
  ReelDetail = "ReelDetail",
  LocationHistoryScreen = "LocationHistoryScreen",
  LocationHistoryAdd = "LocationHistoryAdd",
  // LocationHistoryEdit = "LocationHistoryEdit",
  TermsOfServiceScreen = "TermsOfServiceScreen",
  PrivacyPolicyScreen = "PrivacyPolicyScreen",
  AboutUsScreen = "AboutUsScreen",
  ChatDetailScreen = "ChatDetailScreen",
  CouponScreen = "CouponScreen",
  MyOrderScreen = "MyOrderScreen",
  StoreScreen = "StoreScreen",
  CreateOrderScreen = "CreateOrderScreen",
  ConfirmOrderScreen = "ConfirmOrderScreen",
  SavedListScreen = "SavedListScreen",
  ProductListsScreen = "ProductListsScreen",
  NotificationScreen = "NotificationScreen",
  PaymentDetailScreen = "PaymentDetailScreen",
  SimilarProductListsScreen = "SimilarProductListsScreen",
  LightBoxScreen = "LightBoxScreen",
  ShopFilterProductsScreen = "ShopFilterProductsScreen",
  ProductSuggestScreen = "ProductSuggestScreen",
  OtpScreen = "OtpScreen",
  SelectCategorySheet = "SelectCategorySheet",
  SelectFilterSheet = "SelectFilterSheet",
  LocationHistoryEditSheet = "LocationHistoryEditSheet",
  DeleteBasketSheet = "DeleteBasketSheet",
  ReelCommentSheet = "ReelCommentSheet",
  LoginCheckSheet = "LoginCheckSheet",
  ShareSheets = "ShareSheets",
  CouponSheet = "CouponSheet",
  AuctionProductScreen = "AuctionProductScreen",
  AuctionConfirmProductScreen = "AuctionConfirmProductScreen",
  SearchScreen = "SearchScreen",
  ProductSelectionScreen = "ProductSelectionScreen",
  ProfileEditScreen = "ProfileEditScreen",
  RefundSheet = "RefundSheet",
  RefundRequestSheet = "RefundRequestSheet",
  PaymentSuccessSheet = "PaymentSuccessSheet",
  WareHouseLocationSheet = "WareHouseLocationSheet",
  SelledShippingDetailSheet = "SelledShippingDetailSheet",
  OrderDeliverySheet = "OrderDeliverySheet",
  CargoPaymentScreen = "CargoPaymentScreen",
  MyPaymentsScreen = "MyPaymentsScreen",
  OrderDetailScreen = "OrderDetailScreen",
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  UserCommentScreen: undefined;
  ProductDetailScreen: { id: string; auction?: boolean };
  ProductCommentDetail: { id: string };
  ReelDetail: { id: string };
  LocationHistoryScreen: undefined;
  LocationHistoryAdd: undefined;
  // LocationHistoryEdit: {data?: ILocationHistory};
  TermsOfServiceScreen: undefined;
  PrivacyPolicyScreen: undefined;
  AboutUsScreen: undefined;
  ChatDetailScreen: undefined;
  CouponScreen: undefined;
  MyOrderScreen: {
    type: {
      name: string;
      _id: string;
      value: string;
      shippingValue: string[] | null;
      tab: string;
    };
  };
  MyPaymentsScreen: { type: string };
  StoreScreen: { id: string };
  CreateOrderScreen: {
    order: IOrder[];
    setOrder?: Dispatch<SetStateAction<[] | IOrder[]>>;
  };
  ConfirmOrderScreen: { id: string; back?: boolean };
  SavedListScreen: undefined;
  ProductListsScreen: undefined;
  NotificationScreen: undefined;
  PaymentDetailScreen: { id: string; type?: string };
  OrderDetailScreen: { id: string };
  SimilarProductListsScreen: { id: string };
  LightBoxScreen: { images: IImage[]; initialIndex: number };
  ShopFilterProductsScreen: { id: string; tag?: string; category?: string };
  ProductSuggestScreen: undefined;
  OtpScreen: undefined;
  AuctionProductScreen: undefined;
  AuctionConfirmProductScreen: { id: string };
  SearchScreen: { keyboard?: boolean };
  ProductSelectionScreen: { data: IProduct; group?: string };
  ProfileEditScreen: undefined;
  CargoPaymentScreen: { id: string };
};

export type BottomTabParamList = {
  HomeTab: undefined;
  AuthTab: undefined;
  BasketTab: undefined;
  ChatTab: undefined;
  ReelTab: undefined;
  OtpTab: undefined;
  ProfileTab: undefined;
  OrderProductTab: undefined;
};

export type BottomSheetParamList = {
  RootStackParamList: undefined;
  SelectCategorySheet: {
    refresh: number;
  };
  SelectSortSheet: undefined;
  SelectFilterSheet: undefined;
  LocationHistoryEditSheet: { data: ILocationHistory };
  DeleteBasketSheet: {
    isAll?: boolean;
    id?: string;
    setOrder?: Dispatch<SetStateAction<IOrder[] | []>>;
    updateCount?: IOrder[];
    setTrash?: Dispatch<SetStateAction<boolean>>;
    setTrashList?: Dispatch<
      SetStateAction<
        | []
        | {
            id: string;
            count: number;
          }[]
      >
    >;
    trashList?: {
      id: string;
      count: number;
    }[];
    multiple?: boolean;
    count?: number;
  };
  ReelCommentSheet: { data: IReel };
  LoginCheckSheet: undefined;
  ShareSheets: { data?: IProduct };
  CouponSheet: {order:{
    count: number;
    variant: string;
    type: string;
  }[]};
  BankLinkSheet: undefined;
  ShippingDetailSheet: undefined;
  RefundSheet: {
    data: IVariant;
    count: number;
    orderId: string;
    paymentId: string;
  };
  RefundRequestSheet: { id: string };
  PaymentSuccessSheet: undefined;
  WareHouseLocationSheet: {
    orders: ORDER[];
    selTab: {
      name: string;
      _id: string;
      value: string;
      shippingValue: string[] | null;
      tab: string;
    };
  };
  SelledShippingDetailSheet: undefined;
  OrderDeliverySheet: {
    orders: ORDER[];
    selTab: {
      name: string;
      _id: string;
      value: string;
      shippingValue: string[] | null;
      tab: string;
    };
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> =
  NativeStackScreenProps<BottomSheetParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
  }
}
