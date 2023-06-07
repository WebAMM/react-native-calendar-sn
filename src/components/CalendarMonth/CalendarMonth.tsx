import { View, Text, } from 'react-native';


type AppProps = {
    message:string
}

function CalendarMonth ({ message }: AppProps): JSX.Element {
    return (
       <View>
            <Text>
                {message}
            </Text>
       </View>
    )
}

export default CalendarMonth
