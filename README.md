# React Native popupmenu

[Pop-Up-Menu.png](https://postimg.cc/RWYYgvmB)

# installation
“`npm i @gaus694/react-native-popupmenu“`
# import 
“`import PopUpMenu from '@gaus694/react-native-popupmenu';“`
# Uses
“`let data = [
        {
            id: 1,
            title: 'item 1',
            onPress: () => console.log('call item 1')
        },
        {
            id: 2,
            title: 'item 2',
            onPress: () => console.log('call item 2')
        }
]

<PopUpMenu height={180} width={250} withOverlay={false} 
backgroundColor={'#fff'}
icon={}
data={data}
/>“`

# Props
toolTipContainerStyle (Optional)   
toolTipHeight  
toolTipWidth  
withOverlay  
backgroundColor  
itemStyle(Optional)  
menuTxt(Optional)  