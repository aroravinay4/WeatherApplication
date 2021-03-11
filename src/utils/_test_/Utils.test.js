import 'react-native';
import React from 'react';
import utils from '../Utils';


describe('Utils Functions check', () => {
    it('toCelsius', () => {
        expect(utils.toCelsius(300)).toBe(27);
    });

    it('dateToFormat', () => {
        expect(utils.dateToFormat('2015-09-17 02:00:00')).toBe('17 Sep 15');
    });
});