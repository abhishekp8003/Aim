import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const colors={
    //global colors
    primary:'#581c87',//purple
    secondary:'#fafaf9',//offwhite 
    gray:'#a8a29e',//grey
    //Boxes
    gray2:'blueGray.700',
    gray3:'blueGray.100',
    gray4:'blueGray.500',
    gray5:'blueGray.200',
    //SlideBOxes
    Box1:'#a5f3fc',
    Bg:'#ddd6fe',
    Black:'#1c1917',
    Box:'#',
    Box2:'#2dd4bf',
    white:'#FFFFFF'//pure white
}
export const sizes={
    //golbal sizes
    size1:'lg',
    size2:'xs',
    font: 14,
    padding: 30,
    padding2: 12,
    width,
    height,
    size2:180
}

const appTheme = { colors, sizes };

export default appTheme;