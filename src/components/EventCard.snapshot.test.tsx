import React from 'react';
import renderer, { act } from 'react-test-renderer';
import EventCard from './EventCard';
import { Event } from '../types/event';

jest.mock('../utils/format', () => ({
  buildEventMeta: () => 'Music Hall · Thu 28th 9:00 PM',
}));

describe('EventCard snapshot', () => {
  it('renders title and computed meta', () => {
    const event: Event = {
      id: '1',
      title: 'Rock Night',
      venueName: 'Music Hall',
      startDateTime: '2025-08-13T23:00:00Z',
      timeZone: 'America/New_York',
    };

    let tree: ReturnType<typeof renderer.create>;
    act(() => {
      tree = renderer.create(<EventCard event={event} />);
    });

    expect(tree!.toJSON()).toMatchSnapshot();
  });
});