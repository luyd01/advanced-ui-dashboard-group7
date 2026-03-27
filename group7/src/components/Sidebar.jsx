function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">GROUP 7</div>

      <nav>
        <ul>
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;