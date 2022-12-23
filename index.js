import React, { useRef } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Tooltip } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const PopUpMenu = (props) => {
    const tooltipRef = useRef(null);

    const onOpenToolTip = () => {
        tooltipRef.current.toggleTooltip();
    }

    return (
        <View style={[styles.card, props?.cardStyle]}>
            <View style={{ alignItems: 'flex-end', marginRight: -8 }}>
                <Tooltip containerStyle={[styles.toolTipContainerStyle, props?.toolTipContainerStyle]} height={props?.toolTipHeight ? props?.toolTipHeight : 180}
                    width={props?.toolTipWidth ? props?.toolTipWidth : 250} withOverlay={props?.withOverlay ? props?.withOverlay : false}
                    backgroundColor={props?.backgroundColor ? props.backgroundColor : '#fff'}
                    ref={tooltipRef}
                    popover={
                        <View style={{ flex: 1, width: '100%' }}>
                            {props?.data?.map((item, i) => {
                                return <TouchableOpacity
                                    key={i}
                                    style={[styles.itemStyle, props?.itemStyle]}
                                    onPress={() => { props?.onPress(); onOpenToolTip(); }}>
                                    <Text style={[styles.fontSize16, styles.marginLeft10, styles.menuTxt, props?.menuTxt]}>{item.title}</Text>
                                </TouchableOpacity>
                            })}
                        </View>
                    }
                >
                    {props && props.icon ? props.icon : <Text>Click Me</Text>}
                </Tooltip>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderColor: '#E1E8EB',
        borderRadius: 12, paddingHorizontal: 15, paddingTop: 15, elevation: 0,
        backgroundColor: '#fff', marginLeft: 'auto', marginRight: 'auto'
    },
    txt: {
        color: '#758595',
        fontFamily: 'SourceSansPro-Regular',
    },
    menuTxt: {
        color: '#14171A',
        fontFamily: 'SourceSansPro-Regular',
    },
    itemStyle: {
        borderBottomWidth: 0.5,
        paddingVertical: 10, borderBottomColor: '#E1E8EB'
    },
    fontSize16: {
        fontSize: 16
    },
    marginLeft10: {
        marginLeft: 10
    },
    toolTipContainerStyle: {
        elevation: 4, borderRadius: 8
    }
})

export default PopUpMenu;