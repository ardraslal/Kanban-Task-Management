import React, { useState } from "react";
import "./KanbanBoard.css";

const KanbanBoard = ({ tickets, users }) => {
  const [grouping, setGrouping] = useState("priority"); // Default grouping is by 'priority'

  // Sorting logic based on priority
  const sortTickets = (ticketsArray) =>
    ticketsArray.sort((a, b) => (a.priority || 6) - (b.priority || 6)); // Sort by priority, treating undefined/null as lowest priority

  // Group tickets by user
  const getUserTickets = () => {
    const userGroups = {};
    users.forEach((user) => {
      userGroups[user.name] = user.tickets;
    });
    return userGroups;
  };

  // Group tickets by priority
  const getPriorityTickets = () => {
    const priorities = {
      "No priority": [],
      Urgent: [],
      High: [],
      Medium: [],
      Low: [],
    };

    // Iterate through all tickets across all statuses
    Object.values(tickets).flat().forEach((ticket) => {
      switch (ticket.priority) {
        case null:
        case undefined:
          priorities["No priority"].push(ticket);
          break;
        case 1:
          priorities.Urgent.push(ticket);
          break;
        case 2:
          priorities.High.push(ticket);
          break;
        case 3:
          priorities.Medium.push(ticket);
          break;
        case 4:
        case 5:
          priorities.Low.push(ticket);
          break;
        default:
          priorities["No priority"].push(ticket);
      }
    });

    return priorities;
  };

  // Determine which grouping to use
  const groupedTickets =
    grouping === "user"
      ? getUserTickets()
      : grouping === "priority"
      ? getPriorityTickets()
      : tickets;

  return (
    <div className="kanban-container">
      {/* Display settings */}
      <div className="display-settings">
        <div className="setting">
          <label htmlFor="grouping">Grouping:</label>
          <select
            id="grouping"
            value={grouping}
            onChange={(e) => setGrouping(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="status">Status</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>

      {/* Kanban board */}
      <div className="kanban-board">
        {Object.keys(groupedTickets).map((group) => (
          <div
            key={group}
            className={`kanban-column ${group.replace(" ", "-").toLowerCase()}`}
          >
            <h2>
              {group} <span>{groupedTickets[group].length}</span>
            </h2>
            <div className="kanban-column-tickets">
              {sortTickets(groupedTickets[group]).map((ticket) => (
                <div key={ticket.id} className="kanban-card">
                  <div className="card-header">
                    <p className="task-id">{ticket.id}</p>
                  </div>
                  <p className="task-title">{ticket.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
