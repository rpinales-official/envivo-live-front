import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Linking } from 'react-native';
import EventCTA from './EventCTA';

describe('EventCTA', () => {
  beforeEach(() => {
    jest.spyOn(Linking, 'openURL').mockResolvedValue(true as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders default label', () => {
    const { getByText } = render(<EventCTA ticketUrl="https://example.com/tix" />);
    expect(getByText('Get Tickets')).toBeTruthy();
  });

  it('uses custom label when provided', () => {
    const { getByText } = render(<EventCTA label="Buy Tickets" ticketUrl="https://example.com/tix" />);
    expect(getByText('Buy Tickets')).toBeTruthy();
  });

  it('opens the ticket URL when pressed (happy path)', () => {
    const { getByTestId } = render(<EventCTA ticketUrl="https://example.com/tix" />);
    fireEvent.press(getByTestId('event-cta'));
    expect(Linking.openURL).toHaveBeenCalledWith('https://example.com/tix');
  });

  it('does nothing when no ticketUrl is provided', () => {
    const { getByTestId } = render(<EventCTA />);
    fireEvent.press(getByTestId('event-cta'));
    expect(Linking.openURL).not.toHaveBeenCalled();
  });
});