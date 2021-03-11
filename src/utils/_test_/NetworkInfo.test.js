import NetInfo from '@react-native-community/netinfo';
import { before } from 'lodash';
import NetworkInfo from '../NetworkInfo';

jest.mock("@react-native-community/netinfo");

describe("NetworkInfo class test", () => {
    describe("Test isNetworkAvailable method", () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it("isNetworkAvailable method defined", () => {
            expect(NetworkInfo.isNetworkAvailable).toBeDefined();
        });

        it("isNetworkAvailable will return false if network not available", async () => {
            const mockNetworkFailResponse = {
                type: "none", isConnected: false, details: {}, isInternetReachable: false
            };
            NetInfo.fetch.mockResolvedValue(mockNetworkFailResponse);
            expect(await NetworkInfo.isNetworkAvailable()).toEqual(false);
        });

        it("isNetworkAvailable will return true if network available", async () => {
            const mockNetworkAvailable = {
                type: 'wifi',
                isConnected: true,
                details: {
                    ipAddress: "192.168.0.108", ssid: null, isConnectionExpensive: false, subnet: "255.255.255.0"
                },
                isInternetReachable: true
            };

            NetInfo.fetch.mockResolvedValue(mockNetworkAvailable);
            expect(await NetworkInfo.isNetworkAvailable()).toEqual(true);
        });

        it("isNetworkAvailable will return false if isConnected true but isInternetReachable false", async () => {
            const mockNetworkAvailable = {
                type: 'wifi',
                isConnected: true,
                details: {
                    ipAddress: "192.168.0.108", ssid: null, isConnectionExpensive: false, subnet: "255.255.255.0"
                },
                isInternetReachable: false
            };

            NetInfo.fetch.mockResolvedValue(mockNetworkAvailable);
            expect(await NetworkInfo.isNetworkAvailable()).toEqual(false);
        });
    });
});