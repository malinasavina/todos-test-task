import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('rendering all the main elements', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(screen.getByText(/it seems like you don't have anything planned yet/i)).toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'test task'}});
    fireEvent.click(addButton);

    expect(screen.getByText('test task')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', {name: 'test task'})).toBeInTheDocument();
    expect(screen.getByText('1 task left')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Clear completed')).toBeInTheDocument();
});

test('adding a new task', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task'}});
    fireEvent.click(addButton);

    expect(screen.getByText('test task')).toBeInTheDocument();
    expect(input).toHaveValue('');
});

test('trying to add an empty task', () => {
   render(<App />);

   const addButton = screen.getByText(/ok/i);
   fireEvent.click(addButton);

   expect(screen.queryByText('test task')).not.toBeInTheDocument();
});

test('marking a task as completed', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task'}});
    fireEvent.click(addButton);

    const taskCheckbox = screen.getByRole('checkbox', {name: 'test task'});

    fireEvent.click(taskCheckbox);
    expect(taskCheckbox).toBeChecked();

    fireEvent.click(taskCheckbox);
    expect(taskCheckbox).not.toBeChecked();
});

test('deleting completed tasks', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task'}});
    fireEvent.click(addButton);

    const taskCheckbox = screen.getByRole('checkbox', {name: 'test task'});
    fireEvent.click(taskCheckbox);

    const deleteButton = screen.getByText(/clear completed/i);
    fireEvent.click(deleteButton);
    expect(screen.queryByText('test task')).not.toBeInTheDocument();

});

test('filtering all tasks', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task: completed'}});
    fireEvent.click(addButton);

    fireEvent.change(input, {target: {value: 'test task: active'}});
    fireEvent.click(addButton);

    const taskCheckbox = screen.getByRole('checkbox', {name: 'test task: completed'});
    fireEvent.click(taskCheckbox);

    const allTasksFilter = screen.getByText('All');
    fireEvent.click(allTasksFilter);

    expect(screen.getByText('test task: completed')).toBeInTheDocument();
    expect(screen.getByText('test task: active')).toBeInTheDocument();
});

test('filtering completed tasks', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task: completed'}});
    fireEvent.click(addButton);

    fireEvent.change(input, {target: {value: 'test task: active'}});
    fireEvent.click(addButton);

    const taskCheckbox = screen.getByRole('checkbox', {name: 'test task: completed'});
    fireEvent.click(taskCheckbox);

    const completedFilter = screen.getByText('Completed');
    fireEvent.click(completedFilter);

    expect(screen.getByText('test task: completed')).toBeInTheDocument();
    expect(screen.queryByText('test task: active')).not.toBeInTheDocument();
});

test('filtering active tasks', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task: completed'}});
    fireEvent.click(addButton);

    fireEvent.change(input, {target: {value: 'test task: active'}});
    fireEvent.click(addButton);

    const taskCheckbox = screen.getByRole('checkbox', {name: 'test task: completed'});
    fireEvent.click(taskCheckbox);

    const activeFilter = screen.getByText('Active');
    fireEvent.click(activeFilter);

    expect(screen.getByText('test task: active')).toBeInTheDocument();
    expect(screen.queryByText('test task: completed')).not.toBeInTheDocument();
});

test('counting active tasks', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task: completed'}});
    fireEvent.click(addButton);

    fireEvent.change(input, {target: {value: 'test task: active'}});
    fireEvent.click(addButton);

    expect(screen.getByText('2 tasks left')).toBeInTheDocument();

    const taskCheckbox = screen.getByRole('checkbox', {name: 'test task: completed'});
    fireEvent.click(taskCheckbox);

    expect(screen.getByText('1 task left')).toBeInTheDocument();
});

test('checking "no available tasks" message', () => {
   render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByText(/ok/i);

    fireEvent.change(input, {target: {value: 'test task 1'}});
    fireEvent.click(addButton);

    fireEvent.change(input, {target: {value: 'test task 2'}});
    fireEvent.click(addButton);

    const completedFilter = screen.getByText('Completed');
    fireEvent.click(completedFilter);

    expect(screen.getByText(/no available tasks/i));

    const activeFilter = screen.getByText('Active');
    fireEvent.click(activeFilter);

    const firstTaskCheckbox = screen.getByRole('checkbox', {name: 'test task 1'});
    fireEvent.click(firstTaskCheckbox);

    const secondTaskCheckbox = screen.getByRole('checkbox', {name: 'test task 2'});
    fireEvent.click(secondTaskCheckbox);

    expect(screen.getByText(/no available tasks/i));
});
