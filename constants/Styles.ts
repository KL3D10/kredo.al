import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: {
        padding: 4,
        borderBottomColor: Colors.text,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    dottedSeparator: {
        padding: 4,
        borderBottomColor: Colors.text,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderStyle: 'dashed',
    },
    checkedCirclesRow: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    textButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textRegular8: {
        fontFamily: 'DMSans',
        fontSize: 8
    },
    textRegular10: {
        fontFamily: 'DMSans',
        fontSize: 10
    },
    textRegular12: {
        fontFamily: 'DMSans',
        fontSize: 12
    },
    textRegular13: {
        fontFamily: 'DMSans',
        fontSize: 13
    },
    textRegular14: {
        fontFamily: 'DMSans',
        fontSize: 13
    },
    textRegular16: {
        fontFamily: 'DMSans',
        fontSize: 16
    },
    textBold16: {
        fontFamily: 'DMSansBold',
        fontSize: 16
    },
    textRegular20: {
        fontFamily: 'DMSans',
        fontSize: 20
    },
    textRegular24: {
        fontFamily: 'DMSans',
        fontSize: 24
    },
    textSemiBold16: {
        fontFamily: 'DMSansSemiBold',
        fontSize: 16
    },
    textSemiBold18: {
        fontFamily: 'DMSansSemiBold',
        fontSize: 18
    },
    textBold20: {
        fontFamily: 'DMSansBold',
        fontSize: 20
    },
    textBold22: {
        fontFamily: 'DMSansBold',
        fontSize: 22
    },
    textBold24: {
        fontFamily: 'DMSansBold',
        fontSize: 22
    },
    textBold28: {
        fontFamily: 'DMSansBold',
        fontSize: 28
    },
    textBold36: {
        fontFamily: 'DMSansBold',
        fontSize: 36
    },
    textBold40: {
        fontFamily: 'DMSansBold',
        fontSize: 40
    },
})