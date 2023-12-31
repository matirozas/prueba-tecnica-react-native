import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'



export default function Nav() {

    const w = Dimensions.get('window').width;

    return (
        <View style={w > 600 ? styles.topNav : styles.MtopNav}>
            <View style={w > 600 ? styles.line : styles.Mline}></View>
            <View style={w > 600 ? styles.leftItems : styles.MleftItems}>
                <View style={w > 600 ? styles.leftNav : styles.MleftNav}>
                    <View style={w > 600 ? styles.marcaFlexy : styles.MmarcaFlexy}>
                        <Svg style={w > 600 ? styles._marcaFlexy : styles.M_marcaFlexy} width="104" height="30" viewBox="0 0 104 30" fill="none" >
                            <Path d="M91.1801 29.8396C94.1422 29.8396 95.6084 28.5022 97.0745 24.9556L103.167 10.3236C103.266 10.0957 103.395 9.54096 103.395 9.15461C103.395 7.84693 102.315 6.87609 101.047 6.87609C99.779 6.87609 99.0559 7.72806 98.6695 8.76825L95.0239 18.8829L91.2396 8.71872C90.8136 7.54974 90.1003 6.86618 88.862 6.86618C87.4949 6.86618 86.415 7.84693 86.415 9.24377C86.415 9.57068 86.5438 10.0561 86.6726 10.383L92.6364 24.2027L92.4779 24.5891C92.0222 25.4708 91.5962 25.6293 90.7145 25.6293C90.3579 25.6293 90.1003 25.5599 89.6743 25.4312C89.4762 25.3618 89.2483 25.3024 88.862 25.3024C87.8515 25.3024 86.9104 26.1147 86.9104 27.3233C86.9104 28.5319 87.7623 29.1164 88.4756 29.374C89.2979 29.6712 90.0706 29.8396 91.1801 29.8396Z" fill="#7065F0" />
                            <Path d="M69.0587 22.6374C69.0587 23.8757 70.0692 24.7871 71.3769 24.7871C72.2586 24.7871 72.9421 24.2323 73.5266 23.519L77.0434 18.8927L80.5603 23.519C81.2141 24.3314 81.8977 24.7871 82.8784 24.7871C84.1168 24.7871 85.1569 23.9054 85.1569 22.5086C85.1569 21.8547 84.8994 21.2702 84.3446 20.6164L79.9758 15.5938L84.2158 10.6405C84.6022 10.155 84.8994 9.62998 84.8994 8.94642C84.8994 7.7081 83.8889 6.79669 82.5812 6.79669C81.6995 6.79669 81.016 7.35146 80.4315 8.06474L77.1425 12.3642L73.913 8.06474C73.2591 7.2524 72.5756 6.79669 71.5948 6.79669C70.3565 6.79669 69.3163 7.67838 69.3163 9.07521C69.3163 9.72905 69.5739 10.3135 70.1286 10.9674L74.2002 15.6631L69.7423 20.9433C69.3163 21.4287 69.0587 21.9538 69.0587 22.6374Z" fill="#7065F0" />
                            <Path d="M68.5237 15.1379C68.5237 11.522 65.948 6.7272 60.113 6.7272C55.0309 6.7272 51.4744 10.8285 51.4744 15.8215V15.8908C51.4744 21.2305 55.3479 24.9157 60.5984 24.9157C63.1444 24.9157 65.1257 24.1034 66.6613 22.7957C67.0179 22.4688 67.3151 21.9834 67.3151 21.3295C67.3151 20.22 66.5027 19.3779 65.3932 19.3779C64.8682 19.3779 64.5412 19.5067 64.1846 19.7643C63.1741 20.5172 62.0349 20.9333 60.6678 20.9333C58.4487 20.9333 56.8834 19.7643 56.398 17.5155H66.2055C67.5132 17.5155 68.5237 16.5744 68.5237 15.1379ZM56.3386 14.4246C56.7249 12.1758 58.0623 10.7097 60.1229 10.7097C62.2132 10.7097 63.511 12.2056 63.8081 14.4246H56.3386Z" fill="#7065F0" />
                            <Path d="M44.4607 22.2406C44.4607 23.6077 45.5702 24.7173 46.9373 24.7173C48.3045 24.7173 49.414 23.6077 49.414 22.2406V3.02179C49.414 1.65468 48.3045 0.545135 46.9373 0.545135C45.5702 0.545135 44.4607 1.65468 44.4607 3.02179V22.2406Z" fill="#7065F0" />
                            <Path d="M33.0684 22.241C33.0684 23.6082 34.178 24.7177 35.5451 24.7177C36.9122 24.7177 38.0217 23.6082 38.0217 22.241V11.2942H40.112C41.2513 11.2942 42.1627 10.4126 42.1627 9.2733C42.1627 8.13404 41.2513 7.25235 40.112 7.25235H37.9623V6.56879C37.9623 5.26112 38.6161 4.67663 39.7554 4.67663H40.1814C41.2909 4.67663 42.2023 3.7355 42.2023 2.62596C42.2023 1.51642 41.3503 0.773429 40.5083 0.634737C39.9535 0.535671 39.27 0.505951 38.4873 0.505951C36.724 0.505951 35.3965 0.961655 34.4752 1.87306C33.5638 2.78447 33.0783 4.19121 33.0783 6.11309V7.22263H32.8802C31.7409 7.22263 30.8295 8.13404 30.8295 9.2733C30.8295 10.4126 31.7409 11.2942 32.8802 11.2942H33.0783V22.241H33.0684Z" fill="#7065F0" />
                            <Path d="M22.6267 6.62752L15.4345 1.04019C13.6513 -0.346731 10.9468 -0.346731 9.16361 1.04019L1.97141 6.62752C1.36711 7.10304 0.861875 7.71725 0.515144 8.42062C0.178319 9.11408 0 9.8967 0 10.6595V20.368C0 21.4973 0.435891 22.5573 1.23833 23.3499C2.03085 24.1424 3.09086 24.5882 4.22021 24.5882H20.3977C21.5072 24.5882 22.597 24.1424 23.3796 23.3499C24.1721 22.5573 24.6179 21.4973 24.6179 20.368V10.6595C24.608 9.07445 23.8848 7.60827 22.6267 6.62752Z" fill="#7065F0" />
                            <Path d="M18.6839 11.076C18.0994 11.0265 17.5644 11.2841 17.2276 11.71C17.1385 11.819 15.1175 14.2957 12.4526 14.3353C10.7487 14.365 9.04476 13.3644 7.36064 11.3831C7.08326 11.0463 6.68699 10.8284 6.22138 10.7788C5.30997 10.6996 4.49763 11.3732 4.41838 12.2846C4.37875 12.7502 4.53726 13.196 4.81464 13.523C7.18232 16.3166 9.77785 17.7134 12.5319 17.654C16.6431 17.5748 19.4665 14.2164 19.8033 13.7805C19.8132 13.7706 19.8231 13.7607 19.8331 13.7508L19.843 13.7409C20.0312 13.4932 20.16 13.196 20.1897 12.8691C20.2689 11.9676 19.5953 11.1553 18.6839 11.076Z" fill="white" />
                        </Svg>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={() => console.log('boton menu')}>
                <View style={w > 600 ? null : styles.menu}>
                    <Svg style={w > 600 ? null : styles.vector} width="20" height="2" viewBox="0 0 20 2" fill="none" >
                        <Path d="M1 1H19" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Svg>
                    <Svg style={w > 600 ? null : styles._vector} width="20" height="2" viewBox="0 0 20 2" fill="none" >
                        <Path d="M1 1H19" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </Svg>
                </View>
            </TouchableOpacity>


        </View >
    )
}

const styles = StyleSheet.create({
    topNav: {
        height: 96,
        left: -37,
        width: 1440,
        position: "relative",
    },
    line: {
        width: 1680,
        height: 0,
        left: -240,
        top: 96,
        position: 'absolute',
        border: '1.50px #F0EFFB solid'
    },
    leftItems: {
        position: "absolute",
        top: 28,
        left: 48,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 48
    },
    leftNav: {
        width: 134,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 32
    },
    marcaFlexy: {
        height: 40,
        width: 134,
        alignItems: "flex-start",
        rowGap: 0
    },
    _marcaFlexy: {
        position: "absolute",
        top: 5,
        height: 30,
        left: 15,
        width: 103
    },

    //mobile
    MtopNav: {
        width: 375, height: 72, position: 'absolute', display: 'flex'
    },
    Mline: {
        width: 375, height: 0, left: 0, top: 72, position: 'absolute', border: '1.50px #F0EFFB solid', display: 'flex'
    },
    MleftItems: {
        left: 24, top: 16, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'inline-flex'
    },
    MleftNav: {
        height: 40, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'
    },
    MmarcaFlexy: {
        position: "absolute",
        height: 40,
        left: -7,
        width: 134,
        alignItems: "flex-start",
        rowGap: 0
    },
    M_marcaFlexy: {
        position: "absolute",
        top: 5,
        height: 30,
        left: 15,
        width: 103
    },
    menu: {
        position: "absolute",
        top: 24,
        height: 24,
        right: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0
    },
    vector: {
        position: "absolute",
        top: 8,
        right: 3,
        bottom: 16,
        left: 3,
        overflow: "visible"
    },
    _vector: {
        position: "absolute",
        top: 16,
        right: 3,
        bottom: 8,
        left: 3,
        overflow: "visible"
    }
})