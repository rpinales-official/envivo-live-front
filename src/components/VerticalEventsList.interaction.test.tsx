import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import VerticalEventList from './VerticalEventsList';
import { Event } from '../types/event';

const data: Event[] = [
    { id: 'a', title: 'A Show', venueName: 'Hall A', startDateTime: '2025-08-10T20:00:00Z', timeZone: 'America/New_York' },
    { id: 'b', title: 'B Show', venueName: 'Hall B', startDateTime: '2025-08-11T21:00:00Z', timeZone: 'America/New_York' },
];

describe('VerticalEventList interaction', () => {
    it('calls onPressItem with the tapped event id', () => {
        const onPressItem = jest.fn();
        const { getByText } = render(
            <VerticalEventList title="All Events" data={data} onPressItem={onPressItem} />
        );

        // Tap by title text — press events bubble to the parent Pressable
        fireEvent.press(getByText('A Show'));
        expect(onPressItem).toHaveBeenCalledWith('a');

        fireEvent.press(getByText('B Show'));
        expect(onPressItem).toHaveBeenCalledWith('b');
    });
});