import React from "react";
import KanbanBoard from "./components/KanbanBoard";

const tickets = {
  unknown: [
    { id: "CAM-5", title: "Add Multi-Language Support", priority: 1 },

    { id: "CAM-8", title: "Create Onboarding Tutorial for New Users", priority: 2 },

  ],
  todo: [
    { id: "CAM-4", title: "Add Multi-Language Support", priority: 1 },
    { id: "CAM-2", title: "Implement Email Notification System", priority: 2 },
    { id: "CAM-1", title: "Update User Profile Page UI", priority: 3 },
  ],
  In_Progress: [
    { id: "CAM-3", title: "Optimize Database Queries for Performance", priority: 1 },
  ],
  Done: [
    { id: "CAM-6", title: "Enhance Search Functionality", priority: 1 },
    { id: "CAM-7", title: "Integrate Third-Party Payment Gateway", priority: 2 },
    { id: "CAM-11", title: "Conduct Security Vulnerability Assessment", priority: 3},
    { id: "CAM-10", title: "Upgarde Server Infrastructure", priority: 4},
    { id: "CAM-9", title: "Implement Role-Based Access Control (RBAC)", priority: 5},


  ],
  cancelled:[],
};

const users = [
  {
    name: "Abhideep Maity",
    tickets: [{ id: "CAM-8", title: "Create Onboarding Tutorial for New Users", priority: 2 }],
  },
  {
    name: "Akanksha Punjabi",
    tickets: [{ id: "CAM-5", title: "Add Multi-Language Support", priority: 1 }],
  },
  {
    name: "Anoop Sharma",
    tickets: [{ id: "CAM-4", title: "Add Multi-Language Support", priority: 1 }],
  },
  {
    name: "Arbaaz Sayyed",
    tickets: [
      { id: "CAM-7", title: "Integrate Third-Party Payment Gateway", priority: 2 },
      { id: "CAM-2", title: "Implement Email Notification System", priority: 2 },
    ],
  },
  {
    name: "Harsh Navani",
    tickets: [{ id: "CAM-1", title: "Update User Profile Page UI", priority: 3 }],
  },
];
const priority = [
  {
    Urgent: [
      { id: "CAM-4", title: "Add Multi-Language Support", priority: 1 },
  
      { id: "CAM-11", title: "Conduct Security Vulnerability Assessment", priority: 2 },
  
    ],
    todo: [
      { id: "CAM-4", title: "Add Multi-Language Support", priority: 1 },
      { id: "CAM-2", title: "Implement Email Notification System", priority: 2 },
      { id: "CAM-1", title: "Update User Profile Page UI", priority: 3 },
    ],
    In_Progress: [
      { id: "CAM-3", title: "Optimize Database Queries for Performance", priority: 1 },
    ],
    Done: [
      { id: "CAM-6", title: "Enhance Search Functionality", priority: 1 },
      { id: "CAM-7", title: "Integrate Third-Party Payment Gateway", priority: 2 },
      { id: "CAM-11", title: "Conduct Security Vulnerability Assessment", priority: 3},
      { id: "CAM-10", title: "Upgarde Server Infrastructure", priority: 4},
      { id: "CAM-9", title: "Implement Role-Based Access Control (RBAC)", priority: 5},
    ],
   
  },

];

function App() {
  return (
    <div className="App">
      {/* Pass tickets and users to KanbanBoard */}
      <KanbanBoard tickets={tickets} users={users} priority={priority} />
    </div>
  );
}

export default App;
