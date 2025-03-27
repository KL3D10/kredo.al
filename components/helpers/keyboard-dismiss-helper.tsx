import { Keyboard, TouchableWithoutFeedback } from "react-native"

export const DismissKeyboard = ({ children }: { children: any }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}