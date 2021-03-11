import { StyleSheet } from 'react-native';
import colors from './colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#C5C5C5',
        flex: 1,
        justifyContent: "center"
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    sectionDescription: {
        // marginTop: 8,
        fontSize: 16,
        fontWeight: '400',
        color: colors.white,
        textAlign: 'center',
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    submitButton: {
        backgroundColor: colors.colorPrimary,
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: colors.white,
        textAlign: 'center'
    },



    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    weatherInfo: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: colors.white,
    },
    errorContainer: {
        borderColor: colors.red,
        borderWidth: 1,
        backgroundColor: colors.pink,
        padding: 5,
    },
    errorMessage: {
        textAlign: 'center',
        color: colors.red,
        fontSize: 20,
        margin: 10,
    },
    options: {
        flex: 1,
    },
    optionWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    weatherIcon: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    tempratureText: {
        color: '#f4511e',
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'stretch',
        fontSize: 22,
        fontWeight: 'bold',
    },
    weatherDesc: {
        color: colors.white,
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'stretch'
    },
    cardViewContainer: {
        flex: 1,
        width: 280,
        alignItems: 'flex-start',
        padding: 5,
        flexDirection: 'row',
    },
    tempContainer: {
        flex: 2,
        marginHorizontal: 20,
        flexGrow: 2,
        flexDirection: 'column'
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;