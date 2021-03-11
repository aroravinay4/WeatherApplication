import netinfo from '@react-native-community/netinfo';

export default class NetworkInfo {
    static async isNetworkAvailable() {
        const response = await netinfo.fetch();
        return response.isConnected && response.isInternetReachable;
    }
}