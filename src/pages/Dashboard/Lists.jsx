import React, { useState } from 'react';
import useTask from '../../Hooks/UseTask';
import TaskCard from './TaskCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Lists = () => {
  const [tasks, loading, refetch] = useTask();
  const [statusFilter, setStatusFilter] = useState('all'); // Default to show all tasks
  const [deadlineFilter, setDeadlineFilter] = useState('all'); // Default to show all deadlines

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = statusFilter === 'all' || task.status === statusFilter;
    const deadlineMatch =
      deadlineFilter === 'all' ||
      (deadlineFilter === 'today' && isToday(new Date(task.deadline))) ||
      (deadlineFilter === 'this-week' && isThisWeek(new Date(task.deadline))) ||
      (deadlineFilter === 'this-month' && isThisMonth(new Date(task.deadline)));

    return statusMatch && deadlineMatch;
  });

  const handleStatusFilterChange = (selectedStatus) => {
    setStatusFilter(selectedStatus);
  };

  const handleDeadlineFilterChange = (selectedDeadline) => {
    setDeadlineFilter(selectedDeadline);
  };

  return (
    <div>
      <SectionTitle heading="List of Tasks" subHeading="Finish it"></SectionTitle>

      {/* Filter Dropdowns */}
      <div className='flex justify-center space-x-4'>
        <div>
          <label htmlFor="statusFilter" className='text-2xl font-extrabold text-blue-700'>Filter by Status: </label>
          <select
            id="statusFilter"
            name="statusFilter"
            value={statusFilter}
            onChange={(e) => handleStatusFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="to-do">To-Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label htmlFor="deadlineFilter" className='text-2xl font-extrabold text-blue-700'>Filter by Deadline: </label>
          <select
            id="deadlineFilter"
            name="deadlineFilter"
            value={deadlineFilter}
            onChange={(e) => handleDeadlineFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            
          </select>
        </div>
      </div>

      {/* Display Filtered Tasks */}
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

// Helper functions for date comparisons
const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isThisWeek = (date) => {
  const today = new Date();
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + 6 - today.getDay());
  return date <= endOfWeek;
};

const isThisMonth = (date) => {
  const today = new Date();
  return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};

export default Lists;
