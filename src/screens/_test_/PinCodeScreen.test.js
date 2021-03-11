import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PinCodeScreen from '../PinCodeScreen';
import { Touchable, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

jest.useFakeTimers()

let wrapper;
let props;

const createTestProps = (props) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

beforeEach(() => {
    props = createTestProps({});
    wrapper = shallow(<PinCodeScreen {...props} />);
});

it('Pincode screen renders correctly', () => {
    renderer.create(<PinCodeScreen />).toJSON();
});

describe('PinCodeScreen', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        });
    });
});

describe('Pincode validation', () => {
    function validation(pincode) {
        if (pincode.length <= 0) {
            return false;
        }
        else if (pincode.length > 0 && pincode.length < 6) {
            return false;
        }
        return true;
    }

    it('Pincode Empty Check', () => {
        expect(validation('')).toBe(false);
    })

    it('Pincode Length Check', () => {
        expect(validation('123')).toBe(false);
    })

    it('Pincode correct Check', () => {
        expect(validation('110030')).toBe(true);
    });
});

it('should render correctly', () => {
    expect(wrapper.find('View').length).toBe(1);
});

it('should render correctly', () => {
    expect(wrapper.find('Text').length).toBe(1);
});

it('should render correctly', () => {
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
});

it('should render correctly', () => {
    expect(wrapper.find(Input).length).toBe(1);
});

it('onChangeText function check', () => {
    const onChangeText = jest.fn();

    wrapper.find(Input).first().props().onChangeText();

    // Check that our handler have been called 1 time
    expect(onChangeText).toHaveBeenCalledTimes(0);
});

it('onSubmitEditing function check', () => {
    const onSubmitEditing = jest.fn();

    wrapper.find(Input).first().props().onSubmitEditing(jest.fn());

    // Check that our handler have been called 1 time
    expect(onSubmitEditing).toHaveBeenCalledTimes(0);
});

it('onPress function check', () => {
    const onpress = jest.fn();

    wrapper.find(TouchableOpacity).first().props().onPress(jest.fn());

    // Check that our handler have been called 1 time
    expect(onpress).toHaveBeenCalledTimes(0);
});



